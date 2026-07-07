import "./Contact.css";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  Mail,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  LoaderCircle
} from "lucide-react";

function Contact() {

  const formRef = useRef();

  const [status, setStatus] = useState("idle");

  const handleSubmit = async (event) => {

    event.preventDefault();

    setStatus("sending");

    try {

      await emailjs.sendForm(
        "service_66wg2xk",
        "template_037dgpn",
        formRef.current,
        {
          publicKey: "5xQQlOQuvtZLRE47A"
        }
      );

      setStatus("success");

      formRef.current.reset();

    } catch (error) {

      console.error("EmailJS Error:", error);

      setStatus("error");

    }

  };


  return (

    <main className="contact-page">


      {/* HERO */}

      <section className="contact-hero">

        <div className="contact-hero-content">

          <span className="contact-page-tag">
            GET IN TOUCH
          </span>

          <h1>
            Have a question?
            <span> Let's talk.</span>
          </h1>

          <p>
            Have a question about LearnHub or need help
            finding the right course? Send us a message.
          </p>

        </div>

      </section>


      {/* CONTACT CONTENT */}

      <section className="contact-content">

        <div className="contact-container">


          {/* LEFT SIDE */}

          <div className="contact-info">

            <span className="contact-section-tag">
              CONTACT US
            </span>

            <h2>
              We'd love to hear from you.
            </h2>

            <p>
              Whether you have a question, suggestion or
              feedback, use the form and send us a message.
            </p>


            <div className="contact-info-list">

              <div className="contact-info-item">

                <div className="contact-info-icon">
                  <Mail size={22} />
                </div>

                <div>
                  <span>Email</span>

                  <h3>
                    vishwajeetkapurkar.cgpi@gmail.com
                  </h3>
                </div>

              </div>


              <div className="contact-info-item">

                <div className="contact-info-icon">
                  <MessageSquare size={22} />
                </div>

                <div>
                  <span>Support</span>

                  <h3>
                    We're here to help you learn.
                  </h3>
                </div>

              </div>

            </div>

          </div>


          {/* FORM */}

          <div className="contact-form-card">


            {/* SUCCESS MESSAGE */}

            {status === "success" && (

              <div className="contact-message contact-success">

                <CheckCircle2 size={20} />

                <span>
                  Your message was sent successfully!
                </span>

              </div>

            )}


            {/* ERROR MESSAGE */}

            {status === "error" && (

              <div className="contact-message contact-error">

                <AlertCircle size={20} />

                <span>
                  Something went wrong. Please try again.
                </span>

              </div>

            )}


            <form
              ref={formRef}
              onSubmit={handleSubmit}
            >


              {/* NAME + EMAIL */}

              <div className="form-row">


                <div className="form-group">

                  <label htmlFor="name">
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />

                </div>


                <div className="form-group">

                  <label htmlFor="email">
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />

                </div>

              </div>


              {/* SUBJECT */}

              <div className="form-group">

                <label htmlFor="subject">
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="What is your message about?"
                  required
                />

              </div>


              {/* MESSAGE */}

              <div className="form-group">

                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message..."
                  rows="6"
                  required
                />

              </div>


              {/* SUBMIT */}

              <button
                type="submit"
                className="contact-submit-btn"
                disabled={status === "sending"}
              >

                {status === "sending" ? (

                  <>
                    Sending...

                    <LoaderCircle
                      size={18}
                      className="loading-icon"
                    />
                  </>

                ) : (

                  <>
                    Send Message

                    <Send size={18} />
                  </>

                )}

              </button>

            </form>

          </div>

        </div>

      </section>

    </main>

  );

}

export default Contact;