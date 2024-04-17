import DefaultLayout from '@root/components/DefaultLayout';
import Odometer from '@root/system/Odometer';
import * as React from 'react';

export default function OdometerExample(props) {
  let [value, setValue] = React.useState(0);
  
  React.useEffect(() => {
    setInterval(() => {
      let digits = Math.ceil(Math.random() * 5);
      let value = Math.random() * Math.pow(10, digits);
      setValue(value);
    }, 1000);
  }, []);
  
  return (
    <DefaultLayout previewPixelSRC="https://intdev-global.s3.us-west-2.amazonaws.com/template-app-icon.png">
      My awesome inline odometer says <Odometer minDigits={3} value={value} />!
    </DefaultLayout>
  );
}