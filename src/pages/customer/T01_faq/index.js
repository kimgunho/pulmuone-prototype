import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './index.module.scss';
import { FAQ as data } from '../../../assets/data/faq';
import PageTitle from '../../../components/shared/PageTitle';

const cx = classNames.bind(styles);

const FAQ = () => {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [activeRows, setActiveRows] = useState({});

  const onClickCategory = (index) => {
    setCategoryIndex(index);
    setActiveRows({});
  };

  const onClickRow = (index) => {
    setActiveRows((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // 카테고리
  const categories = data.map((item) => item.category).reduce((unique, item) => (unique.includes(item) ? unique : [...unique, item]), []);
  // 내역
  const faqList = categoryIndex === 0 ? data : data.filter((item) => item.category === categories[categoryIndex - 1]);

  return (
    <div className={cx('container')}>
      <PageTitle title="자주묻는질문" subtitle="찾으시는 내용이 없는 경우 문의하기를 통해 문의해주세요." reverse={true} />
      <div className={cx('limiter')}>
        <ul className={cx('head')}>
          <li className={cx({ active: categoryIndex === 0 })} onClick={() => onClickCategory(0)}>
            전체
          </li>
          {categories.map((category, index) => (
            <li onClick={() => onClickCategory(index + 1)} className={cx({ active: categoryIndex === index + 1 })} key={index}>
              {category}
            </li>
          ))}
        </ul>
        <ul className={cx('body')}>
          {faqList.map((item, index) => (
            <li className={cx({ active: activeRows[index] })} onClick={() => onClickRow(index)} key={index}>
              <h3 className={cx('title')}>{item.title}</h3>
              <div className={cx('content')}>
                <p>
                  {item.answer.split('\n').map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FAQ;
