FROM node:18.17.0-bullseye-slim AS deps
WORKDIR /usr/app
COPY package*.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM deps AS dev
ENV NODE_ENV=development
COPY . .
CMD [ "yarn", "dev" ]


FROM node:18.17.0-bullseye-slim AS BUILD_IMAGE
WORKDIR /usr/app
COPY --from=deps /usr/app/node_modules ./node_modules
COPY . .
RUN yarn build
RUN rm -rf node_modules
RUN yarn install --production --frozen-lockfile --ignore-scripts --prefer-offline

#  && yarn cache clean


FROM node:18.17.0-bullseye-slim
ENV NODE_ENV=production
RUN addgroup -g 1001 -S user_group
RUN adduser -S application -u 1001
WORKDIR /usr/app
COPY --from=BUILD_IMAGE --chown=application:user_group /usr/app/node_modules ./node_modules
COPY --from=BUILD_IMAGE --chown=application:user_group /usr/app/package.json ./
COPY --from=BUILD_IMAGE --chown=application:user_group /usr/app/yarn.lock ./
COPY --from=BUILD_IMAGE --chown=application:user_group /usr/app/public ./public
COPY --from=BUILD_IMAGE --chown=application:user_group /usr/app/.next ./.next
# EXPOSE 3000
CMD [ "yarn", "start" ]