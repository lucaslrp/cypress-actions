const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImNiNmI5OTE1LTM1YmEtNGRiYy1iYmY0LTAxZjhkNGE0ZWNkNi0xNzEyNDYxMTkxOTEwIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiOWFmYmNhZDAtNjZjNC00OTFlLWIyYzktNDU5N2U2MzkzNjIxIiwidHlwZSI6InQifQ.6v9TlWBjBNvGHAuzESBykORHEhTQsW8by62R7D96JCo'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
