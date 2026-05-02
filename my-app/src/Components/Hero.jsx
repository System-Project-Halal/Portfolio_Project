import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, animate } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Hero = () => {
  const [timeOut, setTimeOut] = useState(new Date());
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeOut(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const skills = [
    { icon: "fa-html5", label: "html", color: "text-orange-500", type: "fa-brands", pos: "top-[15%] left-[10%]" },
    { icon: "fa-css3-alt", label: "css", color: "text-blue-600", type: "fa-brands", pos: "top-[20%] right-[12%]" },
    { icon: "fa-js", label: "javascript", color: "text-yellow-400", type: "fa-brands", pos: "bottom-[25%] left-[15%]" },
    { icon: "fa-react", label: "react", color: "text-cyan-400", type: "fa-brands", pos: "bottom-[20%] right-[10%]" },
    { icon: "fa-css3", label: "tailwind", color: "text-sky-400", type: "fa-brands", pos: "top-[50%] left-[5%]" },
    { icon: "fa-node-js", label: "node js", color: "text-green-600", type: "fa-brands", pos: "top-[60%] right-[8%]" },
    { icon: "fa-python", label: "python", color: "text-blue-500", type: "fa-brands", pos: "top-[10%] right-[35%]" },
    { icon: "fa-database", label: "mysql", color: "text-cyan-700", type: "fa-solid", pos: "bottom-[15%] right-[35%]" },
    { icon: "fa-figma", label: "figma", color: "text-pink-500", type: "fa-brands", pos: "top-[40%] right-[25%]" },
  ];




  const floatingVariants = {
    animate: (i) => ({
      y: [0, -20, 0],
      transition: {
        duration: 3 + i * 0.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    })
  }

  return (

    <section className="relative flex flex-col min-h-[100dvh] items-center justify-center px-6 md:px-12 py-10 overflow-hidden bg-white">

      {/* --- DESKTOP FLOATING SKILLS  --- */}
      <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={floatingVariants}
            animate="animate"
            className={`absolute flex flex-col items-center opacity-20 hover:opacity-100 transition-opacity duration-500 ${skill.pos}`}
          >
            <i className={`${skill.type} ${skill.icon} ${skill.color} text-6xl`} />
            <p className='text-[10px] uppercase mt-2 font-black tracking-widest text-gray-400'>{skill.label}</p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-black uppercase mb-4">My Journal</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Welcome to my personal coding journey! Here I document my progress as a junior developer.
              </p>
              <button
                onClick={() => setModal(false)}
                className="w-full py-3 bg-black text-white font-bold rounded-lg hover:bg-green-600 transition-colors"
              >
                CLOSE
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- MAIN CONTENT  --- */}
      <div className='relative z-10 flex flex-col items-center text-center w-full max-w-5xl'>

        {/* Time & Location */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className='flex items-center gap-3'
        >
          <span className='text-[10px] md:text-[13px] tracking-widest font-bold text-gray-400 uppercase'>Based in Philippines</span>
          <span className='text-gray-300'>|</span>
          <span className='text-[11px] md:text-[14px] font-bold text-gray-900'>
            <span className='text-gray-400 uppercase'>Local: </span>
            {timeOut.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
          </span>
        </motion.div>

        {/* Title / Name */}
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className='text-[42px] md:text-[70px] lg:text-[90px] uppercase font-black leading-none tracking-tighter text-gray-900 mt-6'
        >
          Hi, I'm <span className='[-webkit-text-stroke:1.2px_#000] md:[-webkit-text-stroke:1.5px_#000] text-transparent italic'>Joshua</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h3
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className='text-[18px] md:text-[35px] lg:text-[45px] font-bold uppercase mt-2'
        >
          Junior <span className='bg-green-300 px-3 py-1 inline-block transform -rotate-1'>Developer</span> Beginner
        </motion.h3>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className='text-gray-500 text-[14px] md:text-lg max-w-[600px] leading-relaxed font-medium mt-6 px-2'
        >
          I have always loved to code and build websites.I get a lot of satisfaction out of learning about the intricate world of programming and solving problems.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className='flex flex-wrap justify-center gap-4 mt-8'
        >
          <button
            onClick={() => setModal(true)}
            className="py-3.5 px-8 md:py-4 md:px-10 text-[12px] md:text-[14px] font-bold uppercase tracking-widest rounded-full bg-black text-white hover:bg-green-500 transition-all duration-300 shadow-xl"
          >
            My Journal
          </button>
          <button className="py-3.5 px-8 md:py-4 md:px-10 text-[12px] md:text-[14px] font-bold uppercase tracking-widest rounded-full border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300">
            Contact Me
          </button>
        </motion.div>

        {/* --- MOBILE SKILLS SECTION  --- */}
        <div className='lg:hidden w-full mt-16'>
          <Swiper
            spaceBetween={0}
            slidesPerView={4}
            grabCursor={true}
            className="w-full"
          >
            {skills.map((skill, index) => (
              <SwiperSlide key={index}>
                <div className='flex flex-col items-center justify-center min-h-[80px]'>
                  <i className={`${skill.type} ${skill.icon} ${skill.color} text-3xl`}></i>
                  <p className='text-[9px] uppercase mt-2 font-black tracking-widest text-gray-500'>{skill.label}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default Hero;