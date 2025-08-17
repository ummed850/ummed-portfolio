"use client";
import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaInstagram, FaTimes } from 'react-icons/fa';
import { TabItem, Tabs } from "flowbite-react";
import { HiClipboardList, HiUserCircle } from "react-icons/hi";
import { GiSkills } from "react-icons/gi";

import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header style={{
        background: 'linear-gradient(90117deg, rgba(72,72,84,1) 0%, rgba(136,133,143,1) 16%, rgba(99,97,91,1) 34%, rgba(19,71,33,1) 55%, rgba(37,74,70,1) 83%, rgba(53,69,74,1) 100%)'
      }}
        className="sticky top-0 z-50 shadow-md">
        <nav className="mx-auto max-w-[1380px] px-2 py-1 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold flex items-center space-x-2 text-white hover:text-amber-300 transition duration-300">
            <img
              src="/images/UP Logo with Blue and White Color Palette (300 x 200 px).svg"
              alt="Ummed Prajapat Logo"
              className="h-14 w-auto shadow-2xl"
            />
            Ummed Prajapat
          </Link>

          {/* Menu Toggle Button (Visible on Mobile) */}
          <button
            className="md:hidden focus:outline-none text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Navigation Links */}
          <div
            className={`${isOpen ? 'flex' : 'hidden'
              } md:flex flex-col md:flex-row md:items-center absolute md:static top-16 left-0 w-full md:w-auto md:bg-transparent p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-8 transition-all duration-300 text-white bg-red-600 font-bold font-sans `}
          >
            <Link
              href="/"
              className="hover:text-blue-400 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <a
              href="#about"
              className="hover:text-blue-400 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:text-blue-400 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <Link
              href="#contact"
              className="hover:text-blue-400 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </nav>
      </header>

      <main className="bg-gray-100 min-h-screen">
        {/* Hero Section */}
        <section className=" text-white text-center grid grid-cols-1 md:grid-cols-[70%_auto]">
          <div className=" border border-black py-4 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto px-2">
            <img src='/images/banner1.png' className='h-[400px] w-[1080px]' />
          </div>
          <div>
            <img
              src="/images/umm.png"
              alt="Ummed Prajapat"
              className="w-full h-auto max-w-md mx-auto mt-8 md:mt-0"
            />
          </div>
        </section>

        {/* About Section */}
        <section id='about' className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">About Me</h2>
            <Tabs aria-label="Tabs with icons" className='text-black max-w-[1320px] mx-auto' variant="underline">
              <TabItem active title="Profile" className='cursor-pointer' icon={HiUserCircle}>
                <section className="bg-gray-900 text-white py-12 px-6 md:px-16">
                  <div className="max-w-5xl text-center md:text-left mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">

                    {/* Profile Image */}
                    <div className="flex-shrink-0">
                      <img
                        src="/images/profileImg.jpg" // apni image ka path yahan dalna
                        alt="Profile"
                        className="w-40 h-40 md:w-[250px] md:h-[250px] object-cover rounded-full border-4 border-amber-500 shadow-lg"
                      />
                    </div>

                    {/* Profile Content */}
                    <div>
                      {/* Name & Title */}
                      <h1 className="text-3xl md:text-4xl font-bold">Ummed prajapat</h1>
                      <p className="text-amber-400 text-lg md:text-xl mt-1">Full Stack (Mern Stack) Web Developer, Canva Pro</p>

                      {/* About */}
                      <p className="text-gray-300 mt-4 leading-relaxed max-w-xl">
                        I am a passionate developer specializing in building modern, responsive, and user-friendly web applications.
                        My focus is on crafting clean and efficient code while delivering engaging digital experiences.
                      </p>

                      {/* Skills */}
                      <div className="mt-5 flex flex-wrap gap-2 inline-block text-center">
                        {["React", "Next.js", "Node.js", "Tailwind CSS", "MongoDB"].map((skill, idx) => (
                          <span
                            key={idx}
                            className="bg-amber-500/20 text-amber-400 px-3 py-1 mx-1 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Buttons */}
                      <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
                        <a
                          href="/resume/ummedResume.pdf"
                          download
                          className="bg-amber-500 text-gray-900 px-5 py-2 rounded-full font-semibold hover:bg-amber-400 transition"
                        >
                          Download CV
                        </a>
                        <a
                          href="#contact"
                          className="border border-amber-500 text-amber-400 px-5 py-2 rounded-full font-semibold hover:bg-amber-500 hover:text-gray-900 transition"
                        >
                          Contact Me
                        </a>
                      </div>

                      {/* Social Links */}
                      <div className="mt-6 flex gap-5 text-2xl md:justify-start justify-center">
                        <a href="https://www.linkedin.com/in/ummed-prajapat-698a69299/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">
                          <FaLinkedin />
                        </a>
                        <a href="https://github.com/ummed850" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">
                          <FaGithub />
                        </a>
                        <a href="https://x.com/KumarUmmed6343" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">
                          <FaTwitter />
                        </a>
                        <a href="https://www.instagram.com/ummed.prajapat1/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">
                          < FaInstagram />
                        </a>

                      </div>
                    </div>
                  </div>
                </section>
              </TabItem>
              <TabItem id='skills' title="Skills" className='cursor-pointer' icon={GiSkills}>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4 bg-gray-900 text-white p-4 rounded-lg">
                  {[
                    "HTML5",
                    "CSS3",
                    "JavaScript (ES6+)",
                    "React.js",
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "Tailwind CSS",
                    "Bootstrap",
                    "jQuery",
                    "Git & GitHub",
                    "RESTful APIs",
                    "Responsive Design",
                    "Next.js",
                    "Redux",
                    "canva",
                    "basic Python",
                    "basic C++",
                    "basic C",
                    "basic Java",
                  ].map((skill, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 text-center bg-white border border-gray-200 rounded-lg shadow-sm text-gray-700 font-medium hover:bg-amber-50 hover:border-amber-300 transition duration-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>

                <TabItem title="Education ">
                  <div className="mt-4 space-y-3">
                    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                      <h3 className="text-lg font-semibold text-gray-800">
                        Bachelor of Computer Applications (BCA)
                      </h3>
                      <p className="text-gray-600">JNVU University — Ongoing (4th Semester Completed)</p>
                      <p className="text-sm text-gray-500">Expected Graduation: 2026</p>
                    </div>
                  </div>
                </TabItem>

                <TabItem title="Certificates">
                  <div className="mt-4 space-y-3">
                    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                      <h3 className="text-lg font-semibold text-gray-800">
                        MERN Stack Web Development
                      </h3>
                      <p className="text-gray-600">WsCube Tech — Feb 2025 to Jun 2025</p>
                      <p className="text-sm text-gray-500">
                        Covered MongoDB, Express.js, React.js, and Node.js with hands-on project work.
                      </p>
                    </div>
                  </div>
                </TabItem>
              </TabItem>
              <TabItem id='contact' title="Contacts" className='cursor-pointer' icon={HiClipboardList}>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {/* Phone */}
                  <div className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
                    <span className="text-amber-500 text-2xl">📞</span>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500">Phone</h4>
                      <p className="text-gray-800 font-medium">+91 9216940489</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
                    <span className="text-amber-500 text-2xl">✉️</span>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500">Email</h4>
                      <p className="text-gray-800 font-medium">ummedprajapat0987@gmail.com</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
                    <span className="text-amber-500 text-2xl">📍</span>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500">Location</h4>
                      <p className="text-gray-800 font-medium">Jodhpur, Rajasthan, India</p>
                    </div>
                  </div>

                  {/* Website */}
                  <div className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
                    <span className="text-amber-500 text-2xl">🌐</span>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500">Portfolio</h4>
                      <a
                        href="https://ummed-portfolio.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-600 font-medium hover:underline"
                      >
                        https://ummed-portfolio.vercel.app/
                      </a>
                    </div>
                  </div>
                </div>
              </TabItem>
            </Tabs>
          </div>
        </section>

        {/* Projects Section */}
        <section id='projects' className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project Card Example */}
              <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
                <img
                  src="imgProjects/Ecomm-js.png"
                  alt="Project 1"
                  className="w-full h-48 object-cover py-2.5 px-3.5  rounded-[10px] border border-gray-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">Ecom-Web</h3>
                  <p className="text-gray-700 mt-2">
                    This web application Ecomerce  [A web app built with HTML ,CSS and JavaScript and Use Api]
                  </p>
                  <div className="text-center">
                    <Link
                      href="https://ecomm-in-js.vercel.app/"
                      className="py-1.5 px-3.5 inline-block rounded-xl text-center bg-amber-500 mt-4 text-blue-800 hover:text-blue-700"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
                <img
                  src="imgProjects/law-prep.png"
                  alt="Project 1"
                  className="w-full h-48 object-cover py-2.5 px-3.5  rounded-[10px] border border-gray-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">lawpreptutorial</h3>
                  <p className="text-gray-700 mt-2">
                    This web in Learning plateform  [A web app built with HTML ,CSS and bootstrap]
                  </p>
                  <div className="text-center">
                    <Link
                      href="https://law-prep-web.vercel.app/"
                      className="py-1.5 px-3.5 inline-block rounded-xl text-center bg-amber-500 mt-4 text-blue-800 hover:text-blue-700"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
                <img
                  src="imgProjects/React-projects.png"
                  alt="Project 1"
                  className="w-full h-48 object-cover py-2.5 px-3.5  rounded-[10px] border border-gray-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">Ecom-Web In React Tailwind css</h3>
                  <p className="text-gray-700 mt-2">
                    This web application in E-comerce products [A web app built with React and Tailwind CSS and Use Api]
                  </p>
                  <div className="text-center">
                    <Link
                      href="https://ecom-react-theta.vercel.app/"
                      className="py-1.5 px-3.5 inline-block rounded-xl text-center bg-amber-500 mt-4 text-blue-800 hover:text-blue-700"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>


              {/* Repeat for more projects */}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/projects"
                className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                See All Projects
              </Link>
            </div>
          </div>
        </section>


      </main >

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* About Section */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">Ummed Prajapat</h2>
            <p className="text-sm leading-relaxed">
              MERN Stack Web Developer passionate about building modern, scalable,
              and user-friendly web applications. I enjoy problem-solving and
              continuously learning new technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#skills" className="hover:text-amber-400 transition">Skills</a></li>
              <li><a href="#projects" className="hover:text-amber-400 transition">Projects</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>📞 +91 9216940489</li>
              <li>✉️ ummedprajapat0987@gmail.com</li>
              <li>📍 Jodhpur, Rajasthan, India</li>
            </ul>
            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="https://github.com/ummed850" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 text-xl">🐙</a>
              <a href="https://www.linkedin.com/in/ummed-prajapat-698a69299/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 text-xl">💼</a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 text-xl">🐦</a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Ummed Prajapat. All Rights Reserved.
        </div>
      </footer>

    </>


  );
}






























