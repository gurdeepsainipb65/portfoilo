import Hireme from "./Hireme";
export default function About() {
  return (
    <>
      <div className="lg: flex flex-col lg:flex justify-between items-center">
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="text-2xl text-blue-950">ABOUT ME</div>
        </div>
        <div className="py-2 lg:flex w-full">
          <div className="lg:w-1/2 mt-4">
            <img
              src="/IMAG/about_me1.png"
              alt="img"
              className="move max-w-full h-auto"
            />
          </div>
          <div className="lg:w-1/2">
            <p className="text-2xl lg:text-4xl p-2 text-center lg:mt-4">
              Hi There! I'm Gurdeep Singh
            </p>
            <p className="p-6">
              I am a Full Stack Developer, a versatile and skilled professional
              with expertise in building dynamic, scalable, and high-performing
              web applications using the MERN stack
            </p>
            <div className="p-2">
              <table className="table-auto w-full text-gray-800">
                <tbody>
                  <tr className="m-4">
                    <td className="py-2 px-4">Birthday</td>
                    <td className="py-2 px-4">: Nov 11, 2001</td>
                  </tr>
                  <tr className="m-4">
                    <td className="py-2 px-4">Phone</td>
                    <td className="py-2 px-4">: +91 9877639215</td>
                  </tr>
                  <tr className="m-4">
                    <td className="py-2 px-4">Email</td>
                    <td className="py-2 px-4">: gurdeepsainig2001@gmail.com</td>
                  </tr>
                  <tr className="m-4">
                    <td className="py-2 px-4">From</td>
                    <td className="py-2 px-4">: Mohali village issapur</td>
                  </tr>
                  <tr className="m-4">
                    <td className="py-2 px-4">Language</td>
                    <td className="py-2 px-4">: English, Punjabi, Hindi</td>
                  </tr>
                  <tr className="m-4">
                    <td className="py-2 px-4">Freelance</td>
                    <td className="py-2 px-4">: Available</td>
                  </tr>
                </tbody>
              </table>
              <a href="/IMAG/Gurdeep_Singh_CV.pdf" download>
                <Hireme text={"Download Cv"} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
