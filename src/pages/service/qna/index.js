import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './index.module.scss';

import PageTitle from '../../../components/shared/PageTitle';
import PolicyContent from '../../../components/privacy/PolicyContent';
import Business from './form/Business';
import Cleaning from './form/Cleaning';
import General from './form/General';
import Order from './form/Order';
import Report from './form/Report';

const cx = classNames.bind(styles);

function QNA() {
  const [agree, setAgree] = useState(false);
  const [formIndex, setFormIndex] = useState(0);

  const onClick = () => {
    setAgree(!agree);
  };

  const onChange = (event) => {
    const { value } = event.target;

    switch (value) {
      case 'general':
        setFormIndex(0);
        break;

      case 'order':
        setFormIndex(1);
        break;

      case 'cleaning':
        setFormIndex(2);
        break;

      case 'business':
        setFormIndex(3);
        break;

      case 'report':
        setFormIndex(4);
        break;

      default:
        setFormIndex(null);
        break;
    }
  };

  return (
    <div className={cx('container')}>
      <PageTitle title="문의하기" sub="고객님께서 문의하신 내용에 대해 신속한 답변을 드리겠습니다." subReverse={true} />
      <div className={cx('limiter')}>
        <Link className={cx('btn')} to="">
          내 문의사항 보기
        </Link>

        <div className={cx('section')}>
          <h3 className={cx('title')}>개인정보 처리 방침</h3>
          <div className={cx('overflow')}>
            <PolicyContent />
          </div>

          <div className={cx('agree')}>
            <input type="checkbox" id={'agree'} />
            <label onClick={onClick} htmlFor="agree">
              <span className={cx(['box', { active: agree }])}></span>
              <p>개인정보 처리 방침에 동의합니다.</p>
            </label>
          </div>

          <div className={cx('kind')}>
            <h3 className={cx(['title', 'required'])}>문의사항 분류</h3>
            <select onChange={onChange}>
              <option value={'general'}>1. 제품 문의, 배송 문의, 기타 문의</option>
              <option value={'order'}>2. 가맹점 주문 문의</option>
              <option value={'cleaning'}>3. 냉온수기 세척 신청</option>
              <option value={'business'}>4. 가맹점 사업 신청, 문의</option>
              <option value={'report'}>5. 부정 제보</option>
            </select>
          </div>

          <div className={cx('form')}>
            <h3 className={cx('title')}>문의내용</h3>
            {formIndex === 0 && <General agree={agree} />}
            {formIndex === 1 && <Order agree={agree} />}
            {formIndex === 2 && <Cleaning agree={agree} />}
            {formIndex === 3 && <Business agree={agree} />}
            {formIndex === 4 && <Report agree={agree} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QNA;
