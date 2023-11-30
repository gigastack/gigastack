import ContactForm from "@/components/Contact/ContactForm";
import Hero from "@/components/Contact/Hero";
import PageWrapper from "@/components/PageWrapper";
import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <PageWrapper>
      <Hero />
      <ContactForm />
    </PageWrapper>
  );
};

export default Contact;
