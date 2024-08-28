import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className="loading">
      <svg width="64px" height="48px">
        <polyline
          points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
          className={styles.polylineBack}
        ></polyline>
        <polyline
          points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
          className={styles.polylineFront}
        ></polyline>
      </svg>
    </div>
  );
};

export default Loading;
