var anchor = (function() {
  var anchor = {
    wait:function(item,function_,listener){item.addEventListener(listener?listener:"load",function_)},
    Entity: function(x, y, z, shown) {
      if (x && y && z) {
        this.x = x;
        this.y = y;
        this.z = z;
      } else {
        this.z = anchor.stored.entities.length;
      };
      if (!!shown === shown) this.shown = shown;
      this.stored.id = anchor.stored.idCount;
      anchor.stored.idCount += 1;
      anchor.stored.entities.push(this);
      anchor.stored.entityIds.push(this.stored.id);
    },
    stored: {
      idCount: 0,
      entities: [],
      entityIds: [],
      isDestroyed: function(entity) {
        if (entity.stored.destroyed) throw new Error("This Entity is destroyed");
      }
    }
  };
  anchor.Entity.prototype.x = 0;
  anchor.Entity.prototype.y = 0;
  anchor.Entity.prototype.z = 0;
  anchor.Entity.prototype.shown = true;
  anchor.Entity.prototype.stored = {
    id: 0,
    destroyed: false
  };
  anchor.Entity.prototype.destroy = function() {
    anchor.stored.isDestroyed(this);
    var index = anchor.stored.entityIds.indexOf(this.stored.id);
    if (index > -1) {
      anchor.stored.entities.splice(index, 1);
      anchor.stored.entityIds.splice(index, 1);
    };
    this.stored.destroyed = true;
  };
  return anchor;
})();