import React, { useState } from 'react';
import { contactData } from './ContactData';
import { Map } from '..';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: '',
  });

  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitButtonText, setSubmitButtonText] = useState('Send Message');

  const handleSubmit = async e => {
    e.preventDefault();

    setSubmitButtonText('Sending...');

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.status === 200) {
      setSubmitButtonText('Send Message');
      setSubmitStatus('success');
    } else {
      setSubmitButtonText('Send Message');
      setSubmitStatus('error');
    }
  };

  return (
    <div className="section-lg pt-0">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <h6 className="title-heading">{contactData.mainData.title}</h6>
            <h2 className="display-3 fw-medium">
              {contactData.mainData.title2}
            </h2>
            <p>{contactData.mainData.description}</p>
            <ul className="list-inline mt-4">
              {contactData.socials.map((item, index) => (
                <li key={index}>
                  <a className="button-circle" href={item.url}>
                    <i className={item.bootstrapIcon}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>{' '}
        {/* end row */}
        <div className="row g-5 mt-2">
          <div className="col-12 col-xl-8">
            {/* Contact Form */}
            <div className="contact-form">
              <form method="post" id="contactform" onSubmit={handleSubmit}>
                <div className="row gx-3 gy-0">
                  <div className="col-12 col-md-6">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="E-Mail"
                      required
                    />
                  </div>
                </div>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  required
                />
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                ></textarea>
                <button className="button button-lg" type="submit">
                  <span data-text={submitButtonText}>{submitButtonText}</span>
                </button>
              </form>
              {/* Submit result */}
              <div className="submit-result">
                {submitStatus === 'success' && (
                  <span id="success">
                    Thank you! Your Message has been sent.
                  </span>
                )}
                {submitStatus === 'error' && (
                  <span id="error">
                    Something went wrong. Please try again!
                  </span>
                )}
              </div>
            </div>{' '}
            {/* end contact-form */}
          </div>
          <div className="col-12 col-xl-4">
            <h6 className="sm-heading">Support:</h6>
            <h3>{contactData.mainData.phone}</h3>
            <div className="mt-4 mt-xl-5">
              <h6 className="sm-heading">Headquarters:</h6>
              <h3>{contactData.mainData.headquarters}</h3>
            </div>
          </div>
        </div>{' '}
        {/* end row */}
        {/* Map */}
        <Map />
      </div>{' '}
      {/* end container */}
    </div>
  );
};

export default Contact;
