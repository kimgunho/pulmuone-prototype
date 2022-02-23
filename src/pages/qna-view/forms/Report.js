import classNames from 'classnames/bind';

import styles from './form.module.scss';

const cx = classNames.bind(styles);

function Report({ data }) {
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
                <h4 className={cx(['title', 'required'])}>제목</h4>
                <div className={cx('box')}>
                  <input readOnly={true} value={data.title} className={cx('text')} type="text" />
                </div>
              </li>
            </ul>

            <ul className={cx('right')}>
              <li>
                <h4 className={cx(['title', 'required'])}>이메일</h4>
                <div className={cx('box')}>
                  <input readOnly={true} value={data.email} className={cx('text')} type="text" />
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

export default Report;
