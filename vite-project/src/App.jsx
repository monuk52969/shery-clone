import React, { useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';

import Navbar from './pages/Navbar';
import Footer from './pages/Footer';

// Main sections
import Home from './pages/Home';
import VideoPage from './pages/VideoPage';
import Courses from './pages/Courses';
import TopCompany from './pages/TopCompany';

// Pages
import CourseUpdate from './linkpage/CourseUpdate';
import Kodr from './linkpage/Kodr';
import CallBack from './linkpage/CallBack';
import Signup from './linkpage/Signup';
import ClassroomDashboard from './linkpage/ClassroomDashboard'; // ✅ Updated to ClassroomDashboard

const App = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div
      className="min-h-screen text-white bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='1512' height='6397' viewBox='0 0 1512 6397' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_243_2)'%3E%3Crect width='1512' height='6397' fill='%230c0c0c' /%3E%3Cg opacity='0.4' filter='url(%23filter0_f_243_2)'%3E%3Cpath d='M387.38 137.553C355.297 -107.774 513.625 -371.892 752.935 -403.188C992.246 -434.485 1087.35 -273.117 1119.44 -27.7906C1151.52 217.536 993.208 -36.6224 796.88 -10.947C557.569 20.3495 419.463 382.88 387.38 137.553Z' fill='%2324cfa7' /%3E%3C/g%3E%3Cg filter='url(%23filter1_f_243_2)'%3E%3Ccircle cx='15' cy='3176' r='185' fill='%2324cfa7' /%3E%3C/g%3E%3Cg filter='url(%23filter2_f_243_2)'%3E%3Ccircle cx='1275' cy='840' r='64' fill='%2324cfa7' /%3E%3C/g%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_f_243_2' x='239.258' y='-551.062' width='1028.33' height='917.31' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix' /%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' /%3E%3CfeGaussianBlur stdDeviation='72' result='effect1_foregroundBlur_243_2' /%3E%3C/filter%3E%3Cfilter id='filter1_f_243_2' x='-774' y='2387' width='1578' height='1578' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix' /%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' /%3E%3CfeGaussianBlur stdDeviation='302' result='effect1_foregroundBlur_243_2' /%3E%3C/filter%3E%3Cfilter id='filter2_f_243_2' x='967' y='532' width='616' height='616' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix' /%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' /%3E%3CfeGaussianBlur stdDeviation='122' result='effect1_foregroundBlur_243_2' /%3E%3C/filter%3E%3CclipPath id='clip0_243_2'%3E%3Crect width='1512' height='6397' fill='white' /%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E")`
      }}
    >
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <VideoPage />
            <Courses />
            <TopCompany />
            <Footer />
          </>
        } />

        <Route path="/courses" element={<><CourseUpdate /><Footer /></>} />
        <Route path="/videos" element={<VideoPage />} />
        <Route path="/companies" element={<TopCompany />} />
        <Route path="/kodr" element={<Kodr />} />
        <Route path="/callback" element={<CallBack />} />
        <Route path="/signup" element={<Signup />} />

        {/* ✅ Updated to ClassroomDashboard */}
        <Route path="/classroom" element={<ClassroomDashboard />} />

        <Route path="*" element={<div className="p-10 text-center">404 - Page Not Found</div>} />
      </Routes>
    </div>
  );
};

export default App;
