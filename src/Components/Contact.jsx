
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3edebrv', 'template_29t1rue', form.current, 'Km4_jCxq-cyIFEMjD')
      .then(
        () => {
          alert('Email sent successfully!');
          form.current.reset();
        },
        () => {
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded-xl">
      <h2 className="text-3xl mb-4">Massage Me</h2>
      <form
  ref={form}
  onSubmit={sendEmail}
  className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg space-y-6"
>
  <div>
    <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-1">
      Name
    </label>
    <input
      type="text"
      name="user_name"
      id="user_name"
      placeholder="Your Name"
      required
      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
    />
  </div>

  <div>
    <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-1">
      Email
    </label>
    <input
      type="email"
      name="user_email"
      id="user_email"
      placeholder="you@example.com"
      required
      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
    />
  </div>

  <div>
    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
      Message
    </label>
    <textarea
      name="message"
      id="message"
      placeholder="Write your message..."
      required
      rows="5"
      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-none"
    />
  </div>

  <button
    type="submit"
    className="w-full bg-primary hover:bg-secondary hover:text-white text-white font-medium py-2.5 rounded-md hover:text-white' transition duration-300"
  >
    Send Message
  </button>
</form>

    </div>
  );
};

export default Contact;
