import React from 'react';

const Contact = () => {
  return (
      <div className="bg-gray-100 mx-auto p-4 rounded shadow w-full max-w-md mt-6">
        <h1 className="text-2xl font-bold mb-6">Contact Us</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="name">Name</label>
            <input 
              id="name"
              type="text" 
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500" 
              placeholder="Your name" 
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
            <input 
              id="email"
              type="email" 
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500" 
              placeholder="Your email" 
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="message">Message</label>
            <textarea 
              id="message"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500" 
              placeholder="Your message" 
              rows="4"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white p-2 rounded cursor-pointer hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
   
  );
};

export default Contact;
