import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import classNames from 'classnames/bind';

import styles from './form.module.scss';
import { onEmailCheck, onlyNumberKeyPress } from '../../../../utils/regular';

const cx = classNames.bind(styles);

function Order({ agree }) {
  const navigate = useNavigate();
  const [raw, setRaw] = useState({
    name: '',
    emailId: '',
    emailDetail: '',
    address: '',
    addressDetail: '',
    product: '',
    funnel: '',
    mobile1: '',
    mobile2: '',
    mobile3: '',
  });

  const onClick = () => {
    const { name, emailId, emailDetail, mobile1, mobile2, mobile3, product, address, addressDetail } = raw;

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
      alert('주문제품을 선택해주세요.');
      return;
    }

    if (address === '') {
      alert('주소를 작성해주세요.');
      return;
    }

    if (addressDetail === '') {
      alert('상세주소를 작성해주세요.');
      return;
    }

    postAxios();
  };

  const postAxios = () => {
    axios
      .post(
        'https://pulmuone.console.flyground.co.kr/api/qna/order',
        JSON.stringify({
          name: raw.name,
          email: `${raw.emailId}@${raw.emailDetail}`,
          mobile: raw.mobile1 + raw.mobile2 + raw.mobile3,
          address: raw.address,
          addressDetail: raw.addressDetail,
          product: raw.product,
          funnel: raw.funnel,
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
        alert('가맹점 주문신청 접수가 완료되었습니다.');
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

  const findAddress = () => {
    new window.daum.Postcode({
      oncomplete: (data) => {
        setRaw({
          ...raw,
          address: data.address,
        });
      },
    }).open();
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
              <h4 className={cx(['title', 'required'])}>주문제품</h4>
              <div className={cx('box')}>
                <select name="product" onChange={onChange}>
                  <option value={''}>제품을 선택해주세요</option>
                  <option value={'풀무원샘물'}>풀무원샘물</option>
                  <option value={'풀무원샘물 바디풀'}>풀무원샘물 바디풀</option>
                  <option value={'풀무원샘물 15L'}>풀무원샘물 15L</option>
                  <option value={'맛있는샘물 18.9L'}>맛있는샘물 18.9L</option>
                  <option value={'냉온수기'}>냉온수기</option>
                </select>
              </div>
            </li>
          </ul>

          <ul className={cx('right')}>
            <li>
              <h4 className={cx(['title', 'required'])}>주소</h4>
              <div className={cx('box')}>
                <input name="address" value={raw.address} readOnly className={cx('text')} type="text" placeholder="주소를 검색해주세요" />
                <button className={cx('btn')} onClick={findAddress}>
                  주소 검색
                </button>
              </div>
              <div className={cx('box')}>
                <input name="addressDetail" onChange={onChange} className={cx('text')} type="text" placeholder="상세주소를 입력해주세요" />
              </div>
            </li>
            <li>
              <h4 className={cx('title')}>방문경로</h4>
              <div className={cx('box')}>
                <select name="funnel" onChange={onChange}>
                  <option value={''}>방문경로를 선택해주세요</option>
                  <option value={'네이버, 다음 등 포털사이트 직접검색'}>네이버, 다음 등 포털사이트 직접검색</option>
                  <option value={'네이버 지역 카페 배너광고'}>네이버 지역 카페 배너광고</option>
                  <option value={'지인 소개'}>지인 소개</option>
                  <option value={'기타'}>기타</option>
                </select>
              </div>
            </li>
          </ul>
        </div>
        <input onClick={onClick} type={'submit'} value={'접수하기'} className={cx('btn')} />
      </div>
    </div>
  );
}

export default Order;
