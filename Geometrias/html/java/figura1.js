
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffff00); 

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );



const geometry = new THREE.BoxGeometry( 1, 1, 1 );

const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load('../img/Fondo.jpg');

const material = new THREE.MeshMatcapMaterial( );
material.matcap = matcap;
material.flatShading =  true;

const cube = new THREE.Mesh( geometry, material );
scene.add( cube );



var control = new THREE.OrbitControls( camera, renderer.domElement);



const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
scene.add( line );

const material2 = new THREE.LineBasicMaterial({
	color: 0x000000
});

camera.position.z = 10;



function animate() {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.03;
    cube.rotation.y += 0.03;
    cube.rotation.z += 0.3;
    line.rotation.x += 0.03;
    line.rotation.y += 0.03;
    line.rotation.z += 0.3;


    renderer.render( scene, camera );
}
animate();