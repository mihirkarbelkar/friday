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

export const aiCrypto = atom({
  key: 'aiCrypto',
  default: {
    amount: 100,
    expiryTime: null
  }
});

export const aiMutualFunds = atom({
  key: 'aiMutualFunds',
  default: {
    amount: 100,
    expiryTime: null
  }
});
