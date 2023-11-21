"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactSchema, ContactType } from "@/lib/validators/contact";
import Input from "../ui/Input";
import { Button } from "../ui/button";

type Props = {};

interface IContactForm {
  name: string;
  email: string;
  message: string;
}

const ContactForm = (props: Props) => {
  const form = useForm<ContactType>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      email: "",
      message: "",
      name: "",
    },
  });
  return (
    <section className=" bg-gray-100 h-scree p-5 lg:p-10 lg:py-32 flex justify-center items-center">
      <div className="p-5 lg:p-10 shadow-lg rounded-[2rem] bg-white max-w-4xl mx-auto ">
        <h4 className=" font-bold uppercase ">
          READY TO BUILD YOUR DATA-DRIVEN FUTURE?
        </h4>
        <h5 className=" mt-5">
          Use this contact form to reach out and tell us about your challenge or
          send an email to contact@gigastack.tech. You can also call our
          offices.
        </h5>
        <Form {...form}>
          <form className=" mt-5">
            <FormField
              control={form.control}
              name="name"
              render={() => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="" type="text" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={() => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="" type="email" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={() => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <textarea
                      rows={10}
                      className=" w-full flex rounded-md border border-gray-300 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>

          <div className="flex justify-end">
          <Button className=" mt-5 font-bold uppercase" type="submit">
            Proceed
          </Button>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default ContactForm;
