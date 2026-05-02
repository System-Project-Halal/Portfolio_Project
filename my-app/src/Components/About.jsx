import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image2 from "../assets/Image2.jpg";

const About = () => {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width) * 100;
    const y = ((clientY - top) / height) * 100;
    setPos({ x, y });
  };

  const social = [
    { name: "bi-github", label: "Github", link: "#" },
    { name: 'bi-facebook', label: "Facebook", link: "#" },
    { name: 'bi-linkedin', label: 'Linkedin', link: "#" }
  ];

  const focusPoints = [
    { name: 'Problem Solving' },
    { name: 'Responsive Design' },
    { name: 'Core Fundamentals' }
  ];

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative py-24 md:py-32 flex flex-col items-center overflow-hidden bg-white"
    >
      {/* Interactive Background Glow */}
      <div
        className="absolute w-[500px] h-[500px] bg-green-200/20 blur-[120px] rounded-full pointer-events-none transition-all duration-300 ease-out z-0"
        style={{
          left: `${pos.x}%`,
          top: `${pos.y}%`,
          transform: "translate(-50%, -50%)"
        }}
      />

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16 w-full max-w-6xl px-6">

        {/* LEFT SIDE: IMAGE CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full max-w-md"
        >
          <div className="relative group">
            {/* Browser-style Window Decor */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white transition-transform duration-500 group-hover:-translate-y-3">
              <div className="flex items-center gap-1.5 px-4 py-3 bg-gray-50 border-b border-gray-100">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
                <span className="ml-2 text-[10px] text-gray-400 font-mono tracking-widest uppercase">profile.jpg</span>
              </div>

              <img
                src={Image2}
                alt="Joshua Gesta"
                className="w-full h-[400px] md:h-[520px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Social Floating Badges */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] flex justify-center gap-3 z-20">
              {social.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  whileHover={{ y: -5 }}
                  className="flex items-center gap-2 bg-white/80 backdrop-blur-md shadow-lg border border-gray-100 px-4 py-2.5 rounded-xl hover:bg-black hover:text-white transition-all duration-300"
                >
                  <i className={`bi ${item.name} text-lg`}></i>
                  <span className="text-[11px] font-bold uppercase tracking-widest hidden sm:inline">{item.label}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE: CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl"
        >
          <span className="text-green-600 font-bold text-xs md:text-sm uppercase tracking-[0.3em] mb-4">
            Discover My Story
          </span>

          <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight uppercase tracking-tighter mb-6">
            Aspiring <span className="text-transparent [-webkit-text-stroke:1px_#111] italic">Frontend</span> Developer
          </h1>

          <div className='flex flex-wrap justify-center lg:justify-start gap-4 mb-8'>
            {focusPoints.map((focus, index) => (
              <span key={index} className="flex items-center gap-2 text-[10px] md:text-[11px] font-bold uppercase tracking-widest py-1.5 px-3 bg-gray-100 text-gray-600 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                {focus.name}
              </span>
            ))}
          </div>

          <div className="space-y-6">
            <p className="text-sm md:text-[16px] text-gray-500 leading-relaxed">
              I'm <span className='text-black font-bold'>Joshua Gesta</span>. I have always loved to code and build websites.I get a lot of satisfaction out of learning about the intricate world of programming and solving problems.I am currently a degree in information technology at Informatics North - Gate.
            </p>
            <p className="text-sm md:text-[16px] text-gray-500 leading-relaxed border-l-2 border-green-500 pl-6 italic">
              I am also focused on improving my skills in web development, especially in building responsive and user - friendly websites.My goal is to become a front - end developer in the future and continue growing as a beginner web developer.

            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-10">
            <button className="group relative py-4 px-10 text-[12px] font-bold uppercase tracking-[0.2em] rounded-full bg-black text-white overflow-hidden transition-all duration-300">
              <span className="relative z-10">Hire Me</span>
              <div className="absolute inset-0 bg-green-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>

            <button className="py-4 px-10 text-[12px] font-bold uppercase tracking-[0.2em] rounded-full border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300">
              Show CV
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;