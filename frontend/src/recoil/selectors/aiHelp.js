import { selector } from 'recoil';
import { aiOverview } from 'atoms/aiHelp';

export const botInvestmentOverview = selector({
  key: 'aiBotInvestmentOverview',
  get: ({ get }) => {
    const basicOverview = get(aiOverview);

    return basicOverview.map((item) => ({
      ...item,
      profitPercentage: ((item.returns - item.invested) / item.invested) * 100
    }));
  }
});
