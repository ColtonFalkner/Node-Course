const fs = require('fs')

// const hello = 'Hello World!'
// console.log(hello)

//Blocking Synchrnous Way
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8')
// console.log(textIn)

// const textOut = `This is what we know about the avocado: ${textIn}. \n Created on ${Date.now()}`
// fs.writeFileSync('./txt/output.txt', textOut)
// console.log('File has been written')

//Non-Blocking Async
fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
  console.log(data)
})
console.log('Will read file...')
