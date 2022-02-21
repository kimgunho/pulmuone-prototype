import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './index.module.scss';
import PageTitle from '../../../components/shared/PageTitle';
import EnterEmail from './EnterEmail';
import QnaList from './QnaList';

const cx = classNames.bind(styles);

const MyQna = () => {
  const [email, setEmail] = useState();

  return (
    <div className={cx('container')}>
      <PageTitle title="내 문의사항" subtitle="문의사항 작성 시 입력한 이메일을 입력해주세요." reverse={true} />
      <div className={cx('limiter')}>
        {email === undefined && <EnterEmail onSetEmail={setEmail} />}
        {email && <QnaList email={email} />}
      </div>
    </div>
  );
};

export default MyQna;
