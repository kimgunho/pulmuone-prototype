import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import moment from 'moment';

import styles from './QnaList.module.scss';

const cx = classNames.bind(styles);

const QnaList = ({ data }) => {
  const getTitle = (type) => {
    switch (type) {
      case 'general':
        return '제품, 배송, 기타 문의';
      case 'order':
        return '가맹점 주문 문의';
      case 'cleaning':
        return '냉온수기 세척 신청';
      case 'business':
        return '가맹점 사업 신청, 문의';
      case 'report':
        return '부정 제보';
      default:
        return 'N/A';
    }
  };

  return (
    <div className={cx('container')}>
      <ul className={cx('head')}>
        <li className={cx('column')}>No.</li>
        <li className={cx('column')}>문의유형</li>
        <li className={cx('column')}>작성일자</li>
      </ul>
      <ul className={cx('body')}>
        {data.map((item, index) => (
          <li key={item.id}>
            <Link to={`/고객센터/내-문의사항/${item.type}/${item.id}`}>
              <ul>
                <li className={cx('column')}>{data.length - index}</li>
                <li className={cx('column')}>{getTitle(item.type)}</li>
                <li className={cx('column')}>{moment(item.createdAt).format('YYYY.MM.DD')}</li>
              </ul>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QnaList;
