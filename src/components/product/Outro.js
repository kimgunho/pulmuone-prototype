import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Outro.module.scss';
import background_blue from '../../assets/images/shared/outro_background_blue.jpg';
import background_green from '../../assets/images/shared/outro_background_green.jpg';

const cx = classNames.bind(styles);

const Outro = ({ color = 'green', title, buy = true, productLink }) => {
  return (
    <div
      className={cx('container')}
      style={{ backgroundImage: color === 'green' ? `url(${background_green})` : `url(${background_blue})` }}>
      <div className={cx('limiter')}>
        <h2 className={cx('title')}>
          {title.split('\n').map((line, index) => (
            <span key={index}>{line}</span>
          ))}
        </h2>
        <ul className={cx(['list'])}>
          <li className={cx(['order', color])}>
            <Link to="/고객센터/문의하기" className={cx(color)}>
              <div className={cx('icon')} />
              <p className={cx(color)}>주문상담 신청하기</p>
            </Link>
          </li>
          {buy ? (
            <li className={cx(['buy', color])}>
              <a href={productLink} className={cx(color)} target={'_blank'} rel="noreferrer">
                <div className={cx('icon')} />
                <p className={cx(color)}>바로 구매하기</p>
              </a>
            </li>
          ) : null}
        </ul>
      </div>
    </div>
  );
};

export default Outro;
