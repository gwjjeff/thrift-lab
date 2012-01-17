//
// Autogenerated by Thrift Compiler (0.8.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var Thrift = require('thrift').Thrift;
var ttypes = module.exports = {};
var UserProfile = module.exports.UserProfile = function(args) {
  this.uid = null;
  this.name = null;
  this.blurb = null;
  if (args) {
    if (args.uid !== undefined) {
      this.uid = args.uid;
    }
    if (args.name !== undefined) {
      this.name = args.name;
    }
    if (args.blurb !== undefined) {
      this.blurb = args.blurb;
    }
  }
};
UserProfile.prototype = {};
UserProfile.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.uid = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.blurb = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

UserProfile.prototype.write = function(output) {
  output.writeStructBegin('UserProfile');
  if (this.uid) {
    output.writeFieldBegin('uid', Thrift.Type.I32, 1);
    output.writeI32(this.uid);
    output.writeFieldEnd();
  }
  if (this.name) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 2);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.blurb) {
    output.writeFieldBegin('blurb', Thrift.Type.STRING, 3);
    output.writeString(this.blurb);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

