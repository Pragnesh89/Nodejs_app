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
            expect(res.body).to.HaveProperty('name');
            expect(res.body).to.HaveProperty('status');
        })
    })
    afterEach(async () => {
        server.close();
    });
