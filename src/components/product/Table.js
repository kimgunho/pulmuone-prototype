import classNames from 'classnames/bind';

import styles from './Table.module.scss';

const cx = classNames.bind(styles);

const Table = ({ table }) => {
  return (
    <div className={cx(['table', table.color === 'green' ? 'green' : 'blue'])}>
      <h3 className={cx('title')}>{table.title}</h3>
      <ul className={cx('head')}>
        {table.point ? <li className={cx('side')}>null</li> : null}
        {table.head.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>

      <ul className={cx('body')}>
        {table.body.map((list, index) => (
          <li key={index}>
            <ul>
              {list.data.map((text, index) => {
                return table.point ? (
                  <li className={cx({ point: index === 0 })} key={index}>
                    {text}
                  </li>
                ) : (
                  <li key={index}>{text}</li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Table;
