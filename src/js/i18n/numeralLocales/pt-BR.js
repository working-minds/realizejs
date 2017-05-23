import numeral from 'numeral';

const locale = {
  delimiters: {
    thousands: '.',
    decimal: ',',
  },
  abbreviations: {
    thousand: 'mil',
    million: 'milhões',
    billion: 'b',
    trillion: 't',
  },
  ordinal(number) {
    return 'º';
  },
  currency: {
    symbol: 'R$',
  },
};

export default numeral.register('locale', 'pt-br', locale);
