import classNames from 'classnames/bind';

import styles from './index.module.scss';

import { finance } from '../../../assets/data/finance';

import PageTitle from '../../../components/shared/PageTitle';

const cx = classNames.bind(styles);

function Finance() {
  const numberWithCommas = (string) => {
    return string.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <div className={cx('container')}>
      <PageTitle title={'전자공시'} />
      <div className={cx('selectInner')}>
        <div className={cx('select')}>
          <select>
            <option>2021 전자공시</option>
          </select>
          <button>확인하기</button>
        </div>
      </div>

      <div className={cx('section')}>
        <div className={cx('limiter')}>
          <div className={cx('table')}>
            <p className={cx('sub')}>전자공시 - 18기 결산 공고</p>
            <h3 className={cx('title')}>재무상태표</h3>

            <p className={cx('date')}>2020년 12월 31일 현재(단위 :원)</p>
            <div className={cx('head')}>
              <ul>
                <li>과목</li>
                <li>제 18(당) 기</li>
                <li>제 17(전) 기</li>
              </ul>
            </div>

            <div className={cx('body')}>
              <ul>
                {finance.map((item, index) => (
                  <li key={index}>
                    <ul>
                      <li>{item.subject}</li>
                      {item.cardinalAfter.map((cardinal, index) => (
                        <li key={index}>{numberWithCommas(cardinal)}</li>
                      ))}
                      {item.cardinalBefore.map((cardinal, index) => (
                        <li key={index}>{numberWithCommas(cardinal)}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={cx('inner')}>
            <div className={cx('ann')}>
              <p>위와 같이 공고함</p>
              <ul>
                <li>2021년 3월 31일</li>
                <li>풀무원샘물 주식회사</li>
                <li>대표이사 조 현 근</li>
              </ul>
            </div>
            <div className={cx('text')}>
              <p>
                감사의견 : 우리의 의견으로는 별첨된 회사의 재무제표는 회사의 2020년 12월 31일 현재의 재무상태,
                <br />
                동일로 종료되는 보고기간의 재무성과 및 현금흐름을 일반기업회계기준에 따라, 중요성의 관점에서 공정하게 표시하고 있습니다.
                <span>한영회계법인 대표이사 박용근</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Finance;
