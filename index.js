const { AWS_KEY } = require('./config');

function add(a, b) {
  console.log("Key AWS kamu adalah:", AWS_KEY);
  return a + b;
  
}

module.exports = add;
