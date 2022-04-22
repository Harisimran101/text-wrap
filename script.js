import * as THREE from 'https://cdn.skypack.dev/three@0.136';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.136/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.136/examples/jsm/loaders/GLTFLoader.js';

const webgl = document.querySelector('#webgl');


const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera( 55, window.innerWidth / window.innerHeight, 0.1, 1000 );

			const renderer = new THREE.WebGLRenderer({
      antialias: true,
  
      canvas: webgl  
      });
			renderer.setSize( window.innerWidth, window.innerHeight );
		  renderer.setClearColor('black')
const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 2 );
scene.add( light );




		const geometry = new THREE.SphereGeometry( 10, 32, 16 );
const material = new THREE.MeshPhysicalMaterial( { 
  color: 'white',
  roughness: 0,
  transmission: 1,
  transparent: true,
  opacity: 1,
  ior: 1.1,
  thickness: -3.5,
  
 } );
  
const sphere = new THREE.Mesh(geometry,material);
scene.add( sphere );
sphere.scale.set(1.3,1.3,1.3)

let plane;

			camera.position.z = 20;

			if(window.innerWidth > 300){
				camera.position.z = 60
			}
			

			const modelloader = new GLTFLoader();
			modelloader.load('text.glb', (gltf) =>{
				 const model = gltf.scene;
				 scene.add(model);
				plane = model.getObjectByName('Plane');
				
				model.traverse(function(child){
					 
				})
			})

			function animate() {
				requestAnimationFrame( animate );
              if(plane){
				plane.position.y -= 0.16;
			  }
				
	 
				renderer.render( scene, camera );
			};

			animate();