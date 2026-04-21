import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hotel from "../assets/mes_projets/hotel.png";
import login from "../assets/mes_projets/login.png";
import todo from "../assets/mes_projets/todo.png";
import eliza from "../assets/mes_projets/eliza.png";

export default function Projects() {
  const projects = [
    {
      name: "Site Hôtel",
      img: hotel,
      desc: "Mon premier site que j'ai fait !",
      link: "/assets/mes_projets/hotel/", // 🔗 dossier local
    },
    {
      name: "Page Login",
      img: login,
      desc: "Un projet pour m'entraîner au CSS.",
      link: "/assets/mes_projets/login/", // 🔗 dossier local
    },
    {
      name: "To‑Do List",
      img: todo,
      desc: "Mon premier site fait à Epitech en groupe et en React.",
      download: "/assets/mes_projets/to-do-list.zip",
    },
    {
      name: "Eliza",
      img: eliza,
      desc: "Chatbot réalisé en React + Python pour une entreprise.",
      download: "/assets/mes_projets/eliza.zip",
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

              {/* Bouton Voir le site */}
              {p.link && (
                <a
                  href={p.link}
                  className="site-btn"
                >
                  Voir le site
                </a>
              )}

              {/* Bouton Télécharger */}
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
