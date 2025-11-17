import React from "react";
import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" }
  })
};

const ContactPage = () => {
  return (
    <div
      className="min-h-screen w-full px-6 lg:px-24 py-20 flex flex-col items-center"
    //   style={{
    //     background: "linear-gradient(180deg,#F8C5B2 0%,#F8E2B0 100%)"
    //   }}
    >
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
      <form className="mt-12 w-full max-w-3xl flex flex-col gap-6 items-center">

        {/* ROW 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* NAME */}
          <motion.input
            variants={fade}
            initial="hidden"
            animate="show"
            custom={2}
            type="text"
            placeholder="Full name"
            className="w-full px-5 py-3 bg-white/80 rounded-2xl text-gray-800 
                       text-[16px] focus:ring-2 focus:ring-black/30 outline-none"
          />

          {/* EMAIL */}
          <motion.input
            variants={fade}
            initial="hidden"
            animate="show"
            custom={3}
            type="email"
            placeholder="Email address"
            className="w-full px-5 py-3 bg-white/80 rounded-2xl text-gray-800 
                       text-[16px] focus:ring-2 focus:ring-black/30 outline-none"
          />
        </div>

        {/* ROW 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* PHONE */}
          <motion.input
            variants={fade}
            initial="hidden"
            animate="show"
            custom={4}
            type="text"
            placeholder="Phone number"
            className="w-full px-5 py-3 bg-white/80 rounded-2xl text-gray-800 
                       text-[16px] focus:ring-2 focus:ring-black/30 outline-none"
          />

          {/* BUSINESS NAME */}
          <motion.input
            variants={fade}
            initial="hidden"
            animate="show"
            custom={5}
            type="text"
            placeholder="Business / Company Name"
            className="w-full px-5 py-3 bg-white/80 rounded-2xl text-gray-800 
                       text-[16px] focus:ring-2 focus:ring-black/30 outline-none"
          />
        </div>

        {/* ROW 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* SERVICE */}
          <motion.select
            variants={fade}
            initial="hidden"
            animate="show"
            custom={6}
            className="w-full px-5 py-3 bg-white/80 rounded-2xl text-gray-800 
                       text-[16px] appearance-none focus:ring-2 focus:ring-black/30 outline-none"
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

          {/* BUDGET */}
          <motion.select
            variants={fade}
            initial="hidden"
            animate="show"
            custom={7}
            className="w-full px-5 py-3 bg-white/80 rounded-2xl text-gray-800 
                       text-[16px] appearance-none focus:ring-2 focus:ring-black/30 outline-none"
          >
            <option>Budget Range</option>
            <option>₹10,000 – ₹25,000 / month</option>
            <option>₹25,000 – ₹50,000 / month</option>
            <option>₹50,000 – ₹1,00,000 / month</option>
            <option>₹1,00,000+ / month</option>
            <option>Not sure yet</option>
          </motion.select>
        </div>

        {/* MESSAGE */}
        <motion.textarea
          variants={fade}
          initial="hidden"
          animate="show"
          custom={8}
          placeholder="How can we help?"
          rows="4"
          className="w-full px-6 py-4 bg-white/80 rounded-2xl text-gray-800 
                     text-[16px] focus:ring-2 focus:ring-black/30 outline-none"
        ></motion.textarea>

        {/* BUTTON */}
        <motion.button
          variants={fade}
          initial="hidden"
          animate="show"
          custom={9}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 w-full md:w-48 bg-black text-white py-4 rounded-2xl 
                     text-[17px] font-medium shadow-lg hover:shadow-xl transition"
        >
          Send message
        </motion.button>

      </form>
    </div>
  );
};

export default ContactPage;
