export const makePage = (
  current: number,
  totalAmount: number,
  contentUnit: number,
  pageUnit: number
) => {
  const pageBundleOrder = Math.ceil(current / pageUnit) - 1;
  const pageCount = Math.ceil(
    Math.min(
      (totalAmount - pageBundleOrder * pageUnit * contentUnit) / contentUnit,
      pageUnit
    )
  );
  const pages = new Array(pageCount)
    .fill(0)
    .map((_, index) => index + 1 + pageBundleOrder * 5);

  return pages;
};
