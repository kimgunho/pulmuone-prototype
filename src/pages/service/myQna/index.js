import classNames from 'classnames/bind';

import styles from './index.module.scss';

import PageTitle from '../../../components/shared/PageTitle';

const cx = classNames.bind(styles);

function MyQna() {
  return (
    <div className={cx('container')}>
      <PageTitle title="내 문의사항" sub="문의사항 확인시 문의시에 입력한 이메일로 조회 해 주세요." subReverse={true} />
      <div className={cx('limiter')}>
        <form>
          <div className={cx('inner')}>
            <div className={cx('box')}>
              <input className={cx('text')} type="text" placeholder="이메일을 작성해주세요" />
              <p className={cx('connect')}>@</p>
              <input className={cx('text')} type="text" placeholder="직접 입력" />
            </div>
          </div>
          <input type={'submit'} value={'확인'} className={cx('btn')} />
        </form>
      </div>
    </div>
  );
}

export default MyQna;
