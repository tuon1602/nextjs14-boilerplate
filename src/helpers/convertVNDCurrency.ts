//this is just an example for helpers

export function convertVNDCurrency(data: number) {
  return data
    .toString()
    .split("")
    .reverse()
    .reduce((prev, next, index) => {
      return (index % 3 ? next : next + ",") + prev;
    });
}
