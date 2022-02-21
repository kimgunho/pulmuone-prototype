import axios from 'axios';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './index.module.scss';

import PageTitle from '../../../components/shared/PageTitle';
import CheckMyEmail from './CheckMyEmail';
import List from './List';

const cx = classNames.bind(styles);

const MyQna = () => {
  const [data, setData] = useState(null);
  const email = sessionStorage.getItem('email');

  useEffect(() => {
    if (email !== null) {
      axios
        .get(`https://pulmuone.console.flyground.co.kr/api/qna/query?email=${email}`)
        .then((res) => {
          setData(res.data.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, []);

  return (
    <div className={cx('container')}>
      <PageTitle title="내 문의사항" subtitle="문의사항 확인시 문의 시에 입력한 이메일로 조회해주세요." reverse={true} />
      <div className={cx('limiter')}>{data === null ? <CheckMyEmail setData={setData} /> : <List data={data} />}</div>
    </div>
  );
};

export default MyQna;
