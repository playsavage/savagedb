const expect = require('chai').expect;

const database = require('../source/index');

describe('database', function () {
  it('should return a database object', function () {
    const db = database();
    expect(db).to.be.an.instanceof(Object);
    expect(db).to.have.ownProperty('data');
    expect(db.data).to.deep.equal({});
  });
});