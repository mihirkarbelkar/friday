import React, { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { sampleState } from 'atoms/sample';

const Dashboard = () => {
  const sample = useRecoilValue(sampleState);
  const setSampleVal = useSetRecoilState(sampleState);

  useEffect(() => {
    setSampleVal('testing recoil');
  }, []);

  return (
    <h1>Dashboard: {sample}</h1>
  );
};

export default Dashboard;
