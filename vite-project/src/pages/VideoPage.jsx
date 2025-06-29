import { useState } from 'react';
import VidImg from '../assets/images/maxresdefault.jpg';
import Logo from '../assets/images/logo.webp';
import { MdOutlineWatchLater } from "react-icons/md";
import { IoIosShareAlt } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import Youicon from '../assets/images/y-icon.png';

const VideoPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-full min-h-screen  text-white px-4 md:px-16 py-10">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl tracking-wide font-neue-light font-light leading-tight">
          we do whatever it takes to help you <br />
          <span className="text-[#27DFB3]">understand the concepts.</span>
        </h1>
      </div>

      {/* Video Container */}
      <div className="mt-16 flex justify-center">
        <div className="relative w-full md:w-[68vw] rounded-xl overflow-hidden">
          {/* Thumbnail with overlay trigger */}
          <div onClick={() => setShowModal(true)} className="cursor-pointer">
            <img
              src={VidImg}
              alt="Video Thumbnail"
              className="w-full h-auto object-cover"
            />

            {/* Play Icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-110">
              <img src={Youicon} alt="YouTube Play Icon" className="w-20 h-20 animate-pulse" />
            </div>
          </div>

          {/* Top Overlay */}
          <div className="absolute top-0 left-0 w-full flex items-center justify-between px-4 py-2">
            <div className="flex items-center gap-4">
              <img src={Logo} alt="Logo" className="w-10 h-10 bg-white p-2 rounded-full" />
              <h2 className="md:text-base font-helvetica-medium font-medium">
                You Are Not Yet Ready | Placement | Open Source
              </h2>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <div className="flex flex-col items-center">
                <MdOutlineWatchLater className="w-5 h-5" />
                <p className="text-xs font-helvetica-medium font-medium">Watch later</p>
              </div>
              <div className="flex flex-col items-center">
                <IoIosShareAlt className="w-5 h-5" />
                <p className="text-xs font-helvetica-medium font-medium">Share</p>
              </div>
            </div>
          </div>

          {/* Bottom-Left Label */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-2 rounded-md ">
            <p className="text-sm font-helvetica-light">Watch on</p>
            <FaYoutube className="w-5 h-5 " />
            <p className="font-helvetica-light">YouTube</p>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-20">
        <button className="px-8 py-2 bg-[#27DFB3] tracking-widest rounded-md font-helvetica-bold text-xl text-black font-semibold">
          Explore free learning
        </button>
      </div>

      {/* 🎬 Video Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          <div className="relative w-[90vw] md:w-[60vw] aspect-video bg-black rounded-lg shadow-lg overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-white text-xl z-50"
            >
              ✕
            </button>
            {/* Embedded Video */}
            <iframe
  width="100%"
  height="100%"
  src="https://www.youtube.com/embed/60SRAWmMXyc?autoplay=1"
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  className="w-full h-full"
/>

          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPage;
