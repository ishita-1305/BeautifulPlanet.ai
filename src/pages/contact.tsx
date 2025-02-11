import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Navbar />
      {/* Banner */}
      <header className="relative bg-[url('/images/background3.jpeg')] bg-cover bg-center h-[100vh] flex items-center justify-center text-white ">
        <div className="bg-black bg-opacity-50 p-10 rounded-lg">
          <h1 className="text-5xl font-bold">Welcome to Beautiful Planet.AI</h1>
          <p className="mt-4 text-lg">
            Leading the way in sustainable and AI-driven innovation.
          </p>
        </div>
      </header>
      <section className="flex flex-col items-center justify-center px-6 py-16 bg-gray-100">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
          {/* Contact Info */}
          <motion.div
            className="bg-white shadow-lg rounded-2xl p-6 space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-4">
              <Mail className="text-blue-500" />
              <span className="text-gray-700">contact@beautifulplanet.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-blue-500" />
              <span className="text-gray-700">+123 456 7890</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-blue-500" />
              <span className="text-gray-700">New Delhi, India</span>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="bg-white shadow-lg rounded-2xl p-6 space-y-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
          >
            <div>
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
