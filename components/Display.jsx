import styles from "./Display.module.css";

const Display = ({ displayvalue }) => {
  return (
    <>
      <input
        type="text"
        className={styles.display}
        value={displayvalue}
        readOnly
      />
    </>
  );
};
export default Display;
