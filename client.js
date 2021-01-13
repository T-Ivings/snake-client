const net = require('net');
const {IP, PORT} = require('./constants')

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
//on first connection, do below
  conn.on('connect', () => {
    console.log(`Connection established.`);
    conn.write(`Name: Tay`);
      // setInterval(() => {
      //  conn.write(`Move: up`)
      // }, 500);
    
  })


  return conn;
}



module.exports = { connect };