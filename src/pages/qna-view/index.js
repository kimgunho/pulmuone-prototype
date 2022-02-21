import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import axios from 'axios';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

import styles from './index.module.scss';
import Jumbotron from '../../components/shared/Jumbotron';
import TabBar from '../../components/shared/TabBar';
import PageTitle from '../../components/shared/PageTitle';
import BusinessForm from './forms/Business';
import CleaningForm from './forms/Cleaning';
import GeneralForm from './forms/General';
import OrderForm from './forms/Order';
import ReportForm from './forms/Report';
import jumbotron from '../../assets/images/customer/jumbotron.jpg';

const cx = classNames.bind(styles);

const QnaView = () => {
  const navigate = useNavigate();
  const [qnaData, setQnaData] = useState();
  const { type, id } = useParams();

  useEffect(() => {
    axios
      .get(`https://pulmuone.console.flyground.co.kr/api/qna/${type}/${id}`)
      .then((res) => {
        if (res.data.success) {
          setQnaData(res.data.data);
          return;
        }

        navigate('/');
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const getTitle = (type) => {
    switch (type) {
      case 'general':
        return '제품, 배송, 기타 문의';
      case 'order':
        return '가맹점 주문 문의';
      case 'cleaning':
        return '냉온수기 세척 신청';
      case 'business':
        return '가맹점 사업 신청, 문의';
      case 'report':
        return '부정 제보';
      default:
        return 'N/A';
    }
  };

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

  if (qnaData === undefined) {
    return null;
  }

  return (
    <div className={cx('container')}>
      <div className={cx('wrapper')}>
        <Jumbotron title="고객센터" subtitle="Customer Center" background={jumbotron} />
        <TabBar items={tabItems} activeIndex={2} />
      </div>
      <PageTitle title="내 문의사항" />
      <div className={cx('limiter')}>
        <ul className={cx('head')}>
          <li>
            <p>
              <span className={cx('label')}>문의유형</span>
              <span className={cx('value')}>{getTitle(type)}</span>
            </p>
          </li>
          <li>
            <p>
              <span className={cx('label')}>작성일자</span>
              <span className={cx('value')}>{moment(qnaData.createdAt).format('YYYY.MM.DD')}</span>
            </p>
          </li>
        </ul>
        {type === 'general' && <GeneralForm data={qnaData} />}
        {type === 'order' && <OrderForm data={qnaData} />}
        {type === 'cleaning' && <CleaningForm data={qnaData} />}
        {type === 'business' && <BusinessForm data={qnaData} />}
        {type === 'report' && <ReportForm data={qnaData} />}
        <Link className={cx('btn')} to={'/고객센터/내-문의사항'}>
          목록보기
        </Link>
      </div>
    </div>
  );
};

export default QnaView;
