import style from "../styles/features.module.css";

function Features() {


    return (
        <section id="Features-section" className={style.container}>
          <h2 className={style.featuresTitle}>Features</h2>
          <div className={style.architectureItem}>
            <ul>
              <li>
              <img src="" alt="" width="100px" height="100px"/>

                <strong>Real-time search:</strong> Users can see search results updating instantly as they type in the search bar.
              </li>
              <li>
              <img src="" alt="" width="100px" height="100px"/>

                <strong>Calorie tracking:</strong> Users can track the calorie intake from foods they consume, helping them manage their diet.
              </li>
              <li>
              <img src="" alt="" width="100px" height="100px"/>

                <strong>User-friendly interface:</strong> The app provides an intuitive UI that enhances the overall user experience.
              </li>
              <li>
              <img src="" alt="" width="100px" height="100px"/>

                <strong>Calendar integration:</strong> Users can easily manage their diet plans by selecting specific days in an integrated calendar.
              </li>
              <li>
              <img src="" alt="" width="100px" height="100px"/>

                <strong>Real-time API data fetching:</strong> The application fetches data from external APIs to provide users with up-to-date information in real-time.
              </li>
            </ul>
          </div>
        </section>
    );
  }
  
  export default Features;

  // Gerçek Zamanlı Arama: Kullanıcılar, arama çubuğuna yazarken sonuçların anında güncellenmesini sağlar. Bu özellik, kullanıcıların aradıkları öğeleri hızlı bir şekilde bulmalarına yardımcı olur.
//kalori hesabı: Kullanıcılar, yedikleri yiyeceklerin kalori miktarını takip edebilirler. Bu özellik, kullanıcıların diyetlerini daha iyi yönetmelerine yardımcı olur.
// kullanıcı dostu arayüz: Uygulama, kullanıcıların kolayca gezinebileceği ve ihtiyaç duydukları bilgilere hızlı bir şekilde ulaşabileceği bir arayüze sahiptir. Bu özellik, kullanıcı deneyimini artırır.
// takvim entegre: Kullanıcılar, takvim ikonuna istediği günü tıklayarak diyet planını daha iyi yönetmelerine yardımcı olur.
//  API ile gerçek zamanlı veri çekme

// kullanıcıların yedikleri yiyeceklerin kalori miktarını takip edebilirler. Bu özellik, kullanıcıların diyetlerini daha iyi yönetmelerine yardımcı olur.


// images gonna be added later
// using child component for each feature to put each in different location