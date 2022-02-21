import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './index.module.scss';
import PageTitle from '../../../components/shared/PageTitle';
import PrivacyPolicy from '../../../components/shared/PrivacyPolicy';
import BusinessForm from './forms/Business';
import CleaningForm from './forms/Cleaning';
import GeneralForm from './forms/General';
import OrderForm from './forms/Order';
import ReportForm from './forms/Report';

const cx = classNames.bind(styles);

const Qna = () => {
  const [agree, setAgree] = useState(false);
  const [formType, setFormType] = useState('general');

  const doAgree = () => {
    setAgree(!agree);
  };

  return (
    <div className={cx('container')}>
      <PageTitle title="문의하기" subtitle="문의하신 내용에 대해 신속하게 답변 드리겠습니다." reverse={true} />
      <div className={cx('limiter')}>
        <div className={cx('overflow')}>
          <PrivacyPolicy />
        </div>
        <div className={cx('agree')}>
          <label onClick={doAgree} htmlFor="agree">
            <span className={cx(['box', { agree }])}></span>
            <p>개인정보처리방침에 동의합니다.</p>
          </label>
        </div>
        <div className={cx('kind')}>
          <h3 className={cx('title')}>문의유형</h3>
          <select onChange={(e) => setFormType(e.target.value)}>
            <option value="general">1. 제품, 배송, 기타 문의</option>
            <option value="business">2. 가맹점 사업 신청</option>
            <option value="order">3. 가맹점 주문 문의</option>
            <option value="cleaning">4. 냉온수기 세척 신청</option>
            <option value="report">5. 부정 제보</option>
          </select>
        </div>
        <div className={cx('form')}>
          <h3 className={cx('title')}>문의내용</h3>
          {formType === 'general' && <GeneralForm agree={agree} />}
          {formType === 'order' && <OrderForm agree={agree} />}
          {formType === 'cleaning' && <CleaningForm agree={agree} />}
          {formType === 'business' && <BusinessForm agree={agree} />}
          {formType === 'report' && <ReportForm agree={agree} />}
        </div>
      </div>
    </div>
  );
};

export default Qna;
