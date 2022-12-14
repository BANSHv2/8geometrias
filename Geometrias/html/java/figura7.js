const scene = new THREE.Scene();

scene.background = new THREE.Color(0x000000);



const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );



const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


const geometry = new THREE.TorusKnotGeometry( 7.391, 0.99, 300, 18, 12, 20);
const material = new THREE.MeshStandardMaterial({color: 0xF0E624});
const torusKnot = new THREE.Mesh( geometry, material);
material.metalness = 0.4;
material.roughness = 0.5;
const directionalLight= new THREE.DirectionalLight( 0xffffff, 5);
scene.add( directionalLight );
scene.add(torusKnot)




camera.position.z = 25;



function animate() {
	requestAnimationFrame( animate );
    torusKnot.rotation.y += 0.1;
    torusKnot.rotation.x += 0.04;
	renderer.render( scene, camera );
}
animate();