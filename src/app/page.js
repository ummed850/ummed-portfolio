"use client";
import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

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
            <Link
              href="/about"
              className="hover:text-blue-400 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/projects"
              className="hover:text-blue-400 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/contact"
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
          <div className=" border border-black py-14 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I am [Ummed]</h1>
            <p className="text-xl md:text-2xl mb-6">I am a Mern Stack Web Developer with a passion for building scalable and efficient web applications.</p>
            <Link
              href="/projects"
              className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-blue-100 transition duration-300"
            >
              View My Work
            </Link>
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
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">About Me</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              I am a [   ummed ] with experience in building modern web applications using technologies like React, Next.js, and Tailwind CSS. I love creating user-friendly and visually appealing websites. [Add more about your background or passion.]
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="bg-white py-16">
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

        {/* Contact Section */}
        <section className="py-16 bg-gray-200">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Get in Touch</h2>
            <form className="max-w-lg mx-auto space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows="5"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main >

      {/* Footer */}
      < footer className="bg-gray-900 text-white py-6" >
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} [Ummed Prajapat] All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="https://www.linkedin.com/in/ummed-prajapat-698a69299/" className="hover:text-blue-400">LinkedIn</a>
            <a href="https://github.com" className="hover:text-blue-400">GitHub</a>
            <a href="mailto:your.email@example.com" className="hover:text-blue-400">Email</a>
          </div>
        </div>
      </footer >

    </>


  );
}





























// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { Menu, X } from "lucide-react";

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 bg-white shadow-md">
//       <div className="container mx-auto px-4 flex items-center justify-between py-3">
//         {/* Logo */}
// <Link href="/" className="flex items-center space-x-2">
//   <img
//     src="/images/Consulting Firm Logo - Ummed Prajapat (2).svg"
//     alt="Ummed Prajapat Logo"
//     className="h-10 w-auto"
//   />
//   <span className="font-bold text-lg text-gray-800">Ummed Prajapat</span>
// </Link>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex space-x-8">
//           <Link href="#about" className="text-gray-600 hover:text-black font-medium">About</Link>
//           <Link href="#projects" className="text-gray-600 hover:text-black font-medium">Projects</Link>
//           <Link href="#contact" className="text-gray-600 hover:text-black font-medium">Contact</Link>
//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden focus:outline-none"
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//         >
//           {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-4">
//           <Link href="#about" className="block text-gray-700 font-medium" onClick={() => setMobileMenuOpen(false)}>About</Link>
//           <Link href="#projects" className="block text-gray-700 font-medium" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
//           <Link href="#contact" className="block text-gray-700 font-medium" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
//         </div>
//       )}
//     </header>
//   );
// }
