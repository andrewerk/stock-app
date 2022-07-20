import InvestmentsPortfoliotModel from '../models/InvestmentsPortfolioModel';
import stockApiService from '../services/stockApiService';

const insertValue = async (portfolio: InvestmentsPortfoliotModel[]) => {
  const portfolioWithValue = Promise
    .all(portfolio.map(async (asset: InvestmentsPortfoliotModel) => {
      const value = await stockApiService.getStock(asset.stockSymbol);
      const { stockSymbol, quantity } = asset;
      console.log(asset.trades);
      if (asset.trades) {
        return {
          id: asset.id,
          stockSymbol,
          quantity,
          currentValue: value.currentValue,
          trade: asset.trades,
        };
      }
      return {
        id: asset.id, stockSymbol, quantity, currentValue: value.currentValue,
      };
    }));

  return portfolioWithValue;
};

export default insertValue;
