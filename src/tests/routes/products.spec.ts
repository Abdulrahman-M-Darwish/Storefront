import superTest from 'supertest';
import { app } from '../../app';

const request = superTest(app);

describe('Products Routes', () => {
  it('GET /products', (done) => {
    request
      .get('/products')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => done());
  });
  it('GET /products/:userId', (done) => {
    request
      .get('/products/3')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => done());
  });
  it('POST /products/create-product', (done) => {
    request
      .post('/products/create-product')
      .send({ name: 'iphone 0', price: 192837456456 })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => done());
  });
});
