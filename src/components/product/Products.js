import classNames from 'classnames/bind';

import styles from './Products.module.scss';

const cx = classNames.bind(styles);

const Products = ({ products, title, color = 'green' }) => {
  return (
    <div className={cx('container')}>
      <h2 className={cx('title')}>{title}</h2>
      <ul className={cx(['products', color === 'green' ? 'green' : 'blue'])}>
        {products.map(({ title, sub, image, price, text }, index) => (
          <li key={index}>
            <h3 className={cx('title')}>
              <span className={cx('sub')}>{sub}</span>
              {title}
            </h3>
            <div className={cx('image')} style={{ backgroundImage: `url(${image})` }}></div>
            <p className={cx('price')}>{price}</p>
            <p className={cx('info')}>
              {text.split('\n').map((line, index) => (
                <span key={index}>{line}</span>
              ))}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
