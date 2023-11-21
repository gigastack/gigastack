import ContactForm from "@/components/Contact/ContactForm";
import Hero from "@/components/Contact/Hero";
import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <>
      <Hero />
      <ContactForm />
    </>
  );
};

export default Contact;
