// test.js

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/index');

chai.use(chaiHttp);
const expect = chai.expect;

describe('Index API', () => {
  it('should return Hello World on / GET', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello World!');
        done();
      });
  });
});

