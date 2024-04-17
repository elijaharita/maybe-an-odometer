import React from 'react';

import styles from '@system/Odometer.module.scss';

export default function Odometer(props) {
  let digitCount = Math.max(props.minDigits || 0, Math.ceil(Math.log10(props.value)));

  let digits = new Array();
  for (let i = digitCount - 1; i >= 0; i--) {
    let placeMultiplier = Math.pow(10, i);
    let digitValue = Math.floor((props.value / placeMultiplier) % 10);
    digits.push(<DigitDisplay digitValue={digitValue} place={i} key={i} />);
  }

  let width = `${digitCount}rem`;
  return (
    <div className={styles.root} style={{ width }}>
      {digits}
    </div>
  );
}

function DigitDisplay(props) {
  let digits = '0123456789';

  return (
    <div className={styles.digitDisplay} style={{ top: Math.floor(-props.digitValue) * 2 + 'rem' }}>
      {digits.split('').map((i) => (
        <div className={styles.digit} key={i}>
          {i}
        </div>
      ))}
    </div>
  );
}
