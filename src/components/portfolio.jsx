import AnalogClock from "./analogClock";
import Project from "./project";
import Projects from "./projects";

export default function Portfolio() {
  return (
    <div name="portfolio">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
        <h1 className="text-center text-5xl font-bold m-3">Projects</h1>
          <div className="project-box gap-6 flex">          
            {Projects.map((projectItem, indx) => {
              return <Project projectItem={projectItem} indx={indx}/>
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
