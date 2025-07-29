import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "rajputjaspalsingh12@gmail.com",
      href: "mailto:rajputjaspalsingh12@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 XXXXXXXX88",
      href: "tel:+91 XXXXXXXXX88"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Indore, Madhya Pradesh, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/jaspal-s-rajput",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "http://www.linkedin.com/in/jaspal-singh-rajput-a63321214",
      color: "hover:text-blue-600"
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      label: "Twitter",
      href: "https://twitter.com",
      color: "hover:text-blue-400"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      label: "Instagram",
      href: "https://instagram.com",
      color: "hover:text-pink-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Let's Connect
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I'm currently seeking internship opportunities and open to collaborating on exciting projects. 
              Whether you're looking for a dedicated developer, have a project idea, or just want to connect, 
              I'd love to hear from you!
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200">
                    {info.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {info.label}
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-200 hover:scale-110`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl border border-green-200 dark:border-green-800">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-green-700 dark:text-green-400">
                  Available for opportunities
                </span>
              </div>
              <p className="text-green-600 dark:text-green-300 text-sm mt-2">
                Currently seeking internship positions and open to freelance projects
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send Message
              </h3>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-white transition-colors duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-white transition-colors duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-white transition-colors duration-200"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-white transition-colors duration-200 resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform transition-all duration-200 hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>

                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    I typically respond within 24 hours
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Alternative Contact Methods */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Prefer other ways to connect?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com"
              className="px-8 py-3 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg font-medium hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-all duration-200"
            >
              📅 Schedule a Call
            </a>
            <a
              href="/resume.pdf"
              className="px-8 py-3 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg font-medium hover:bg-green-200 dark:hover:bg-green-900/50 transition-all duration-200"
            >
              📄 Download Resume
            </a>
            <a
              href="http://www.linkedin.com/in/jaspal-singh-rajput-a63321214"
              className="px-8 py-3 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-lg font-medium hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-all duration-200"
            >
              💼 Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;