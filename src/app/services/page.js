"use client";
import Link from "next/link";
import { FaCode, FaMobileAlt, FaDatabase, FaLaptopCode, FaArrowLeft } from "react-icons/fa";

export default function page() {
    return (
        <section id="services" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
            <div className="container mx-auto px-6 lg:px-20">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">
                        Services <span className="text-amber-500">& What I Do</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        I help businesses and individuals by delivering high-quality, scalable, and visually engaging digital solutions.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

                    {/* Service 1 */}
                    <div className="group bg-gray-800 hover:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300">
                        <div className="flex items-center justify-center mb-6">
                            <FaCode className="w-10 h-10 text-amber-500" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-amber-400 transition">
                            MERN Stack Development
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Build modern, scalable and dynamic web applications using MongoDB, Express, React & Node.js.
                        </p>
                    </div>

                    {/* Service 2 */}
                    <div className="group bg-gray-800 hover:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300">
                        <div className="flex items-center justify-center mb-6">
                            <FaMobileAlt className="w-10 h-10 text-amber-500" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-amber-400 transition">
                            Responsive Web Design
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Crafting pixel-perfect, mobile-friendly websites with Tailwind CSS and Next.js.
                        </p>
                    </div>

                    {/* Service 3 */}
                    <div className="group bg-gray-800 hover:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300">
                        <div className="flex items-center justify-center mb-6">
                            <FaDatabase className="w-10 h-10 text-amber-500" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-amber-400 transition">
                            API Development
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Designing and integrating secure RESTful APIs with backend systems and third-party services.
                        </p>
                    </div>

                    {/* Service 4 */}
                    <div className="group bg-gray-800 hover:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300">
                        <div className="flex items-center justify-center mb-6">
                            <FaLaptopCode className="w-10 h-10 text-amber-500" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-amber-400 transition">
                            Database Management
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Expertise in MongoDB & MySQL for optimized, secure and structured data management.
                        </p>
                    </div>

                </div>
                <div className="text-center mt-16">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-900 font-semibold px-6 py-3 rounded-full transition duration-300 shadow-lg"
                    >
                        <FaArrowLeft />
                        Back to Home
                    </Link>
                </div>
            </div>
        </section>
    );
}
