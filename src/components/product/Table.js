import classNames from 'classnames/bind';

import styles from './Table.module.scss';

const cx = classNames.bind(styles);

const Table = ({ table }) => {
  return (
    <div className={cx(['container', table.color === 'green' ? 'green' : 'blue'])}>
      <h3 className={cx('title')}>{table.title}</h3>
      <div className={cx('table')}>
        <ul className={cx('head')}>
          {table.point && <li className={cx('side')}>null</li>}
          {table.head.map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ul>
        <ul className={cx('body')}>
          {table.body.map((list, index) => (
            <li key={index}>
              <ul>
                {list.data.map((text, index) => (
                  <li key={index} className={cx({ point: table.point && index === 0 })}>
                    {text}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Table;
