const Hero = () => {
  return (
    <section  id="home" className="relative h-screen flex items-center justify-center bg-blue-100 overflow-hidden">
      
      {/* Background Shape */}
      <div className="absolute right-0 top-0 w-[900px] h-[900px] bg-gradient-to-br from-pink-200 to-blue-200 rounded-[50%] translate-x-1/3 -translate-y-1/4"></div>

      {/* Optional Clouds */}
      <div className="absolute top-20 right-40 w-20 h-10 bg-white/40 rounded-full blur-sm"></div>
      <div className="absolute bottom-32 left-40 w-24 h-12 bg-white/30 rounded-full blur-sm"></div>

      {/* Content */}
      <div className="relative text-center">
        <h1 className=" mb-30 text-6xl md:text-8xl font-medium text-blue-900 font-[Vladimir_Script]">
          I’m Mayuri Rajput
        </h1>
        
      </div>
    </section>
  );
};

export default Hero;