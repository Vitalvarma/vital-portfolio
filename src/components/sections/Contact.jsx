import { RevealOnScroll } from "../RevealOnScroll";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiCodingninjas, SiGeeksforgeeks } from "react-icons/si";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Get In Touch
          </h2>
          <div className="text-center space-y-4">
            <p className="text-white">
              Email: <a href="mailto:vital@example.com" className="text-blue-400 hover:underline">vitalvarma13@gmail.com</a>
            </p>
            <p className="text-white">
              Location: Bhimavarma, Andhra Pradesh, India
            </p>
            <div className="flex justify-center space-x-6 mt-6 text-blue-400">
              <a href="https://www.linkedin.com/in/vital-varma-a1b9002b4" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-600 transition">
                <FaLinkedin size={30} />
              </a>
              <a href="https://leetcode.com/u/vital_varma/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode" className="hover:text-yellow-500 transition">
                <SiLeetcode size={30} />
              </a>
              <a href="https://www.naukri.com/code360/profile/a8e25187-b8fd-4b16-8bb8-d6b0ec7d1ebd" target="_blank" rel="noopener noreferrer" aria-label="Coding Ninjas" className="hover:text-red-600 transition">
                <SiCodingninjas size={30} />
              </a>
              <a href="https://www.geeksforgeeks.org/user/vitalvao1p2/" target="_blank" rel="noopener noreferrer" aria-label="Geeks for Geeks" className="hover:text-green-600 transition">
                <SiGeeksforgeeks size={30} />
              </a>
              <a href="https://github.com/Vitalvarma" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-gray-300 transition">
                <FaGithub size={30} />
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
