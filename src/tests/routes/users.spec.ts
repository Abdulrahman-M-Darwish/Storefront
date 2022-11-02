import superTest from 'supertest';
import { app } from '../../app';

const request = superTest(app);

describe('Users Routes', () => {
  it('GET /users', (done) => {
    request
      .get('/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => done());
  });
  it('GET /users/:userId', (done) => {
    request
      .get('/users/3')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => done());
  });
  it('POST /users/create-user', (done) => {
    request
      .post('/users')
      .send({ password: '37051234', firstName: 'WD', lastName: 'Gaster' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => done());
  });
});
