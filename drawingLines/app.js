// first of all you need to create three things (scene, camera, renderer)
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  500
);
camera.position.set(0, 0, 50); // x,y,z
camera.lookAt(0, 5, 0); // x,y,z

const scene = new THREE.Scene();

// make lines by using LineBasicMaterial() with a property color
const material = new THREE.LineBasicMaterial({ color: 0x0000ff });

// make points to join the line by using Vector3()
const points = []; // array
points.push(new THREE.Vector3(-10, 0, 0)); // x,y,z
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(10, 0, 0));

// join the points you make above by using BufferGeometry() and setFromPoints()
const geometry = new THREE.BufferGeometry().setFromPoints(points);

// finally make a line by using Line() and also need to set the parameters (geometry and material) you make above
const line = new THREE.Line(geometry, material);

// add line to scene
scene.add(line);

// finally render you scene and camera
renderer.render(scene, camera);
