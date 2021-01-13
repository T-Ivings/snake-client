const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
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