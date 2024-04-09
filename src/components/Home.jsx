import React, { useState } from "react";
import "./style-component.css";
import hero from "./images/hero.jpg";
import phone from "./images/phone.png";
import CustomInput from "./common-components/CustomInput";
import CustomButton from "./common-components/CustomButton";
import { BsFillPeopleFill } from "react-icons/bs";
import Card from "./common-components/Card1";
import { FaDownload } from "react-icons/fa6";
import { MdOutlineRateReview } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import Card2 from "./common-components/Card2";
import { FaFeatherAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import work from "./images/work-background.jpg";
import phone2 from "./images/phone-2.png";
import { FaCheckCircle } from "react-icons/fa";
import screenshots from "./images/screenshots.png";
import buildings from "./images/buildings.jpg";
import Card3 from "./common-components/Card3";
import dome from "./images/dome.png"

function Home() {
  const [email, setEmail] = useState("");
  const handleFreeTrial = () => {
    console.log(email);
  };

  const handleChosePlane =()=>{
    console.log("plan chosen");
  }

  const handleSubscribe =()=>{
    console.log("user subscribed for newsletter")
  }
  return (
    <div className="home">
      <div className="hero" id="hero">
        <img src={hero} className="heroImg" alt="" style={{ width: "100vw" }} />
        <img src={phone} className="phone" alt="" />
        <div className="heroText">
          <h4 style={{ color: "white" }}>Make your day colorful with</h4>
          <h1 style={{ color: "rgb(229,70,92)", textShadow:"1px 1px 3px black" }}>The Application</h1>
          <p style={{ color: "white" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
            numquam voluptatem est deserunt sit ad delectus corporis, at
            consequuntur assumenda?
          </p>
          <form style={{display:"flex", alignItems:"center", gap:"1rem"}}>
            <CustomInput placeholder={"Enter Your Email.."} />
            <CustomButton text={"Free Trial"} clickFunc={handleFreeTrial} />
          </form>
        </div>
      </div>

      <div className="cards" id="page" style={{ marginTop: "10rem" }}>
        <Card
          icon={<BsFillPeopleFill />}
          number={"8,756+"}
          text={"Users"}
        ></Card>
        <Card icon={<FaDownload />} number={"5500+"} text={"Downloads"}></Card>
        <Card
          icon={<MdOutlineRateReview />}
          number={"3650+"}
          text={"Reviews"}
        ></Card>
        <Card icon={<AiOutlineLike />} number={"6,058+"} text={"Likes"}></Card>
      </div>
      

      <div
        className="features" id="features"
        style={{ marginTop: "3rem", display: "flex", flexDirection: "column" }}
      >
        <h3 style={{ fontSize: "xx-large" }}>Awesome apps and features</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae,
          recusandae?
        </p>
        <div className="cards" style={{ marginTop: "3rem" }}>
          <Card2
            icon={<FaFeatherAlt />}
            heading={"CREATIVE DESIGN"}
            text={
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, recusandae?"
            }
          />
          <Card2
            icon={<FaHeart style={{ color: "rgb(229,70,92)" }} />}
            heading={"LOVELY APP"}
            text={
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, recusandae?"
            }
          />
          <Card2
            icon={<IoMdSettings />}
            heading={"EASY CUSTOMIZE"}
            text={
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, recusandae?"
            }
          />
        </div>
      </div>


      <div className="work" id="features">
        <img src={work} alt="" className="work-back" />
        <div className="flex-section">
          <img src={phone2} alt="" className="phone-2" />
          <div className="work-text">
            <h2 style={{ fontSize: "xx-large" }}>How it works</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              optio illo asperiores fugit quo quia?
            </p>
            <div className="checks">
              <div className="check">
                <h1>
                  <FaCheckCircle />
                </h1>
                <div>
                  <h3>Download For Free</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem aut cumque neque, cum dicta ex.
                  </p>
                </div>
              </div>
              <div className="check">
                <h1>
                  <FaCheckCircle />
                </h1>
                <div>
                  <h3>Select MemberShip</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem aut cumque neque, cum dicta ex.
                  </p>
                </div>
              </div>
              <div className="check">
                <h1>
                  <FaCheckCircle />
                </h1>
                <div>
                  <h3>Login Your Account</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem aut cumque neque, cum dicta ex.
                  </p>
                </div>
              </div>
              <div className="check">
                <h1>
                  <FaCheckCircle />
                </h1>
                <div>
                  <h3>Enjoy This App</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem aut cumque neque, cum dicta ex.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="screenshots" id="screenshot">
            <h3>App Screenshots</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus aperiam amet ad earum facere inventore magnam repellendus eius nemo commodi.</p>
            <img src={screenshots} alt="" style={{width:"50%"}}/>
      </div>

      <div className="overview">
            <img src={buildings} alt=""  className="overview-img"/>
            <div className="overview-text">
              <h3>Take quick overview</h3>
              <h3>of this App</h3>
            </div>

            <a id="play-video" className="video-play-button" href="#">
              <span></span>
            </a>
            <div id="video-overlay" className="video-overlay">
              <a className="video-overlay-close">&times;</a>
            </div>
      </div>

      <div className="priceing" id="priceing">
        <h2 style={{fontSize:"xx-large"}}>Membership Plan</h2>
        <p style={{width:"30rem"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis cupiditate deleniti deserunt omnis molestias aperiam tenetur neque rerum laborum repellat!</p>
        <div className="cards">
            <Card3 type={"BASIC"} price={"$12"} clickFunc={handleChosePlane} features={[
              "5 Sub Domain", "100 GB Disk space", "24/7 Tech Support", "Daily Backups", "Phone Support"
            ]}/>

            <Card3 type={"STANDARD"} price={"$29"} clickFunc={handleChosePlane} features={[
              "10 Sub Domain", "300 GB Disk space", "24/7 Tech Support", "Daily Backups", "Phone Support"
            ]}/>

            <Card3 type={"BASIC"} price={"$55"} clickFunc={handleChosePlane} features={[
              "30 Sub Domain", "500 GB Disk space", "24/7 Tech Support", "Daily Backups", "Phone Support"
            ]}/>
        </div>
      </div>
      <div className="subscribe">
            <div className="dome">
              <h2>Subscribe to our newsletter</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae labore praesentium atque inventore, facilis tempora necessitatibus quibusdam nostrum itaque maxime.</p>
              <form style={{display:"flex", alignItems:"center", gap:"1rem"}}>
                <CustomInput placeholder={"Enter Your Email.."} />
                <CustomButton text={"Subscribe"} clickFunc={handleSubscribe} />
              </form>
            </div>
            
      </div>

      <footer>
        © copyright musiccop_design all rights reserved.
      </footer>
    </div>
  );
}

export default Home;
