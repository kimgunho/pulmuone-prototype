import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Outro.module.scss';

import background_blue from '../../assets/images/shared/outro_background_blue.jpg';
import background_green from '../../assets/images/shared/outro_background_green.jpg';
import buy_icon_green from '../../assets/images/shared/buy_icon_green.svg';
import buy_icon_blue from '../../assets/images/shared/buy_icon_blue.svg';
import buy_icon_white from '../../assets/images/shared/buy_icon_white.svg';
import order_icon_green from '../../assets/images/shared/order_icon_green.svg';
import order_icon_blue from '../../assets/images/shared/order_icon_blue.svg';
import order_icon_white from '../../assets/images/shared/order_icon_white.svg';

const cx = classNames.bind(styles);

function Outro({ color = 'green', title, buy = true }) {
  return (
    <div
      className={cx('container')}
      style={{ backgroundImage: color === 'green' ? `url(${background_green})` : `url(${background_blue})` }}>
      <div className={cx('limiter')}>
        <h2 className={cx('title')}>
          {title.split('/n').map((line, index) => (
            <span key={index}>{line}</span>
          ))}
        </h2>
        <ul className={cx(['list'])}>
          <li className={cx(['order', color === 'green' ? 'green' : 'blue'])}>
            <Link to="/" className={cx(color === 'green' ? 'green' : 'blue')}>
              <div className={cx('icon')} />
              <p className={cx(color === 'green' ? 'green' : 'blue')}>주문상담 신청하기</p>
            </Link>
          </li>
          {buy ? (
            <li className={cx(['buy', color === 'green' ? 'green' : 'blue'])}>
              <Link to="/" className={cx(color === 'green' ? 'green' : 'blue')}>
                <div className={cx('icon')} />
                <p className={cx(color === 'green' ? 'green' : 'blue')}>바로 구매하기</p>
              </Link>
            </li>
          ) : null}
        </ul>
      </div>
    </div>
  );
}

export default Outro;
