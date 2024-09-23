import React, { useState, useEffect } from "react";
import Section from "./Section";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

const ContactInfo = ({ icon: Icon, text }) => (
  <div className="flex items-center space-x-4 text-gray-300 hover:text-yellow-400 transition-colors">
    <Icon className="text-yellow-400" size={24} />
    <span>{text}</span>
  </div>
);

const SocialLink = ({ icon: Icon, href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-yellow-400 transition-colors"
    aria-label={label}
  >
    <Icon size={24} />
  </a>
);

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    if (submitStatus === "success") {
      const timer = setTimeout(() => setSubmitStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const validateForm = () => {
    const newErrors = {};
    if (!formState.name.trim()) newErrors.name = "Name is required";
    if (!formState.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formState.email))
      newErrors.email = "Email is invalid";
    if (!formState.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://formspree.io/f/xldrkkpk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormState({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrors({ submit: "An error occurred. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 text-center text-yellow-400">
          Get In Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Let's Connect
            </h3>
            <ContactInfo icon={Mail} text="mmchahine0@gmail.com" />
            <ContactInfo icon={Phone} text="+961 70 480 642" />
            <ContactInfo icon={MapPin} text="Beirut, Lebanon" />
            <div className="pt-6">
              <h4 className="text-xl font-semibold text-white mb-4">
                Find me on
              </h4>
              <div className="flex space-x-6">
                <SocialLink
                  icon={Github}
                  href="https://github.com/mmchahine0"
                  label="GitHub"
                />
                <SocialLink
                  icon={Linkedin}
                  href="https://www.linkedin.com/in/mohamad-chahine1/"
                  label="LinkedIn"
                />
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            {submitStatus === "success" &&
              alert("Message sent successfully! i'll contact you")}
            {errors.submit && alert(`${errors.message}`)}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 bg-gray-800 border ${
                  errors.name ? "border-red-500" : "border-gray-700"
                } rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 bg-gray-800 border ${
                  errors.email ? "border-red-500" : "border-gray-700"
                } rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formState.message}
                onChange={handleChange}
                className={`w-full px-4 py-2 bg-gray-800 border ${
                  errors.message ? "border-red-500" : "border-gray-700"
                } rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors`}
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-3 px-8 rounded-md inline-flex items-center justify-center transition-colors disabled:opacity-50"
            >
              <Send size={18} className="mr-2" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
