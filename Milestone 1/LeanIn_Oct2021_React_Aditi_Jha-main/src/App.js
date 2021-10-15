import "./styles.css";
import man from "./man.jpeg";
import { FaCheck } from "react-icons/fa";
import { FaClock } from "react-icons/fa";

console.log(man);
export default function App() {
  const skills = [
    "HTML",
    "CSS",
    "JS",
    "MONGO",
    "Heruko",
    "Flask",
    "Github",
    "Git",
    "PHP",
    "SQL",
    "Figma",
    "Flutter"
  ];
  return (
    <div className="App">
      <img src={man} alt="man" className="image" />
      <h1>
        Siddhart Malhotra <FaCheck className="icon" />
      </h1>

      <h2 className="joined">Senior Developer</h2>
      <h3>Skills</h3>
      {skills.map((sk) => (
        <div className="skilled">{sk}</div>
      ))}

      <h4 className="joined">
        {" "}
        <FaClock />
        joined 30 Aug 2021
      </h4>
    </div>
  );
}
