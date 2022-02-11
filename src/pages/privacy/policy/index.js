import classNames from 'classnames/bind';

import styles from './index.module.scss';

import PageTitle from '../../../components/shared/PageTitle';

const cx = classNames.bind(styles);

function Policy() {
  return (
    <div className={cx('container')}>
      <PageTitle title="개인정보 처리방침" />
      <div className={cx('limiter')}>
        <div className={cx('content')}>
          <div>
            <h3>개인정보 처리 방침</h3>

            <ul>
              <li>
                1. 개인정보란 생존하는 개인에 관한 정보로서 당해 정보에 포함되어 있는 성명 등의 사항에 의하여 당해 개인을 식별할 수 있는
                정보 (당해 정보만으로는 특정 개인을 식별할 수 없더라도 다른정보와 용이하게 결합하여 식별할 수 있는 것을 포함합니다)를
                말합니다.
              </li>
              <li>
                2. 풀무원샘물은 귀하의 개인정보보호를 매우 중요시하며, 『정보통신망 이용촉진 및 정보보호에 관한 법률』상의 개인정보보호규정
                및 정보통신부가 제정한 『개인정보보호지침』을 준수하고 있습니다. 풀무원샘물은 개인정보처리방침을 통하여 귀하께서 제공하시는
                개인정보가 어떠한 용도와 방식으로 이용되고 있으며 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
              </li>
              <li>회사는 개인정보처리방침을 홈페이지에 공개함으로써 귀하께서 언제나 용이하게 보실 수 있도록조치하고 있습니다.</li>
              <li>
                3. 회사는 개인정보처리방침의 지속적인 개선을 위하여 개인정보처리방침을 개정하는데 필요한 절차를 정하고 있습니다. 그리고
                개인정보처리방침을 개정하는 경우 개정된 사항을 귀하께서 쉽게 알아볼 수 있도록 하고 있습니다.
              </li>
            </ul>
          </div>

          <div>
            <h3>개인정보 수집의 범위</h3>
            <p>
              개인정보란 생존하는 개인에 관한 정보로서 당해 정보에 포함되어 있는 성명 등의 사항에 의하여 당해 개인을 식별할 수 있는 정보
              (당해 정보만으로는 특정 개인을 식별할 수 없더라도 다른 정보와 용이하게 결합하여 식별할 수 있는 것을 포함합니다)를 말합니다.
            </p>
          </div>

          <div>
            <h3>개인정보 수집에 대한 동의</h3>
            <p>
              회사는 귀하께서 게시판에 글을 쓸 때 본인의 정보를 게재하는 것으로 개인 정보 수집에 동의한 것으로 간주하며, 개인정보수집 및
              이용 동의 또는 이용약관의 내용에 대해 ‘동의함’ 또는 ‘동의 안 함’에 체크 할수 있는 절차를 마련하여, ‘동의함’을 체크하면
              개인정보 수집에 대해 동의 한 것으로 봅니다.
            </p>
          </div>
          <div>
            <h3>개인정보 수집 항목</h3>
            <ul>
              <li>
                ① 고객님은 상담, 서비스 신청 등을 위해 아래와 같은 개인정보를 수집하고 있습니다.
                <span>-이름, 핸드폰 번호, 주소, 이메일을 수집합니다.</span>
              </li>
              <li>
                ② 또한 서비스 이용과정이나 사업 처리 과정에서 아래와 같은 정보들이 생성되어 수집 될 수 있습니다.
                <span>-서비스 이용기록, 접속 로그, 쿠키, 접속 IP정보</span>
              </li>
            </ul>
          </div>
          <div>
            <h3>개인정보의 수집 목적 및 이용 목적</h3>

            <ul>
              <li>
                ① 회사는 다음과 같은 목적을 위하여 개인정보를 수집하고 있습니다.
                <span>- 성명 : 생수 배달 신청 서비스 이용에 따른 본인 식별 절차에 이용</span>
                <span>
                  - 이메일주소, 휴대폰 번호, 주소 : 고지사항 전달, 본인 의사 확인, 불만 처리 등 원활한 의사소통 경로의 확보, 새로운
                  서비스/신상품이나 이벤트 정보 등의 안내, 쇼핑 몰품 배송에 대한 정확한 배송 정보 확보{' '}
                </span>
              </li>
              <li>
                ② 회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.
                <span>- 홈페이지, 서면양식, 전화/팩스를 통-한 배송신청, 상담 게시판, 경품 행사 응모, 배송신청</span>
                <span>- 추후 법정 대리인 본인확인, 분쟁 조정을 위한 기록보존, 불만처리 등 민원처리, 고지사항 전달</span>
                <span>
                  - 신규 서비스 개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보 제공 및 참여기회 제공, 접속빈도 파악, 회원의 서비스이용에
                  대한 통계{' '}
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3>목적 외 사용 및 제3자에 대한 제공 및 공유</h3>

            <ul>
              <li>
                ① 풀무원샘물은 귀하의 개인정보를 「개인정보의 수집목적 및 이용목적」에서 고지한 범위 내에서 사용하며, 동 범위를 초과하여
                이용하거나 타인 또는 타기업 기관에 제공하지 않습니다. 특히 다음의 경우는 주의를 기울여 개인정보를 이용 및 제공할 것입니다.
                <span>
                  - 제휴관계: 보다 나은 서비스 제공을 위하여 귀하의 개인정보를 제휴사에게 제공하거나 또는 제휴사와 공유할 수 있습니다.
                  개인정보를 제공하거나 공유할 경우에는 사전에 귀하께 제휴사가 누구인지, 제공 또는 공유되는 개인정보항목이 무엇인지, 왜
                  그러한 개인정보가 제공되거나 공유되어야 하는지, 그리고 언제까지 어떻게 보호/관리되는지에 대해 개별적으로 전자우편 및
                  서면을 통해 고지하여 동의를 구하는 절차를 거치게 되며, 귀하께서 동의하지 않는 경우에는 제휴사에게 제공하거나 제휴사와
                  공유하지 않습니다. 제휴관계에 변화가 있거나 제휴관계가 종결될 때도 같은 절차에 의하여 고지하거나 동의를 구합니다.
                </span>
                <span>
                  - 위탁 처리: 원활한 업무 처리를 위해 이용자의 개인정보를 위탁 처리할 경우 반드시 사전에 위탁처리 업체명과 위탁 처리되는
                  개인정보의 범위, 업무위탁 목적, 위탁 처리되는 과정, 위탁관계 유지기간 등에 대해 상세하게 고지합니다.
                </span>
                <span>
                  - 매각. 인수합병 등: 서비스제공자의 권리와 의무가 완전 승계. 이전되는 경우 반드시 사전에 정당한 사유와 절차에 대해
                  상세하게 고지할 것이며 이용자의 개인정보에 대한 동의 철회의 선택권을 부여합니다.{' '}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Policy;
