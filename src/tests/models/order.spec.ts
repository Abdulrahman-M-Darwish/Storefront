import { OrderStore } from '../../models/order';

const store = new OrderStore();

describe('Order Model', () => {
  it('should return a list of orders', async () => {
    const data = await store.index('37051234');
    expect(data).toEqual([]);
  });
  it('should create an order to user 1 with status active', async () => {
    const data = await store.create('1');
    expect(data[0].status).toEqual('active');
  });
  it('should add a product to the order', async () => {
    const data = await store.addProduct(3, '1', '1');
    expect(data.length).toBe(1);
  });
  it('should change the order status to complete', async () => {
    const data = await store.completeOrder('1');
    expect(data[0].status).toEqual('complete');
  });
  it('should display a list of products in the order', async () => {
    const data = await store.orderProducts('1');
    expect(data[0].price).toEqual(10);
  });
  it('should return the completed orders that user own', async () => {
    const data = await store.showCompleted('1');
    expect(data[0].status).toEqual('complete');
  });
  it('should delete a product from the order', async () => {
    const data = await store.deleteProduct('1', '1');
    expect(data[0].id).toEqual(1);
  });
  it('should delete the order', async () => {
    const data = await store.deleteOrder('1');
    expect(Object.keys(data)).toContain('order');
  });
});
