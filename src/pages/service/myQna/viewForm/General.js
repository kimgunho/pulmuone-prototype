import classNames from 'classnames/bind';

import styles from './form.module.scss';

import { telHyphen } from '../../../../util/regular';

const cx = classNames.bind(styles);

function General({ data }) {
  if (data !== null) {
    return (
      <div className={cx('container')}>
        <div className={cx('form')}>
          <div className={cx('inner')}>
            <ul className={cx('left')}>
              <li>
                <h4 className={cx(['title', 'required'])}>이름</h4>
                <div className={cx('box')}>
                  <input readOnly={true} value={data.name} className={cx('text')} type="text" />
                </div>
              </li>
              <li>
                <h4 className={cx(['title', 'required'])}>이메일</h4>
                <div className={cx('box')}>
                  <input readOnly={true} value={data.email} className={cx('text')} type="text" />
                </div>
              </li>
              <li>
                <h4 className={cx(['title', 'required'])}>휴대전화</h4>
                <div className={cx(['box', 'background'])}>
                  <input readOnly={true} value={telHyphen(data.mobile)} className={cx(['text', 'center'])} type="text" />
                </div>
              </li>
              <li>
                <h4 className={cx(['title', 'required'])}>주문제품</h4>
                <div className={cx('box')}>
                  <input readOnly={true} value={data.product} className={cx('text')} type="text" />
                </div>
              </li>
              <li>
                <h4 className={cx(['title', 'required'])}>구매처</h4>
                <div className={cx('box')}>
                  <input readOnly={true} value={data.store} className={cx('text')} type="text" />
                </div>
              </li>
            </ul>

            <ul className={cx('right')}>
              <li>
                <h4 className={cx(['title', 'required'])}>주소</h4>
                <div className={cx('box')}>
                  <input value={data.address} readOnly={true} className={cx('text')} type="text" />
                </div>
                <div className={cx('box')}>
                  <input value={data.addressDetail} readOnly={true} className={cx('text')} type="text" />
                </div>
              </li>
              <li>
                <h4 className={cx(['title', 'required'])}>상세내용</h4>
                <div className={cx('box')}>
                  <textarea value={data.content} readOnly={true}></textarea>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>loading</div>;
  }
}

export default General;
