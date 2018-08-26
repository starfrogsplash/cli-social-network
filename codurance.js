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

    time (timestamp) {
        let CurrentTime = Date.now();
        let secondsDifference = Math.floor((CurrentTime-timestamp) / 1000)
        if (secondsDifference >= 120) {
            secondsDifference = Math.floor(secondsDifference / 60)
            return `${secondsDifference} minutes ago`
        }  else if (secondsDifference >= 60) {
            secondsDifference = Math.floor(secondsDifference / 60)
            return `${secondsDifference} minute ago`
        }  else if (secondsDifference > 1 ) {
            return `${secondsDifference} seconds ago`
        } else if (secondsDifference === 1){
            return `${secondsDifference} second ago`
        } 
        return 'just now'
    }

    read (UserMessages = this.messages){
        let readMessages = []
        UserMessages.forEach(m=>{
            let message = Object.values(m);
            let timestamp = Object.keys(m);
            readMessages.push(`${message} (${this.time(...timestamp)})`)
        })
        return readMessages.join(`\n`)
    }

    follows(followedName) {
        this.following.push(followedName)
        console.log(`${this.name} follows ${followedName}`)
        return `${this.name} follows ${followedName}`
    }





}

// Users['Alice'] = new User('Alice')

// console.log(Users.Alice)

module.exports = {Users, User}