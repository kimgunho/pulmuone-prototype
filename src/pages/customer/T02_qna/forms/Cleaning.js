import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import classNames from 'classnames/bind';

import styles from './form.module.scss';
import { onEmailCheck, onlyNumberKeyPress } from '../../../../utils/regular';

const cx = classNames.bind(styles);

function Cleaning({ agree }) {
  const navigate = useNavigate();
  const [raw, setRaw] = useState({
    name: '',
    emailId: '',
    emailDetail: '',
    product: '',
    address: '',
    addressDetail1: '',
    addressDetail2: '',
    content: '',
    mobile1: '',
    mobile2: '',
    mobile3: '',
    phone1: '',
    phone2: '',
    phone3: '',
  });

  const onClick = () => {
    const { name, emailId, emailDetail, content, mobile1, mobile2, mobile3, address, addressDetail1, addressDetail2, product } = raw;

    if (!agree) {
      alert('개인정보 처리방침에 동의해주세요.');
      return;
    }

    if (name === '') {
      alert('이름을 작성해주세요.');
      return;
    }

    if (emailId === '' || emailDetail === '') {
      alert('이메일을 작성해주세요.');
      return;
    }

    if (onEmailCheck(emailDetail)) {
      return;
    }

    if (mobile1 === '' || mobile2 === '' || mobile3 === '') {
      alert('휴대전화를 작성해주세요.');
      return;
    }

    if (product === '') {
      alert('상품을 선택해주세요.');
      return;
    }

    if (address === '') {
      alert('주소를 작성해주세요.');
      return;
    }

    if (addressDetail1 === '' && addressDetail2 === '') {
      alert('상세주소를 작성해주세요.');
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
        'https://pulmuone.console.flyground.co.kr/api/qna/cleaning',
        JSON.stringify({
          name: raw.name,
          email: `${raw.emailId}@${raw.emailDetail}`,
          mobile: raw.mobile1 + raw.mobile2 + raw.mobile3,
          phone: raw.phone1 + raw.phone2 + raw.phone3,
          address: raw.address,
          addressDetail: raw.addressDetail1 + raw.addressDetail2,
          product: raw.product,
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
        alert('냉온수기 세척 신청이 완료되었습니다.');
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
              </div>
            </li>
            <li>
              <h4 className={cx(['title', 'required'])}>이메일</h4>
              <div className={cx('box')}>
                <input name="emailId" onChange={onChange} className={cx('text')} type="text" placeholder="이메일을 작성해주세요" />
                <p className={cx('connect')}>@</p>
                <input name="emailDetail" onChange={onChange} className={cx('text')} type="text" placeholder="직접 입력" />
              </div>
            </li>
            <li>
              <h4 className={cx(['title', 'required'])}>휴대전화</h4>
              <div className={cx(['box', 'background'])}>
                <input
                  name="mobile1"
                  onChange={onChange}
                  className={cx(['text', 'center'])}
                  type="text"
                  placeholder="010"
                  maxLength={3}
                  onKeyPress={onlyNumberKeyPress}
                />
                <p className={cx('connect')}>-</p>
                <input
                  name="mobile2"
                  onChange={onChange}
                  className={cx(['text', 'center'])}
                  type="text"
                  placeholder="0000"
                  maxLength={4}
                  onKeyPress={onlyNumberKeyPress}
                />
                <p className={cx('connect')}>-</p>
                <input
                  name="mobile3"
                  onChange={onChange}
                  className={cx(['text', 'center'])}
                  type="text"
                  placeholder="0000"
                  maxLength={4}
                  onKeyPress={onlyNumberKeyPress}
                />
              </div>
            </li>
            <li>
              <h4 className={cx(['title', 'required'])}>냉온수기 종류</h4>
              <div className={cx('box')}>
                <select name="product" onChange={onChange}>
                  <option value={''}>제품을 선택해주세요</option>
                  <option value={'풀무원샘물 전용 냉온수기'}>풀무원샘물 전용 냉온수기</option>
                  <option value={'맛있는샘물 18.9L 전용냉온수기'}>맛있는샘물 18.9L 전용냉온수기</option>
                  <option value={'냉온수기 종류 모름'}>냉온수기 종류 모름</option>
                </select>
              </div>
            </li>
          </ul>

          <ul className={cx('right')}>
            <li>
              <h4 className={cx('title')}>일반전화</h4>
              <div className={cx(['box', 'background'])}>
                <input
                  name="phone1"
                  onChange={onChange}
                  className={cx(['text', 'center'])}
                  type="text"
                  placeholder="010"
                  maxLength={3}
                  onKeyPress={onlyNumberKeyPress}
                />
                <p className={cx('connect')}>-</p>
                <input
                  name="phone2"
                  onChange={onChange}
                  className={cx(['text', 'center'])}
                  type="text"
                  placeholder="0000"
                  maxLength={4}
                  onKeyPress={onlyNumberKeyPress}
                />
                <p className={cx('connect')}>-</p>
                <input
                  name="phone3"
                  onChange={onChange}
                  className={cx(['text', 'center'])}
                  type="text"
                  placeholder="0000"
                  maxLength={4}
                  onKeyPress={onlyNumberKeyPress}
                />
              </div>
            </li>
            <li>
              <h4 className={cx(['title', 'required'])}>주소</h4>
              <div className={cx('box')}>
                <input name="address" onChange={onChange} className={cx('text')} type="text" placeholder="주소를 입력해 주세요" />
                <button className={cx('btn')}>우편번호 찾기</button>
              </div>
              <div className={cx('box')}>
                <input
                  name="addressDetail1"
                  onChange={onChange}
                  className={cx('text')}
                  type="text"
                  placeholder="상세주소를 입력해 주세요"
                />
              </div>
              <div className={cx('box')}>
                <input
                  name="addressDetail2"
                  onChange={onChange}
                  className={cx('text')}
                  type="text"
                  placeholder="상세주소를 입력해 주세요"
                />
              </div>
            </li>
            <li>
              <h4 className={cx(['title', 'required'])}>상세내용</h4>
              <div className={cx('box')}>
                <textarea name="content" onChange={onChange}></textarea>
              </div>
            </li>
          </ul>
        </div>
        <input onClick={onClick} type={'submit'} value={'접수하기'} className={cx('btn')} />
      </div>
    </div>
  );
}

export default Cleaning;
