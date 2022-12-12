import styles from './Social.module.scss';
type Props = {
  isDark?: boolean;
};
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';

const Social = (props: Props) => {
  return (
    <div className={styles.container + ' make-dark'}>
      <div className={styles.socialContainer}>
        <a className={styles.socialLink}>
          <AiFillGithub />
        </a>
        <a className={styles.socialLink}>
          <AiFillLinkedin />
        </a>
        <a className={styles.socialLink}>
          <BsFacebook />
        </a>
        <a className={styles.socialLink}>
          <AiFillInstagram />
        </a>
      </div>
      <div className={styles.line + ' subel'}></div>
    </div>
  );
};

export default Social;
