var anchor = (function() {
  var anchor = {
    wait: function(item, function_, listener) {
      var listener_ = listener ? listener : "load";
      item.addEventListener(listener_, function_);
    },
    Entity: function(x, y, z) {
      if (x && y && z) {
        this.x = x;
        this.y = y;
        this.z = z;
      } else {
        this.z = anchor.stored.entities.length;
      };
      this.stored.id = anchor.stored.idCount;
      anchor.stored.idCount += 1;
      anchor.stored.entities.push(this);
    },
    stored: {
      idCount: 0,
      entities: []
    }
  };
  anchor.Entity.prototype.x = 0;
  anchor.Entity.prototype.y = 0;
  anchor.Entity.prototype.z = 0;
  anchor.Entity.prototype.stored = { id: 0 };
  return anchor;
})();