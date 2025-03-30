import style from "../styles/about.module.css";
import logo from "../assets/slimMomLogoText.svg";

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
                          width="200"
                          height="80"
                        />
              </div>
              <p  className={style.text}>            
                Kullanıcıların sağlıklı beslenme ve kalori takibi yapmasını kolaylaştıran,
                günlük yeme alışkanlıklarını kaydetmelerine ve tüketilen kaloriyi takip
                etmelerine imkan tanıyan bir dijital günlük geliştirmek
              </p>
              <p  className={style.text}>
                Kullanıcının günlük kalori ihtiyacını belirleyerek kişiye özel beslenme
                planı oluşturmasını sağlamak
              </p>
              <p  className={style.text}>
                Mobil ve kullanıcı dostu bir arayüz sunarak kolay kullanım sağlamak
              </p>
            </div>
            <div className={style.imageContainer}>
              <img
              width="406"
              height="304"
                src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
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
  