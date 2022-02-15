// POST부정 제보
import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './form.module.scss';

const cx = classNames.bind(styles);

function Report() {
  const [anonymous, setAnonymous] = useState(false);

  const onClick = () => {
    setAnonymous(!anonymous);
  };

  return (
    <div className={cx('container')}>
      <form>
        <div className={cx('inner')}>
          <ul className={cx('left')}>
            <li>
              <h4 className={cx(['title', 'required'])}>이름</h4>
              <div className={cx('box')}>
                <input className={cx('text')} type="text" placeholder="이름을 작성해주세요" />
                <div className={cx('anonymous')}>
                  <input type="checkbox" id="anonymous" />
                  <label onClick={onClick} htmlFor="anonymous" className={cx(['anonymousLabel', { active: anonymous }])}>
                    <span></span>
                    <p>익명 제보</p>
                  </label>
                </div>
              </div>
            </li>
            <li>
              <h4 className={cx(['title', 'required'])}>제목</h4>
              <div className={cx('box')}>
                <input className={cx('text')} type="text" placeholder="제목을 작성해주세요" />
              </div>
            </li>
          </ul>

          <ul className={cx('right')}>
            <li>
              <h4 className={cx(['title', 'required'])}>이메일</h4>
              <div className={cx('box')}>
                <input className={cx('text')} type="text" placeholder="이메일을 작성해주세요" />
                <p className={cx('connect')}>@</p>
                <input className={cx('text')} type="text" placeholder="직접 입력" />
              </div>
            </li>
            <li>
              <h4 className={cx(['title', 'required'])}>상세내용</h4>
              <div className={cx('box')}>
                <textarea></textarea>
              </div>
            </li>
          </ul>
        </div>
        <input type={'submit'} value={'접수하기'} className={cx('btn')} />
      </form>
    </div>
  );
}

export default Report;
