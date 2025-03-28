import { Link } from "react-router-dom";
import Hireme from "./Hireme";
export default function Name() {
  return (
    <div className="py-24 px-20 lg:flex justify-center items-center lg:py-2 lg:-mt-10 bg-blue-100">
      <div
        
        className="flex flex-col gap-2 lg:w-1/2 justify-center lg:-mt-12 items-start"
      >
        <p className="text-3xl text-blue-700 lg:text-4xl">Hello, I'm</p>
        <p className="text-3xl text-blue-950 lg:text-6xl lg:font-semibold">
          Gurdeep Singh
        </p>
        <p className="text-3xl text-blue-950 font-semibold lg:flex p-2 lg:text-4xl">
          Full stack developer
        </p>
        <Link to="/contact" className="lg:flex p-2">
          <Hireme text={"Hire Me"} page={"/contact"}/>
        </Link>
      </div>
      <div className="hidden lg:flex w-1/2">
        <div>
          <img className="move" src="IMAG\sardar image.png" alt="img" />
        </div>
      </div>
    </div>
  );
}
