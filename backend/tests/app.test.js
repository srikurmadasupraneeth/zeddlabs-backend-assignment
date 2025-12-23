const request = require('supertest');
const app = require('../index'); 
const findCommonMembers = require('../utils/findCommonMembers');

describe('DSA Utility', () => {
  test('positive case', () => expect(findCommonMembers([1, 2], [2, 3])).toEqual([2]));
  test('negative case', () => expect(findCommonMembers([1], [2])).toEqual([]));
  test('edge case', () => expect(findCommonMembers([], [1])).toEqual([]));
});

describe('API Tests', () => {
  test('GET /api/users', async () => {
    // supertest will take the 'app' and start its own internal server for the test
    const res = await request(app).get('/api/users'); 
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body[0].name).toBe("Praneeth");
  });
});