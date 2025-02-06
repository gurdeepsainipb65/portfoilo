export default function Skills() {
  return (
    <>
      <div className="lg:flex">
        <div className="lg:w-1/2">
          <img className="w-full move" src="\IMAG\aboutme2.png" alt="aboutme" />
        </div>
        <div className="flex flex-col p-3 justify-center items-center lg:w-1/2">
          <div className="text-2xl">Full Stack Development</div>
          <div className="flex gap-2">
            <img src="\IMAG\html.svg" alt="html" />
            <img src="\IMAG\css.svg" alt="css" />
            <img src="\IMAG\tailwind.svg" alt="tailwind" />
            <img src="\IMAG\js.svg" alt="js" />
            <img src="\IMAG\jquery.svg" alt="jquery" />
          </div>
          <div className="flex h-24 gap-2 mb-4">
            <img src="\IMAG\react.svg" alt="react" />
            <img src="\IMAG\redux.svg" alt="redux" />
            <img src="\IMAG\nodejs.svg" alt="nodejs" />
            <img src="\IMAG\mongodb.svg" alt="nodejs" />
            <img src="\IMAG\github.svg" alt="github" />
          </div>
          <ul className="font-bold flex flex-col gap-4 justify-center items-center">
            <li>
              ⚡Front-end: Proficient in building responsive and visually
              appealing web interfaces using HTML, CSS, Tailwind, JavaScript,
              and jQuery
            </li>
            <li>
              ⚡React and Redux: Skilled in developing dynamic and interactive
              web applications with React and managing state with Redux.
            </li>
            <li className="before:content-['⚡']">
              Back-end: Gained foundational knowledge in server-side development
              using Node.js, along with basic experience in managing databases
              with MongoDB, and utilizing GitHub for version control
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
