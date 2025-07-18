import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3edebrv",
        "template_29t1rue",
        form.current,
        "Km4_jCxq-cyIFEMjD"
      )
      .then(
        () => {
          alert("Email sent successfully!");
          form.current.reset();
        },
        () => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div
  data-aos="zoom-in-up"
  data-aos-duration="1000"
  id="contact"
  className="max-w-xl mx-auto p-6 bg-[#212127] shadow-lg rounded-2xl"
>
  <form
    ref={form}
    onSubmit={sendEmail}
    className="space-y-6"
  >
    {/* Name */}
    <div>
      <label
        htmlFor="user_name"
        className="block text-sm font-medium text-gray-300 mb-1"
      >
        Name
      </label>
      <input
        type="text"
        name="user_name"
        id="user_name"
        placeholder="Your Name"
        required
        className="w-full px-4 py-2 bg-[#2a2a2e] text-white placeholder-gray-500 border border-gray-600 rounded-md focus:ring-2 focus:ring-sky-500 focus:outline-none"
      />
    </div>

    {/* Email */}
    <div>
      <label
        htmlFor="user_email"
        className="block text-sm font-medium text-gray-300 mb-1"
      >
        Email
      </label>
      <input
        type="email"
        name="user_email"
        id="user_email"
        placeholder="you@example.com"
        required
        className="w-full px-4 py-2 bg-[#2a2a2e] text-white placeholder-gray-500 border border-gray-600 rounded-md focus:ring-2 focus:ring-sky-900 focus:outline-none"
      />
    </div>

    {/* Message */}
    <div>
      <label
        htmlFor="message"
        className="block text-sm font-medium text-gray-300 mb-1"
      >
        Message
      </label>
      <textarea
        name="message"
        id="message"
        placeholder="Write your message..."
        required
        rows="5"
        className="w-full px-4 py-2 bg-[#2a2a2e] text-white placeholder-gray-500 border border-gray-600 rounded-md focus:ring-2 focus:ring-sky-900 focus:outline-none resize-none"
      />
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full bg-sky-900 hover:bg-indigo-700 text-white font-medium py-3 rounded-md transition duration-300"
    >
      Send Message
    </button>
  </form>
</div>

  );
};

export default Contact;
