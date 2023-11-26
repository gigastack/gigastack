FROM node:18.17.0-bullseye-slim AS deps
# RUN apk add --no-cache libc6-compat
WORKDIR /usr/app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM deps AS dev
ENV NODE_ENV=development
COPY . .
CMD [ "yarn", "dev" ]


FROM node:18.17.0-bullseye-slim AS builder
WORKDIR /usr/app
COPY --from=deps /usr/app/node_modules ./node_modules
COPY . .
RUN yarn build
# RUN rm -rf node_modules
# RUN yarn install --production --frozen-lockfile

#  && yarn cache clean


FROM node:18.17.0-bullseye-slim AS runner
WORKDIR /usr/app
ENV NODE_ENV=production

# RUN addgroup --system --gid 1001 nodejs
# RUN adduser --system --uid 1001 nextjs

COPY --from=builder /usr/app/next.config.js ./
COPY --from=builder /usr/app/public ./public
COPY --from=builder /usr/app/package.json ./

COPY --from=builder /usr/app/.next/standalone ./
COPY --from=builder /usr/app/.next/static ./.next/static

# COPY --from=builder /usr/app/node_modules ./node_modules
# COPY --from=builder /usr/app/yarn.lock ./
# COPY --from=builder /usr/app/.next ./.next

# USER nextjs

# EXPOSE 3000

# ENV PORT 3000

CMD [ "yarn", "start" ]