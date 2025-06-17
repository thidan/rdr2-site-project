import * as THREE from 'https://cdn.skypack.dev//three@0.129.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.skypack.dev//three@0.129.0/examples/jsm/loaders/GLTFLoader';

const camera = new THREE.PerspectiveCamera(
    13,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 13;

const scene = new THREE.Scene();
let lightingBolt;
let mixer; // ✅ declare mixer aqui!

const loader = new GLTFLoader();
loader.load('../lightning_bolt.glb',
    function (gltf) {
        lightingBolt = gltf.scene;
        lightingBolt.position.y = 0;
        lightingBolt.rotation.y = 1.5;
        scene.add(lightingBolt);

        lightingBolt.traverse((child) => {
            if (child.isMesh && child.material && child.material.color) {
                console.log(child.name, child.material);
                child.material.color.set(0xffff00);
                child.material.metalness = 0;
                child.material.roughness = 0.5;
            }
        });

        // ✅ só cria o mixer se houver animações
        if (gltf.animations.length > 0) {
            mixer = new THREE.AnimationMixer(lightingBolt);
            gltf.animations.forEach((clip) => {
                mixer.clipAction(clip).play();
            });
        }

        console.log(gltf.animations);
    },
    undefined,
    function (error) {
        console.error("Erro ao carregar GLB:", error);
    }
);

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container-3d').appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
scene.add(ambientLight);

const topLight = new THREE.DirectionalLight(0xffffff, 1.0);
topLight.position.set(500, 500, 500);
scene.add(topLight);

// ✅ checa se mixer já existe antes de usar
const reRender3D = () => {
    requestAnimationFrame(reRender3D);
    if (mixer) mixer.update(0.02);
    renderer.render(scene, camera);
};

reRender3D();
