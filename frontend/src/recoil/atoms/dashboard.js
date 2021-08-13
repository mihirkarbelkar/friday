import { atom } from "recoil";

export const dashboardStocks = atom({
  key: "dashboardStocks",
  default: {
    stocks: [
      {
        image:
          "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Reliance_Industries_Logo.svg/1200px-Reliance_Industries_Logo.svg.png",
        label: "Reliance Industries",
        symbol: "RELIANCE",
        currentPrice: 2178.974,
        previousPrice: 2144.75,
        chartData: [],
      },
      {
        image:
          "https://www.tcs.com/content/dam/tcs/images/Newtcslogo/logo-white1x.png",
        label: "TCS",
        symbol: "TCS",
        currentPrice: 3573.37,
        previousPrice: 3461.9,
        chartData: [],
      },
      {
        image: "https://picsum.photos/200",
        label: "HDFC Bank",
        symbol: "HDFC",
        currentPrice: 1549.197,
        previousPrice: 1525.1,
        chartData: [],
      },
      {
        image: "https://picsum.photos/200",
        label: "Infosys",
        symbol: "INFOSYS",
        currentPrice: 1734.56,
        previousPrice: 1712.5,
        chartData: [],
      },
      {
        image: "https://picsum.photos/200",
        label: "HUL",
        symbol: "HUL",
        currentPrice: 2714.233,
        previousPrice: 2703.75,
        chartData: [],
      },
    ],
    crypto: [
      {
        image: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
        label: "Bitcoin",
        symbol: "BTC",
        currentPrice: 3586691,
        previousPrice: 3437833.27,
        chartData: [],
      },
      {
        image: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
        label: "Ethereum",
        symbol: "ETH",
        currentPrice: 239088.49,
        previousPrice: 226409.6,
        chartData: [],
      },
      {
        image: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
        label: "Binance Coin",
        symbol: "BNB",
        currentPrice: 29375.52,
        previousPrice: 28445.36,
        chartData: [],
      },
      {
        image: "https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png",
        label: "Cardano",
        symbol: "ADA",
        currentPrice: 147.4,
        previousPrice: 130.5118,
        chartData: [],
      },
      {
        image: "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png",
        label: "Tether",
        symbol: "USDT",
        currentPrice: 74.24,
        previousPrice: 74.21,
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

export const gainersList = atom({
  key: "gainersList",
  default: {
    stocks: [
      {
        image:
          "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Reliance_Industries_Logo.svg/1200px-Reliance_Industries_Logo.svg.png",
        symbol: "TATACONSUM",
        label: "TATA CONSUMER PRODUCTS LIMITED",
        currentPrice: 805.25,
        previousPrice: 774.25,
      },
      {
        symbol: "TCS",
        label: "TATA CONSULTANCY SERVICES LIMITED",
        image:
          "https://www.tcs.com/content/dam/tcs/images/Newtcslogo/logo-white1x.png",
        currentPrice: 3456.05,
        previousPrice: 3351.75,
      },
      {
        label: "LARSEN & TOUBRO LIMITED",
        symbol: "LT",
        currentPrice: 1665.05,
        previousPrice: 1623.45,
      },
      {
        symbol: "HCLTECH",
        label: "HCL TECHNOLOGIES LIMITED",
        currentPrice: 1123.95,
        previousPrice: 1096.5,
      },
      {
        symbol: "TATASTEEL",
        label: "TATA STEEL LIMITED",

        previousPrice: 1435.35,
        currentPrice: 1467.25,
      },
    ],
    mf: [],
    crypto: [],
  },
});

export const losersList = atom({
  key: "losersList",
  default: {
    stocks: [
      {
        symbol: "EICHERMOT",
        label: "EICHER MOTORS LIMITED",
        currentPrice: 2545,
        previousPrice: 2616.55,
      },
      {
        symbol: "DRREDDY",
        label: "DR. REDDY'S LABORATORIES LIMITED",
        currentPrice: 4642.55,
        previousPrice: 4716.4,
      },
      {
        symbol: "POWERGRID",
        label: "POWER GRID CORPORATION OF INDIA LIMITED",

        currentPrice: 184.65,
        previousPrice: 187,
      },
      {
        symbol: "CIPLA",
        label: "CIPLA LIMITED",

        currentPrice: 894.4,
        previousPrice: 905.3,
      },
      {
        symbol: "BRITANNIA",
        label: "BRITANNIA INDUSTRIES LIMITED",

        currentPrice: 3581,
        previousPrice: 3620.8,
      },
    ],
    mf: [],
    crypto: [],
  },
});
export const newsList = atom({
  key: "latestNews",
  default: {
    stocks: [
      {
        image:
          "https://images.hindustantimes.com/img/2021/08/13/1600x900/zero_gravity_1628872556821_1628872560892.JPG",
        excerpt:
          "Kerala's Santhosh George Kulangara could be India's first space tourist via Virgin Galactic - Hindustan Times",
      },
      {
        image:
          "https://bsmedia.business-standard.com/_media/bs/img/article/2017-12/20/full/1513791437-8166.jpg",
        excerpt:
          "ONGC net profit rises nearly seven-fold in Q1 to Rs 6,846 crore - Business Standard",
      },
      {
        image:
          "https://images.moneycontrol.com/static-mcnews/2021/04/E-commerce-770x433.jpg",
        excerpt:
          "E-commerce sector may soon get an independent regulator, much like Sebi - Moneycontrol.com",
      },
      {
        image:
          "https://images.moneycontrol.com/static-mcnews/2020/06/Amrapali-photo-580x435.jpeg",
        excerpt:
          "Amrapali case: SC tells 9,538 buyers to register and pay up in 15 days or face allotment cancellation - Moneycontrol.com",
      },
      {
        image:
          "https://images.moneycontrol.com/static-mcnews/2021/06/Deal-770x433.jpg",
        excerpt:
          "Argan, TA Associates to sell controlling stake in Atria Convergence Technologies to Partners Group - Moneycontrol.com",
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
          image:
            "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Reliance_Industries_Logo.svg/1200px-Reliance_Industries_Logo.svg.png",
          label: "Reliance Industries",
          symbol: "RELIANCE",
          currentPrice: 2178.974,
          previousPrice: 2144.75,
          chartData: [],
        },
        {
          image:
            "https://www.tcs.com/content/dam/tcs/images/Newtcslogo/logo-white1x.png",
          label: "TCS",
          symbol: "TCS",
          currentPrice: 3573.37,
          previousPrice: 3461.9,
          chartData: [],
        },
        {
          image: "https://picsum.photos/200",
          label: "HDFC Bank",
          symbol: "HDFC",
          currentPrice: 1549.197,
          previousPrice: 1525.1,
          chartData: [],
        },
      ],
    },
    crypto: {
      invested: 15600,
      returns: 120900,
      companies: [
        {
          image: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
          label: "Bitcoin",
          symbol: "BTC",
          currentPrice: 3586691,
          previousPrice: 3437833.27,
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
