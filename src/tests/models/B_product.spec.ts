import { ProductStore, Product } from '../../models/product';

const store = new ProductStore();

describe('Product Model', () => {
  it('should return a list of Products', async () => {
    const data = await store.index();
    expect(data).toEqual([]);
  });
  it('should add a new Product', async () => {
    const data = await store.create('The onepice trisure', 10);
    expect(data.length).toBe(1);
  });
  it('should return a single product', async () => {
    const data = await store.show('1');
    expect((data[0] as Product).name).toEqual('The onepice trisure');
  });
});
