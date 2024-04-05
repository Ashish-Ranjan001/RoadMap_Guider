import React from "react"
import './footer.css'
import video from '../../Assets/video.mp4.mp4'
import { FiChevronRight, FiSend } from "react-icons/fi"
import { AiOutlineSearch } from "react-icons/ai"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiFillYoutube } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"


const Footer = () => {
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video} muted autoPlay loop type="video.mp4/mp4"></video>
      </div>

      <div className="seeContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Search for the career options</h2>
          </div>

          <div className="inputDiv flex">
            <input type="text" placeholder="Enter Email Address" />
            <button className="btn flex" type="submit">
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <AiOutlineSearch className="icon" /> Search.
              </a>
            </div>

            <div className="footerParagraph">
              Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been
              the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type
              specimen book. It has survived not only five
              centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </div>

            <div className="footerSocials">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />

            </div>
          </div>

          <div className="footerLinks grid">
            { /*  Group one*/}
            <div className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Help
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Feedback
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Support
              </li>
            </div>


          </div>

          <div className="footerDiv flex">
              <small>BEST CAREER PATH FINDER</small>
              <small>COPYRIGHTS RESERVED - RMD 2023</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer