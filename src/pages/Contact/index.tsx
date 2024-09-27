
import { Link } from "react-router-dom";
import "./Contact.scss";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

import Phone from "../../ui/Phone"


function ContactPage() {
  const googleMapsApiKey = "YOUR_API_KEY";
  return (
    <>

      <section className="contact__us">
        <div className="contact__us__header">
          <ul>
            <li>
              <Link to={"/"}>Əsas səhifə</Link>
            </li>
            <li>&gt;</li>
            <li>Əlaqə</li>
          </ul>
          <h2>Lorem Ipsum is simply dummy text of the printing and.</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
        </div>
        <div className="contact__map">
          {/* <img src="../../public/home/map.jpg" alt="" /> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.7483178803554!2d49.812870875480556!3d40.37010465847661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dc397d94dc3%3A0x617bc46b47244c00!2sAzerbaijan%20Technical%20University!5e0!3m2!1str!2saz!4v1726765730028!5m2!1str!2saz"
            width="70%"
            height="500"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contact__us__group">
          <div className="contact__us__group__first">
            <span>Follow us</span>
            <div>
              <div>
                <RiFacebookFill />
              </div>
              <div>
                <FaInstagram />
              </div>
              <div>
                <FaTwitter />
              </div>
              <div>
                <FaLinkedinIn />
              </div>
            </div>
          </div>
          <div className="contact__us__group__second">
            <span>
              <FaPhoneVolume />
            </span>
            <span>+94 4444 5555 6</span>
          </div>
          <div className="contact__us__group__third">
            <span>
              <FaLocationDot />
            </span>
            <span>but also the leap into electronic typesetting</span>
          </div>
        </div>
        <div className="contact__us__form">
          <svg
            width="1048"
            height="267"
            viewBox="0 0 1048 267"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1C29.4186 32.5504 103.606 94.1487 173.008 88.1391C259.759 80.6271 319 56 393.377 79.1247C439.677 93.5199 435.257 138.219 477.137 170.771C519.017 203.323 701.495 124.197 701.495 124.197C701.495 124.197 830.127 66.6047 842.591 124.197C855.055 181.789 803.702 250.398 827.135 264.421C845.881 275.638 982.856 224.357 1049 197.313"
              stroke="#E17A0E"
              stroke-opacity="0.24"
            />
          </svg>
          <svg
            width="568"
            height="258"
            viewBox="0 0 568 258"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 90.5832C28.934 66.4404 78.6557 31.1588 137.925 15.1579C205.5 -3.08543 322.663 -16.1217 371.172 58.1153C395.132 94.784 369.128 136.415 398 168.415C426.691 200.213 474.941 179.777 511.5 196.915C543.5 211.915 552 238.415 567 256.915"
              stroke="#E4E4E4"
            />
          </svg>

          <h4>Say hello</h4>
          <p>Lorem Ipsum is simply dummy text of the printing .</p>
          <form>
            <div className="form-group">
              <input
                type="text"
                id="first-name"
                name="first-name"
                placeholder="First Name"
              />
              <input
                type="text"
                id="last-name"
                name="last-name"
                placeholder="Last Name"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
              />
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                placeholder="Message"
              ></textarea>
            </div>
            <button type="submit">Get in touch</button>
          </form>
        </div>
      </section>

     <div>contactpage</div> 
     <Phone />

    </>
  );
}

export default ContactPage;
