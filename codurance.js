let Users = {}

class User {
    constructor(name){
        this.name = name;
        this.messages = [];
        this.following = []
    }
}

Users['Alice'] = new User('Alice')

console.log(Users.Alice)

module.exports = {Users, User}