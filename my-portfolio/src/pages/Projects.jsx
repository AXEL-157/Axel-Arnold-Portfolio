import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hotel from "../assets/mes_projets/hotel.png";
import login from "../assets/mes_projets/login.png";
import todo from "../assets/mes_projets/todo.png";

export default function Projects() {
  const projects = [
    {
      name: "Site Hôtel",
      img: hotel,
      desc: "Mon preimier site que j'ai fais !",
    },
    {
      name: "Page Login",
      img: login,
      desc: "Un projet que je voilais fais pour m'entrener a fais du css ",
    },
    {
      name: "To‑Do List",
      img: todo,
      desc: "Mon primies site que j'ai fais a Epitech en groupe et en react ",
      download: "/assets/mes_projets/to-do-list.zip",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
  };

  return (
    <div className="page">
      <div className="content-box">
        <h1>Mes Projets</h1>

        <Slider {...settings} className="carousel">
          {projects.map((p) => (
            <div key={p.name} className="project-slide">
              <img src={p.img} alt={p.name} className="project-img" />
              <h2 className="project-title">{p.name}</h2>
              <p className="project-desc">{p.desc}</p>

              {p.download && (
                <a href={p.download} download className="download-btn">
                  Télécharger
                </a>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
