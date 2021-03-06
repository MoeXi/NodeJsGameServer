/**
 * Created by yangsong on 16/1/24.
 */

var ByteBuffer = require('../../../libs/proto/ByteBuffer.js');
var Msg = require('../../../libs/proto/Msg.js');



function rpc_userJoinWorld_c2s(){
	this.msgId = 213;
	this.userId = 0;
	this.userSessionId = 0;
	this.userConnectorServer = '';

}

rpc_userJoinWorld_c2s.prototype.encode = function(){
    var buff = new ByteBuffer();
	Msg.encode(buff, 'ushort', this.msgId);
	Msg.encode(buff, 'int64', this.userId);
	Msg.encode(buff, 'int64', this.userSessionId);
	Msg.encode(buff, 'string', this.userConnectorServer);

    var result = buff.pack();
    buff = null;
    return result;
}

rpc_userJoinWorld_c2s.prototype.decode = function(ba){
    var buff = new ByteBuffer(ba);
	this.msgId = Msg.decode(buff, 'ushort');
	this.userId = Msg.decode(buff, 'int64');
	this.userSessionId = Msg.decode(buff, 'int64');
	this.userConnectorServer = Msg.decode(buff, 'string');

    buff = null;
}


module.exports = rpc_userJoinWorld_c2s;