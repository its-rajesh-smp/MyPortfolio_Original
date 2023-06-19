import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function useScrollTriggure(targetRef, animateForm, animateTo) {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const scrollTrigger = {
      trigger: targetRef.current,
      scrub: 8,
      start: "top 90%",
      end: "50% 84%",
    };

    const pin = gsap.fromTo(
      targetRef.current,
      {
        scrollTrigger: scrollTrigger,
        ...animateForm,
      },
      {
        scrollTrigger: scrollTrigger,
        ...animateTo,
      }
    );

    return () => {
      pin.kill();
    };
  }, [targetRef, animateForm, animateTo]);
}

export default useScrollTriggure;
