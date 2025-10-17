require('dotenv').config();

function add(a, b) {
  console.log("AWS Key:", process.env.AWS_KEY);
  return a + b;
}

module.exports = add;
