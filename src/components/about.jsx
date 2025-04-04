import style from "../styles/about.module.css";
import logo from "../assets/slimMomLogoText.svg";
import pic from "../assets/pic.jpg";
function About() {
    return (
      <div>
        <section id="about-section">
          <div className={style.about}>

            <div className={style.textContainer}>
              <div className={style.logo}>
                
                <img
                          src={logo}
                          alt="Slim Mom Logo"
                          width="400"
                          height="80"
                        />
              </div>
              <p className={style.text}>            
                Developing a digital journal that facilitates healthy eating and calorie tracking,  
                allowing users to log their daily eating habits and monitor consumed calories.
              </p>
              <p className={style.text}>
                Enabling users to determine their daily calorie needs and create personalized nutrition plans.
              </p>
              <p className={style.text}>
                Providing a mobile-friendly and user-friendly interface for easy use.
              </p>

            </div>
            <div className={style.imageContainer}>
              <img style={{borderRadius: "20px", width: "100%", height: "100%"}}
              width="406"
              height="304"
                src={pic}
                alt="About Us"
                className={style.image}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default About;
  