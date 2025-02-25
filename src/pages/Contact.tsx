import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    alert("Thank you for contacting us. We'll get back to you soon!");
    console.log(formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="min-h-screen bg-[#0a0f1e] text-white p-8 flex flex-col items-center justify-center">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg leading-relaxed">
          We would love to hear from you! Whether you have questions, feedback, or partnership inquiries, please fill out the form below.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-1 font-semibold">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ff00ff]"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-semibold">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ff00ff]"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 font-semibold">Message *</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ff00ff]"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#ff00ff] hover:bg-[#ff00ff]/90 text-white font-bold py-4 px-6 rounded-full transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
