import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import classNames from 'classnames/bind';

import styles from './form.module.scss';
import { onEmailCheck, onlyNumberKeyPress } from '../../../../util/regular';

const cx = classNames.bind(styles);

function Business({ agree }) {
  const navigate = useNavigate();
  const [raw, setRaw] = useState({
    name: '',
    emailId: '',
    emailDetail: '',
    location: '',
    title: '',
    content: '',
    mobile1: '',
    mobile2: '',
    mobile3: '',
    phone1: '',
    phone2: '',
    phone3: '',
  });

  const onClick = () => {
    const { name, emailId, emailDetail, location, title, content, mobile1, mobile2, mobile3 } = raw;

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

    if (location === '') {
      alert('개설희망지역을 선택해주세요.');
      return;
    }

    if (title === '') {
      alert('제목을 작성해주세요.');
      return;
    }

    if (mobile1 === '' || mobile2 === '' || mobile3 === '') {
      alert('휴대전화를 작성해주세요.');
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
        'https://pulmuone.console.flyground.co.kr/api/qna/business',
        JSON.stringify({
          name: raw.name,
          email: `${raw.emailId}@${raw.emailDetail}`,
          mobile: raw.mobile1 + raw.mobile2 + raw.mobile3,
          phone: raw.phone1 + raw.phone2 + raw.phone3,
          location: raw.location,
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
        alert('가맹점 사업 신청이 완료되었습니다.');
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
                <input onChange={onChange} name={'name'} className={cx('text')} type="text" placeholder="이름을 작성해주세요" />
              </div>
            </li>
            <li>
              <h4 className={cx(['title', 'required'])}>이메일</h4>
              <div className={cx('box')}>
                <input onChange={onChange} name={'emailId'} className={cx('text')} type="text" placeholder="이메일을 작성해주세요" />
                <p className={cx('connect')}>@</p>
                <input onChange={onChange} name={'emailDetail'} className={cx('text')} type="text" placeholder="직접 입력" />
              </div>
            </li>
            <li>
              <h4 className={cx(['title', 'required'])}>개설희망지역</h4>
              <div className={cx('box')}>
                <select onChange={onChange} name={'location'}>
                  <option value={''}>선택</option>
                  <option value={'서울특별시'}>서울특별시</option>
                  <option value={'인천광역시'}>인천광역시</option>
                  <option value={'경기도'}>경기도</option>
                  <option value={'강원도'}>강원도</option>
                  <option value={'대전광역시'}>대전광역시</option>
                  <option value={'세종특별시'}>세종특별시</option>
                  <option value={'충청북도'}>충청북도</option>
                  <option value={'충청남도'}>충청남도</option>
                  <option value={'대구광역시'}>대구광역시</option>
                  <option value={'울산광역시'}>울산광역시</option>
                  <option value={'경상남도'}>경상남도</option>
                  <option value={'경상북도'}>경상북도</option>
                  <option value={'광주광역시'}>광주광역시</option>
                  <option value={'전라북도'}>전라북도</option>
                  <option value={'전라남도'}>전라남도</option>
                  <option value={'제주특별시'}>제주특별시</option>
                </select>
              </div>
            </li>
            <li>
              <h4 className={cx(['title', 'required'])}>제목</h4>
              <div className={cx('box')}>
                <input onChange={onChange} name={'title'} className={cx('text')} type="text" placeholder="제목을 작성해주세요" />
              </div>
            </li>
          </ul>

          <ul className={cx('right')}>
            <li>
              <h4 className={cx(['title', 'required'])}>휴대전화</h4>
              <div className={cx(['box', 'background'])}>
                <input
                  name={'mobile1'}
                  onChange={onChange}
                  className={cx(['text', 'center'])}
                  type="text"
                  placeholder="010"
                  maxLength={3}
                  onKeyPress={onlyNumberKeyPress}
                />
                <p className={cx('connect')}>-</p>
                <input
                  name={'mobile2'}
                  onChange={onChange}
                  className={cx(['text', 'center'])}
                  type="text"
                  placeholder="0000"
                  maxLength={4}
                  onKeyPress={onlyNumberKeyPress}
                />
                <p className={cx('connect')}>-</p>
                <input
                  name={'mobile3'}
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
              <h4 className={cx('title')}>일반전화</h4>
              <div className={cx(['box', 'background'])}>
                <input
                  name={'phone1'}
                  onChange={onChange}
                  className={cx(['text', 'center'])}
                  type="text"
                  placeholder="010"
                  maxLength={3}
                  onKeyPress={onlyNumberKeyPress}
                />
                <p className={cx('connect')}>-</p>
                <input
                  name={'phone2'}
                  onChange={onChange}
                  className={cx(['text', 'center'])}
                  type="text"
                  placeholder="0000"
                  maxLength={4}
                  onKeyPress={onlyNumberKeyPress}
                />
                <p className={cx('connect')}>-</p>
                <input
                  name={'phone3'}
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
              <h4 className={cx(['title', 'required'])}>상세내용</h4>
              <div className={cx('box')}>
                <textarea name={'content'} onChange={onChange}></textarea>
              </div>
            </li>
          </ul>
        </div>
        <input onClick={onClick} type={'submit'} value={'접수하기'} className={cx('btn')} />
      </div>
      <div className={cx('section')}>
        <h3 className={cx('title')}>풀무원샘물은 여러분의 든든한 파트너가 되겠습니다.</h3>
        <p>
          풀무원샘물 가맹점 개설 온라인으로 편리하게 문의하세요.
          <br />
          기타 문의는 아래 연락처를 이용 바랍니다.
        </p>
        <div className={cx('inner')}>
          <h4>
            풀무원샘물과 함께 성장할 파트너를 모십니다.
            <br />
            풀무원샘물의 기업이념과 제품 경쟁력을 바탕으로 창업을 희망하시는
            <br />
            예비 가맹점주 여러분의 참여를 기다립니다.
          </h4>
          <p>
            전국의 약 260명의 가맹점 사장님들이 사업의 안정성을 증명해 주시고 계십니다. (국내 최고 가맹점 수)
            <br />
            현재 전체 가맹점의 약 73%인 191여 명의 가맹점 사장님들이 10년 이상을 풀무원샘물의 사업 파트너로서 함께 하고 계십니다.
            <br />
            지역별 영업사원의 가맹점 밀착 관리와 지원 제도 및 고객만족 경영을 통해 단기간 내 소정의 목표를 이룰 수 있도록 도와드립니다.
            <br />
            초기에는 사무실이 필요 없는 무점포 사업입니다. (건물 임대료 등 관리 비용 부담이 없습니다.)
            <br />
            강력한 브랜드 파워와 제품 경쟁력으로 사업의 성공을 지원해 드립니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Business;
