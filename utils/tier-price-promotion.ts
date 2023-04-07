import { PROMOTION } from './constant';

export const getTierPricePromotion = (price: number) => {
  if (price >= PROMOTION.TIER_SECOND_PRICE.BUY_PRICE) {
    return {
      discountPrice: PROMOTION.TIER_SECOND_PRICE.DISCOUNT_PRICE,
      priceBuyNextLevel: 0,
      currentPrice: price,
      discountPriceNextLevel: 0,
      tier: 2,
    };
  } else if (price < PROMOTION.TIER_FIRST_PRICE.BUY_PRICE) {
    return {
      discountPrice: 0,
      priceBuyNextLevel: PROMOTION.TIER_FIRST_PRICE.BUY_PRICE - price,
      currentPrice: price,
      discountPriceNextLevel: PROMOTION.TIER_FIRST_PRICE.DISCOUNT_PRICE,
      tier: 0,
    };
  } else {
    return {
      discountPrice: PROMOTION.TIER_FIRST_PRICE.DISCOUNT_PRICE,
      priceBuyNextLevel: PROMOTION.TIER_SECOND_PRICE.BUY_PRICE - price,
      currentPrice: price,
      discountPriceNextLevel: PROMOTION.TIER_SECOND_PRICE.DISCOUNT_PRICE,
      tier: 1,
    };
  }
};
