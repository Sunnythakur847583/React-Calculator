import styles from "./ButtonContainer.module.css";
const ButtonContainer = ({ onButtonClick }) => {
  const ButtonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      <div className={styles.btnContainer}>
        {ButtonNames.map((name) => (
          <button className={styles.btn} onClick={() => onButtonClick(name)}>
            {name}
          </button>
        ))}
      </div>
    </>
  );
};
export default ButtonContainer;
