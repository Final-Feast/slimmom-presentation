import style from "../styles/Team.module.css";
import pinar from "../assets/team/pınar.jpg";
import mustafa from "../assets/team/mustafa.jpg"
import pinar2 from "../assets/team/pınar2.png"
import gülay from "../assets/team/gülay.jpg"
import mehmet from "../assets/team/mehmet.jpg"
import eren from "../assets/team/eren.jpg"
// import bahattin from "../assets/team/bahattin.jpg"
function Team() {


    return (
        <section id="Team-section" className={style.teamSection}>
          <h2>Team</h2>
          <div className={style.teamContainer}>
            <div className={style.team}>
            <div className={style.teamMember}>
            <img src={pinar} alt="" width="300px" height="350px"/>
              <p className={style.name}><strong>Pınar ÜNLÜ</strong></p>
              <p className={style.role}>Frontend</p>
            </div>
          </div>
          <div className={style.team}>
            <div className={style.teamMember}>
            <img src={mustafa} alt="" width="300px" height="350px"/>
              <p className={style.name}> <strong>Mustafa TUTUŞ</strong></p>
              <p className={style.role}>Frontend and Backend</p>
            </div>
          </div>
          <div className={style.team}>
            <div className={style.teamMember}>
            <img src={pinar2} alt="" width="300px" height="350px"/>
              <p className={style.name}><strong>Pınar ALTAY</strong></p>
              <p className={style.role}>Backend</p>
            </div>
          </div>
          <div className={style.team}>
            <div className={style.teamMember}>
            <img src={gülay} alt="" width="300px" height="350px"/>
              <p className={style.name}><strong>Gülay YILMAZ</strong>
              </p>
              <p className={style.role}>Backend</p>
            </div>
          </div>
          <div className={style.team}>
            <div className={style.teamMember}>
            <img src={mehmet} alt="" width="300px" height="350px"/>
              <p className={style.name}><strong>Mehmet YILMAZ</strong></p>
              <p className={style.role}>Backend and Frontend</p>
            </div>
          </div>
          <div className={style.team}>
            <div className={style.teamMember}>
            <img src="" alt="" width="300px" height="350px"/>
              <p className={style.name}><strong>Bahattin YILMAZ</strong></p>
              <p className={style.role}>Backend</p>
            </div>
          </div>
          <div className={style.team}>
            <div className={style.teamMember}>
            <img src={eren} alt="" width="300px" height="350px"/>
              <p className={style.name}>Eren AYDOĞAN</p>
              <p className={style.role}>Backend</p>
            </div>
          </div>
          <div className={style.team}>
            <div className={style.teamMember}>
            <img src="" alt="" width="300px" height="350px"/>
              <p className={style.name}>Deniz Sofia ULUTAŞ</p>
              <p className={style.role}>Frontend</p>
            </div>
          </div>
          <div className={style.team}>
            <div className={style.teamMember}>
            <img src="" alt=""width="300px" height="350px"/>
              <p className={style.name}>name</p>
              <p className={style.role}>role</p>
            </div>
          </div>
          </div>
        </section>
    );
  }
  
  export default Team;