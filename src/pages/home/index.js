import { useRef, useEffect } from 'react';

import S01 from '../../components/home/S01';
import S02 from '../../components/home/S02';
import S03 from '../../components/home/S03';

import './index.scss';

import waterDrop from '../../assets/images/home/water.png';

function Home() {
  const rangeRef = useRef();
  const waterDropRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      waterDropRef.current.classList.add('active');
      setTimeout(() => {
        waterDropRef.current.classList.remove('active');
      }, 500);
    });
  }, []);

  return (
    <div ref={rangeRef} style={{ height: 99999, backgroundColor: 'black' }}>
      <div className="waterDrop">
        <img ref={waterDropRef} src={waterDrop} alt="물방울" />
      </div>
      <S01 />
      <S02 />
      <S03 />
    </div>
  );
}

export default Home;
