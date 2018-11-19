const   chai = require('chai'),
        chaiHttp = require('chai-http'),
        app = require('../app.js'),
        expect = chai.expect;

chai.use(chaiHttp);

describe('User testing :', function(){
    describe('register testing :', function(){
        it('if username, email null or empty must be return message : Invalid input, status 400', function(done){
             
            let username = '',
                email = '',
                role = ''

            chai.request(app)
                .post('/users/register')
                .send({username, email, role})
                .end(function(error, res){
                    expect(res).to.have.status(400)
                    expect(res.body).to.have.property('message')
                    expect(res.body.message).to.equal('Invalid input')
                    done()
                })
        })
    })
})

describe('User testing :', function(){
    describe('register testing :', function(){
        it('if username contains special character, or username length less than 3 or more than 20 must be return message : Invalid input, status 400', function(done){
             
            let username = 'mumin@2010',
                email = 'mumin@mail.com',
                role = 'admin';

            chai.request(app)
                .post('/users/register')
                .send({username, email, role})
                .end(function(error, res){
                    expect(res).to.have.status(400)
                    expect(res.body).to.have.property('message')
                    expect(res.body.message).to.equal('Invalid input')
                    done()
                })
        })
    })
})

describe('User testing :', function(){
    describe('register testing :', function(){
        it('if email format is incorrect must be return message : Invalid input, status 400', function(done){
             
            let username = 'mumin2010',
                email = 'mumin@mail.',
                role = 'admin';

            chai.request(app)
                .post('/users/register')
                .send({username, email, role})
                .end(function(error, res){
                    expect(res).to.have.status(400)
                    expect(res.body).to.have.property('message')
                    expect(res.body.message).to.equal('Invalid input')
                    done()
                })
        })
    })
})
/*
describe('User testing :', function(){
    describe('register testing :', function(){
        it('if username already exist must be return message : Try another username, status 400', function(done){
             
            let username = 'mumin2018',
                email = 'abdmukmin@rocketmail.com',
                role = 'admin';

            chai.request(app)
                .post('/users/register')
                .send({username, email, role})
                .end(function(error, res){
                    expect(res).to.have.status(400)
                    expect(res.body).to.have.property('message')
                    expect(res.body.message).to.equal('Try another username')
                    done()
                })
        })
    })
})

describe('User testing :', function(){
    describe('register testing :', function(){
        it('if email already exist must be return message : To complete the sign up process, you need to check your email and click a link, status 400', function(done){
             
            let username = 'mumin2018',
                email = 'abdmukmin@rocketmail.com',
                role = 'admin';

            chai.request(app)
                .post('/users/register')
                .send({username, email, role})
                .end(function(error, res){
                    expect(res).to.have.status(200)
                    expect(res.body).to.have.property('message')
                    expect(res.body.message).to.equal('To complete the sign up process, you need to check your emails and click a link')
                    done()
                })
        })
    })
})
*/
describe('User testing :', function(){
    describe('sign in testing :', function(){
        it('if username  null or empty must be return message : Invalid input, status 400', function(done){
             
            let username = '',
                password = '';

            chai.request(app)
                .post('/users/signIn')
                .send({username, password})
                .end(function(error, res){
                    expect(res).to.have.status(400)
                    expect(res.body).to.have.property('message')
                    expect(res.body.message).to.equal('Invalid input')
                    done()
                })
        })
    })
})

describe('User testing :', function(){
    describe('sign in testing :', function(){
        it('if username not found or password not match must be return message : your username or password is incorrect, status 400', function(done){
             
            let username = 'mumin@2010',
                password = '@1uE0ai';

            chai.request(app)
                .post('/users/signIn')
                .send({username, password})
                .end(function(error, res){
                    expect(res).to.have.status(400)
                    expect(res.body).to.have.property('message')
                    expect(res.body.message).to.equal('your username or password is incorrect')
                    done()
                })
        })
    })
})

describe('User testing :', function(){
    describe('sign in testing :', function(){
        it('if username found and password match must be return jToken, myId, myRole, status 200', function(done){
             
            let username = 'mumin',
                password = 's1bdcmbc';

            chai.request(app)
                .post('/users/signIn')
                .send({username, password})
                .end(function(error, res){
                    expect(res).to.have.status(200)
                    expect(res.body).to.have.property('jToken')
                    expect(res.body).to.have.property('myRole')
                    expect(res.body).to.have.property('myId')
                    done()
                })
        })
    })
})

describe('User testing :', function(){
    describe('edit profile testing :', function(){
        it('if username or password or email null or empty must be return message : Invalid input, status 400', function(done){
             
            let username = '',
                password = '',
                email = '',
                jToken = '';

            chai.request(app)
                .post('/users/editprofile')
                .send({username, password, email, jToken})
                .end(function(error, res){
                    expect(res).to.have.status(400)
                    expect(res.body).to.have.property('message')
                    expect(res.body.message).to.equal('Invalid input')
                    done()
                })
        })
    })
})

describe('User testing :', function(){
    describe('edit profile testing :', function(){
        it('if username contains special character, or username length less than 3 or more than 20 must be return message : Invalid input, status 400', function(done){
             
            let username = 'mumin@2010',
                password = '@iueoaiueo',
                email = 'mumin@mail.com',
                role = 'admin';

            chai.request(app)
                .post('/users/editprofile')
                .send({username, email, role, password})
                .end(function(error, res){
                    expect(res).to.have.status(400)
                    expect(res.body).to.have.property('message')
                    expect(res.body.message).to.equal('Invalid input')
                    done()
                })
        })
    })
})

describe('User testing :', function(){
    describe('edit profile testing :', function(){
        it('if email format is incorrect must be return message : Invalid input, status 400', function(done){
             
            let username = 'mumin2010',
                password = '@iueoaiueo',
                email = 'mumin@mail.',
                role = 'admin';

            chai.request(app)
                .post('/users/editprofile')
                .send({username, email, role, password})
                .end(function(error, res){
                    expect(res).to.have.status(400)
                    console.log(res.body)
                    expect(res.body).to.have.property('message')
                    expect(res.body.message).to.equal('Invalid input')
                    done()
                })
        })
    })
})

describe('User testing :', function(){
    describe('edit profile testing :', function(){
        it('if password format is incorrect (not contain at least 1 lowercase, 1 uppercase, 1 special character and 1 number) with minimum length 8 must be return message : Invalid input, status 400', function(done){
             
            let username = 'mumin2010',
                password = '@iueoaiueo',
                email = 'mumin@mail.com',
                role = 'admin';

            chai.request(app)
                .post('/users/editprofile')
                .send({username, email, role, password})
                .end(function(error, res){
                    expect(res).to.have.status(400)
                    console.log(res.body)
                    expect(res.body).to.have.property('message')
                    expect(res.body.message).to.equal('Invalid input')
                    done()
                })
        })
    })
})