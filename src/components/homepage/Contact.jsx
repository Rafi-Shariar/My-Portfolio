import React, { useState } from "react";

const Contact = () => {
  // Using state to handle success/error messages nicely
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const formData = new FormData(e.target);

    // 1. REPLACE THIS WITH THE ACCESS KEY YOU RECEIVED IN YOUR EMAIL
    formData.append("access_key", "b72267fd-f1ff-4615-a912-52baae056453");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Email sent successfully!");
        e.target.reset(); // Clear the form
      } else {
        console.error("Web3Forms Error:", data);
        setResult(data.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Network Error:", error);
      setResult("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      id="contact"
      className="max-w-xl mx-auto p-6 bg-[#212127] shadow-lg rounded-2xl"
    >
      <form onSubmit={sendEmail} className="space-y-6">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Name
          </label>
          <input
            type="text"
            name="name" // Web3Forms will show this as "Name" in your email
            id="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 bg-[#2a2a2e] text-white placeholder-gray-500 border border-gray-600 rounded-md focus:ring-2 focus:ring-sky-500 focus:outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            name="email" // Web3Forms will show this as "Email" and use it for reply-to
            id="email"
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
            name="message" // Web3Forms will show this as "Message"
            id="message"
            placeholder="Write your message..."
            required
            rows="5"
            className="w-full px-4 py-2 bg-[#2a2a2e] text-white placeholder-gray-500 border border-gray-600 rounded-md focus:ring-2 focus:ring-sky-900 focus:outline-none resize-none"
          />
        </div>

        {/* Status Notification */}
        {result && (
          <div className={`text-sm font-medium ${result.includes("successfully") ? "text-green-400" : "text-amber-400"}`}>
            {result}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-sky-900 hover:bg-indigo-700 disabled:bg-gray-600 text-white font-medium py-3 rounded-md transition duration-300"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;