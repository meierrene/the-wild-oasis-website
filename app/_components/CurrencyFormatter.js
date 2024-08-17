export const CurrencyFormatter = (value, currency = 'usd') => {
  if (currency === 'eur') {
    if (value % 1 === 0) return value + ',- €';
    else return String(value).replace('.', ',') + ' €';
  } else return '$' + value;
};
