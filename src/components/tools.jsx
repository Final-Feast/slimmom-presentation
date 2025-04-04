import { BiCodeAlt, BiServer, BiWrench } from "react-icons/bi";
import { AiOutlineApi, AiFillGithub } from "react-icons/ai";
import { TbBrandRedux, TbBrandReact, TbBrandMongodb } from "react-icons/tb";
import { RiNodejsFill } from "react-icons/ri";
import { FiDatabase } from "react-icons/fi";
import style from "../styles/tools.module.css";
import { useState } from "react"; // add at the top

function Tools() {
  const [activeSlide, setActiveSlide] = useState("slider1");

  // Function to handle the click event and scroll to the respective section
  const handleScroll = (event, id) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "nearest" });
      setActiveSlide(id); // update the active one
    }
  };

  return (
    <section id="Tools-section" className={style.container}>
      <h2 className={style.toolsTitle}>Tools</h2>
      <div className={style.sliderWrapper}>
        <div className={style.slider}>
          <div className={style.slideralt} id="slider1">
            <h3 className={style.categoryTitle}><BiCodeAlt className={style.categoryIcon} /> Frontend</h3>
            <ul className={style.toolsList}>
              <li className={style.toolItem}><TbBrandReact className={style.toolIcon} /> React</li>
              <li className={style.toolItem}><TbBrandRedux className={style.toolIcon} /> Redux (State Management)</li>
              <li className={style.toolItem}><AiOutlineApi className={style.toolIcon} /> Axios (For API requests)</li>
              <li className={style.toolItem}><BiWrench className={style.toolIcon} /> Styled Components / CSS Modules</li>
            </ul>
          </div>
          <div className={style.slideralt} id="slider2">
            <h3 className={style.categoryTitle}><BiServer className={style.categoryIcon} /> Backend</h3>
            <ul className={style.toolsList}>
              <li className={style.toolItem}><RiNodejsFill className={style.toolIcon} /> Node.js</li>
              <li className={style.toolItem}><BiServer className={style.toolIcon} /> Express.js</li>
              <li className={style.toolItem}><TbBrandMongodb className={style.toolIcon} /> MongoDB (Database)</li>
              <li className={style.toolItem}><FiDatabase className={style.toolIcon} /> JWT (Authentication)</li>
            </ul>
          </div>
          <div className={style.slideralt} id="slider3">
            <h3 className={style.categoryTitle}><BiWrench className={style.categoryIcon} /> Other Tools</h3>
            <ul className={style.toolsList}>
              <li className={style.toolItem}><BiWrench className={style.toolIcon} /> Trello (Project Management)</li>
              <li className={style.toolItem}><AiFillGithub className={style.toolIcon} /> GitHub (Code Hosting & Collaboration)</li>
              <li className={style.toolItem}><BiServer className={style.toolIcon} /> Render (Backend Deployment)</li>
            </ul>
          </div>
        </div>
        <div className={style.sliderNav}>
          <a
            href="#slider1"
            onClick={(e) => handleScroll(e, "slider1")}
            className={activeSlide === "slider1" ? style.active : ""}
          ></a>
          <a
            href="#slider2"
            onClick={(e) => handleScroll(e, "slider2")}
            className={activeSlide === "slider2" ? style.active : ""}
          ></a>
          <a
            href="#slider3"
            onClick={(e) => handleScroll(e, "slider3")}
            className={activeSlide === "slider3" ? style.active : ""}
          ></a>
        </div>
      </div>
    </section>
  );
}

export default Tools;
