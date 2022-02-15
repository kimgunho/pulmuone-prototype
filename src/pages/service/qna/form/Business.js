// POST 가맹점 사업 신청
import classNames from 'classnames/bind';

import styles from './form.module.scss';

const cx = classNames.bind(styles);

function Business() {
  return (
    <div className={cx('container')}>
      <form>
        <div className={cx('inner')}>
          <ul className={cx('left')}>
            <li>
              <h4 className={cx(['title', 'required'])}>이름</h4>
              <div className={cx('box')}>
                <input className={cx('text')} type="text" placeholder="이름을 작성해주세요" />
              </div>
            </li>
            <li>
              <h4 className={cx(['title', 'required'])}>이메일</h4>
              <div className={cx('box')}>
                <input className={cx('text')} type="text" placeholder="이메일을 작성해주세요" />
                <p className={cx('connect')}>@</p>
                <input className={cx('text')} type="text" placeholder="직접 입력" />
              </div>
            </li>
            <li>
              <h4 className={cx(['title', 'required'])}>개설희망지역</h4>
              <div className={cx('box')}>
                <select>
                  <option value={''}>선택</option>
                </select>
              </div>
            </li>
            <li>
              <h4 className={cx(['title', 'required'])}>제목</h4>
              <div className={cx('box')}>
                <input className={cx('text')} type="text" placeholder="제목을 작성해주세요" />
              </div>
            </li>
          </ul>

          <ul className={cx('right')}>
            <li>
              <h4 className={cx(['title', 'required'])}>휴대전화</h4>
              <div className={cx(['box', 'background'])}>
                <input className={cx(['text', 'center'])} type="text" placeholder="010" maxLength={3} />
                <p className={cx('connect')}>-</p>
                <input className={cx(['text', 'center'])} type="text" placeholder="0000" maxLength={4} />
                <p className={cx('connect')}>-</p>
                <input className={cx(['text', 'center'])} type="text" placeholder="0000" maxLength={4} />
              </div>
            </li>
            <li>
              <h4 className={cx(['title', 'required'])}>일반전화</h4>
              <div className={cx(['box', 'background'])}>
                <input className={cx(['text', 'center'])} type="text" placeholder="010" maxLength={3} />
                <p className={cx('connect')}>-</p>
                <input className={cx(['text', 'center'])} type="text" placeholder="0000" maxLength={4} />
                <p className={cx('connect')}>-</p>
                <input className={cx(['text', 'center'])} type="text" placeholder="0000" maxLength={4} />
                <ul className={cx(['side', 'radio'])}>
                  <li>
                    <input id="phone_home" className={cx('radio')} type="radio" value={'home'} name="phone_area" />
                    <label htmlFor="phone_home">집</label>
                  </li>
                  <li>
                    <input id="phone_office" className={cx('radio')} type="radio" value={'office'} name="phone_area" />
                    <label htmlFor="phone_office">회사</label>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <h4 className={cx(['title', 'required'])}>상세내용</h4>
              <div className={cx('box')}>
                <textarea></textarea>
              </div>
            </li>
          </ul>
        </div>
        <input type={'submit'} value={'접수하기'} className={cx('btn')} />
      </form>

      <div className={cx('section')}>
        <h3 className={cx('title')}>풀무원샘물은 여러분의 든든한 파트너가 되겠습니다.</h3>
        <p>풀무원샘물 가맹점 개설 온라인으로 편리하게 문의하세요. 기타 문의는 아래 연락처를 이용 바랍니다.</p>

        <div className={cx('inner')}>
          <h4>
            풀무원샘물과 함께 성장할 파트너를 모십니다.
            <br />
            풀무원샘물의 기업이념과 제품 경쟁력을 바탕으로 창업을 희망하시는
            <br />
            예비 가맹점주 여러분의 참여를 기다립니다.
          </h4>

          <p>
            전국의 약 260명의 가맹점 사장님들이 사업의 안정성을 증명해 주시고 계십니다. (국내 최고 가맹점 수)
            <br />
            현재 전체 가맹점의 약 73%인 191여 명의 가맹점 사장님들이 10년 이상을 풀무원샘물의 사업 파트너로서 함께 하고 계십니다.
            <br />
            지역별 영업사원의 가맹점 밀착 관리와 지원 제도 및 고객만족 경영을 통해 단기간 내 소정의 목표를 이룰 수 있도록 도와드립니다.
            <br />
            초기에는 사무실이 필요 없는 무점포 사업입니다. (건물 임대료 등 관리 비용 부담이 없습니다.)
            <br />
            강력한 브랜드 파워와 제품 경쟁력으로 사업의 성공을 지원해 드립니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Business;
