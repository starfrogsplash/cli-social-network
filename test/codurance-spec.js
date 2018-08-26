const expect = require('chai').expect
const {User} = require ('../codurance')


describe('test suite for codurance-test', () => {

    let Users = {}

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

})