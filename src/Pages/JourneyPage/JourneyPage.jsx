import { useEffect, useRef } from "react";
import "./JourneyPage.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Journey from "../../Components/JourneyPage/Journey/Journey";
import PageWrapper from "../../Components/UI/PageWrapper/PageWrapper";
function JourneyPage() {
  const trigguredRef = useRef(null);
  const sectionRef = useRef(null);
  const progressRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: trigguredRef.current,
          start: "top top",
          end: "5000 top",
          scrub: 0,
          pin: true,
          onUpdate: (scrollTrigger) => {
            const progress = scrollTrigger.progress * 100;
            progressRef.current.style.width = `${progress}%`;
          },
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section ref={trigguredRef} className="page">
      <PageWrapper className="JourneyPage ">
        <h1 className="pageHeading">JOURNEY</h1>
        <div className="loader">
          <div ref={progressRef} className="progressBar"></div>
        </div>
        <div ref={sectionRef} className="JourneyPage__wrapper">
          <Journey
            name="Secondary Examination"
            date-from="06/06/2016"
            about="Passout secondary examination (10th) with avarage 65% marks"
          />

          <Journey
            name="Higher-Secondary Examination"
            date-from="06/06/2018"
            about="Passout higher secondary examination (10th+2) in science branch with avarage 62% marks"
          />

          <Journey
            name="Passout Diploma"
            date-from="06/06/2018"
            date-to="- 06/06/2021"
            about="Complited Diploma (3Year) in Mechanical Branch with avarage 80% marks & Get Placed In Anand ACYM Gourgaon"
          />

          <Journey
            name="Joined Sharpener"
            date-from="06/12/2022"
            date-to="- 06/17/2023"
            about="Learn Webdev frontend"
          />
        </div>
      </PageWrapper>
    </section>
  );
}

export default JourneyPage;
