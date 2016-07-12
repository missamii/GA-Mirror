var geometry = {
  circle: function(r) {
    return r * r * Math.PI;
  },
  square: function(s) {
    return s * s;
  },
  rectangle: function(l,w) {
    return l * w;
  }
}

module.exports = geometry;
