const performer = require('./promise-magic')

// performer
//     .promiseMagic()
//     .then(result => {
//         console.log('Result contains ', result)
//         result.listOfPromises
//             .then(_ => console.log('Success', _))
//             .catch(_ => console.log('Mellow catch place Two', _))
//     })
//     .catch(reason => console.log('Controller Catch: ', reason))

const brat = async () => {
    setTimeout(() => {
        return 'hello world'
    }, 500)

    return 'rot'
}

brat()
    .then(message => {
        console.log('Success says: ', message)
        throw new Error('brat')
    })
    .catch(error => console.log('Failure says: ', error))
    .then(() => console.log('End!'))

brat().then(message => console.log('no care!'))
brat().then(message => console.log('no care!'))
brat()
    .then(message => console.log('no care!'))
    .catch(error => console.log('message'))
brat().then(message => console.log('no care!'))
brat().then(message => console.log('no care!'))