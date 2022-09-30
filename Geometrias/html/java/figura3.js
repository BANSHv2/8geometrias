
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xDE28BC); 

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );



const geometry = new THREE.ConeGeometry( 5, 20, 32 );

const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load('../img/Fondo3.jpg');

const material = new THREE.MeshMatcapMaterial( );
material.matcap = matcap;
material.flatShading =  true;

const cone = new THREE.Mesh( geometry, material );
scene.add( cone );





const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
scene.add( line );

const material2 = new THREE.LineBasicMaterial({
	color: 0x000000
});

camera.position.z = 50;



function animate() {
    requestAnimationFrame( animate );
    cone.rotation.x += 0.01;
    cone.rotation.y += 0.1;
    cone.rotation.z += 0.01;
    line.rotation.x += 0.01;
    line.rotation.y += 0.1;
    line.rotation.z += 0.01;

    renderer.render( scene, camera );
}
animate();