import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function useScrollTriggure(
  targetRef,
  animateForm,
  animateTo,
  config = { top: "90%", bottom: "80%", scrub: true },
  elemTop = { top: "top", bottom: "bottom" }
) {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const scrollTrigger = {
      trigger: targetRef.current,
      scrub: config.scrub,
      start: `${elemTop.top} ${config.top}`,
      end: `${elemTop.top} ${config.bottom}`,
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
  }, [targetRef, animateForm, animateTo, config]);
}

export default useScrollTriggure;
