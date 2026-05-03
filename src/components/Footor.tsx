import { FaGithub, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-blue-100 py-10 mt-32 flex flex-col items-center justify-center text-center">
      
      <div className="flex items-center justify-center gap-8 text-3xl text-blue-900 mb-1 h-40">
        
        <a
          href="https://github.com/Mayuri-Rajput-1107"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-black transition"
        >
          <FaGithub />
          <span className="text-base">GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/mayuri-rajput-325a04332"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-600 transition"
        >
          <FaLinkedin/>

          <span className="text-base">LinkedIn</span>
        </a>

      </div>
      <p className="text-gray-700 text-sm mt-0">
        © 2026 Mayuri Rajput. All rights reserved.
      </p>

    </footer>
  );
};

export default Footer;