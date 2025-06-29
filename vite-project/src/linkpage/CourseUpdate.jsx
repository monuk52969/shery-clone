

const courses = [
  {
    title: "DSA Domination Cohort",
    language: "HINGLISH",
    batch: "LIVE BATCH",
    discount: "12% OFF",
    price: "₹ 6600",
    oldPrice: "₹7500",
    tag: "Limited Time Discount",
    img: "https://ik.imagekit.io/sheryians/courses_gif/undefined-web-dsa-thumb-10_ZKtPNgmW_.webp_Zhu2w1to5h.jpeg"
  },
  {
    title: "Job Ready AI Powered Cohort: Web + DSA + Aptitude",
    language: "HINDI",
    batch: "LIVE BATCH",
    discount: "50% OFF",
    price: "₹ 5999",
    oldPrice: "₹11999",
    tag: "Limited Time Discount",
    img: "https://ik.imagekit.io/sheryians/courses_gif/undefined-IMG_5100_7vO7pODI9.JPG"
  },
  {
    title: "Three.js Domination",
    language: "HINDI",
    batch: "ANIMATION",
    discount: "29% OFF",
    price: "₹ 2499",
    oldPrice: "₹3500",
    tag: "Black Friday Sale",
    img: "https://ik.imagekit.io/sheryians/courses_gif/undefined-maxresdefault_5-AHh9_1Y.jpg"
  },
  {
    title: "Aptitude & Reasoning for Campus Placements",
    language: "HINGLISH",
    batch: "PLACEMENTS",
    discount: "55% OFF",
    price: "₹ 1100",
    oldPrice: "₹1999",
    tag: "Black Friday Sale",
    img: "https://ik.imagekit.io/sheryians/courses_gif/undefined-apti_reasoning_45vyAnZ4y.jpeg"
  },
  {
    title: "Bonus Course Placeholder",
    language: "ENGLISH",
    batch: "RECORDED",
    discount: "FREE",
    price: "₹ 3999",
    oldPrice: "₹199",
    tag: "Free Offer",
    img: "https://ik.imagekit.io/sheryians/courses_gif/Front-End_Domination__Create_Anything_with_Code-FRONTENDTHUBNAIL_Wf8WqcNJx.jpg"
  }
];

const CourseUpdate = () => {
  return (
     <div className="w-full py-16 px-6 md:px-16">
      <h1 className="text-[4vw] font-neue-light font-200 mb-8 leading-tight ">We'r not <span className="text-[#27DFB3] ">course <br /> factory.</span></h1>
        <div className="para1 mb-10 ">
          <p className="text-4xl font-helvetica-light font-noramal  mb-10 tracking-tighter
 ">We focus on courses that really help.</p></div>
        <div className="para flex mb-8 mt-32">
          <p className="text-2xl font-helvetica-light">Courses Which do work <span> ↓</span></p>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {courses.map((course, index) => (
          <div key={index} className="rounded-xl overflow-hidden bg-[#171717] shadow-md flex flex-col">
            <img src={course.img} alt={course.title} className="w-full h-52 object-cover" />

            <div className="p-4 flex flex-col justify-between flex-grow">
              <h2 className="text-xl font-semibold mb-4 font-helvetica-light font-normal">{course.title}</h2>

              <div className="flex gap-3 mb-24">
                <span className="text-xs px-4 py-2 rounded bg-[#882727] text-white font-helvetica-light font-normal">{course.batch}</span>
                <span className="text-xs px-2 py-1 rounded bg-zinc-700 text-white text-center font-helvetica-light font-normal">{course.language}</span>
              </div>

              <p className="text-sm text-green-400 mb-1 font-helvetica-light font-300">{course.tag}</p>

              <div className="flex items-center gap-3 mb-2 ">
                <p className="text-xl font-bold flex flex-col">{course.price}</p>
                <p className="line-through text-gray-400">{course.oldPrice}</p>
                <span className="text-xs px-2 py-1 bg-white text-black rounded">{course.discount}</span>
              </div>

              <button className="mt-auto w-full py-2 text-center rounded-md text-2xl font-helvetica-medium font-900 bg-[#27DFB3] text-black hover:opacity-90 transition-all duration-200">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CourseUpdate