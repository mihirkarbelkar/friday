import { atom } from 'recoil';

export const dashboardStocks = atom({
  key: 'dashboardStocks',
  default: [{
    image: 'https://picsum.photos/200',
    label: 'Reliance Industries',
    symbol: 'RELIANCE',
    currentPrice: 2013,
    previousPrice: 2000,
    chartData: []
  }, {
    image: 'https://picsum.photos/200',
    label: 'Reliance Industries',
    symbol: 'RELIANCE',
    currentPrice: 2013,
    previousPrice: 2000,
    chartData: []
  }, {
    image: 'https://picsum.photos/200',
    label: 'Reliance Industries',
    symbol: 'RELIANCE',
    currentPrice: 2013,
    previousPrice: 2000,
    chartData: []
  }, {
    image: 'https://picsum.photos/200',
    label: 'Reliance Industries',
    symbol: 'RELIANCE',
    currentPrice: 2013,
    previousPrice: 2000,
    chartData: []
  }, {
    image: 'https://picsum.photos/200',
    label: 'Reliance Industries',
    symbol: 'RELIANCE',
    currentPrice: 2013,
    previousPrice: 2000,
    chartData: []
  }]
});

export const newsList = atom({
  key: 'latestNews',
  default: [{
    image: 'https://picsum.photos/200',
    excerpt: 'Lorem ipsum dolor sit amet'
  }, {
    image: 'https://picsum.photos/200',
    excerpt: 'Lorem ipsum dolor sit amet'
  }, {
    image: 'https://picsum.photos/200',
    excerpt: 'Lorem ipsum dolor sit amet'
  }, {
    image: 'https://picsum.photos/200',
    excerpt: 'Lorem ipsum dolor sit amet'
  }, {
    image: 'https://picsum.photos/200',
    excerpt: 'Lorem ipsum dolor sit amet'
  }]
});

export const stockSummary = atom({
  key: 'stockSummary',
  default: {
    invested: 100000,
    returns: 124000,
    companies: [{
      image: 'https://picsum.photos/200',
      label: 'Reliance Industries',
      symbol: 'RELIANCE',
      currentPrice: 2013,
      previousPrice: 2000,
      chartData: []
    }, {
      image: 'https://picsum.photos/200',
      label: 'Reliance Industries',
      symbol: 'RELIANCE',
      currentPrice: 2013,
      previousPrice: 2000,
      chartData: []
    }, {
      image: 'https://picsum.photos/200',
      label: 'Reliance Industries',
      symbol: 'RELIANCE',
      currentPrice: 2013,
      previousPrice: 2000,
      chartData: []
    }]
  }
});
