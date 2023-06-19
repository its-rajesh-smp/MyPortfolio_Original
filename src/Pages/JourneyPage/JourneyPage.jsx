import { useEffect, useRef } from "react";
import "./JourneyPage.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Journey from "../../Components/JourneyPage/Journey/Journey";
import PageWrapper from "../../Components/UI/PageWrapper/PageWrapper";
import JOURNEY from "../../DATA/JOURNEY";
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
        ease: "sine.inOut",
        duration: 0.2,
        scrollTrigger: {
          trigger: trigguredRef.current,
          start: "-60px top",
          end: "5000 top",
          scrub: 0.1,
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
          {JOURNEY.map((journey) => {
            return (
              <Journey
                key={journey.name}
                date-from={journey.dateFrom}
                date-to={journey.dateTo}
                name={journey.name}
                about={journey.about}
              />
            );
          })}
        </div>
      </PageWrapper>
    </section>
  );
}

export default JourneyPage;
