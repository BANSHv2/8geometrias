
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000); 

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );



const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load('../img/Fondo6.jpeg');

const material = new THREE.MeshMatcapMaterial( );
material.matcap = matcap;
material.flatShading =  true;

const torus = new THREE.Mesh( geometry, material );
scene.add( torus );




const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
scene.add( line );

const material2 = new THREE.LineBasicMaterial({
	color: 0x000000
});

camera.position.z = 80;



function animate() {
    requestAnimationFrame( animate );
    torus.rotation.x += 0.04;
    torus.rotation.y += 0.06;
    torus.rotation.z += 0.04;
    line.rotation.x += 0.04;
    line.rotation.y += 0.06;
    line.rotation.z += 0.04;

    renderer.render( scene, camera );
}
animate();