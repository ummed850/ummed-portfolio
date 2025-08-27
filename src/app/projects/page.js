import Link from "next/link";

export default function ProjectsPage() {
    const projects = [
        {
            title: "Monsta Furniture (MERN Stack)",
            description: (
                <>
                    A full-stack Furniture E-Commerce website built with MERN Stack. Features include product listing, add to cart, user authentication, and custom APIs.{" "}
                    <strong>(Currently work in progress with more features under development.)</strong>
                </>
            ),
            image: "/imgProjects/furniture-website.png", // apna screenshot yaha dalna hoga
            link: "https://wscubetech.co/Assignments/furniture/",
        },
        {
            title: "Ecom-Web (HTML, CSS, JS)",
            description:
                "A modern e-commerce application built with HTML, CSS, and JavaScript. Integrated APIs for product data.",
            image: "/imgProjects/Ecomm-js.png",
            link: "https://ecomm-in-js.vercel.app/",
        },
        {
            title: "Law Prep Tutorial",
            description:
                "An online learning platform built with HTML, CSS, and Bootstrap for law aspirants.",
            image: "/imgProjects/law-prep.png",
            link: "https://law-prep-web.vercel.app/",
        },
        {
            title: "Ecom Web (React + Tailwind)",
            description:
                "E-commerce products showcase built using React, Tailwind CSS, and REST API.",
            image: "/imgProjects/React-projects.png",
            link: "https://ecom-react-theta.vercel.app/",
        },
        {
            title: "One Page (Html + CSS)",
            description:
                "A simple one-page website built with HTML and CSS, showcasing a clean design.",
            image: "/imgProjects/one-Page.png",
            link: "https://html-ummed-one-page.vercel.app/",
        },
        {
            title: "Shadi.com (HTML + CSS,Tailwind CSS)",
            description: "A matrimonial website built with HTML, CSS, and Tailwind CSS, featuring a modern design.",
            image: "/imgProjects/shadi-website.png",
            link: "https://shadi-website-nu.vercel.app/",
        },
    ];

    return (
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 min-h-screen">
            <div className="container mx-auto px-6">
                {/* Heading */}
                <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-14">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-amber-500">
                        All Projects
                    </span>
                </h1>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-200"
                        >
                            {/* Image */}
                            <div className="overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500 py-4 px-6 border border-gray-200"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    {project.description}
                                </p>

                                {/* Button */}
                                <Link
                                    href={project.link}
                                    target="_blank"
                                    className="inline-block w-full text-center py-2.5 px-5 rounded-xl font-medium text-white bg-gradient-to-r from-amber-500 to-blue-600 hover:from-blue-600 hover:to-amber-500 transition duration-300"
                                >
                                    View Project
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Back to Home */}
                <div className="text-center mt-16">
                    <Link
                        href="/"
                        className="inline-block bg-gradient-to-r from-blue-600 to-amber-500 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
                    >
                        ⬅ Back to Home
                    </Link>
                </div>
            </div>
        </section>
    );
}
