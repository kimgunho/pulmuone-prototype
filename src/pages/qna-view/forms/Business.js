import classNames from 'classnames/bind';

import styles from './form.module.scss';

import { telHyphen } from '../../../util/regular';

const cx = classNames.bind(styles);

function Business({ data }) {
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
                <h4 className={cx(['title', 'required'])}>개설희망지역</h4>
                <div className={cx('box')}>
                  <input readOnly={true} value={data.location} className={cx('text')} type="text" />
                </div>
              </li>
              <li>
                <h4 className={cx(['title', 'required'])}>제목</h4>
                <div className={cx('box')}>
                  <input readOnly={true} value={data.title} className={cx('text')} type="text" />
                </div>
              </li>
            </ul>

            <ul className={cx('right')}>
              <li>
                <h4 className={cx(['title', 'required'])}>휴대전화</h4>
                <div className={cx(['box', 'background'])}>
                  <input readOnly={true} value={telHyphen(data.mobile)} className={cx(['text', 'center'])} type="text" />
                </div>
              </li>
              <li>
                <h4 className={cx('title')}>일반전화</h4>
                <div className={cx(['box', 'background'])}>
                  <input readOnly={true} value={data.phone} className={cx(['text', 'center'])} type="text" />
                </div>
              </li>
              <li>
                <h4 className={cx(['title', 'required'])}>상세내용</h4>
                <div className={cx('box')}>
                  <textarea readOnly={true} value={data.content}></textarea>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>loading...</div>;
  }
}

export default Business;
