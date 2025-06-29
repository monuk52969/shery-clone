import React, { useState } from 'react';

const CallBack = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    datetime: '',
    enquiry: 'Online Courses (Website)',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Optionally: send formData to backend or Google Sheet
  };

  return (
    <div className="bg-[#2C2C2C] p-8 w-full max-w-md mx-auto rounded-lg shadow-lg text-white">
      <h2 className="text-2xl font-bold text-center">Request a callback</h2>
      <p className="text-sm text-center mt-2 mb-6 text-gray-300">
        Fill the form below to request a callback from our team.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-[#171717] border border-gray-600 text-white placeholder-gray-400 outline-none"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm mb-1">Phone</label>
          <div className="flex gap-2">
            <span className="px-2 py-2 bg-[#171717] border border-gray-600 rounded text-sm">🇮🇳</span>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="flex-1 px-4 py-2 rounded bg-[#171717] border border-gray-600 text-white placeholder-gray-400 outline-none"
            />
          </div>
        </div>

        {/* Date and Time */}
        <div>
          <label className="block text-sm mb-1">Select Date and Time 📅</label>
          <input
            type="datetime-local"
            name="datetime"
            value={formData.datetime}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-[#171717] border border-gray-600 text-white outline-none"
          />
        </div>

        {/* Enquiry Dropdown */}
        <div>
          <label className="block text-sm mb-1">Enquiry For 📅</label>
          <select
            name="enquiry"
            value={formData.enquiry}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-[#171717] border border-gray-600 text-white outline-none"
          >
            <option value="Online Courses (Website)">Online Courses (Website)</option>
            <option value="In-house Bootcamp">In-house Bootcamp</option>
            <option value="1:1 Mentorship">1:1 Mentorship</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-[#00C78C] text-black font-bold py-2 rounded hover:opacity-90 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CallBack;
