// POST 가맹점 주문 신청
import classNames from 'classnames/bind';

import styles from './form.module.scss';

const cx = classNames.bind(styles);

function Order() {
  return (
    <div className={cx('container')}>
      <form>
        <div className={cx('inner')}>
          <ul className={cx('left')}>
            <li>
              <h4 className={cx(['title', 'required'])}>이름</h4>
              <div className={cx('box')}>
                <input className={cx('text')} type="text" placeholder="이름을 작성해주세요" />
              </div>
            </li>
            <li>
              <h4 className={cx(['title', 'required'])}>이메일</h4>
              <div className={cx('box')}>
                <input className={cx('text')} type="text" placeholder="이메일을 작성해주세요" />
                <p className={cx('connect')}>@</p>
                <input className={cx('text')} type="text" placeholder="직접 입력" />
              </div>
            </li>
            <li>
              <h4 className={cx(['title', 'required'])}>휴대전화</h4>
              <div className={cx(['box', 'background'])}>
                <input className={cx(['text', 'center'])} type="text" placeholder="010" maxLength={3} />
                <p className={cx('connect')}>-</p>
                <input className={cx(['text', 'center'])} type="text" placeholder="0000" maxLength={4} />
                <p className={cx('connect')}>-</p>
                <input className={cx(['text', 'center'])} type="text" placeholder="0000" maxLength={4} />
              </div>
            </li>
            <li>
              <h4 className={cx(['title', 'required'])}>주문제품</h4>
              <div className={cx('box')}>
                <select>
                  <option value={''}>제품을 선택해주세요</option>
                </select>
              </div>
            </li>
          </ul>

          <ul className={cx('right')}>
            <li>
              <h4 className={cx(['title', 'required'])}>주소</h4>
              <div className={cx('box')}>
                <input className={cx('text')} type="text" placeholder="주소를 입력해 주세요" />
                <button className={cx('btn')}>우편번호 찾기</button>
              </div>
              <div className={cx('box')}>
                <input className={cx('text')} type="text" placeholder="상세주소를 입력해 주세요" />
              </div>
              <div className={cx('box')}>
                <input className={cx('text')} type="text" placeholder="상세주소를 입력해 주세요" />
              </div>
            </li>
            <li>
              <h4 className={cx('title')}>방문경로</h4>
              <div className={cx('box')}>
                <input className={cx('text')} type="text" placeholder="방문경로를 작성해주세요" />
              </div>
            </li>
          </ul>
        </div>
        <input type={'submit'} value={'접수하기'} className={cx('btn')} />
      </form>
    </div>
  );
}

export default Order;
