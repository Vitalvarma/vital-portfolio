
import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "TailwindCSS",
    "Zustand",
    "Next.js",
  ];

  const backendSkills = [
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "AWS"
  ];

  const languages = ["Java", "Python", "JavaScript", "TypeScript"];
  
  const tools = ["Git", "Docker", "AWS"];

  const coreSkills = [
    "Data Structures & Algorithms",
    "OOPS",
    "DBMS",
    "Operating Systems",
    "Computer Networks"
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {languages.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Tools & Core CS</h3>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                  {coreSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 
                                    hover:shadow-[0_2px_8px_rgba(168,85,247,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.Tech. in Computer Science</strong> - Vishnu Institute of Technology
                  <br />
                  <span className="text-gray-400">CGPA: 9.04 / 10.0 (2023-Present)</span>
                </li>
                <li>
                  <strong>Intermediate</strong> - Tirumala Junior College
                  <br />
                  <span className="text-gray-400">98%</span>
                </li>
                <li>
                  <strong>SSC</strong> - Viswakavi School
                  <br />
                  <span className="text-gray-400">98%</span>
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    LearnSquare Technologies - SDE Intern (MERN Stack)
                  </h4>
                  <span className="text-gray-400 text-sm">May 2025 - Jun 2025</span>
                  <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1 text-sm">
                    <li>Engineered QuickDelivery, a full-stack delivery management platform under structured weekly mentorship.</li>
                    <li>Designed scalable RESTful APIs and implemented secure JWT-based authentication with role-based authorization.</li>
                    <li>Architected MongoDB schema for optimized order, user, and transaction management.</li>
                    <li>Integrated payment workflows with validation logic and presented architectural decisions in weekly technical reviews.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> 🏆 Achievements </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Solved 300+ Data Structures & Algorithms problems across LeetCode and GeeksforGeeks.</li>
            </ul>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

