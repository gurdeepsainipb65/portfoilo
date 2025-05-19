import Name from "./Name";
import About from "./About";
import Whatido from "./Whatido";
import Skills from "./skills";
import Contact from "./Contact";
import Portfolio from "./Portfolio";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Name />
      <About />
      <Skills />
      <Whatido />
      <Contact/>
      {/* <Portfolio/> */}
    </div>
  );
}
