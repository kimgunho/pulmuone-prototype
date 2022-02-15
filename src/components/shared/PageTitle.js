import classNames from 'classnames/bind';

import styles from './PageTitle.module.scss';

const cx = classNames.bind(styles);

function PageTitle({ title, sub, background = '#F5F3EF', subReverse = false }) {
  return (
    <div className={cx('container')} style={{ backgroundColor: background }}>
      {sub && (
        <p className={cx({ reverse: subReverse })}>
          {sub.split('/n').map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </p>
      )}
      <h2>{title}</h2>
    </div>
  );
}

export default PageTitle;
