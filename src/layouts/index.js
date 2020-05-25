import styles from './index.css';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>HTML常用工具!</h1>
      {props.children}
    </div>
  );
}

export default BasicLayout;
