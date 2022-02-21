import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './EnterEmail.module.scss';

const cx = classNames.bind(styles);

const EnterEmail = ({ onSetEmail }) => {
  const [email, setEmail] = useState({
    username: '',
    domain: '',
  });

  const onConfirm = () => {
    if (email.username === '' || email.domain === '') {
      alert('이메일을 입력해주세요.');
      return;
    }

    onSetEmail(`${email.username}@${email.domain}`);
  };

  const onChange = (event) => {
    const { value, name } = event.target;
    setEmail({
      ...email,
      [name]: value,
    });
  };

  return (
    <div className={cx('container')}>
      <div className={cx('inner')}>
        <div className={cx('box')}>
          <input name="username" onChange={onChange} className={cx('text')} type="text" placeholder="이메일을 입력해주세요." />
          <p className={cx('connect')}>@</p>
          <input name="domain" onChange={onChange} className={cx('text')} type="text" placeholder="직접 입력" />
        </div>
      </div>
      <input onClick={onConfirm} type="button" value="확인" className={cx('btn')} />
    </div>
  );
};

export default EnterEmail;
