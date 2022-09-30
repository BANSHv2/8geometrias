
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x4E4E4E); 

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );



const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 );

const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load('../img/Fondo2.jpg');

const material = new THREE.MeshMatcapMaterial( );
material.matcap = matcap;
material.flatShading =  true;

const capsule = new THREE.Mesh( geometry, material );
scene.add( capsule );



const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
scene.add( line );

const material2 = new THREE.LineBasicMaterial({
	color: 0x000000
});

camera.position.z = 10;



function animate() {
    requestAnimationFrame( animate );
    capsule.rotation.x += 0.03;
    capsule.rotation.y += 0.010;
    capsule.rotation.z += 0.03;
    line.rotation.x += 0.03;
    line.rotation.y += 0.010;
    line.rotation.z += 0.03;


    renderer.render( scene, camera );
}
animate();