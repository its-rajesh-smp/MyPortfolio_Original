import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

function Background(props) {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles id="tsparticles" init={particlesInit} options={props.config} />
  );
}

export default Background;
