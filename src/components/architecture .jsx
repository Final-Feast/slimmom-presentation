import style from "../styles/Architecture.module.css";

function Architecture() {


    return (
      <div>
        <section id="Architecture-section">
          <h2 className={style.architectureTitle}>Architecture</h2>
          <div className={style.architectureContainer}>
            <div className={style.architectureItem}>
                <strong>React</strong>  - The front-end uses React for building interactive user interfaces.
            </div>
            
            <div className={style.architectureItem}>
              
              <p>
                <strong>Node.js, Express.js</strong> - The server-side is built using Node.js and Express.js for handling API requests and server logic.
              </p>
              <p>
                <strong>Database</strong> MongoDB - A NoSQL database for storing application data such as user information and records.
              </p>
              <p>
                <strong>Authentication</strong> JWT - JSON Web Tokens for secure user authentication and session management.
              </p>
              <p>
                <strong>API</strong> RESTful - The backend exposes a RESTful API for communication between frontend and backend.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Architecture;

  // Gerçek Zamanlı Arama: Kullanıcılar, arama çubuğuna yazarken sonuçların anında güncellenmesini sağlar. Bu özellik, kullanıcıların aradıkları öğeleri hızlı bir şekilde bulmalarına yardımcı olur.
//kalori hesabı: Kullanıcılar, yedikleri yiyeceklerin kalori miktarını takip edebilirler. Bu özellik, kullanıcıların diyetlerini daha iyi yönetmelerine yardımcı olur.
// kullanıcı dostu arayüz: Uygulama, kullanıcıların kolayca gezinebileceği ve ihtiyaç duydukları bilgilere hızlı bir şekilde ulaşabileceği bir arayüze sahiptir. Bu özellik, kullanıcı deneyimini artırır.
// takvim entegre: Kullanıcılar, takvim ikonuna istediği günü tıklayarak diyet planını daha iyi yönetmelerine yardımcı olur.
//  API ile gerçek zamanlı veri çekme

// kullanıcıların yedikleri yiyeceklerin kalori miktarını takip edebilirler. Bu özellik, kullanıcıların diyetlerini daha iyi yönetmelerine yardımcı olur.
