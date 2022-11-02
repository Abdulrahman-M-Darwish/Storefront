import superTest from 'supertest';
import { app } from '../../app';

const request = superTest(app);

describe('Index Routes', () => {
  it('GET /', (done) => {
    request
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /html/)
      .expect(200)
      .end((err, res) => done());
  });
});
