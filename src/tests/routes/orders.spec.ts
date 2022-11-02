import superTest from 'supertest';
import { app } from '../../app';

const request = superTest(app);

describe('Orders Routes', () => {
  it('GET /orders/:userId', (done) => {
    request
      .get('/orders/3')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => done());
  });
  it('GET orders/completed/:userId', (done) => {
    request
      .get('/orders/completed/3')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => done());
  });
  it('GET /orders/:orderId/products', (done) => {
    request
      .get('/orders/8/products')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => done());
  });
  it('POST /orders/:orderId/product', (done) => {
    request
      .post('/orders/8/products')
      .send({ quantity: 3, productId: 3 })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => done());
  });
  it('POST /orders/complete', (done) => {
    request
      .post('/orders/complete')
      .send({ orderId: 9 })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => done());
  });
  it('POST /orders/create-order', (done) => {
    request
      .post('/orders/create-order')
      .send({ userId: 3 })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => done());
  });
  it('POST /orders/del-order', (done) => {
    request
      .post('/orders/del-order')
      .send({ orderId: 9 })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => done());
  });
  it('POST /orders/del-product', (done) => {
    request
      .post('/orders/8/products')
      .send({ orderId: 8, productId: 3 })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => done());
  });
});
