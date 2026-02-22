import htmlLogo from '../assets/skill/html.png';
import cssLogo from '../assets/skill/css.png';
import pyLogo from '../assets/skill/python.png';
import reactLogo from '../assets/skill/react.png';


export default function Skills() {
  const skills = [
    { name: "HTML", img: htmlLogo },
    { name: "CSS", img: cssLogo },
    { name: "python", img: pyLogo },
    { name: "React", img: reactLogo },
  ];

  return (
    <div className="page">
      <div className="content-box">
        <h1>Compétences</h1>
        <p>Les compétences acquises et en cours d'apprentissage </p>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-icon-wrapper">
                <img src={skill.img} alt={skill.name} className="skill-icon" />
              </div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
