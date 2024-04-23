import Display from "./components/Display";
import styles from "./App.module.css";
import ButtonContainer from "./components/ButtonsContainer";
import { useState } from "react";
function App() {
  const [CaVal, SetCalval] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      SetCalval("");
    } else if (buttonText === "=") {
      const res = eval(CaVal);
      SetCalval(res);
    } else {
      const NewDisplayVal = CaVal + buttonText;
      SetCalval(NewDisplayVal);
    }
  };
  return (
    <>
      <div className={styles.Maincontain}>
        <div className={styles.calculator}>
          <Display displayvalue={CaVal}></Display>
          <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
        </div>
      </div>
    </>
  );
}

export default App;
