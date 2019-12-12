{
    var model;

        // Scene (return camera to 190 after )
        var scene = new THREE.Scene();
        scene.background = new THREE.Color( 0x1A1F36 );
        var camera = new THREE.OrthographicCamera( window.innerWidth / - 190, window.innerWidth / 190, window.innerHeight / 190, window.innerHeight / - 190, 1, 1000 );

        var loader = new THREE.GLTFLoader();
        var fontLoader = new THREE.FontLoader();

        fontLoader.load('fonts/helvetiker_bold.typeface.json', function(font){
            var fontGeometryC = new THREE.TextGeometry("C", {
                font: font,
                size: 1.8,
                height: 5,
            });
            var fontGeometryN = new THREE.TextGeometry("N", {
                font: font,
                size: 1.8,
                height: 5,
            });
            var fontGeometryR = new THREE.TextGeometry("R", {
                font: font,
                size: 1.8,
                height: 5,
            });
            var fontMesh = new THREE.MeshPhongMaterial({color:0xffffff, wireframe:true});
            var fontFinishedC = new THREE.Mesh(fontGeometryC, fontMesh);
            var fontFinishedN = new THREE.Mesh(fontGeometryN, fontMesh);
            var fontFinishedR = new THREE.Mesh(fontGeometryR, fontMesh);

            fontFinishedC.position.x = 3;
            fontFinishedC.position.y = 4.1;

            fontFinishedN.position.x = 7.25;
            fontFinishedN.position.y = 4.1;

            fontFinishedR.position.x = 11.3;
            fontFinishedR.position.y = 4.1;

            scene.add(fontFinishedC);
            scene.add(fontFinishedN);
            scene.add(fontFinishedR);
        });

        

        loader.load( 'models/low_poly_earth.gltf', function ( gltf ) {

            earth = gltf.scene;
            earth.position.x = 6;
            earth.position.y = 5;

            scene.add( earth );

            gltf.animations; // Array<THREE.AnimationClip>
            gltf.scene; // THREE.Scene
            gltf.scenes; // Array<THREE.Scene>
            gltf.cameras; // Array<THREE.Camera>
            gltf.asset; // Object

        }, undefined, function ( error ) {

            console.error( error );

        } );

        loader.load( 'models/low_poly_mars.gltf', function ( gltf ) {

        mars = gltf.scene;
        mars.position.x = 10;
        mars.position.y = 5;

        scene.add( mars );

        gltf.animations; // Array<THREE.AnimationClip>
        gltf.scene; // THREE.Scene
        gltf.scenes; // Array<THREE.Scene>
        gltf.cameras; // Array<THREE.Camera>
        gltf.asset; // Object

        }, undefined, function ( error ) {

        console.error( error );

        } );

        var lightshow = [];
        var i = 0;

        while (i < 30) {
             
            var starGeo = new THREE.SphereGeometry( 0.05, 10, 32 );
            var starMesh = new THREE.MeshToonMaterial({color:0xffffff, wireframe:false,});
            var star = new THREE.Mesh(starGeo, starMesh);   

            star.position.z = Math.random() * -10;
            star.position.x = (Math.random() * 15);
            star.position.y = Math.random() * 10;

            lightshow.push(star);
            
            i += 1;
                
        }

        for (star in lightshow) {
            scene.add(lightshow[star]);
        }

        scene.add(star)

        // Lighting

        var light = new THREE.AmbientLight( 0xffffff, 0.3 ); // soft white light
        scene.add( light );

        var pointLight = new THREE.PointLight( 0xffffff, 2, 0.8);
        pointLight.position.set( 10, 10, -10 );
        pointLight.castShadow = true;
        scene.add( pointLight );

        //Camera Position

        camera.position.z = 5;
        camera.position.y = 5;
        camera.position.x = 8;

        // Renderer
        
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );
        renderer.gammaOutput = true;
        renderer.gammaFactor = 2.2; 

        // Axes Helper

        // var axesHelper = new THREE.AxesHelper( 5 );
        // scene.add( axesHelper );

        
        

        //Animate

        function animate(){
            requestAnimationFrame( animate );
            if (earth) earth.rotation.y += 0.006;
            if (earth) earth.rotation.x += 0.003;
            if (mars) mars.rotation.y += 0.004;
            if (mars) mars.rotation.x -= 0.002;
            renderer.render(scene, camera)
        }

        animate();    
}