import {
  FaEnvelope, FaPhone, FaFacebook, FaInstagram, FaGraduationCap,
  FaTools, FaMapMarkerAlt
} from "react-icons/fa";

import {
  FaReact, FaBootstrap, FaJsSquare, FaHtml5, FaCss3Alt,
  FaGitAlt, FaGithub, FaCuttlefish
} from "react-icons/fa";

import { SiTailwindcss, SiVite } from "react-icons/si";

export default function App() {
  const portfolioItems = [
    {
      id: 1,
      title: "CPU Scheduling Simulator",
      description:
        "Interactive tool showcasing CPU scheduling algorithms such as FCFS, SJF, and Priority with Gantt chart visualization.",
      link: "https://cpu-scheduling-algorithms.netlify.app/",
      image: "/CPU Scheduling Simulators.PNG",
    },
    {
      id: 2,
      title: "E-commerce Shop",
      description:
        "Simple online shopping platform with add-to-cart, dynamic products and checkout.",
      link: "https://projectday.vercel.app/",
      image: "/E-commerce.png",
    },
  ];

  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "C#", icon: <FaCuttlefish className="text-blue-700" /> },
    { name: "React", icon: <FaReact className="text-blue-500" /> },
    { name: "Vite", icon: <SiVite className="text-purple-400" /> },
    { name: "GitHub", icon: <FaGithub className="text-black" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  ];

  return (
    <div className="bg-[#f4ecd8] min-h-screen w-full py-6 px-4 sm:px-6 lg:px-10 font-mono text-gray-900">

      {/* MAIN CARD FULL WIDTH, RESPONSIVE */}
      <div className="bg-[#fff8e8] w-full max-w-7xl mx-auto shadow-[6px_6px_0px_#000] px-6 sm:px-10 py-10 border-4 border-black">

        {/* HEADER – MOBILE FRIENDLY */}
        <header className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b-4 border-black pb-6">
          <img
            src="bj.jpg"
            className="w-32 h-32 rounded-md object-cover border-4 border-black shadow-[4px_4px_0px_#000]"
          />

          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-widest uppercase">
              Bern Justin Tajanlangit
            </h1>
            <p className="text-gray-700 text-sm">BSIT Student</p>

            <p className="flex justify-center sm:justify-start items-center gap-2 text-sm mt-1">
              <FaMapMarkerAlt className="text-red-600" /> Calan Poblacion Cordova
            </p>
          </div>
        </header>

        {/* CONTACT */}
        <section className="mt-6">
          <h2 className="text-xl font-bold uppercase border-l-8 border-black pl-3 mb-3 bg-yellow-300 inline-block shadow-[3px_3px_0_#000] px-2">
            Contact Information
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm break-all">

        {[
          { icon: <FaEnvelope />, text: "bernjustin08@gmail.com" },
          { icon: <FaPhone />, text: "+63 907 077 2276" },
          { 
            icon: <FaFacebook />, 
            text: "facebook.com/beejing08",
            link: "https://facebook.com/beejing08"
          },
          { 
            icon: <FaInstagram />, 
            text: "instagram.com/bernjustin8",
            link: "https://instagram.com/bernjustin8"
          }
        ].map((item, i) => (
          <p key={i} className="flex items-center gap-2">
            {item.icon}
            {item.link ? (
              <a 
                href={item.link} 
                target="_blank" 
                className="underline break-all"
              >
                {item.text}
              </a>
            ) : (
              <span className="break-all">{item.text}</span>
            )}
          </p>
        ))}

         </div>

        </section>

        {/* PROFILE SUMMARY */}
        <section className="mt-8">
          <h2 className="text-xl font-bold uppercase border-l-8 border-black pl-3 mb-3 bg-green-300 inline-block shadow-[3px_3px_0_#000] px-2">
            Profile Summary
          </h2>
          <p className="text-gray-900 leading-relaxed text-sm">
            Passionate BSIT student with hands-on experience in basic web development
            (HTML, CSS, JavaScript). Loves solving technical problems and building
            beginner-level web apps. Currently exploring full-stack development and IT support.
          </p>
        </section>

        {/* EDUCATION */}
        <section className="mt-8">
          <h2 className="text-xl font-bold uppercase border-l-8 border-black pl-3 mb-3 bg-purple-300 inline-block shadow-[3px_3px_0_#000] px-2">
            Education
          </h2>
          <ul className="space-y-3 text-sm">
            <li><strong>2023 — Present</strong> — Cordova Public College</li>
            <li><strong>2022 — 2023</strong> — Cordova National High School (SHS)</li>
            <li><strong>2018 — 2020</strong> — Cordova National High School (JHS)</li>
            <li><strong>2011 — 2017</strong> — Cordova Central Elementary School</li>
          </ul>
        </section>

         {/* EDUCATION */}
        <section className="mt-8">
          <h2 className="text-xl font-bold uppercase border-l-8 border-black pl-3 mb-3 bg-purple-300 inline-block shadow-[3px_3px_0_#000] px-2">
            WORK EXPERIENCE
          </h2>
          <ul className="space-y-3 text-sm">
            <li><strong>ABYROAD RESTOBAR</strong> | 2025 — Present</li>
            <li><strong>RAZZ REL CATERING SERVICES</strong> | 2024 — 2025  </li>          
          </ul>
        </section>

        {/* SKILLS */}
        <section className="mt-8">
          <h2 className="text-xl font-bold uppercase border-l-8 border-black pl-3 mb-3 bg-yellow-300 inline-block shadow-[3px_3px_0_#000] px-2">
            Skills
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-sm">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-2 bg-[#f7e7c5] px-3 py-2 rounded border-2 border-black shadow-[3px_3px_0_#000]"
              >
                {skill.icon} {skill.name}
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="mt-8 mb-4">
          <h2 className="text-xl font-bold uppercase border-l-8 border-black pl-3 mb-3 bg-red-300 inline-block shadow-[3px_3px_0_#000] px-2">
            Projects
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="border-4 border-black rounded-lg overflow-hidden shadow-[6px_6px_0_#000] bg-[#fff3d7]"
              >
                <img
                  src={item.image}
                  className="w-full h-40 object-cover border-b-4 border-black"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg uppercase">{item.title}</h3>
                  <p className="text-sm text-gray-900 mt-1">{item.description}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    className="inline-block mt-3 text-blue-900 underline text-sm font-bold"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
