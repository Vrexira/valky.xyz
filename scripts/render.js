AFRAME.registerComponent('rotation-reader', {
    tick: function () {
        // `this.el` is the element.
        // `object3D` is the three.js object.
    
        // `rotation` is a three.js Euler using radians. `quaternion` also available.
        console.log(this.el.object3D.rotation);
    
        // `position` is a three.js Vector3.
        console.log(this.el.object3D.position);
    }
  });
  
  // <a-entity camera look-controls rotation-reader>




