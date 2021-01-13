// Stores the active TCP connection object.
let connection


const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  //stdin.on uses 'data', this VVVV is how you handle a callback function
  stdin.on('data', function handleUserInput(key) {
    if (key === '\u0003') 
      process.exit();
    if(key === "s") {
      connection.write(`Move: down`)
    }
    if(key === "a") {
      connection.write(`Move: left`)
    }
    if(key === "d") {
      connection.write(`Move: right`)
    }
    if(key === "w") {
      connection.write(`Move: up`)
    }
    if (key === "g") {
      connection.write(`Say: WOOOOOO`);
    }
    
  });
  return stdin;
}

module.exports = {setupInput};