// first of all you need to create three things (scene, camera, renderer)

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

var renderer = new THREE.WebGLRenderer(); // create a renderer
renderer.setSize(window.innerWidth, window.innerHeight); // make renderer size by using setSize()
document.body.appendChild(renderer.domElement); // append renderer to the body of the document

var geometry = new THREE.BoxGeometry(1, 1, 1); // if you want to create cube, make geometry by using BoxGeometry() and coordinates
var material = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // create color of the material by using MeshBasicMaterial()
var cube = new THREE.Mesh(geometry, material); // combining geometry and material by using Mesh()
scene.add(cube); // add cube to the scene

camera.position.z = 2; // how far camera position from user

// above code will not run if u don't make combination function
// all of the things you make above need to apply to this function
var animate = function () {
  requestAnimationFrame(animate); // when you start your document, this will run (not start or not see your document, this will not run)

  cube.rotation.x += 0.01; // to rotate your cube in x axis
  cube.rotation.y += 0.01; // to rotate your cube in y axis

  renderer.render(scene, camera); // finally render your scene and camera
};

animate(); // run your animate function
