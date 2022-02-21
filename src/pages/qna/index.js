import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import axios from 'axios';
import moment from 'moment';

import styles from './index.module.scss';
import Jumbotron from '../../components/shared/Jumbotron';
import TabBar from '../../components/shared/TabBar';
import PageTitle from '../../components/shared/PageTitle';
import Business from './viewForm/Business';
import Cleaning from './viewForm/Cleaning';
import General from './viewForm/General';
import Order from './viewForm/Order';
import Report from './viewForm/Report';
import jumbotron from '../../assets/images/customer/jumbotron.jpg';

const cx = classNames.bind(styles);

const View = () => {
  const [data, setData] = useState(null);
  const { id, type } = useParams();
  let formIndex;
  let typeTitle;

  switch (type) {
    case 'general':
      typeTitle = '제품문의, 배송문의, 기타문의';
      break;
    case 'business':
      typeTitle = '가맹점 사업신청 문의';
      break;
    case 'order':
      typeTitle = '가맹점 주문 문의';
      break;
    case 'cleaning':
      typeTitle = '냉온수기 세척 신청';
      break;
    case 'report':
      typeTitle = '부정제보 문의';
      break;
    default:
      break;
  }

  useEffect(() => {
    axios
      .get(`https://pulmuone.console.flyground.co.kr/api/qna/${type}/${id}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  switch (type) {
    case 'general':
      formIndex = 0;
      break;

    case 'business':
      formIndex = 1;
      break;

    case 'order':
      formIndex = 2;
      break;

    case 'cleaning':
      formIndex = 3;
      break;

    case 'report':
      formIndex = 4;
      break;

    default:
      formIndex = 5;
      break;
  }

  const tabItems = [
    {
      title: '자주묻는질문',
      link: '/고객센터/자주묻는질문',
    },
    {
      title: '문의하기',
      link: '/고객센터/문의하기',
    },
    {
      title: '내 문의사항',
      link: '/고객센터/내-문의사항',
    },
  ];

  return (
    <div className={cx('container')}>
      <div className={cx('wrapper')}>
        <Jumbotron title="고객센터" sub="Customer Center" background={jumbotron} />
        <TabBar items={tabItems} activeIndex={2} />
      </div>
      <PageTitle title={'내 문의사항'} />
      <div className={cx('limiter')}>
        <ul className={cx('head')}>
          <li>
            <p>
              <span className={cx('label')}>문의사항 분류</span>
              <span className={cx('value')}>{typeTitle}</span>
            </p>
          </li>
          <li>
            <p>
              <span className={cx('label')}>날짜</span>
              <span className={cx('value')}>{data && moment(data.createdAt).format('YYYY.MM.DD')}</span>
            </p>
          </li>
        </ul>
        {formIndex === 0 && <General data={data} />}
        {formIndex === 1 && <Business data={data} />}
        {formIndex === 2 && <Order data={data} />}
        {formIndex === 3 && <Cleaning data={data} />}
        {formIndex === 4 && <Report data={data} />}
        <Link className={cx('btn')} to={'/고객센터/내-문의사항'}>
          목록보기
        </Link>
      </div>
    </div>
  );
};

export default View;
