var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer({canvas: document.querySelector(".canvas_3d")});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setClearColor("#dedede");
renderer.setSize(400,400);
document.querySelector(".view_3d_canvas").appendChild(renderer.domElement);
camera.aspect = 1;
camera.updateProjectionMatrix();
window.addEventListener("resize", () => {
    renderer.setSize(
        400,
        400
    );
    camera.aspect = 1;
    camera.updateProjectionMatrix();
});
// ===========================================================
let rendering = true;

const light = new THREE.DirectionalLight(0xFFFFFF, .5);
scene.add(light);

light.castShadow = true;

light.shadow.mapSize.width = 512;
light.shadow.mapSize.height = 512;
light.shadow.camera.near = 0.5;
light.shadow.camera.far = 500;

light.position.set(5, 10, 2);

const ambient_light = new THREE.AmbientLight(0xFFFFFF, .7);
scene.add(ambient_light);

const object = new Obj({
    mtl: "/phones/materials/",
    obj: "/phones/phones.obj",
    color: {
        name: [
            "light",
            "dark"
        ],
        choose: 1
    }
}, scene);

object.create();

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.minDistance = 5;
controls.maxDistance = 10;
controls.enablePan = false;

controls.enableDamping = true;
controls.dampingFactor = 0.1;

controls.screenSpacePanning = false;

let controled = false;

camera.position.set(4, 0, -7);

function loop() {
    requestAnimationFrame(loop);
    if (rendering) {
        
        controls.update();
        
        if (!controled) {
            object.animate();
        }
        if (
            controls.object.rotation.x !== -3.141592653589793 &&
            controls.object.rotation.y !== 0.5191461142465226 &&
            controls.object.rotation.z !== 3.141592653589793
        ) {
            controled = true;
        }

        renderer.render(scene, camera);
    }
}
loop();

// Color bg picker
const color_picker = $("#color_picker-input");

color_picker.on("change", ()=> {
    renderer.setClearColor(color_picker.val());
});