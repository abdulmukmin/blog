const   chai = require('chai'),
        chaiHttp = require('chai-http'),
        app = require('../app.js'),
        expect = chai.expect;

chai.use(chaiHttp);

describe('Article testing :', function(){
    describe('create testing :', function(){
        it('if title, description, author , jToken null or empty must be return message : Invalid input, status 400', function(done){
             
            let title = '',
                description = '',
                author = '',
                jToken = '';

            chai.request(app)
                .post('/article/create')
                .set(jToken)
                .send({title, description, author})
                .end(function(error, res){
                    expect(res).to.have.status(400)
                    expect(res.body).to.have.property('message')
                    expect(res.body.message).to.equal('Invalid input')
                    done()
                })
        })
    })
})
