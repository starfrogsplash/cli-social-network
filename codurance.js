let Users = {}

class User {
    constructor(name){
        this.name = name;
        this.messages = [];
        this.following = []
    }

    post (message)  {
        let timestamp = Date.now()
        this.messages.unshift({[timestamp]: message})
    }
}

// Users['Alice'] = new User('Alice')

// console.log(Users.Alice)

module.exports = {Users, User}