const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-16 bg-white/70 backdrop-blur-md shadow-sm z-100">
      <div className="max-w-6xl mx-9 px-6 py-4 flex justify-ceneter items-center gap-15 text-2xl  hover: text-blue-400 font-bold py-3 absolute bottom-5 left-1/2 -translate-x-1/2">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills" >Skills</a>
        <a href="#projects">Projects</a>
      </div>
    </nav>
  );
};

export default Navbar;