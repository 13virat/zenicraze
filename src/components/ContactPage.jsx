import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" }
  })
};

const ContactPage = () => {

  // FORM STATE
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    business_name: "",
    service_required: "",
    budget_range: "",
    message: "",
  });

  // ERROR STATE
  const [errors, setErrors] = useState({});

  // VALIDATION FUNCTION
  const validateForm = () => {
    let newErrors = {};

    // NAME
    if (form.full_name.trim().length < 3) {
      newErrors.full_name = "Full name must be at least 3 characters.";
    } else if (!/^[A-Za-z\s]+$/.test(form.full_name)) {
      newErrors.full_name = "Only letters allowed in name.";
    }

    // EMAIL
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      newErrors.email = "Enter a valid email.";
    }

    // PHONE
    if (!/^[0-9]+$/.test(form.phone)) {
      newErrors.phone = "Only digits allowed.";
    } else if (form.phone.length !== 10) {
      newErrors.phone = "Phone number must be 10 digits.";
    }

    // SERVICE
    if (form.service_required === "Service required" || !form.service_required) {
      newErrors.service_required = "Select a service.";
    }

    // BUDGET
    if (form.budget_range === "Budget Range" || !form.budget_range) {
      newErrors.budget_range = "Select a budget.";
    }

    // MESSAGE
    if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/lead/create/",
        form
      );

      alert("Message sent successfully!");

      setForm({
        full_name: "",
        email: "",
        phone: "",
        business_name: "",
        service_required: "",
        budget_range: "",
        message: "",
      });

      setErrors({});

    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  // Dynamic input style
  const inputClass = (field) =>
    `w-full px-5 py-3 bg-white/80 rounded-2xl text-gray-800 text-[16px] 
     outline-none ${errors[field] ? "border-2 border-red-500" : "focus:ring-2 focus:ring-black/30"}`;

  return (
    <div className="min-h-screen w-full px-6 lg:px-24 py-20 flex flex-col items-center">

      {/* Heading */}
      <motion.div
        variants={fade}
        initial="hidden"
        animate="show"
        custom={1}
        className="max-w-3xl text-center"
      >
        <h1 className="text-[42px] md:text-[56px] font-semibold text-[#0D0D0D] leading-tight">
          Scale your <span className="italic font-[Instrument_Serif]">growth</span> today
        </h1>

        <p className="mt-6 text-lg text-gray-700 max-w-xl mx-auto leading-relaxed">
          Share your details and we’ll connect with a <br />tailored action plan.
        </p>
      </motion.div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="mt-12 w-full max-w-3xl flex flex-col gap-6 items-center"
      >

        {/* ROW 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          
          {/* NAME */}
          <div>
            <motion.input
              variants={fade}
              initial="hidden"
              animate="show"
              custom={2}
              type="text"
              placeholder="Full name"
              value={form.full_name}
              onChange={(e) => setForm({ ...form, full_name: e.target.value })}
              className={inputClass("full_name")}
            />
            {errors.full_name && <p className="text-red-500 text-sm mt-1">{errors.full_name}</p>}
          </div>

          {/* EMAIL */}
          <div>
            <motion.input
              variants={fade}
              initial="hidden"
              animate="show"
              custom={3}
              type="email"
              placeholder="Email address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={inputClass("email")}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
        </div>

        {/* ROW 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

          {/* PHONE */}
          <div>
            <motion.input
              variants={fade}
              initial="hidden"
              animate="show"
              custom={4}
              type="text"
              placeholder="Phone number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className={inputClass("phone")}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          {/* BUSINESS NAME */}
          <div>
            <motion.input
              variants={fade}
              initial="hidden"
              animate="show"
              custom={5}
              type="text"
              placeholder="Business / Company Name"
              value={form.business_name}
              onChange={(e) =>
                setForm({ ...form, business_name: e.target.value })
              }
              className={inputClass("business_name")}
            />
          </div>
        </div>

        {/* ROW 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

          {/* SERVICE */}
          <div>
            <motion.select
              variants={fade}
              initial="hidden"
              animate="show"
              custom={6}
              value={form.service_required}
              onChange={(e) =>
                setForm({ ...form, service_required: e.target.value })
              }
              className={`
                w-full px-5 py-3 bg-white/80 rounded-2xl text-gray-800 text-[16px]
                focus:ring-2 focus:ring-black/30 outline-none appearance-none
                ${errors.service_required ? "border-2 border-red-500" : ""}
              `}
            >
              <option>Service required</option>
              <option>Paid Advertising (Meta + Google)</option>
              <option>SEO & Content Marketing</option>
              <option>Social Media Management</option>
              <option>Email Marketing</option>
              <option>Brand Strategy & Creative</option>
              <option>Website Development</option>
              <option>Full Digital Marketing Package</option>
              <option>Not Sure – Need Guidance</option>
            </motion.select>

            {errors.service_required && (
              <p className="text-red-500 text-sm mt-1">{errors.service_required}</p>
            )}
          </div>

          {/* BUDGET */}
          <div>
            <motion.select
              variants={fade}
              initial="hidden"
              animate="show"
              custom={7}
              value={form.budget_range}
              onChange={(e) =>
                setForm({ ...form, budget_range: e.target.value })
              }
              className={`
                w-full px-5 py-3 bg-white/80 rounded-2xl text-gray-800 text-[16px]
                focus:ring-2 focus:ring-black/30 outline-none appearance-none
                ${errors.budget_range ? "border-2 border-red-500" : ""}
              `}
            >
              <option>Budget Range</option>
              <option>₹10,000 – ₹25,000 / month</option>
              <option>₹25,000 – ₹50,000 / month</option>
              <option>₹50,000 – ₹1,00,000 / month</option>
              <option>₹1,00,000+ / month</option>
              <option>Not sure yet</option>
            </motion.select>

            {errors.budget_range && (
              <p className="text-red-500 text-sm mt-1">{errors.budget_range}</p>
            )}
          </div>
        </div>

        {/* MESSAGE */}
        <div className="w-full">
          <motion.textarea
            variants={fade}
            initial="hidden"
            animate="show"
            custom={8}
            placeholder="How can we help?"
            rows="4"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={inputClass("message")}
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        {/* BUTTON */}
        <motion.button
          variants={fade}
          initial="hidden"
          animate="show"
          custom={9}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="mt-4 w-full md:w-48 bg-black text-white py-4 rounded-2xl text-[17px] font-medium shadow-lg hover:shadow-xl transition"
        >
          Send message
        </motion.button>
      </form>
    </div>
  );
};

export default ContactPage;
