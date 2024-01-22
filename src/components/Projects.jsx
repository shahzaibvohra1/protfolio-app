import ElevateUX from "../assets/ElevateUX.jpg";
import ElementalArtistry from "../assets/ElementalArtistry.jpg";
import TaskMasterPro from "../assets/TaskMasterPro.jpg";
import GreenEarthEcoFestival from "../assets/GreenEarthEcoFestival.jpg";
import TalesofWanderlust from "../assets/TalesofWanderlust.jpg";
import UrbanPerspectives from "../assets/UrbanPerspectives.jpg";
import Logo from "../assets/Logo.jpg";
function Projects() {
  const Projects = [
    {
      ProjectHeading: "Interactive Website Redesign",
      ProjectTitle: "Project Title: ElevateUX",
      ProjectImage: ElevateUX,
      ProjectDescription:
        "Revamped an outdated website with a focus on user experience and modern design principles. The ElevateUX project involved a complete overhaul of the user interface, incorporating responsive design elements and enhancing overall accessibility. The result is a sleek, user-friendly website that engages visitors and provides an immersive digital experience.",
    },
    {
      ProjectHeading: " Mobile App Development",
      ProjectTitle: "Project Title: TaskMaster Pro",
      ProjectImage: TaskMasterPro,
      ProjectDescription:
        "Developed a productivity-oriented mobile app, TaskMaster Pro, designed to streamline task management for busy professionals. The app features a user-friendly interface, real-time collaboration, and smart notifications. TaskMaster Pro has proven to be a valuable tool for boosting productivity and staying organized in today's fast-paced work environment.",
    },
    {
      ProjectHeading: "Graphic Design Showcase",
      ProjectTitle: "Project Title: Elemental Artistry",
      ProjectImage: ElementalArtistry,
      ProjectDescription:
        "Curated a collection of visually striking graphics for the Elemental Artistry project. This series explores the seamless integration of color theory, typography, and innovative design techniques. Each piece is a testament to the power of visual storytelling, demonstrating a commitment to creativity and pushing the boundaries of traditional graphic design.",
    },
    {
      ProjectHeading: "Marketing Campaign",
      ProjectTitle: "Project Title: GreenEarth Eco-Festival",
      ProjectImage: GreenEarthEcoFestival,
      ProjectDescription:
        "Led the marketing campaign for the GreenEarth Eco-Festival, promoting sustainability and environmental awareness. Implemented a multi-channel strategy including social media, email campaigns, and community partnerships. The campaign successfully attracted a diverse audience, contributing to the festival's growth and impact in promoting a greener lifestyle.",
    },
    {
      ProjectHeading: "Writing Portfolio",
      ProjectTitle: "Project Title: Tales of Wanderlust",
      ProjectImage: TalesofWanderlust,
      ProjectDescription:
        "Embarked on a literary journey with Tales of Wanderlust, a writing portfolio that showcases a diverse range of creative works. From captivating short stories to thought-provoking essays, this collection reflects a passion for storytelling and a dedication to crafting narratives that resonate with readers on a deep and emotional level.",
    },
    {
      ProjectHeading: "Photography Exhibition:",
      ProjectTitle: "Project Title: Urban Perspectives",
      ProjectImage: UrbanPerspectives,
      ProjectDescription:
        "Captured the essence of city life through the lens of Urban Perspectives, a photography exhibition exploring the beauty found in the hustle and bustle of urban landscapes. From breathtaking skyline shots to intimate street scenes, this project highlights a keen eye for composition and a commitment to capturing the extraordinary in the ordinary.",
    },
  ];
  return (
    <>
      {Projects.map((project, index) => (
        <div key={index}>
          <div>
            <img src={project.ProjectImage} height={200} width={200} />
          </div>
          <div>
            <h1>{project.ProjectHeading}</h1>
            <h2>{project.ProjectTitle} </h2>
            <p>{project.ProjectDescription}</p>
            <br />
          </div>
        </div>
      ))}
    </>
  );
}

export default Projects;
