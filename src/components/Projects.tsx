

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const projects: Project[] = [
  {
    title: "TaskMate",
    description:
      "A web platform designed to help college students find suitable accommodation near their campuses.",
    image: "/taskmate.jpeg",
    link: "https://taskmate-c2od.onrender.com",
  },
];

const Projects = () => {
  return (
   <section id="projects" className="py-20 pb-32 bg-blue-100">
      
      {/* Heading */}
      <h2 className="mt-50 mb-80 text-6xl md:text-7xl font-medium text-blue-900 font-[Vladimir_Script] leading-50 text-center tracking-wider">
        My Projects
      </h2>

      <div className="w-full flex justify-center">

        <div className="grid gap-10 place-items-center">
          
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 w-[350px] h-[350px]"
            >
              
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-blue-700 mb-2 leading-15">
                  {project.title}
                </h3>

                <p className=" justify-center items-center tracking-wider px-3 text-black text-md font-[Times_Now_Roman]">
                  {project.description}
                </p>
              </div>

            </a>
          ))}

        </div>
      </div>

    </section>
  );
};

export default Projects;