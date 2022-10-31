import { UserStore } from '../../models/user';

const store = new UserStore();

describe('User Model', () => {
  it('should return a list of users', async () => {
    expect(await store.index()).toEqual([]);
  });
  it('should add a user to the db', async () => {
    const data = await store.create('test', 'test', 'test');
    expect(data.length).toBe(1);
  });
  it('should return a single user', async () => {
    const data = await store.show('1');
    expect(data.length).toBe(1);
  });
});
