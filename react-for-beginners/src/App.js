import Button from "./Button";
import styles from './App.module.css'

// prop-types 설치 명령어 : npm i prop-types
function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome back!</h1>
      <Button text={"Continue"}/>
    </div>
  );
}


export default App;
