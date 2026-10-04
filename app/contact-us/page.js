"use client"
import Footer from "@/components/Footer";
import Navbar from "../../components/Navbar";
import "../../styles/contactus.scss";
import { useEffect } from "react";

export default function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <><Navbar />
      <div className="contact-us">
        <div className="contact-container">

          <div className="contact-header">
            <span className="contact-subtitle">CONTACT US</span>
            <h2 className="contact-title">
              Get in Touch With <span>Paramount Academy Jaora</span>
            </h2>

            <p className="contact-description">
              Have questions about admissions, facilities, or school activities?
              Our team at Paramount Academy Jaora is always ready to assist you.
              Feel free to reach out and we will be happy to help you with every query.
            </p>
          </div>


          <div className="contact-content">

            {/* Left Side Info */}
            <div className="contact-info">

              <div className="info-item">
                <h4>School Address</h4>
                <p>
                  Road, Banna Kheda, Jaora,<br />
                  Madhya Pradesh – 457226
                </p>

                <a
                  href="https://maps.app.goo.gl/1var98vgVznFbd5eA"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontWeight: "600" }}
                >
                  📍 Get Directions
                </a>
              </div>

              <div className="info-item">
                <h4>Email Address</h4>
                <p>
                  <a href="mailto:paramountacademy10@gmail.com">
                    paramountacademy10@gmail.com
                  </a>
                </p>
              </div>

              <div className="info-item">
                <h4>Contact Number</h4>
                <p>
                  <a href="tel:+919685137237">+919685137237</a> 
                </p>
              </div>

              <div className="contact-cta">
                <h3>Admissions Open</h3>
                <p>
                  Paramount Academy Jaora focuses on academic excellence,
                  character building, and holistic development to shape
                  confident and successful students for the future.
                </p>
              </div>

            </div>


            {/* Right Side Form */}
            <div className="contact-form">
              <div className="form-header">
                <h3>Get In Touch</h3>
                <p>
                  Fill out this form for booking a consultant advising session
                  or to get more information about Paramount Academy Jaora.
                </p>
              </div>


              <form>

                <input type="text" placeholder="Your Name" required />

                <input type="email" placeholder="Your Email" required />

                <input type="text" placeholder="Subject" required />

                <textarea placeholder="Write your message..." rows="5"></textarea>

                <button type="submit">Send Message</button>

              </form>

            </div>

          </div>

        </div>
      </div>
      <Footer /></>
  );
}
