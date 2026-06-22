import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setIsSending(true);
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            access_key: "8e897fcd-30be-4460-b549-1b2e6da6809a", // Web3Forms access key
            name: formData.name,
            email: formData.email,
            message: formData.message,
            subject: `Portfolio Message from ${formData.name}`
          })
        });

        const result = await response.json();
        if (result.success) {
          setIsSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
        } else {
          setErrors({ submit: result.message || "Failed to send message." });
        }
      } catch (error) {
        setErrors({ submit: "An error occurred. Please try again." });
      } finally {
        setIsSending(false);
      }
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-grid">

          {/* Left Column: Contact details */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="contact-title">
                get in <span className="contact-title-highlight">touch</span>
              </h2>
              <div className="contact-title-underline"></div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="contact-desc"
            >
              Let's collaborate on building the next generation of Salesforce applications, custom Apex components, lightning-fast LWC interfaces, and optimized processes. Feel free to reach out!
            </motion.p>

            <div className="contact-info-grid">
              {[
                { label: 'Email', value: 'hrushikeshdhore07@gmail.com', href: 'mailto:hrushikeshdhore07@gmail.com' },
                { label: 'Phone', value: '+91 7387566395', href: 'tel:+917387566395' },
                { label: 'Location', value: 'Pune, Maharashtra, India', href: null }
              ].map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  className="contact-info-item"
                >
                  <span className="contact-info-label">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a href={item.href} className="contact-info-value" onMouseEnter={(e) => e.target.style.color = '#f5a623'} onMouseLeave={(e) => e.target.style.color = '#000'}>
                      {item.value}
                    </a>
                  ) : (
                    <span className="contact-info-value">
                      {item.value}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-card contact-form-card"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="contact-form-wrapper"
                >
                  {/* Name field */}
                  <div className="contact-form-group">
                    <label htmlFor="contact-name" className="contact-label">name</label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="contact-input"
                      style={{
                        border: errors.name ? '2px solid #ff4d4f' : '1px solid #ccc',
                      }}
                      onFocus={(e) => { if (!errors.name) e.target.style.borderColor = '#f5a623'; }}
                      onBlur={(e) => { if (!errors.name) e.target.style.borderColor = '#ccc'; }}
                    />
                    {errors.name && <span style={{ color: '#ff4d4f', fontSize: '12px', marginTop: '5px' }}>{errors.name}</span>}
                  </div>

                  {/* Email field */}
                  <div className="contact-form-group">
                    <label htmlFor="contact-email" className="contact-label">email</label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="contact-input"
                      style={{
                        border: errors.email ? '2px solid #ff4d4f' : '1px solid #ccc',
                      }}
                      onFocus={(e) => { if (!errors.email) e.target.style.borderColor = '#f5a623'; }}
                      onBlur={(e) => { if (!errors.email) e.target.style.borderColor = '#ccc'; }}
                    />
                    {errors.email && <span style={{ color: '#ff4d4f', fontSize: '12px', marginTop: '5px' }}>{errors.email}</span>}
                  </div>

                  {/* Message field */}
                  <div className="contact-form-group">
                    <label htmlFor="contact-message" className="contact-label">message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className="contact-input"
                      style={{
                        border: errors.message ? '2px solid #ff4d4f' : '1px solid #ccc',
                        resize: 'none'
                      }}
                      onFocus={(e) => { if (!errors.message) e.target.style.borderColor = '#f5a623'; }}
                      onBlur={(e) => { if (!errors.message) e.target.style.borderColor = '#ccc'; }}
                    />
                    {errors.message && <span style={{ color: '#ff4d4f', fontSize: '12px', marginTop: '5px' }}>{errors.message}</span>}
                  </div>

                   {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSending}
                    whileHover={isSending ? {} : { scale: 1.02 }}
                    whileTap={isSending ? {} : { scale: 0.98 }}
                    className="contact-btn"
                    style={{
                      backgroundColor: isSending ? '#666' : '#000',
                      cursor: isSending ? 'not-allowed' : 'pointer'
                    }}
                    onMouseEnter={(e) => { if (!isSending) e.target.style.backgroundColor = '#f5a623'; }}
                    onMouseLeave={(e) => { if (!isSending) e.target.style.backgroundColor = '#000'; }}
                  >
                    {isSending ? 'sending...' : 'send message'}
                  </motion.button>
                  {errors.submit && (
                    <span style={{ color: '#ff4d4f', fontSize: '14px', textAlign: 'center', marginTop: '10px', fontWeight: 600 }}>
                      {errors.submit}
                    </span>
                  )}
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{ textAlign: 'center' }}
                >
                  <div className="contact-success-icon">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#f5a623" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '32px', marginBottom: '15px' }}>message sent!</h3>
                  <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '30px' }}>
                    Thank you for reaching out. Your message has been received, and I will get back to you as soon as possible.
                  </p>
                  <motion.button
                    onClick={() => setIsSubmitted(false)}
                    whileHover={{ scale: 1.05 }}
                    style={{
                      padding: '12px 30px',
                      border: '1px solid #000',
                      borderRadius: '50px',
                      fontWeight: 700,
                      fontSize: '14px',
                      cursor: 'pointer',
                      backgroundColor: 'transparent'
                    }}
                  >
                    Send another message
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
