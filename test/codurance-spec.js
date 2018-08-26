const expect = require('chai').expect
const {User} = require ('../codurance')


describe('test suite for codurance-test', () => {

    let Users = {}

    it('should create an instance of a class and create a new person', () => {
        Users['Alice'] = new User('Alice')
        expect((Users.Alice.name)).to.equal('Alice')
    })

})