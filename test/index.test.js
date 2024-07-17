    const request =  require('supertest')
    const server =  require('../src/index')
    const chai = require('chai')
    var expect = chai.expect;
    const app = request(server)
    describe('Get Endpoints', () => {
        it('Get', async () => {
            const res =  await app
            .get('/')
            .send({
                name:  'test ran successfully',
            });
            expect(res.statusCode).to.equal(200);
            expect(res.body).to.have.property('name').that.equals('Learn SonarQube code coverage');
            expect(res.body).to.have.property('status').that.equals(true);
        })
    })
    afterEach(async () => {
        server.close();
    });
