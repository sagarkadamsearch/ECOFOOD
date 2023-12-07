import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="themeBg text-decoration-none">
        <div className="container pt-4 fw-bold">
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <h2 className="text-white text-3xl mt-2">
                ECOFood
              </h2>
            </div>

            <div className="col-lg-2 col-md-4">
              <p>
                <a href="/courses" className="text-white text-decoration-none">
                  Courses
                </a>
              </p>
              <p>
                <a href="/faqs" className="text-white text-decoration-none">
                  FAQs
                </a>
              </p>
              <p>
                <a href="/privacy-policy" className="text-white text-decoration-none">
                  Privacy Policy
                </a>
              </p>
              <p>
                <a href="/terms-conditions" className="text-white text-decoration-none">
                  Terms & Conditions
                </a>
              </p>
            </div>

            <div className="col-lg-4 col-md-4">
              <h3 className="text-white text-xl mb-3">Contact Us</h3>
              <p>
                <a
                  href="mailto:connect.thedesignvalue@gmail.com"
                  className="text-white text-decoration-none"
                >
                  <FaEnvelope /> erankkrs@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+916290191296" className="text-white text-decoration-none">
                  <FaPhoneAlt /> +91 9576508805
                </a>
              </p>
            </div>

            <div className="col-lg-3">
              <h3 className="text-white text-xl mb-4">Connect With Us</h3>
              <div className="text-secondary">
                <a
                  href="https://www.linkedin.com/in/ankit-kumar-747786235/"
                  target="_blank"
                  className="text-white rounded-circle p-2"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/ank_krs/"
                  target="_blank"
                  className="text-white rounded-circle p-2"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/in/ankit-kumar-747786235/"
                  target="_blank"
                  className="text-white rounded-circle p-2"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
