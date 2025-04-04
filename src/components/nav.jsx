import logo from "../assets/slimMomLogoMobile.svg";
import style from "../styles/nav.module.css";


function Nav() {


  return (
    <div className={style.nav}>
      <div className={style.logo}>
      <img
          src={logo}
          alt="Slim Mom Logo"
          width="46"
          height="44"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      </div>

      <div className={style.navButtons}>
      <button className={style.navButton} onClick={() => document.getElementById("about-section").scrollIntoView({ behavior: "smooth" })}>
          About
      </button>
      <button className={style.navButton} onClick={() => document.getElementById("Description-section").scrollIntoView({ behavior: "smooth" })}>
          Description
      </button>
      <button className={style.navButton} onClick={() => document.getElementById("Tools-section").scrollIntoView({ behavior: "smooth" })}>
          Tools
      </button>
      <button className={style.navButton} onClick={() => document.getElementById("Features-section").scrollIntoView({ behavior: "smooth" })}>
          Features
      </button>
      <button className={style.navButton} onClick={() => document.getElementById("Architecture-section").scrollIntoView({ behavior: "smooth" })}>
          Architecture
      </button>
      <button className={style.navButton} onClick={() => document.getElementById("Development-section").scrollIntoView({ behavior: "smooth" })}>
          Development
      </button>
      
      <button className={style.navButton} onClick={() => document.getElementById("Team-section").scrollIntoView({ behavior: "smooth" })}>
          Team
      </button>
      </div>

      
    </div>
  );
}

export default Nav;
