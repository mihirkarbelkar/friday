import { atom } from 'recoil';

export const sampleState = atom({
  key: 'sampleState',
  default: ''
});

export const aiStocks = atom({
  key: 'aiStocks',
  default: {
    amount: 100,
    expiryTime: null
  }
});
