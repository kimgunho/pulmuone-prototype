import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import classNames from 'classnames/bind';

import styles from './form.module.scss';

const cx = classNames.bind(styles);

const Report = ({ agree }) => {
  const navigate = useNavigate();
  const [raw, setRaw] = useState({
    name: '',
    emailId: '',
    emailDetail: '',
    title: '',
    content: '',
  });

  const onClick = () => {
    const { name, emailId, emailDetail, title, content } = raw;

    if (!agree) {
      alert('개인정보처리방침에 동의해주세요.');
      return;
    }

    if (name === '') {
      alert('이름을 작성해주세요.');
      return;
    }

    if (emailId === '') {
      alert('이메일 아이디를 작성해주세요.');
      return;
    }

    if (emailDetail === '') {
      alert('이메일 뒷자리를 작성해주세요.');
      return;
    }

    if (title === '') {
      alert('제목을 작성해주세요.');
      return;
    }

    if (content === '') {
      alert('내용을 작성해주세요.');
      return;
    }

    postAxios();
  };

  const postAxios = () => {
    axios
      .post(
        'https://pulmuone.console.flyground.co.kr/api/qna/report',
        JSON.stringify({
          name: raw.name,
          email: `${raw.emailId}@${raw.emailDetail}`,
          title: raw.title,
          content: raw.content,
        }),
        {
          headers: {
            Accept: 'application/json',
            'Content-type': 'Application/json',
            'Access-Control-Allow-Origin': '*',
          },
        },
      )
      .then(() => {
        alert('부정제보가 접수되었습니다.');
        navigate('/');
      })
      .catch((err) => console.error(err));
  };

  const onChange = (event) => {
    const { value, name } = event.target;
    setRaw((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className={cx('container')}>
      <div className={cx('form')}>
        <div className={cx('inner')}>
          <ul className={cx('left')}>
            <li>
              <h4 className={cx(['title', 'required'])}>이름</h4>
              <div className={cx('box')}>
                <input name="name" onChange={onChange} className={cx('text')} type="text" placeholder="이름을 작성해주세요" />
                {/* 사용성이 애매해서 혹시몰라 주석처리 */}
                {/* <div className={cx('anonymous')}>
                  <input type="checkbox" id="anonymous" />
                  <label onClick={onClick} htmlFor="anonymous" className={cx(['anonymousLabel', { active: anonymous }])}>
                    <span></span>
                    <p>익명 제보</p>
                  </label>
                </div> */}
              </div>
            </li>
            <li>
              <h4 className={cx(['title', 'required'])}>제목</h4>
              <div className={cx('box')}>
                <input name="title" onChange={onChange} className={cx('text')} type="text" placeholder="제목을 작성해주세요" />
              </div>
            </li>
          </ul>

          <ul className={cx('right')}>
            <li>
              <h4 className={cx(['title', 'required'])}>이메일</h4>
              <div className={cx('box')}>
                <input name="emailId" onChange={onChange} className={cx('text')} type="text" placeholder="이메일을 작성해주세요" />
                <p className={cx('connect')}>@</p>
                <input name="emailDetail" onChange={onChange} className={cx('text')} type="text" placeholder="직접 입력" />
              </div>
            </li>
            <li>
              <h4 className={cx(['title', 'required'])}>상세내용</h4>
              <div className={cx('box')}>
                <textarea onChange={onChange} name="content"></textarea>
              </div>
            </li>
          </ul>
        </div>
        <input onClick={onClick} type={'submit'} value={'접수하기'} className={cx('btn')} />
      </div>
    </div>
  );
};

export default Report;
