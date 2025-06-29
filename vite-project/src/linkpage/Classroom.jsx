

const Classroom = () => {
  return (
    <div className="min-h-screen px-6 py-12 text-white">
      <h1 className="text-3xl font-bold mb-6">🎓 Welcome to Your Classroom</h1>

      <div className="flex flex-wrap gap-6">
        {/* Small Card 1 */}
        <div className="w-full max-w-xs bg-[#2b2b2b] rounded-lg p-4 shadow-md">
          <div className="flex items-center gap-3">
            <img
              src="https://ik.imagekit.io/sheryians/courses_gif/undefined-IMG_5100_7vO7pODI9.JPG"
              alt="course 1"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h2 className="text-sm font-semibold leading-tight">
                Job Ready AI Cohort
              </h2>
              <p className="text-xs text-gray-400">Enrolled: Jan-24-2025</p>
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <a
              href="#"
              className="flex-1 px-2 py-1 bg-[#27dfb3] text-black text-xs rounded hover:bg-[#1ed7a3] transition"
            >
              Course ↗
            </a>
            <a
              href="#"
              className="flex-1 px-2 py-1 bg-[#8247e5] text-white text-xs rounded hover:bg-[#a970ff] transition"
            >
              Discord
            </a>
          </div>
        </div>

        {/* Small Card 2 */}
        <div className="w-full max-w-xs bg-[#2b2b2b] rounded-lg p-4 shadow-md">
          <div className="flex items-center gap-3">
            <img
              src="https://ik.imagekit.io/sheryians/courses_gif/Front-End_Domination__Create_Anything_with_Code-FRONTENDTHUBNAIL_Wf8WqcNJx.jpg"
              alt="course 2"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h2 className="text-sm font-semibold leading-tight">
                Front-End Domination
              </h2>
              <p className="text-xs text-gray-400">Enrolled: May-18-2024</p>
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <a
              href="#"
              className="flex-1 px-2 py-1 bg-[#27dfb3] text-black text-xs rounded hover:bg-[#1ed7a3] transition"
            >
              Pay ↗
            </a>
            <a
              href="#"
              className="flex-1 px-2 py-1 bg-gray-600 text-white text-xs rounded hover:bg-gray-500 transition"
            >
              Cancel ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classroom;
