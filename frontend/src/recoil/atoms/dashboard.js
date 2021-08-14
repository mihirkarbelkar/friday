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
        image: "http://www.logotaglines.com/wp-content/uploads/2016/08/HDFC_Bank_Logo.jpg",
        label: "HDFC Bank",
        symbol: "HDFC",
        currentPrice: 1549.197,
        previousPrice: 1525.1,
        chartData: [],
      },
      {
        image: "https://www.infosys.com/content/dam/infosys-web/en/global-resource/media-resources/infosys-logo-PNG.png",
        label: "Infosys",
        symbol: "INFOSYS",
        currentPrice: 1734.56,
        previousPrice: 1712.5,
        chartData: [],
      },
      {
        image: "https://cdn.sanity.io/images/92ui5egz/production/7c1c60e9afaaaa3cce61e5101717796d21b7f914-1426x1080.svg?auto=format",
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
        image: "https://static.paytmmoney.com/amc-logo/INDBL.png",
        label: "Indiabulls Blue Chip Fund - Direct Plan - Growth Option,Mutual Funds",
        symbol: "Indiabulls Blue Chip Fund",
        currentPrice: 31.55,
        previousPrice: 31.0,
        chartData: [],
      },
      {
        image: "https://static.paytmmoney.com/amc-logo/SBIMF.png",
        label: "SBI Magnum COMMA Fund - DIRECT PLAN - Growth",
        symbol: "SBI Magnum",
        currentPrice: 73.22,
        previousPrice: 72.12,
        chartData: [],
      },
      {
        image: "https://static.paytmmoney.com/amc-logo/BARPN.png",
        label: "Baroda Short Term Bond Fund - Plan A - Growth Option",
        symbol: "Baroda Short Term Bond Fund",
        currentPrice: 24.63,
        previousPrice: 22.67,
        chartData: [],
      },
      {
        image: "https://static.paytmmoney.com/amc-logo/DSPBR.png",
        label: "DSP Credit Risk Fund - Regular Plan -Growth",
        symbol: "DSP Mutual Fund",
        currentPrice: 32.44,
        previousPrice: 30.23,
        chartData: [],
      },
      {
        image: "https://static.paytmmoney.com/amc-logo/TATMF.png",
        label: "TATA Ultra Short Term Fund Direct Plan",
        symbol: "Tata Mutual Fund",
        currentPrice: 10.79,
        previousPrice: 10.23,
        chartData: [],
      }
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
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Larsen%26Toubro_logo.svg/1200px-Larsen%26Toubro_logo.svg.png"
      },
      {
        symbol: "HCLTECH",
        label: "HCL TECHNOLOGIES LIMITED",
        currentPrice: 1123.95,
        previousPrice: 1096.5,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/HCL_Technologies_logo.svg/2560px-HCL_Technologies_logo.svg.png"
      },
      {
        symbol: "TATASTEEL",
        label: "TATA STEEL LIMITED",
        image: "https://iconape.com/wp-content/files/pa/273000/svg/273000.svg",
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
        image: "https://www.carlogos.org/logo/Eicher-logo.png"
      },
      {
        symbol: "DRREDDY",
        label: "DR. REDDY'S LABORATORIES LIMITED",
        currentPrice: 4642.55,
        previousPrice: 4716.4,
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Dr._Reddy%27s_Laboratories_logo.svg/1200px-Dr._Reddy%27s_Laboratories_logo.svg.png"
      },
      {
        symbol: "POWERGRID",
        label: "POWER GRID CORPORATION OF INDIA LIMITED",
        image: "data:image/png;base64,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",
        currentPrice: 184.65,
        previousPrice: 187,
      },
      {
        symbol: "CIPLA",
        label: "CIPLA LIMITED",
        image: "data:image/png;base64,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",
        currentPrice: 894.4,
        previousPrice: 905.3,
      },
      {
        symbol: "BRITANNIA",
        label: "BRITANNIA INDUSTRIES LIMITED",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Britannia_Industries_logo.svg/1200px-Britannia_Industries_logo.svg.png",
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


export const aiStockSummary = atom({
  key: "stockSummary",
  default: {
    stocks: {
      invested: 50000,
      returns: 94000,
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
      invested: 11600,
      returns: 20900,
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
      invested: 25998,
      returns: 29000,
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
