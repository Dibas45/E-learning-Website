import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-600 text-white py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg">
            Have questions or need help? Get in touch with us.
          </p>
        </div>
      </header>
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Send Us a Message</h2>
        <form className="max-w-3xl mx-auto bg-white p-6 shadow rounded">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Name</label>
            <input
              type="text"
              className="w-full border-gray-300 border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              className="w-full border-gray-300 border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Message</label>
            <textarea
              rows="5"
              className="w-full border-gray-300 border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white font-bold py-2 px-6 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
