import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './index.module.scss';

import { fnq } from '../../../assets/data/fnq';

import PageTitle from '../../../components/shared/PageTitle';

const cx = classNames.bind(styles);

function FNQ() {
  const [headActiveIndex, setHeadActiveIndex] = useState(null);
  const [bodyActiveShow, setBodyActiveShow] = useState({});
  const [filterCategory, setFilterCategory] = useState([]);
  const [currentFnq, setCurrentFnq] = useState(fnq);

  useEffect(() => {
    const filterFnqCategory = fnq.filter((item, index) => fnq.findIndex((item2) => item.category === item2.category) === index);
    setFilterCategory(filterFnqCategory);
  }, []);

  const onClickHeadIndex = (index, category) => {
    setHeadActiveIndex(index);
    handleChangeFnq(category);
    setBodyActiveShow({});
  };

  const onClickBodyActive = (index) => {
    setBodyActiveShow((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleChangeFnq = (category) => {
    if (category === null) {
      setCurrentFnq(fnq);
      return;
    }
    const filterFnq = fnq.filter((item, index) => item.category === category);
    setCurrentFnq(filterFnq);
  };

  return (
    <div className={cx('container')}>
      <PageTitle
        title="FAQ"
        sub="고객님들께서 자주 묻는 질문은 FAQ에서 확인 하실 수 있습니다./n
FAQ에 찾으시는 내용이 없는 경우 문의하기를 통해 문의하여 주십시오."
        subReverse={true}
      />
      <div className={cx('limiter')}>
        <div className={cx('head')}>
          <ul>
            <li className={cx({ active: headActiveIndex === null })} onClick={() => onClickHeadIndex(null, null)}>
              전체
            </li>
            {filterCategory.map((item, index) => (
              <li onClick={() => onClickHeadIndex(index, item.category)} className={cx({ active: index === headActiveIndex })} key={index}>
                {item.category}
              </li>
            ))}
          </ul>
        </div>

        <div className={cx('body')}>
          <ul>
            {currentFnq.map((item, index) => (
              <li className={cx({ active: bodyActiveShow[index] })} onClick={() => onClickBodyActive(index)} key={index}>
                <h3 className={cx('title')}>{item.title}</h3>
                <div className={cx('content')}>
                  <p>{item.answer}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FNQ;
