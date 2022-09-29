var dgram = require('dgram');
var c = dgram.createSocket('udp4')
var s = dgram.createSocket('udp4');
s.on('message', function(msg, rinfo) {
  console.log('I got this message: ' + msg.toString());
});
s.bind(38899);

c.send("{\"id\":1,\"method\":\"setState\",\"params\":{\"state\":true}}", 38899, "192.168.1.23")

setTimeout(()=>{

    c.send("{\"id\":1,\"method\":\"setState\",\"params\":{\"state\":false}}", 38899, "192.168.1.23")


},3000)
