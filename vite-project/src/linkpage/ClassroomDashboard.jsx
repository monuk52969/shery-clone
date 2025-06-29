import React, { useState } from 'react';

const modules = [
  {
    title: "93 - JavaScript Full Course",
    video: "https://www.youtube.com/embed/a-wVHL0lpb0"
  },
  {
    title: "94 - Learn React JS in 90 Minutes",
    video: "https://www.youtube.com/embed/2LsOyOaobrc"
  },
  {
    title: "95 - DSA with JavaScript ",
    video: "https://www.youtube.com/embed/dY-OpnLZRd0"
  },
  {
    title: "98 - Three.JS – Learn What Matters",
    video: "https://www.youtube.com/embed/B-4eN1Pb7qo"
  },
  {
    title: "99 - Complete GSAP Course",
    video: "https://www.youtube.com/embed/9C03V1dXxOU"
  },
  {
    title: "Master Git & GitHub",
    video: "https://www.youtube.com/embed/Oq6nxXD-MZc"
  },
  {
    title: "100 - Master JavaScript Essentials for Backend Development",
    video: "https://www.youtube.com/embed/T55Kb8rrH1g"
  },
  {
    title: "104 - JavaScript Question Solving",
    video: "https://www.youtube.com/embed/Eb0cLSCjKNU"
  },
];


const ClassroomDashboard = () => {
  const [currentVideo, setCurrentVideo] = useState(modules[0].video);

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full px-6 md:px-12 py-10 gap-8">
      {/* Left: Video Player */}
      <div className="flex-1 rounded-xl overflow-hidden shadow-lg">
        <iframe
          className="w-full h-[300px] md:h-[500px] rounded-xl"
          src={currentVideo}
          title="Live Class Video"
          allowFullScreen
        ></iframe>
      </div>

      {/* Right: Modules Panel */}
      <div className="w-full md:max-w-sm bg-[#1c1c1c] rounded-xl shadow-lg p-6 text-sm text-white space-y-6">
        <h2 className="text-base font-semibold text-blue-400">📘 All modules</h2>

        <div className="bg-[#2a2a2a] text-center p-4 rounded-md">
          <p className="text-sm font-medium">No Class Today ( Sunday )</p>
          <button className="mt-3 w-full py-2 bg-red-500 text-white rounded">Join Live</button>
        </div>

        <div className="text-green-400 font-medium">
          4.16% Completed
          <div className="text-xs text-white mt-1">Assessments: 45 / 859 &nbsp; | &nbsp; Videos: 32 / 182</div>
        </div>

        <div className="space-y-2">
          <h3 className="font-bold text-white">Front-End</h3>

          {modules.map((module, i) => (
            <div key={i} className="flex justify-between items-center bg-[#2f2f2f] px-4 py-2 rounded">
              <span>{module.title}</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentVideo(module.video)}
                  className="text-xs bg-[#24cfa7] text-black px-2 py-1 rounded"
                >
                  YouTube
                </button>
                <span className="text-blue-400 text-lg">&gt;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassroomDashboard;
