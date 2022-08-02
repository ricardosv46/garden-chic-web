export const formatPercent = (
  priceOld: number,
  priceCurrent: number,
  lengthDecimal = 2
) => (((priceOld - priceCurrent) * 100) / priceOld).toFixed(lengthDecimal);
