import { useState } from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';

import styles from './CheckMyEmail.module.scss';

const cx = classNames.bind(styles);

function CheckMyEmail({ setData, setEmail }) {
  const [mail, setMail] = useState({
    mailId: '',
    mailDetail: '',
  });

  const onClick = () => {
    if (mail.mailId === '' || mail.mailDetail === '') {
      alert('이메일을 작성해주세요');
      return;
    }

    getAxios();
  };

  const onChange = (event) => {
    const { value, name } = event.target;
    setMail((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const getAxios = () => {
    axios
      .get(`https://pulmuone.console.flyground.co.kr/api/qna/query?email=${mail.mailId}@${mail.mailDetail}`)
      .then((res) => {
        let index = 0;
        res.data.data.forEach((item) => {
          if (item.items.length === 0) {
            index += 1;
          }
        });
        if (index === 5) {
          alert('문의해주신 사항이 존재하지 않습니다');
          return;
        } else {
          sessionStorage.setItem('email', `${mail.mailId}@${mail.mailDetail}`);
          setEmail(sessionStorage.getItem('email'));
          setData(res.data.data);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className={cx('form')}>
      <div className={cx('inner')}>
        <div className={cx('box')}>
          <input name="mailId" onChange={onChange} className={cx('text')} type="text" placeholder="이메일을 작성해주세요" />
          <p className={cx('connect')}>@</p>
          <input name="mailDetail" onChange={onChange} className={cx('text')} type="text" placeholder="직접 입력" />
        </div>
      </div>
      <input onClick={onClick} type={'submit'} value={'확인'} className={cx('btn')} />
    </div>
  );
}

export default CheckMyEmail;
