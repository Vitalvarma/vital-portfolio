import { RevealOnScroll } from "../RevealOnScroll";

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
              Email: <a href="mailto:vital@example.com" className="text-blue-400 hover:underline">vitalvarma13@example.com</a>
            </p>
            <p className="text-white">
              Phone: <a href="tel:+919000138899" className="text-blue-400 hover:underline">+91 9000138899</a>
            </p>
            <p className="text-white">
              Location: Bhimavarma, Andhra Pradesh, India
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
