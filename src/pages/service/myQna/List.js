import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import moment from 'moment';

import styles from './List.module.scss';

const cx = classNames.bind(styles);

function List({ data }) {
  const [navIndex, setNavIndex] = useState(0);
  const [filterData, setFilterData] = useState(data);
  let number = 0;

  const navItems = [
    {
      type: 'all',
      title: '전체',
    },
    {
      type: 'general',
      title: '제품,배송,기타 문의',
    },
    {
      type: 'order',
      title: '가맹점 주문 문의',
    },
    {
      type: 'cleaning',
      title: '냉온수기 세척 신청',
    },
    {
      type: 'business',
      title: '가맹점 사업신청 문의',
    },
    {
      type: 'report',
      title: '부정제보 문의',
    },
  ];

  const onGetData = (type) => {
    let filtering;

    switch (type) {
      case 'all':
        filtering = data;
        break;
      case 'general':
        filtering = data.filter((item) => item.type === 'general');
        break;
      case 'order':
        filtering = data.filter((item) => item.type === 'order');
        break;
      case 'cleaning':
        filtering = data.filter((item) => item.type === 'cleaning');
        break;
      case 'business':
        filtering = data.filter((item) => item.type === 'business');
        break;
      case 'report':
        filtering = data.filter((item) => item.type === 'report');
        break;
      default:
        break;
    }

    setFilterData(filtering);
  };

  const onClick = (index, type) => {
    setNavIndex(index);
    onGetData(type);
  };

  return (
    <div className={cx('container')}>
      <div className={cx('nav')}>
        <ul>
          {navItems.map((item, index) => (
            <li onClick={() => onClick(index, item.type)} className={cx({ active: navIndex === index })} key={index}>
              {item.title}
            </li>
          ))}
        </ul>
      </div>

      <div className={cx('table')}>
        <ul className={cx('head')}>
          <li>No</li>
          <li>문의사항 분류</li>
          <li>날짜</li>
        </ul>
        <ul className={cx('body')}>
          {filterData &&
            filterData.map((list) =>
              list.items.map((item, index) => {
                number += 1;
                let title;
                switch (list.type) {
                  case 'general':
                    title = '제품문의, 배송문의, 기타문의';
                    break;
                  case 'business':
                    title = '가맹점 사업신청 문의';
                    break;
                  case 'order':
                    title = '가맹점 주문 문의';
                    break;
                  case 'cleaning':
                    title = '냉온수기 세척 신청';
                    break;
                  case 'report':
                    title = '부정제보 문의';
                    break;
                  default:
                    break;
                }
                return (
                  <li key={index}>
                    <ul>
                      <li>{number}</li>
                      <li>
                        <Link to={`/service/myqna/${list.type}/${item.id}`}>{title}</Link>
                      </li>
                      <li>{moment(item.createdAt).format('YYYY.MM.DD')}</li>
                    </ul>
                  </li>
                );
              }),
            )}
        </ul>
      </div>
    </div>
  );
}

export default List;
