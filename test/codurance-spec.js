const expect = require('chai').expect
const {User} = require ('../codurance')


describe('test suite for codurance-test', () => {

    let Users = {}
    Users['terry'] = new User('terry');
    Users['mike'] = new User('mike');
    Users['terry'].follows('mike')

    it('should create an instance of a class and create a new person', () => {
        Users['Alice'] = new User('Alice')
        expect((Users.Alice)).to.be.a('object')
        expect((Users.Alice.name)).to.equal('Alice')
    })

    it('function post pushes an object containing message and timestamp to messages Array', () => {
        Users.Alice.post('This is a message')
        let messages = Object.values(Users.Alice.messages[0])
        expect((Users.Alice.messages[0])).to.be.a('object')
        expect((messages[0])).to.equal('This is a message')
    })

    it("mike follows 'Alice' and have Alice in mikes 'following' array", () => {
        expect((Users.mike.follows('Alice'))).to.equal('mike follows Alice')
        expect((Users.mike.following[0])).to.equal('Alice')
    })

    it("returns a string of user message", () => {
        expect((Users.Alice.read())).to.equal('This is a message (just now)')
    })


})