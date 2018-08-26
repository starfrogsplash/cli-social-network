#!/usr/bin/env node

const { prompt } = require('inquirer')
const {User, Users} = require('./codurance')

const questions = [
    {
        type: 'input',
        name: 'command',
        message: '>'
    },
]

function Ask(){
    prompt(questions).then(({command:input}=answers) => {
        let Inputs = input.split(' ')
        CurrentUser = Inputs[0]
        Command = Inputs[1]
        Message = Inputs.slice(2).join(' ')

        switch(Command){
            case '->':
            if (!Users[CurrentUser]){
                    Users[CurrentUser] = new User(CurrentUser)
                }
                Users[CurrentUser].post(Message)
                Ask()
                break;
            case 'follows':
                if (!Users[CurrentUser]){
                    console.log(`${CurrentUser} does not exist`)
                } else if (!Users[Message]){
                    console.log(`${Message} does not exist`)
                } else {
                    Users[CurrentUser].follows(Message)
                }
                Ask()
                break;
            case 'wall':
                console.log(Users[CurrentUser].wall())
                Ask()
                break;    
            default:
                if (!Users[CurrentUser]){
                    Users[CurrentUser] = new User(CurrentUser)
                }
                console.log(Users[CurrentUser].read())
                Ask()
        }
    }).catch((e => console.log(e)))
}

Ask()