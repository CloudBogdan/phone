class Obj {
    constructor(path, scene) {
        this.path = path;
        this.scene = scene;
        this.mesh = null;
    }

    create() {
        let mtl_loader = new THREE.MTLLoader();
        
        mtl_loader.load(
            "media/js/3d_view/obj" + this.path.mtl + this.path.color.name[this.path.color.choose] + ".mtl",
            materials=> {
                materials.preload();
                
                let loader = new THREE.OBJLoader();
                loader.setMaterials(materials);
                
                loader.load(
                    "media/js/3d_view/obj" + this.path.obj,
                    obj=> {
                        this.mesh = obj;
                        this.mesh_position = obj.position;
                        
                        this.mesh.traverse(child=> {
                            this.mesh_child = child;

                            if (this.mesh_child.isMesh) {
                                
                                this.mesh_child.castShadow = true;
                                this.mesh_child.receiveShadow = true;
                                
                            };
                        });

                        this.scene.add(this.mesh);
        
                    }
                );
            }
        );
    }
    update() {
        this.mesh.materialLibraries = "media/js/3d_view/obj" + this.path.mtl + this.path.color.name[this.path.color.choose] + ".mtl";
    }
    animate() {
        try {
            this.mesh.rotation.y += .005;
        }catch(e){}
    }
}