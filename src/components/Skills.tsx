

type Skill = {
  name: string;
  level: string;
  description: string;
  icon: string;
};

const skills: Skill[] = [
  {
    name: "C",
    level: "Intermediate",
    description: "Strong foundation in C programming and problem solving.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  {
    name: "Java",
    level: "Intermediate",
    description: "Experienced in Java, OOP concepts, and data structures.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "HTML",
    level: "Intermediate",
    description: "Building structured and semantic web pages.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    level: "Intermediate",
    description: "Designing responsive and modern UI using CSS.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "React",
    level: "Basics",
    description: "Creating dynamic user interfaces using React.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "VS Code",
    level: "Basics",
    description: "Efficient coding using Visual Studio Code editor.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-blue-100">
      
 
      <h2 className="mt-50 mb-80 text-6xl md:text-7xl font-medium text-blue-900 font-[Vladimir_Script] leading-80 text-center tracking-wider">
        Skills
      </h2>

<div className="w-full flex justify-center">
  <div className="grid grid-cols-2 md:grid-cols-3 gap-y-20 gap-x-20">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center group cursor-pointer w-60"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-20 h-16 mb-4 transition duration-300 group-hover:scale-110"
            />

            <h3 className="text-xl text-blue-950 font-bold mb-2 leading-10">
              {skill.name}
            </h3>

            <h3 className="text-lg font-semibold mb-2">
              {skill.level}
            </h3>

            <p className="text-black text-md font-[Times_Now_Roman]">
              {skill.description}
            </p>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;