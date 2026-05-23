import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert('Thank you for reaching out! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactMethods = [
    { icon: "fas fa-envelope", label: "Email", value: "harithashree3046@gmail.com", color: "from-cyan-500 to-blue-500" },
    { icon: "fab fa-github", label: "GitHub", value: "harithashree47", color: "from-blue-500 to-indigo-500" },
    { icon: "fab fa-linkedin", label: "LinkedIn", value: "harithashree-gr01", color: "from-indigo-500 to-purple-500" }
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <div data-aos="fade-up">
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Have a project in mind? Let's discuss how I can help bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div data-aos="fade-right">
            <div className="glass-card p-6">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Get in Touch
              </h3>
              <div className="space-y-4">
                {contactMethods.map((method, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition group cursor-pointer">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${method.color} flex items-center justify-center group-hover:scale-110 transition`}>
                      <i className={`${method.icon} text-white text-xl`}></i>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">{method.label}</p>
                      <p className="font-medium text-sm group-hover:text-cyan-400 transition">
                        {method.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Availability Badge */}
              <div className="mt-6 p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-sm text-cyan-400">Available for freelance work</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-left">
            <form onSubmit={handleSubmit} className="glass-card p-6">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Send a Message
              </h3>
              
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  <i className="fas fa-user mr-2 text-cyan-400"></i> Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-white/5 border border-cyan-500/20 rounded-xl focus:border-cyan-500 focus:outline-none transition"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  <i className="fas fa-envelope mr-2 text-cyan-400"></i> Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-white/5 border border-cyan-500/20 rounded-xl focus:border-cyan-500 focus:outline-none transition"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  <i className="fas fa-comment mr-2 text-cyan-400"></i> Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-white/5 border border-cyan-500/20 rounded-xl focus:border-cyan-500 focus:outline-none transition resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Sending...
                  </>
                ) : (
                  <>
                    Send Message <i className="fas fa-paper-plane"></i>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;