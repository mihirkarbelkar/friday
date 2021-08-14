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

export const aiOverview = atom({
  key: 'aiOverview',
  default: [
    {
      invested: 100000,
      returns: 124899,
      type: 'Cryptocurrencies'
    },
    {
      invested: 50000,
      returns: 58649,
      type: 'Mutual Funds'
    },
    {
      invested: 90000,
      returns: 143023,
      type: 'Stocks'
    }
  ]
});
