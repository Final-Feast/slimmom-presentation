import style from "../styles/features.module.css";
import searchImg from "../assets/search.png";
import trackingImg from "../assets/tracking.png";
import uiImg from "../assets/ui.png";
import calendarImg from "../assets/calender.png";
import apiImg from "../assets/api.png";

function Features() {
  return (
    <section id="Features-section" className={style.container}>
      <h2 className={style.featuresTitle}>Features</h2>
      <div className={style.architectureItem}>
        <ul>
          <li>
            <img src={searchImg} alt="search" width="100px" height="100px" id={style.img1} />
            <p><strong>Real-time search:</strong> Users can see search results updating instantly as they type in the search bar.</p>
            
          </li>
          <li>
            <img src={trackingImg} alt="tracking" width="100px" height="100px" id={style.img2} />
            <p>
            <strong>Calorie tracking:</strong> Users can track the calorie intake from foods they consume, helping them manage their diet.
            </p>
          </li>
          <li>
            <img src={uiImg} alt="ui" width="100px" height="100px" id={style.img3} />
            <p>
            <strong>User-friendly interface:</strong> The app provides an intuitive UI that enhances the overall user experience.
            </p>
          </li>
          <li>
            <img src={calendarImg} alt="calendar" width="100px" height="100px" id={style.img4} />
            <p>
            <strong>Calendar integration:</strong> Users can easily manage their diet plans by selecting specific days in an integrated calendar.
            </p>
          </li>
          <li>
            <img src={apiImg} alt="api" width="100px" height="100px" id={style.img5} />
            <p>
            <strong>Real-time API data fetching:</strong> The application fetches data from external APIs to provide users with up-to-date information in real-time.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Features;
