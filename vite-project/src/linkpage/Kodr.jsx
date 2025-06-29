import React, { useState } from 'react';
import Tick from '../assets/images/blue.png';
import { FaRegCirclePlay } from "react-icons/fa6";
import Modal from 'react-modal';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

Modal.setAppElement('#root'); // For accessibility

const Kodr = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const phases = [
    {
      title: "Phase 1: Full MERN Stack Mastery",
      content: "Master MongoDB, Express.js, React, and Node.js with in-depth projects and hands-on learning."
    },
    {
      title: "Phase 2: AI Integration",
      content: "Learn how to integrate modern AI APIs and models into real-world applications for automation and intelligence."
    },
    {
      title: "Phase 3: Deployment & DevOps",
      content: "Understand deployment pipelines, CI/CD, and tools like Docker, GitHub Actions, and cloud platforms."
    },
    {
      title: "Phase 4: Debugging & Self-Reliance",
      content: "Gain strong debugging skills and become independent in solving issues and optimizing code."
    },
    {
      title: "Phase 5: Project",
      content: "Work on a capstone project that encapsulates everything learned and prepares you for the industry."
    }
  ];

  return (
    <div className="w-full min-h-screen ">
      <div className="main-1 w-full h-auto flex mt-16">
        {/* Left Side */}
        <div className="left w-[50%] py-5 ml-20">
          <h1 className='text-6xl font-helvetica-medium font-normal'>
            100 Days In-House <br /> Bootcamp Programme - <br /> Kodr.
          </h1>

          <div className="tick w-52 mt-8 flex flex-col">
            <div className="flex items-center justify-between py-2 mb-12 px-4 bg-[#353535] rounded-md text-nowrap">
              <span>Starts On: 7 July 2025</span>
              <img src={Tick} alt="tick" className="w-5 h-5 ml-2" />
            </div>

            <div className="price">
              <h1 className='text-3xl text-nowrap font-helvetica-medium'>
                Fee <span className='text-[#02E797] text-4xl'>₹ 59000</span> <span className='text-md'><sub>[50,000 + 18% GST]</sub></span>
              </h1>
              <button className="mt-auto w-full py-2 text-center mt-10 rounded-md text-2xl font-helvetica-bold font-900 bg-[#009560] text-[#FFFFFF] hover:opacity-90 transition-all duration-200">
                Register Now
              </button>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="right w-[50%] relative">
          {/* Icon overlay */}
          <div
            className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <FaRegCirclePlay className="text-white text-6xl hover:scale-110 transition duration-200" />
          </div>

          {/* Image */}
          <img
            src="https://ik.imagekit.io/sheryians/Kodr/maxresdefault%20(1)__XiJRPqZS.webp"
            alt=""
            className="w-[44vw] h-full object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Modal for Video */}
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        className="fixed inset-0 flex items-center justify-center bg-black/80 z-50"
        overlayClassName="overlay"
      >
        <div className="relative w-[90vw] max-w-[900px] aspect-video">
          <button
            className="absolute top-2 right-2 text-white text-xl"
            onClick={() => setIsOpen(false)}
          >
            <p className='text-white'>❌</p>
          </button>
          <iframe
            className="w-full h-full rounded-xl"
            src="https://www.youtube.com/embed/AptmHn3bJoY?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>

      {/* Future sections */}
      <div className="main-2 w-full h-auto">
        <div className="heading-1 mt-20">
          <h1 className='text-[7vw] font-helvetica-bold font--bold leading-none ml-20 tracking-tighter'>We Believe in,  <br /><span className='text-[#34A47C] ml-1'> Consistency.</span> No Shortcuts.</h1>
        </div>

        <div className="heading-2 mt-36">
          <h1 className="text-[14vw] text-[#E9E9E9] font-helvetica-bold font--bold leading-none ml-20 tracking-tighter">
            Non-Stop <br />
            <span className="text-[#34A47C]">4 Hours</span> <br />
            <span className="inline-flex items-start gap-2 relative">
              Coding
              <sub className="text-[4vw] absolute top-[70%] left-[110%] tracking-normal">[ Everyday ]</sub>
            </span>
          </h1>
          <p className='text-3xl mt-16 ml-24'>Monday To Saturday. 10:00 AM To 2:00PM.</p>
        </div>

        <div className="heading-3 mt-52 ml-20 leading-tight tracking-tighter">
          <h1 className="text-[11vw] font-helvetica-bold font-bold leading-none">Dominate.</h1>
          <p className="text-[5vw] font-helvetica-bold font-bold mt-[-0.8vw] text-[#535353] leading-none">From Start To Victory.</p>
        </div>

        {/* Dropdown Phases Section */}
        <div className="phases mt-36 ml-20 w-[90%]">
          {phases.map((phase, index) => (
            <div key={index}>
              <div
                className="border-b border-[#333] py-6 flex justify-between items-center cursor-pointer"
                onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
              >
                <h2 className="text-2xl font-bold text-white">{phase.title}</h2>
                <span className="text-white mr-4">
                  {openDropdown === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </div>
              {openDropdown === index && (
                <div className="text-white px-4 py-2 text-lg bg-[#1a1a1a] border-l-4 border-[#34A47C]">
                  {phase.content}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Registration Form Heading */}
        <div className="form-section mt-36 px-20">
          <h1 className="text-6xl font-bold text-white mb-4">Register now 👇</h1>
          <p className="text-white mb-12">To join batch & payment fill this form</p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-10 text-white">
            <div>
              <label className="block mb-2">Full Name</label>
              <input type="text" placeholder="Enter Your Name Here" className="w-full bg-transparent border-b border-gray-500 outline-none py-2" />
            </div>
            <div>
              <label className="block mb-2">Email Address</label>
              <input type="email" placeholder="Enter Your Email Here" className="w-full bg-transparent border-b border-gray-500 outline-none py-2" />
            </div>
            <div>
              <label className="block mb-2">Contact Number</label>
              <input type="text" placeholder="Enter Your Number Here" className="w-full bg-transparent border-b border-gray-500 outline-none py-2" />
            </div>
            <div>
              <label className="block mb-2">Educational Background</label>
              <input type="text" placeholder="Enter Your Educational Background" className="w-full bg-transparent border-b border-gray-500 outline-none py-2" />
            </div>
            <div>
              <label className="block mb-2">Programming Experience</label>
              <select className="w-full bg-transparent border-b border-gray-500 outline-none py-2">
                <option className="bg-[#0C0C0C] text-white">Beginner</option>
                <option className="bg-[#0C0C0C] text-white">Intermediate</option>
                <option className="bg-[#0C0C0C] text-white">Advanced</option>
              </select>
            </div>
            <div>
              <label className="block mb-2">Date of Birth</label>
              <input type="text" placeholder="mm/dd/yyyy" className="w-full bg-transparent border-b border-gray-500 outline-none py-2" />
            </div>
          </form>

          <div className="mt-10 flex items-center gap-2">
            <input type="checkbox" id="terms" className="accent-[#34A47C]" />
            <label htmlFor="terms" className="text-white text-sm">I agree to the Terms and Conditions <a href="#" className="underline">read here</a></label>
          </div>

          <button className="mt-10 w-full md:w-auto px-12 py-3 rounded-md text-xl bg-[#00C458] text-white hover:opacity-90 transition-all duration-300">
            Submit
          </button>
        </div>

      </div>
    </div>
  );
};

export default Kodr;
