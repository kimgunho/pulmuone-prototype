import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import moment from 'moment';

import styles from './QnaList.module.scss';

const cx = classNames.bind(styles);

const QnaList = ({ email }) => {
  const [qnaData, setQnaData] = useState();

  useEffect(() => {
    axios
      .get(`https://pulmuone.console.flyground.co.kr/api/qna/query?email=${email}`)
      .then((res) => {
        if (res.data.success) {
          const { data } = res.data;
          if (data.length === 0) {
            alert('문의사항이 존재하지 않습니다.');
            return;
          }

          // 각 유형 아이템 병합
          const nextQnaData = data.reduce(
            (acc, current) => [
              ...acc,
              ...current.items.map((item) => ({
                type: current.type,
                ...item,
              })),
            ],
            [],
          );
          // 작성일자 기준 역정렬
          nextQnaData.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
          setQnaData(nextQnaData);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  });

  const getTitle = (type) => {
    switch (type) {
      case 'general':
        return '제품문의, 배송문의, 기타문의';
      case 'business':
        return '가맹점 사업신청 문의';
      case 'order':
        return '가맹점 주문 문의';
      case 'cleaning':
        return '냉온수기 세척 신청';
      case 'report':
        return '부정제보 문의';
      default:
        return '';
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
        {qnaData?.map((item, index) => (
          <li key={item.id}>
            <Link to={`/고객센터/내-문의사항/${item.type}/${item.id}`}>
              <ul>
                <li className={cx('column')}>{qnaData.length - index}</li>
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
