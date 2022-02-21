import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import classNames from 'classnames/bind';

import styles from './form.module.scss';
import { onEmailCheck, onlyNumberKeyPress } from '../../../../util/regular';

const cx = classNames.bind(styles);

const General = ({ agree }) => {
  const navigate = useNavigate();
  const fileNameRef = useRef();
  const [formData, setFormdata] = useState({
    name: '',
    emailId: '',
    emailDetail: '',
    address: '',
    addressDetail1: '',
    addressDetail2: '',
    product: '',
    store: '',
    content: '',
    mobile1: '',
    mobile2: '',
    mobile3: '',
    file: null,
  });

  const onClick = () => {
    const { name, emailId, emailDetail, product, store, content, mobile1, mobile2, mobile3, address, addressDetail1, addressDetail2 } =
      formData;

    if (!agree) {
      alert('개인정보처리방침에 동의해주세요.');
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

    if (store === '') {
      alert('구매처를 작성해주세요.');
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
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', `${formData.emailId}@${formData.emailDetail}`);
    data.append('mobile', formData.mobile1 + formData.mobile2 + formData.mobile3);
    data.append('address', formData.address);
    data.append('addressDetail', formData.addressDetail1 + formData.addressDetail2);
    data.append('product', formData.product);
    data.append('store', formData.store);
    data.append('content', formData.content);
    if (formData.file !== null) {
      data.append('file', formData.file);
    }
    axios
      .post('https://pulmuone.console.flyground.co.kr/api/qna/general', data, {
        headers: {
          Accept: 'application/json',
          'Content-type': 'Application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then(() => {
        alert('제품, 배송, 기타 문의가 접수되었습니다.');
        navigate('/');
      })
      .catch((err) => console.error(err));
  };

  const onChange = (event) => {
    const { value, name } = event.target;

    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onChangeFile = (event) => {
    const { files } = event.target;

    fileNameRef.current.innerText = files[0].name;

    setFormdata((prev) => ({
      ...prev,
      file: files[0],
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
              <h4 className={cx(['title', 'required'])}>주문제품</h4>
              <div className={cx('box')}>
                <select name="product" onChange={onChange}>
                  <option value={'제품을 선택해주세요'}>제품을 선택해주세요</option>
                  <option value={'풀무원샘물'}>풀무원샘물</option>
                  <option value={'풀무원샘물 바디풀'}>풀무원샘물 바디풀</option>
                  <option value={'풀무원샘물 15L'}>풀무원샘물 15L</option>
                  <option value={'맛있는샘물 18.9L'}>맛있는샘물 18.9L</option>
                  <option value={'냉온수기'}>냉온수기</option>
                </select>
              </div>
            </li>
            <li>
              <h4 className={cx(['title', 'required'])}>구매처</h4>
              <div className={cx('box')}>
                <input name="store" onChange={onChange} className={cx('text')} type="text" placeholder="구매처를 입력해주세요" />
              </div>
            </li>
            <li>
              <h4 className={cx('title')}>첨부파일</h4>
              <div className={cx('box')}>
                <input name="file" onChange={onChangeFile} id="general_file" className={cx('file')} type="file" />
                <p ref={fileNameRef} className={cx('fileName')}>
                  파일을 선택해 주세요
                </p>
                <label className={cx('btn')} htmlFor="general_file">
                  업로드하기
                </label>
              </div>
            </li>
          </ul>

          <ul className={cx('right')}>
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
};

export default General;
