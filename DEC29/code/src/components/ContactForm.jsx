// src/components/ContactForm.jsx
import React from 'react';
import InputForm from './InputForm';

const ContactForm = () => {
  return (
    <section id="contact" className="max-w-md mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Contact Us</h2>
      <InputForm />
    </section>
  );
};

export default ContactForm;
