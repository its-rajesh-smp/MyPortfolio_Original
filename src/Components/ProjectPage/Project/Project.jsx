import { useRef } from "react";
import "./Project.css";
import useScrollTriggure from "../../../Hooks/useScrollTriggure";
function Project(props) {
  let projectRef = useRef();

  useScrollTriggure(
    projectRef,
    {
      duration: 1,
      translateX: props.showFrom === "left" ? "-100vw" : "100vw",
      ease: "expo.out",
      delay: 3,
    },

    {
      duration: 1,
      translateX: "0",
      ease: "expo.out",
      delay: 3,
    },
    { top: "90%", bottom: "80%", scrub: 3 },
    { top: "top", bottom: "55%" }
  );

  return (
    <div ref={projectRef} className="Project">
      <img src="src\assets\screenshot.png" alt="" />
      <div className="ProjectAbout">
        <div className="left">
          <h1>BoodyBook</h1>
          <p>A Social Media & Messaging Platform</p>
          <p>Totally Build On Firebase With Realtime Data</p>
          <p>Realtime Chat with Friends</p>
        </div>
        <div className="right">
          <h4>Main Features</h4>
          <p>Post, Like, Comment</p>
          <p>Send & Accept Friend Request </p>
          <p>Send Message</p>
          <p>Message Seen & Unseen</p>
          <p>User Profile</p>
        </div>
      </div>
      <div className="projectLinkStatus">
        <div className="links">
          <p>https://body-book.netlify.app/</p>
          <p>https://body-book.netlify.app/</p>
        </div>
        <p>Project Status:- Working</p>
      </div>
    </div>
  );
}

export default Project;
