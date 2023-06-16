import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { HomeBackground_config } from "./HomeBackground_config";

function HomeBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={HomeBackground_config}
    />
  );
}

export default HomeBackground;
