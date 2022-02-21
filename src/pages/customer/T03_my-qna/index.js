import { useState, useEffect } from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';

import styles from './index.module.scss';
import PageTitle from '../../../components/shared/PageTitle';
import EnterEmail from './EnterEmail';
import QnaList from './QnaList';

const cx = classNames.bind(styles);

const MyQna = () => {
  const [qnaData, setQnaData] = useState();

  const onSetEmail = (email) => {
    axios
      .get(`https://pulmuone.console.flyground.co.kr/api/qna/query?email=${email}`)
      .then((res) => {
        if (res.data.success) {
          const { data } = res.data;

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

          if (nextQnaData.length === 0) {
            alert('문의사항이 존재하지 않습니다.');
            return;
          }

          // 작성일자 기준 역정렬
          nextQnaData.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
          setQnaData(nextQnaData);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className={cx('container')}>
      <PageTitle title="내 문의사항" subtitle="문의사항 작성 시 입력한 이메일을 입력해주세요." reverse={true} />
      <div className={cx('limiter')}>
        {qnaData === undefined && <EnterEmail onSetEmail={onSetEmail} />}
        {qnaData && <QnaList data={qnaData} />}
      </div>
    </div>
  );
};

export default MyQna;
