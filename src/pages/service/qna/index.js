import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './index.module.scss';

import PageTitle from '../../../components/shared/PageTitle';
import PolicyContent from '../../../components/shared/PolicyContent';

const cx = classNames.bind(styles);

function QNA() {
  const [clicked, setClicked] = useState(false);
  const checkboxRef = useRef();

  const onClick = () => {
    const { checked } = checkboxRef.current;
    setClicked(checked);
  };

  return (
    <div className={cx('container')}>
      <PageTitle title="문의하기" sub="고객님께서 문의하신 내용에 대해 신속한 답변을 드리겠습니다." subReverse={true} />
      <div className={cx('limiter')}>
        <Link className={cx('btn')} to="">
          내 문의사항 보기
        </Link>

        <div className={cx('section')}>
          <h3 className={cx('title')}>개인정보 처리 방침</h3>
          <div className={cx('overflow')}>
            <PolicyContent />
          </div>
        </div>

        <div className={cx('box')}>
          <form>
            <p className={cx('agreement')} onClick={onClick}>
              <label className={cx({ active: clicked })} htmlFor="policy"></label>
              <input required ref={checkboxRef} type="checkbox" id="policy" name="policy" />
              <span>개인정보 처리 방침에 동의합니다.</span>
            </p>

            <div className={cx(['basic', 'formList'])}>
              <h3 className={cx('title')}>기본정보</h3>
              <div className={cx('inner')}>
                <ul className={cx('list')}>
                  <li>
                    <p className={cx('required')}>이름</p>
                    <div className={cx('box')}>
                      <input type={'text'} />
                    </div>
                  </li>
                  <li>
                    <p className={cx('required')}>이메일</p>
                    <div className={cx('box')}>
                      <input type={'text'} />
                      <span>@</span>
                      <input type={'text'} />
                    </div>
                  </li>
                  <li>
                    <p className={cx('required')}>휴대전화</p>
                    <div className={cx(['box', 'background'])}>
                      <input type={'text'} placeholder="010" maxLength={3} className={cx('alignCenter')} />
                      <span>-</span>
                      <input type={'text'} placeholder="0000" maxLength={4} className={cx('alignCenter')} />
                      <span>-</span>
                      <input type={'text'} placeholder="0000" maxLength={4} className={cx('alignCenter')} />
                    </div>
                  </li>
                </ul>
                <ul className={cx('list')}>
                  <li>
                    <p className={cx('required')}>주소</p>
                    <div className={cx('box')}>
                      <input placeholder="주소를 입력해주세요" type={'text'} />
                      <button className={cx('btn')}>우편번호 찾기</button>
                    </div>
                    <div className={cx('box')}>
                      <input type={'text'} placeholder="상세주소를 입력해 주세요" />
                    </div>
                    <div className={cx('box')}>
                      <input type={'text'} placeholder="상세주소를 입력해 주세요" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className={cx(['qnaData', 'formList'])}>
              <h3 className={cx('title')}>문의내용</h3>
              <div className={cx('inner')}>
                <ul className={cx('list')}>
                  <li>
                    <p className={cx('required')}>문의사항 분류</p>
                    <div className={cx('box')}>
                      <select>
                        <option>1. 제품문의, 배송 문의, 기타 문의</option>
                      </select>
                    </div>
                  </li>
                  <li>
                    <p className={cx('required')}>주문제품</p>
                    <div className={cx('box')}>
                      <select>
                        <option>제품을 선택해 주세요</option>
                      </select>
                    </div>
                  </li>
                  <li>
                    <p className={cx('required')}>구매처</p>
                    <div className={cx('box')}>
                      <input type={'text'} placeholder="구매처를 입력해 주세요" />
                    </div>
                  </li>
                </ul>
                <ul className={cx('list')}>
                  <li>
                    <p>첨부파일</p>
                    <div className={cx('box')}>
                      <input placeholder="파일을 선택해 주세요" type={'text'} />
                      <button className={cx('btn')}>업로드 하기</button>
                    </div>
                  </li>
                  <li>
                    <p className={cx('required')}>상세내용</p>
                    <div className={cx('box')}>
                      <textarea></textarea>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <input type={'submit'} value={'접수하기'} className={cx('btn')} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default QNA;
