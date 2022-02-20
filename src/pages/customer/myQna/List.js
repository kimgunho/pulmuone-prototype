import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './List.module.scss';

const cx = classNames.bind(styles);

const List = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('nav')}>
        <ul>
          <li>전체</li>
          <li>카테고리1</li>
          <li>카테고리2</li>
          <li>카테고리3</li>
          <li>카테고리4</li>
          <li>카테고리5</li>
        </ul>
      </div>

      <div className={cx('table')}>
        <ul className={cx('head')}>
          <li>No</li>
          <li>문의사항 분류</li>
          <li>날짜</li>
        </ul>
        <ul className={cx('body')}>
          <li>
            <ul>
              <li>1</li>
              <li>
                <Link to="/">제품문의, 배송문의, 기타문의</Link>
              </li>
              <li>2022-02-16</li>
            </ul>
          </li>
          <li>
            <ul>
              <li>1</li>
              <li>
                <Link to="/">제품문의, 배송문의, 기타문의</Link>
              </li>
              <li>2022-02-16</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default List;
