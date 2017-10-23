Room.prototype.log = function(...messages) {
  console.log(`${Game.time} ${this.name.rpad(' ', 27)} ${messages.join(' ')}`);
};

RoomObject.prototype.log = function(...messages) {
  console.log(`${Game.time} ${this.room.name.rpad(' ', 6)} ${this.name.rpad(' ', 20)} ${this.pos} ${messages.join(' ')}`);
};

Creep.prototype.creepLog = function(...messages) {
  if (config.debug.creepLog.roles.indexOf(this.memory.role) < 0) {
    return;
  }
  if (config.debug.creepLog.rooms.indexOf(this.room.name) < 0) {
    return;
  }
  console.log(`${Game.time} ${this.room.name.rpad(' ', 6)} ${this.name.rpad(' ', 20)} ${this.pos} ${messages.join(' ')}`);
};
