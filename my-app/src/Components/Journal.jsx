import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Junior from "../Images/Junior.jpeg";
import SHS from "../Images/SHS.jpeg";
import Informatics from "../Images/Informatics.jpeg";
import Project1 from "../Images/Project1.png";

const Journal = () => {
  const [activeTab, setActiveTab] = useState("education");
  const [selectedProject, setSelectedProject] = useState(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width) * 100;
    const y = ((clientY - top) / height) * 100;
    setPos({ x, y });
  };

  const educationData = [
    { school: "Las Piñas East National High School", level: "Junior High School", year: "2017 - 2021", img: Junior, status: "Completed" },
    { school: "Crecencia Drucila Lopez Senior High School", level: "ICT - Computer Programming", year: "2021 - 2023", img: SHS, status: "Completed" },
    { school: "Informatics College North Gate", level: "BS in Information Technology", year: "2023 - 2026 Present", img: Informatics, status: "Graduating" },
  ];

  const projects = [
    {
      src: Project1,
      link: "https://halalkalap.web.app/",
      title: "Halal Kalap",
      description: "A web-based platform designed to assist users in identifying Halal-certified products, featuring a streamlined verification process via mobile product scanning.",
      date: "APRIL 2026",
      frontEnd: ["REACT", "TAILWIND", "BOOSTRAP ICON"],
      backEnd: ["PYTHON", "FastAPI", "Gemini", "LLM", "XLM-RoBERTa"],
      features: ["OCR Scanning Product", "OCR Scanning Menu", "Authentication", "Verify (halal, haram, mushbooh"]
    },

    // here add to other projects
  ];

  return (
    <section
      onMouseMove={handleMouseMove}
      className='min-h-screen flex items-center py-24 flex-col relative overflow-hidden bg-white'
    >
      {/* Background Glow */}
      <div
        className="absolute w-[600px] h-[600px] bg-green-200/20 blur-[120px] rounded-full pointer-events-none transition-all duration-300 z-0"
        style={{ left: `${pos.x}%`, top: `${pos.y}%`, transform: "translate(-50%, -50%)" }}
      />

      <div className='w-full max-w-6xl mx-auto px-6 relative z-10'>
        {/* Tab Switcher */}
        <div className='flex justify-center mb-16'>
          <div className='inline-flex p-1 bg-gray-50 rounded-full border border-gray-100 shadow-sm'>
            {["education", "projects"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-10 py-3 rounded-full tracking-[0.2em] font-bold uppercase text-[10px] md:text-[11px] transition-all duration-300
                 ${activeTab === tab ? "text-white" : "text-gray-400 hover:text-black"}`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTabJournal"
                    className="absolute inset-0 bg-black rounded-full shadow-lg"
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Box */}
        <div className='relative w-full bg-white/50 backdrop-blur-sm rounded-[2rem] border border-gray-100 overflow-hidden min-h-[600px] shadow-sm'>
          <AnimatePresence mode="wait">
            {activeTab === "education" ? (
              <motion.div
                key="education"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className='p-8 md:p-16'
              >
                <div className="mb-12 flex flex-col items-center lg:items-start text-center lg:text-left">
                  <span className="text-green-600 font-bold text-[10px] uppercase tracking-[0.3em] mb-2">My Journey</span>
                  <h3 className='text-3xl md:text-5xl font-black text-gray-900 uppercase'>
                    Academic <span className="text-transparent [-webkit-text-stroke:1px_#111] italic">Timeline</span>
                  </h3>
                </div>

                <div className='space-y-12 relative max-w-4xl'>
                  {educationData.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className='group flex flex-col md:flex-row items-center md:items-start gap-8'
                    >
                      <div className='w-24 h-24 md:w-40 md:h-28 overflow-hidden rounded-2xl border border-gray-100 shadow-md flex-shrink-0'>
                        <img src={item.img} className='w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700' alt={item.school} />
                      </div>
                      <div className='flex-1 text-center md:text-left'>
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-2">
                          <span className="text-[9px] font-bold tracking-widest text-green-700 uppercase px-3 py-1 bg-green-50 rounded-md">{item.year}</span>
                          <span className="text-[9px] font-bold tracking-widest text-gray-400 uppercase px-3 py-1 bg-gray-50 rounded-md">{item.status}</span>
                        </div>
                        <h4 className='text-xl md:text-2xl font-black text-gray-900 uppercase group-hover:text-green-600 transition-colors'>{item.school}</h4>
                        <p className="text-gray-400 text-xs font-medium uppercase tracking-widest mt-1">{item.level}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="projects"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className='p-8 md:p-16'
              >
                <div className="mb-12 flex flex-col items-center lg:items-start text-center lg:text-left">
                  <span className="text-green-600 font-bold text-[10px] uppercase tracking-[0.3em] mb-2">Portfolio</span>
                  <h3 className='text-3xl md:text-5xl font-black text-gray-900 uppercase'>
                    Selected <span className="text-transparent [-webkit-text-stroke:1px_#111] italic">Works</span>
                  </h3>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                  {projects.map((project, index) => (
                    <motion.div
                      key={index}
                      layoutId={`card-${project.title}`}
                      onClick={() => setSelectedProject(project)}
                      whileHover={{ y: -5 }}
                      className='group cursor-pointer bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all'
                    >
                      <div className='aspect-video overflow-hidden relative'>
                        <img src={project.src} className='w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700' alt={project.title} />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="bg-white text-black px-5 py-2 rounded-full font-bold text-[9px] tracking-widest uppercase">View Project</span>
                        </div>
                      </div>
                      <div className='p-6 text-center'>
                        <h4 className='text-xl font-black text-gray-900 uppercase tracking-tighter'>{project.title}</h4>
                        <p className="text-[10px] text-green-600 font-bold tracking-widest uppercase mt-1">Details</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* PROJECT MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              layoutId={`card-${selectedProject.title}`}
              className="relative bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl z-10 scrollbar-hide"
            >
              {/* Floating Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 w-10 h-10 bg-white/80 backdrop-blur-md border border-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all z-20 shadow-lg"
              >
                <i className="bi bi-x-lg"></i>
              </button>

              {/* 1. Header Image  */}
              <div className="w-full h-64 md:h-80 overflow-hidden">
                <img
                  src={selectedProject.src}
                  className="w-full h-full object-cover"
                  alt={selectedProject.title}
                />
              </div>

              {/* 2. Content Section ( */}
              <div className="p-8 md:p-12">
                <div className="flex flex-col items-center text-center">
                  <span className="text-green-600 font-bold text-[10px] tracking-[0.4em] uppercase mb-3">
                    {selectedProject.date}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tighter mb-6">
                    {selectedProject.title}
                  </h2>

                  <div className="w-12 h-1 bg-green-500 mb-8 rounded-full" />

                  <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-10 max-w-lg">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Features and Technologies */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12 border-t border-gray-50 pt-10">
                  <div>
                    <h5 className="text-[10px] font-black uppercase tracking-widest text-gray-900 mb-5">
                      Key Features
                    </h5>
                    <ul className="space-y-3">
                      {selectedProject.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-3 text-xs text-gray-600 font-medium">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-[10px] font-black uppercase tracking-widest text-gray-900 mb-5">
                      Front-End
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.frontEnd.map((tag, i) => (
                        <span key={i} className="px-3 py-1.5 bg-gray-50 text-gray-400 text-[9px] font-black tracking-widest rounded-lg border border-gray-100 uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="text-[10px] font-black uppercase tracking-widest text-gray-900 mb-5">
                      Backend
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.backEnd.map((tag, i) => (
                        <span key={i} className="px-3 py-1.5 bg-gray-50 text-gray-400 text-[9px] font-black tracking-widest rounded-lg border border-gray-100 uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Call to Action Button */}
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex items-center justify-center w-full py-5 bg-black text-white rounded-2xl font-bold text-xs tracking-[0.3em] uppercase overflow-hidden hover:bg-green-600 transition-all duration-500 shadow-xl"
                >
                  <span className="relative z-10">Launch Project</span>
                  <i className="bi bi-arrow-up-right ml-3 relative z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"></i>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Journal;