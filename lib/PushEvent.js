var PushMessageData=function(arraybuffer){
  this._data=arraybuffer;
}
PushMessageData.prototype.text=function (){
  return String.fromCharCode.apply(null, new Uint16Array(this._data));
}
PushMessageData.prototype.arrayBuffer=function (){
  return this._data;
}
PushMessageData.prototype.json=function (){
  return JSON.parse(this.text());
}
PushMessageData.prototype.blob=function (){
  return new Blob([this._data]);
}

module.exports.PushMessageData=PushMessageData;
