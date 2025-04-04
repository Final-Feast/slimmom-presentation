import styles from "./styles/App.module.css"; 
import About from "./components/about";
// import Architecture from "./components/architecture";
import Description from "./components/description";
import Features from "./components/features";
import Tools from "./components/tools";
import Nav from "./components/nav";
import Team from "./components/team";
import Thank from "./components/thank";

function App() {
  return (
    <div className={styles.view}>
      <div className={styles.block} id={styles.navigate}><Nav  /> </div>
     <div className={styles.block}><About  /> </div>
      <div className={styles.block}><Description  /> </div>
      <div className={styles.block}><Tools  /> </div>
      <div className={styles.block}><Features  /> </div>
      {/* <Architecture /> */}
      <div className={styles.block}><Team  /> </div>
      <div className={styles.block} id={styles.thank}><Thank  /> </div>

      <footer>
        Made with ❤️ by Final Feast team
      </footer>
    </div>
  );
}

export default App;
