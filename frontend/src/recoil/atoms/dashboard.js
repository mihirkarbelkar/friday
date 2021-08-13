import { atom } from "recoil";

export const dashboardStocks = atom({
  key: "dashboardStocks",
  default: {
    stocks: [
      {
        image: "https://picsum.photos/200",
        label: "Reliance Industries",
        symbol: "RELIANCE",
        currentPrice: 2013,
        previousPrice: 2000,
        chartData: [],
      },
      {
        image: "https://picsum.photos/200",
        label: "Reliance Industries",
        symbol: "RELIANCE",
        currentPrice: 2013,
        previousPrice: 2000,
        chartData: [],
      },
      {
        image: "https://picsum.photos/200",
        label: "Reliance Industries",
        symbol: "RELIANCE",
        currentPrice: 2013,
        previousPrice: 2000,
        chartData: [],
      },
      {
        image: "https://picsum.photos/200",
        label: "Reliance Industries",
        symbol: "RELIANCE",
        currentPrice: 2013,
        previousPrice: 2000,
        chartData: [],
      },
      {
        image: "https://picsum.photos/200",
        label: "Reliance Industries",
        symbol: "RELIANCE",
        currentPrice: 2013,
        previousPrice: 2000,
        chartData: [],
      },
    ],
    crypto: [
      {
        image: "https://picsum.photos/200",
        label: "Reliance Industries",
        symbol: "RELIANCE",
        currentPrice: 2013,
        previousPrice: 2000,
        chartData: [],
      },
      {
        image: "https://picsum.photos/200",
        label: "Reliance Industries",
        symbol: "RELIANCE",
        currentPrice: 2013,
        previousPrice: 2000,
        chartData: [],
      },
    ],
    mf: [
      {
        image: "https://picsum.photos/200",
        label: "Reliance Industries",
        symbol: "RELIANCE",
        currentPrice: 2013,
        previousPrice: 2000,
        chartData: [],
      },
      {
        image: "https://picsum.photos/200",
        label: "Reliance Industries",
        symbol: "RELIANCE",
        currentPrice: 2013,
        previousPrice: 2000,
        chartData: [],
      },
    ],
  },
});

export const newsList = atom({
  key: "latestNews",
  default: {
    stocks: [
      {
        image: "https://picsum.photos/200",
        excerpt: "Lorem ipsum dolor sit amet",
      },
      {
        image: "https://picsum.photos/200",
        excerpt: "Lorem ipsum dolor sit amet",
      },
      {
        image: "https://picsum.photos/200",
        excerpt: "Lorem ipsum dolor sit amet",
      },
      {
        image: "https://picsum.photos/200",
        excerpt: "Lorem ipsum dolor sit amet",
      },
      {
        image: "https://picsum.photos/200",
        excerpt: "Lorem ipsum dolor sit amet",
      },
    ],
    mf: [
      {
        image: "https://picsum.photos/200",
        excerpt: "Lorem ipsum dolor sit amet",
      },
      {
        image: "https://picsum.photos/200",
        excerpt: "Lorem ipsum dolor sit amet",
      },
    ],
    crypto: [
      {
        image: "https://picsum.photos/200",
        excerpt: "Lorem ipsum dolor sit amet",
      },
      {
        image: "https://picsum.photos/200",
        excerpt: "Lorem ipsum dolor sit amet",
      },
    ],
  },
});

export const stockSummary = atom({
  key: "stockSummary",
  default: {
    stocks: {
      invested: 100000,
      returns: 124000,
      companies: [
        {
          image: "https://picsum.photos/200",
          label: "Reliance Industries",
          symbol: "RELIANCE",
          currentPrice: 2013,
          previousPrice: 2000,
          chartData: [],
        },
        {
          image: "https://picsum.photos/200",
          label: "Reliance Industries",
          symbol: "RELIANCE",
          currentPrice: 2013,
          previousPrice: 2000,
          chartData: [],
        },
        {
          image: "https://picsum.photos/200",
          label: "Reliance Industries",
          symbol: "RELIANCE",
          currentPrice: 2013,
          previousPrice: 2000,
          chartData: [],
        },
      ],
    },
    crypto: {
      invested: 15600,
      returns: 120900,
      companies: [
        {
          image: "https://picsum.photos/200",
          label: "Reliance Industries",
          symbol: "RELIANCE",
          currentPrice: 2013,
          previousPrice: 2000,
          chartData: [],
        },
      ],
    },
    mf: {
      invested: 123412,
      returns: 24432,
      companies: [
        {
          image: "https://picsum.photos/200",
          label: "Reliance Industries",
          symbol: "RELIANCE",
          currentPrice: 2013,
          previousPrice: 2000,
          chartData: [],
        },
        {
          image: "https://picsum.photos/200",
          label: "Reliance Industries",
          symbol: "RELIANCE",
          currentPrice: 2013,
          previousPrice: 2000,
          chartData: [],
        },
      ],
    },
  },
});
