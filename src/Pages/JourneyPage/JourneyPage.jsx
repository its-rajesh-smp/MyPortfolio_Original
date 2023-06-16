import { useEffect, useRef } from "react";
import "./JourneyPage.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
function JourneyPage() {
  const trigguredRef = useRef(null);
  const sectionRef = useRef(null);

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
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section ref={trigguredRef} className="JourneyPage ">
      <div ref={sectionRef} className="JourneyPage__wrapper"></div>
    </section>
  );
}

export default JourneyPage;
