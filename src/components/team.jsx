import style from "../styles/Team.module.css";
import pinar from "../assets/team/pınar.jpg";
import mustafa from "../assets/team/mustafa.jpg";
import pinar2 from "../assets/team/pınar2.png";
import gülay from "../assets/team/gülay.jpg";
import mehmet from "../assets/team/mehmet.jpg";
import eren from "../assets/team/eren.jpg";
import bahattin from "../assets/team/bahattin.jpg"
import deniz from "../assets/team/deniz.jpg";

function Team() {
  return (
    <section id="Team-section" className={style.teamSection}>
      <h2>Team</h2>
      <div className={style.teamContainer}>

        {/* 1. Mehmet */}
        <div className={style.team}>
          <div className={style.teamMember}>
            <img src={mehmet} alt="" width="300px" height="350px" />
            <p className={style.name}><strong>Mehmet YILMAZ</strong>
            <br />
            Team Lead and Scrum Master
            </p>
            <p className={style.role}>Fullstack</p>
          </div>
        </div>

        {/* 2. Mustafa */}
        <div className={style.team}>
          <div className={style.teamMember}>
            <img src={mustafa} alt="" width="300px" height="350px" />
            <p className={style.name}><strong>Mustafa TUTUŞ</strong>
            <br />
            Team Lead and Scrum Master
            </p>
            <p className={style.role}>Fullstack</p>
          </div>
        </div>

        {/* 3. Deniz */}
        <div className={style.team}>
          <div className={style.teamMember}>
            <img src={deniz} alt="" width="400px" height="450px" />
            <p className={style.name}><strong>Deniz Sofia ULUTAŞ</strong></p>
            <p className={style.role}>Frontend</p>
          </div>
        </div>

        {/* 4. Bahattin */}
        <div className={style.team}>
          <div className={style.teamMember}>
            <img src={bahattin} alt="" width="300px" height="350px" />
            <p className={style.name}><strong>Bahattin YILMAZ</strong></p>
            <p className={style.role}>Backend</p>
          </div>
        </div>

        {/* 5. Pınar Ünlü */}
        <div className={style.team}>
          <div className={style.teamMember}>
            <img src={pinar} alt="" width="300px" height="350px" />
            <p className={style.name}><strong>Pınar ÜNLÜ</strong></p>
            <p className={style.role}>Frontend</p>
          </div>
        </div>

        {/* 6. Gülay */}
        <div className={style.team}>
          <div className={style.teamMember}>
            <img src={gülay} alt="" width="300px" height="350px" />
            <p className={style.name}><strong>Gülay YILMAZ</strong></p>
            <p className={style.role}>Backend</p>
          </div>
        </div>

        {/* 7. Pınar Altay */}
        <div className={style.team}>
          <div className={style.teamMember}>
            <img src={pinar2} alt="" width="300px" height="350px" />
            <p className={style.name}><strong>Pınar ALTAY</strong></p>
            <p className={style.role}>Backend</p>
          </div>
        </div>

        {/* 8. Eren */}
        <div className={style.team}>
          <div className={style.teamMember}>
            <img src={eren} alt="" width="300px" height="350px" />
            <p className={style.name}><strong>Eren AYDOĞAN</strong></p>
            <p className={style.role}>Backend</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Team;
