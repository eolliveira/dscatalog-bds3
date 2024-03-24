import { formatPrice } from 'util/formatters';

describe('formatPrice tests', () => {
  test('formatPrice shold format number when given 10.1', () => {
    //ARRANGE
    const price = 10.1;

    //ACT
    const result = formatPrice(price);

    //ASSERT
    expect(result).toEqual('10,10');
  });
});
