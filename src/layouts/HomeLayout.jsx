import { Particles_background } from "../components/particles/Particles_component";
import About from "../features/About";

function HomeLayout({smoother}) {
  return (
    <>
      <Particles_background />
      <About smoother={smoother} />
    </>
  );
}

export default HomeLayout;
