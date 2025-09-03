import {  useMemo } from "react";
import Home from "../../features/Home";
import Particles from "./Particles";
import { useTheme } from "../../hooks/useTheme";

export function Particles_background(){
    const {theme} = useTheme()

    const particleColors = useMemo(() => {
    const root = document.documentElement;
    const styles = getComputedStyle(root);

    const c1 = styles.getPropertyValue("--particle-color").trim() || "#ffffff";

    return [c1];
  }, [theme]); // recompute when theme changes

      const style = {
        container: {
          position: "relative",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          // background: "white"
        },
        wrapper: {
          zIndex: 1,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      };
return(
  <div style={style.container}>
    <Particles
      // particleColors={['#ffffff', '#ffffff']}
      // particleColors={['#000000', '#000000']}
      particleColors={particleColors}
      particleCount={1000}
      particleSpread={20}
      speed={0.3}
      particleBaseSize={90}
      moveParticlesOnHover={false}
      alphaParticles={true}
      disableRotation={true}
    />
    <div style={style.wrapper}>
    <Home />
    </div>
  </div>
)
}