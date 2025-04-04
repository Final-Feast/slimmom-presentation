import style from "../styles/description.module.css";
import pic from "../assets/pic2.jpg";
function Description() {
    return (
      <div>
        <section id="Description-section" >
          <div className={style.description}>

            <div className={style.descriptioncont}>
              <div className={style.descriptionimg}>
                <img style={{borderRadius: "20px", width: "100%", height: "100%"}}
                              width="406"
                              height="304"
                                src={pic}
                                alt="About Us"
                                className={style.image}
                              />
              </div>
              <div className={style.descriptiontext}>
                <h1>Description</h1>
              <p>
                This project is a full-stack web application that allows users to manage their tasks efficiently. It features a user-friendly interface and robust backend functionality.
              </p>
              <p>
                The application is built using React for the frontend and Node.js for the backend, ensuring a seamless user experience and efficient data handling.
              </p>
              <p>
                For more detailed information
                <button className={style.navButton} onClick={() => document.getElementById("Tools-section").scrollIntoView({ behavior: "smooth" })}>
                          click 
                      </button>
                here.
              </p>
            </div>
            </div>
            
            <div className={style.textcont}>
              <a className={style.text} href="https://github.com/Final-Feast/node" target="_blank" rel="noopener noreferrer">BackEnd API</a>
              <a className={style.text} href="https://github.com/orgs/Final-Feast/repositories" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a className={style.text} href="https://github.com/Final-Feast/React-dev" target="_blank" rel="noopener noreferrer">FrontEnd</a>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Description;