/*!
  Script: animat3d.js
    Proprietary 3D Web Engine based on Three.JS

  About: Owner
    Copyright (c) 2022, Valky Fischer
    VALKYTEQ - All rights reserved

  About: License
    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions are met:

        * Redistributions of source code must retain the above copyright notice,
          this list of conditions and the following disclaimer.
        * Redistributions in binary form must reproduce the above copyright
          notice, this list of conditions and the following disclaimer in the
          documentation and/or other materials provided with the distribution.

  About: Notice
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
    AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
    ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
    LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
    CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
    SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
    INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
    CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
    ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
    POSSIBILITY OF SUCH DAMAGE.
*/
import * as THREE from './animat3d_modules/build/three.module.js';
import { GLTFLoader } from './animat3d_modules/loaders/GLTFLoader.js';
import Stats from './animat3d_modules/libs/stats.module.js';
import { GUI } from './animat3d_modules/libs/lil-gui.module.min.js';

console.log(`Animat3D Version       : public@^0.9.0b`);

let scene, renderer, camera, stats;
let model, skeleton, mixer, clock;

const crossFadeControls = [];
const mixers = [];

let idleAction, walkAction, runAction, angryAction, fearAction, greetAction, laughAction, sadAction, shyAction, talkAction, proposeAction, worryAction;
let applaudAction, attackAction, begAction, bowAction, cryAction, fundAction, pointAction, requestAction, smileAction, tauntAction, victoryAction;
let danceAction, dance2Action, dance3Action;

let idleActionH, walkActionH, runActionH, angryActionH, greetActionH, shyActionH, proposeActionH, worryActionH;
let applaudActionH, attackActionH, begActionH, bowActionH, cryActionH, fundActionH, pointActionH, requestActionH, smileActionH, tauntActionH, victoryActionH;
let danceActionH, dance2ActionH, dance3ActionH;

// let fearActionH, laughActionH, sadActionH, talkActionH;
// let fearActionF, laughActionF, sadActionF, talkActionF;

let idleActionF, walkActionF, runActionF, angryActionF, greetActionF, shyActionF, proposeActionF, worryActionF;
let applaudActionF, attackActionF, begActionF, bowActionF, cryActionF, fundActionF, pointActionF, requestActionF, smileActionF, tauntActionF, victoryActionF;
let danceActionF, dance2ActionF, dance3ActionF;

let idleWeight, walkWeight, runWeight, angryWeight, fearWeight, greetWeight, laughWeight, sadWeight, shyWeight, talkWeight, proposeWeight, worryWeight;
let applaudWeight, attackWeight, begWeight, bowWeight, cryWeight, fundWeight, pointWeight, requestWeight, smileWeight, tauntWeight, victoryWeight;
let danceWeight, dance2Weight, dance3Weight;

let actions, actionsFace, actionsHair;
let settings, options, settingsCastaFem, settingsCastaKid, optionsCastaFem, optionsCastaKid, animSpeed;
let singleStepMode = false;
let sizeOfNextStep = 0;

let degree = Math.PI / 180;
let inch = 2.54 * 10;



// get url params
function getUrlParameter(sParam) {
    let sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1];
        }

        if (sParameterName[1] === undefined) {
            window.open("https://valkyteq.com/","_self");
        }

    }

}

const p = 50000;
const m = getUrlParameter('m');
const u = getUrlParameter('u').replaceAll("%20", " ");
const i = u.split("-")[0];
// const n = u.split("-")[1];
const s = u.split("-")[2];
// const t = u.split("-")[3];
const x = getUrlParameter('s');

let serverEvents = new EventSource(`https://valkyteq.com:${p}/user/${i}/ai/?m=${m}&u=${u}&s=${x}`);

serverEvents.addEventListener('message', function(event){

    // chat command
    function _aiCmd(command) {

        const cmd = (command[0].toString().toLowerCase()).replace("/", "")
        const anim = {
            "castanic": {
                "male": {},
                "female": {
                    "fast": {
                        "angry":[angryAction, angryActionF, angryActionH],
                        "applaud":[applaudAction, applaudActionF, applaudActionH],
                        "attack":[attackAction, attackActionF, attackActionH],
                        "beg":[begAction, begActionF, begActionH],
                        "bow":[bowAction, bowActionF, bowActionH],
                        "cry":[cryAction, cryActionF, cryActionH],
                        "dance":[danceAction, danceActionF, danceActionH],
                        "fund":[fundAction, fundActionF, fundActionH],
                        "idle":[idleAction, idleActionF, idleActionH],
                        "point":[pointAction, pointActionF, pointActionH],
                        "propose":[proposeAction, proposeActionF, proposeActionH],
                        "request":[requestAction, requestActionF, requestActionH],
                        "shy":[shyAction, shyActionF, shyActionH],
                        "smile":[smileAction, smileActionF, smileActionH],
                        "taunt":[tauntAction, tauntActionF, tauntActionH],
                        "victory":[victoryAction, victoryActionF, victoryActionH],
                        "worry":[worryAction, worryActionF, worryActionH]
                    },
                    "mid": {
                        "dance2":[dance2Action, dance2ActionF, dance2ActionH],
                        "dance3":[dance3Action, dance3ActionF, dance3ActionH],
                        "run":[runAction, runActionF, runActionH],
                        "walk":[walkAction, walkActionF, walkActionH]
                    },
                    "slow": {
                        "greet":[greetAction, greetActionF, greetActionH]
                    }
                },
                "kid": {
                    "fast": {},
                    "mid": {
                        "angry":[angryAction], "dance":[danceAction], "fear":[fearAction], "greet":[greetAction],
                        "idle":[idleAction], "laugh":[laughAction], "propose":[proposeAction], "run":[runAction],
                        "sad":[sadAction], "shy":[shyAction], "talk":[talkAction], "walk":[walkAction]
                    },
                    "slow": {},
                }
            }
        }
        animSpeed = anim;


        if (m === "custom") {
            if (anim.castanic.female.fast[cmd]) {
                prepareCrossFade( idleAction, anim.castanic.female.fast[cmd][0] );
                prepareCrossFade( idleActionF, anim.castanic.female.fast[cmd][1] );
                prepareCrossFade( idleActionH, anim.castanic.female.fast[cmd][2] );
            }
            else if (anim.castanic.female.mid[cmd]) {
                prepareCrossFade( idleAction, anim.castanic.female.mid[cmd][0] );
                prepareCrossFade( idleActionF, anim.castanic.female.mid[cmd][1] );
                prepareCrossFade( idleActionH, anim.castanic.female.mid[cmd][2] );
            }
            else if (anim.castanic.female.slow[cmd]) {
                prepareCrossFade( idleAction, anim.castanic.female.slow[cmd][0] );
                prepareCrossFade( idleActionF, anim.castanic.female.slow[cmd][1] );
                prepareCrossFade( idleActionH, anim.castanic.female.slow[cmd][2] );
            }
        }
        else if (m === "kara") {
            if (anim.castanic.kid.fast[cmd]) {
                prepareCrossFade( idleAction, anim.castanic.kid.fast[cmd][0] );
            }
            else if (anim.castanic.kid.mid[cmd]) {
                prepareCrossFade( idleAction, anim.castanic.kid.mid[cmd][0] );
            }
            else if (anim.castanic.kid.slow[cmd]) {
                prepareCrossFade( idleAction, anim.castanic.kid.slow[cmd][0] );
            }
        }
        else {
            if (anim.castanic.female.fast[cmd]) {
                prepareCrossFade( idleAction, anim.castanic.female.fast[cmd][0] );
            }
            else if (anim.castanic.female.mid[cmd]) {
                prepareCrossFade( idleAction, anim.castanic.female.mid[cmd][0] );
            }
            else if (anim.castanic.female.slow[cmd]) {
                prepareCrossFade( idleAction, anim.castanic.female.slow[cmd][0] );
            }
        }

    }

    let msg = event.data.split(" ")
    _aiCmd(msg)

});

settingsCastaKid = {
    'show model': true,
    'show skeleton': false,
    'deactivate all': deactivateAllActions,
    'activate all': activateAllActions,
    'pause/continue': pauseContinue,
    'make single step': toSingleStepMode,
    'modify step size': 0.05,
    'from walk to idle': function () {
        prepareCrossFade( walkAction, idleAction, 1.0 );
    },
    'from idle to walk': function () {
        prepareCrossFade( idleAction, walkAction, 0.5 );
    },
    'from walk to run': function () {
        prepareCrossFade( walkAction, runAction, 2.5 );
    },
    'from run to walk': function () {
        prepareCrossFade( runAction, walkAction, 5.0 );
    },
    'use default duration': true,
    'set custom duration': 3.5,
    'modify idle weight': 1.0,
    'modify walk weight': 0.0,
    'modify run weight': 0.0,
    'modify angry weight': 0.0,
    'modify fear weight': 0.0,
    'modify greet weight': 0.0,
    'modify laugh weight': 0.0,
    'modify sad weight': 0.0,
    'modify shy weight': 0.0,
    'modify talk weight': 0.0,
    'modify propose weight': 0.0,
    'modify dance weight': 0.0,
    'modify time scale': 1.0
};
settingsCastaFem = {
    'show model': true,
    'show skeleton': false,
    'deactivate all': deactivateAllActions,
    'activate all': activateAllActions,
    'pause/continue': pauseContinue,
    'make single step': toSingleStepMode,
    'modify step size': 0.05,
    'from walk to idle': function () {
        prepareCrossFade( walkAction, idleAction, 1.0 );
    },
    'from idle to walk': function () {
        prepareCrossFade( idleAction, walkAction, 0.5 );
    },
    'from walk to run': function () {
        prepareCrossFade( walkAction, runAction, 2.5 );
    },
    'from run to walk': function () {
        prepareCrossFade( runAction, walkAction, 5.0 );
    },
    'use default duration': true,
    'set custom duration': 3.5,
    'modify angry weight': 0.0,
    'modify applaud weight': 0.0,
    'modify attack weight': 0.0,
    'modify beg weight': 0.0,
    'modify dance weight': 0.0,
    'modify dance2 weight': 0.0,
    'modify dance3 weight': 0.0,
    'modify fund weight': 0.0,
    'modify greet weight': 0.0,
    'modify point weight': 0.0,
    'modify propose weight': 0.0,
    'modify request weight': 0.0,
    'modify shy weight': 0.0,
    'modify smile weight': 0.0,
    'modify cry weight': 0.0,
    'modify taunt weight': 0.0,
    'modify victory weight': 0.0,
    'modify worry weight': 0.0,
    'modify idle weight': 1.0,
    'modify walk weight': 0.0,
    'modify run weight': 0.0,
    'modify time scale': 0.5
};

optionsCastaKid = {
    "stats":false,
    "debug":false,
    "cpanel":false,
    "camera":{
        "fov":60,
        "near":1,
        "far":10000,
        "position":[0, 33, -77],
        "rotation":[10, 180, 0]
    },
    "scene":{
        "ground":false,
        "gcolor":0x0d5bdd,
        "gsize":[500,500],
        "background":true,
        "bgcolor":0x0d5bdd,
        "fog":false,
        "fogcolor":0x0d5bdd,
        "fognear":30,
        "fogfar":300
    },
    "light":{
        "shadow":false,
        "color":0xffffff,
        "skycolor":0xffffff,
        "groundcolor":0x444444,
        "position":[-30, 100, -100],
        "size":30,
        "near":0.00001,
        "far":2000,
        "bias":-0.00001
    }
};
optionsCastaFem = {
    "stats":false,
    "debug":false,
    "cpanel":false,
    "camera":{
        "fov":60,
        "near":1,
        "far":10000,
        "position":[
            optionsCastaKid.camera.position[0] * inch,
            optionsCastaKid.camera.position[1] * inch,
            optionsCastaKid.camera.position[2] * inch
        ],
        "rotation":[10, 180, 0]
    },
    "scene":{
        "ground":false,
        "gcolor":0x0d5bdd,
        "gsize":[20000,20000],
        "background":true,
        "bgcolor":0x0d5bdd,
        "fog":false,
        "fogcolor":0x0d5bdd,
        "fognear":777,
        "fogfar":7777
    },
    "light":{
        "shadow":false,
        "color":0xffffff,
        "skycolor":0xffffff,
        "groundcolor":0x444444,
        "position":[-300, 1000, -1000],
        "size":1000,
        "near":0.00001,
        "far":100000,
        "bias":-0.00001
    }
};

if (m !== "custom") {
    if (m === "kara" || m === "kara1") {
        settings = settingsCastaKid;
        options = optionsCastaKid;
    }
    else if (m === "hiphop" || m === "police" || m === "pubg" || m === "cyba") {
        settings = settingsCastaFem;
        options = optionsCastaKid;
    }
    else {
        settings = settingsCastaFem;
        options = optionsCastaFem;
    }
} else {
    settings = settingsCastaFem;
    options = optionsCastaFem;
}

//
animat3d(options);


function animat3d(opt) {

    const container = document.getElementById( 'container' );

    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
    // camera.position.set( 1, 27, -30 );
    // camera.lookAt( 0, 1, 0 );
    camera.position.set(
        opt.camera.position[0],
        opt.camera.position[1],
        opt.camera.position[2]
    );
    camera.rotation.set(
        opt.camera.rotation[0] * degree,
        opt.camera.rotation[1] * degree,
        opt.camera.rotation[2] * degree
    )

    clock = new THREE.Clock();
    scene = new THREE.Scene();

    // background
    if (opt.scene.background) {
        scene.background = new THREE.Color(opt.scene.bgcolor);
    }

    // fog / bg transmission
    if (opt.scene.fog) {
        scene.fog = new THREE.Fog(opt.scene.fogcolor, opt.scene.fognear, opt.scene.fogfar);
    }

    // omni light
    const omniLight = new THREE.HemisphereLight( opt.light.skycolor, opt.light.groundcolor );
    omniLight.position.set( 0, 20, 0 );
    scene.add(omniLight);

    // directional light
    const dirLight = new THREE.DirectionalLight( 0xffffff );
    dirLight.position.set(opt.light.position[0], opt.light.position[1], opt.light.position[2]);
    dirLight.castShadow = opt.light.shadow;
    dirLight.shadow.camera.top = opt.light.size;
    dirLight.shadow.camera.bottom = - opt.light.size;
    dirLight.shadow.camera.left = - opt.light.size;
    dirLight.shadow.camera.right = opt.light.size;
    dirLight.shadow.camera.near = opt.light.near;
    dirLight.shadow.camera.far = opt.light.far;
    dirLight.shadow.bias = opt.light.bias;
    scene.add( dirLight );

    // ground
    if (opt.scene.ground) {
        const mesh = new THREE.Mesh(
            new THREE.PlaneGeometry(opt.scene.gsize[0], opt.scene.gsize[1]),
            new THREE.MeshPhongMaterial({color: opt.scene.gcolor, depthWrite: false})
        );
        mesh.rotation.x = -Math.PI / 2;
        mesh.receiveShadow = opt.light.shadow;
        scene.add(mesh);
    }

    // character
    const loader = new GLTFLoader();
    if (m !== "custom") {
        loader.load( `./animat3d_objects/chars/${m}.glb`, function ( gltf ) {
            setupGLTF(gltf, "BODY");
        });
    } else {
        const body = s.substring(0,2);
        const face = s.substring(2,4);
        const hair = s.substring(4,7);
        loader.load( `./animat3d_objects/body/bandage.glb`, function ( gltf ) {
            setupGLTF(gltf, "BODY");
        });
        loader.load( `./animat3d_objects/face/face${face}.glb`, function ( gltf ) {
            setupGLTF(gltf, "FACE");
        });
        loader.load( `./animat3d_objects/hair/hair${hair}.glb`, function ( gltf ) {
            setupGLTF(gltf, "HAIR");
        });
    }


    // debug
    if (opt.debug) {
        scene.add(new THREE.AxesHelper(10));
        scene.add(new THREE.CameraHelper(dirLight.shadow.camera));
    }

    // renderer
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.shadowMap.enabled = opt.light.shadow;
    container.appendChild( renderer.domElement );

    if (opt.stats) {
        stats = new Stats();
        container.appendChild(stats.dom);
    }

    window.addEventListener( 'resize', onWindowResize );

}

function setupGLTF(gltf, type) {

    model = gltf.scene;
    scene.add( model );

    model.traverse( function ( object ) {
        if ( object.isMesh ) object.castShadow = options.light.shadow;
    } );

    if (options.cpanel) {
        // 3D Model Skeleton
        skeleton = new THREE.SkeletonHelper(model);
        skeleton.visible = false;
        scene.add(skeleton);

        // Control Panel
        createPanel();
    }

    // 3D Model Animations
    const animations = gltf.animations;
    mixer = new THREE.AnimationMixer( model );

    // Character Models
    if (m === "kara") {
        angryAction = mixer.clipAction(animations[0]);
        fearAction = mixer.clipAction(animations[1]);
        greetAction = mixer.clipAction(animations[2]);
        laughAction = mixer.clipAction(animations[3]);
        sadAction = mixer.clipAction(animations[4]);
        shyAction = mixer.clipAction(animations[5]);
        talkAction = mixer.clipAction(animations[6]);
        proposeAction = mixer.clipAction(animations[7]);
        walkAction = mixer.clipAction(animations[8]);
        danceAction = mixer.clipAction(animations[9]);
        runAction = mixer.clipAction(animations[10]);
        idleAction = mixer.clipAction(animations[11]);

        actions = [
            idleAction, walkAction, runAction, angryAction, fearAction, greetAction,
            laughAction, sadAction, shyAction, talkAction, proposeAction, danceAction
        ];
    }
    else {
        if (type === "BODY") {
            angryAction = mixer.clipAction(animations[0]);
            applaudAction = mixer.clipAction(animations[1]);
            attackAction = mixer.clipAction(animations[2]);
            begAction = mixer.clipAction(animations[3]);
            bowAction = mixer.clipAction(animations[4]);

            danceAction = mixer.clipAction(animations[5]);
            fundAction = mixer.clipAction(animations[6]);
            dance2Action = mixer.clipAction(animations[7]);
            dance3Action = mixer.clipAction(animations[8]);
            greetAction = mixer.clipAction(animations[9]);

            pointAction = mixer.clipAction(animations[10]);
            proposeAction = mixer.clipAction(animations[11]);
            requestAction = mixer.clipAction(animations[12]);
            shyAction = mixer.clipAction(animations[13]);
            smileAction = mixer.clipAction(animations[14]);

            cryAction = mixer.clipAction(animations[15]);
            tauntAction = mixer.clipAction(animations[16]);
            victoryAction = mixer.clipAction(animations[17]);
            worryAction = mixer.clipAction(animations[18]);
            idleAction = mixer.clipAction(animations[19]);

            walkAction = mixer.clipAction(animations[20]);
            runAction = mixer.clipAction(animations[21]);

            actions = [
                angryAction, applaudAction, attackAction, begAction, bowAction,
                danceAction, fundAction, dance2Action, dance3Action, greetAction,
                pointAction, proposeAction, requestAction, shyAction, smileAction,
                cryAction, tauntAction, victoryAction, worryAction, idleAction,
                walkAction, runAction
            ];
        }
        else if (type === "HAIR") {
            angryActionH = mixer.clipAction(animations[0]);
            applaudActionH = mixer.clipAction(animations[1]);
            attackActionH = mixer.clipAction(animations[2]);
            begActionH = mixer.clipAction(animations[3]);
            bowActionH = mixer.clipAction(animations[4]);

            danceActionH = mixer.clipAction(animations[5]);
            fundActionH = mixer.clipAction(animations[6]);
            dance2ActionH = mixer.clipAction(animations[7]);
            dance3ActionH = mixer.clipAction(animations[8]);
            greetActionH = mixer.clipAction(animations[9]);

            pointActionH = mixer.clipAction(animations[10]);
            proposeActionH = mixer.clipAction(animations[11]);
            requestActionH = mixer.clipAction(animations[12]);
            shyActionH = mixer.clipAction(animations[13]);
            smileActionH = mixer.clipAction(animations[14]);

            cryActionH = mixer.clipAction(animations[15]);
            tauntActionH = mixer.clipAction(animations[16]);
            victoryActionH = mixer.clipAction(animations[17]);
            worryActionH = mixer.clipAction(animations[18]);
            idleActionH = mixer.clipAction(animations[19]);

            walkActionH = mixer.clipAction(animations[20]);
            runActionH = mixer.clipAction(animations[21]);

            actionsHair = [
                angryActionH, applaudActionH, attackActionH, begActionH, bowActionH,
                danceActionH, fundActionH, dance2ActionH, dance3ActionH, greetActionH,
                pointActionH, proposeActionH, requestActionH, shyActionH, smileActionH,
                cryActionH, tauntActionH, victoryActionH, worryActionH, idleActionH,
                walkActionH, runActionH
            ];
        }
        else if (type === "FACE") {
            angryActionF = mixer.clipAction(animations[0]);
            applaudActionF = mixer.clipAction(animations[1]);
            attackActionF = mixer.clipAction(animations[2]);
            begActionF = mixer.clipAction(animations[3]);
            bowActionF = mixer.clipAction(animations[4]);

            danceActionF = mixer.clipAction(animations[5]);
            fundActionF = mixer.clipAction(animations[6]);
            dance2ActionF = mixer.clipAction(animations[7]);
            dance3ActionF = mixer.clipAction(animations[8]);
            greetActionF = mixer.clipAction(animations[9]);

            pointActionF = mixer.clipAction(animations[10]);
            proposeActionF = mixer.clipAction(animations[11]);
            requestActionF = mixer.clipAction(animations[12]);
            shyActionF = mixer.clipAction(animations[13]);
            smileActionF = mixer.clipAction(animations[14]);

            cryActionF = mixer.clipAction(animations[15]);
            tauntActionF = mixer.clipAction(animations[16]);
            victoryActionF = mixer.clipAction(animations[17]);
            worryActionF = mixer.clipAction(animations[18]);
            idleActionF = mixer.clipAction(animations[19]);

            walkActionF = mixer.clipAction(animations[20]);
            runActionF = mixer.clipAction(animations[21]);

            actionsFace = [
                angryActionF, applaudActionF, attackActionF, begActionF, bowActionF,
                danceActionF, fundActionF, dance2ActionF, dance3ActionF, greetActionF,
                pointActionF, proposeActionF, requestActionF, shyActionF, smileActionF,
                cryActionF, tauntActionF, victoryActionF, worryActionF, idleActionF,
                walkActionF, runActionF
            ];
        }

    }

    mixers.push( mixer );
    // activateAllActions();
    // animate();

}


function createPanel() {

    const panel = new GUI( { width: 310, title: 'Animat3D - ..a project by VALKYTEQ' } );

    const folder1 = panel.addFolder( '3D Model Visibility' );
    const folder2 = panel.addFolder( 'Animation Activation' );
    const folder3 = panel.addFolder( 'Animation Stepping' );
    const folder4 = panel.addFolder( 'Animation Fading' );
    const folder5 = panel.addFolder( 'Animation Weight' );
    const folder6 = panel.addFolder( 'Animation Speed' );

    // 3D Model Visibility
    folder1.add( settings, 'show model' ).onChange( showModel );
    folder1.add( settings, 'show skeleton' ).onChange( showSkeleton );

    // Animation Activation
    folder2.add( settings, 'deactivate all' );
    folder2.add( settings, 'activate all' );

    // Animation Stepping
    folder3.add( settings, 'pause/continue' );
    folder3.add( settings, 'make single step' );
    folder3.add( settings, 'modify step size', 0.01, 0.1, 0.001 );

    // Animation Fading
    crossFadeControls.push( folder4.add( settings, 'from walk to idle' ) );
    crossFadeControls.push( folder4.add( settings, 'from idle to walk' ) );
    crossFadeControls.push( folder4.add( settings, 'from walk to run' ) );
    crossFadeControls.push( folder4.add( settings, 'from run to walk' ) );
    folder4.add( settings, 'use default duration' );
    folder4.add( settings, 'set custom duration', 0, 10, 0.01 );

    // Animation Weight
    folder5.add( settings, 'modify angry weight', 0.0, 1.0, 0.01 ).listen().onChange( function ( weight ) {
        setWeight( angryAction, weight );
    } );
    folder5.add( settings, 'modify dance weight', 0.0, 1.0, 0.01 ).listen().onChange( function ( weight ) {
        setWeight( danceAction, weight );
    } );
    folder5.add( settings, 'modify fear weight', 0.0, 1.0, 0.01 ).listen().onChange( function ( weight ) {
        setWeight( fearAction, weight );
    } );
    folder5.add( settings, 'modify greet weight', 0.0, 1.0, 0.01 ).listen().onChange( function ( weight ) {
        setWeight( greetAction, weight );
    } );
    folder5.add( settings, 'modify idle weight', 0.0, 1.0, 0.01 ).listen().onChange( function ( weight ) {
        setWeight( idleAction, weight );
    } );
    folder5.add( settings, 'modify laugh weight', 0.0, 1.0, 0.01 ).listen().onChange( function ( weight ) {
        setWeight( laughAction, weight );
    } );
    folder5.add( settings, 'modify propose weight', 0.0, 1.0, 0.01 ).listen().onChange( function ( weight ) {
        setWeight( proposeAction, weight );
    } );
    folder5.add( settings, 'modify run weight', 0.0, 1.0, 0.01 ).listen().onChange( function ( weight ) {
        setWeight( runAction, weight );
    } );
    folder5.add( settings, 'modify sad weight', 0.0, 1.0, 0.01 ).listen().onChange( function ( weight ) {
        setWeight( sadAction, weight );
    } );
    folder5.add( settings, 'modify shy weight', 0.0, 1.0, 0.01 ).listen().onChange( function ( weight ) {
        setWeight( shyAction, weight );
    } );
    folder5.add( settings, 'modify talk weight', 0.0, 1.0, 0.01 ).listen().onChange( function ( weight ) {
        setWeight( talkAction, weight );
    } );
    folder5.add( settings, 'modify walk weight', 0.0, 1.0, 0.01 ).listen().onChange( function ( weight ) {
        setWeight( walkAction, weight );
    } );

    // Animation Speed
    folder6.add( settings, 'modify time scale', 0.0, 1.5, 0.01 ).onChange( modifyTimeScale );

    // show / hide
    folder1.open();
    folder2.close();
    folder3.close();
    folder4.close();
    folder5.close();
    folder6.close();

}


function showModel( visibility ) {
    model.visible = visibility;
}


function showSkeleton( visibility ) {
    skeleton.visible = visibility;
}


function modifyTimeScale( speed ) {
    mixer.timeScale = speed;
}


function deactivateAllActions() {

    actions.forEach( function ( action ) {
        action.stop();
    } );

    if (m === "custom") {
        actionsFace.forEach( function ( actionF ) {
            actionF.stop();
        } );
        actionsHair.forEach( function ( actionH ) {
            actionH.stop();
        } );
    }

}


function activateAllActions() {

    // Set weight for Kara specific animations
    if (m === "kara") {
        setWeight(idleAction, settings['modify idle weight']);
        setWeight(walkAction, settings['modify walk weight']);
        setWeight(runAction, settings['modify run weight']);
        setWeight(angryAction, settings['modify angry weight']);
        setWeight(fearAction, settings['modify fear weight']);
        setWeight(greetAction, settings['modify greet weight']);
        setWeight(laughAction, settings['modify laugh weight']);
        setWeight(sadAction, settings['modify sad weight']);
        setWeight(shyAction, settings['modify shy weight']);
        setWeight(talkAction, settings['modify talk weight']);
        setWeight(proposeAction, settings['modify propose weight']);
        setWeight(danceAction, settings['modify dance weight']);
    }

    // ..else..
    else {
        setWeight(angryAction, settings['modify angry weight']);
        setWeight(applaudAction, settings['modify applaud weight']);
        setWeight(attackAction, settings['modify attack weight']);
        setWeight(begAction, settings['modify beg weight']);
        setWeight(bowAction, settings['modify bow weight']);

        setWeight(danceAction, settings['modify dance weight']);
        setWeight(fundAction, settings['modify fund weight']);
        setWeight(dance2Action, settings['modify dance2 weight']);
        setWeight(dance3Action, settings['modify dance3 weight']);
        setWeight(greetAction, settings['modify greet weight']);

        setWeight(pointAction, settings['modify point weight']);
        setWeight(proposeAction, settings['modify propose weight']);
        setWeight(requestAction, settings['modify request weight']);
        setWeight(shyAction, settings['modify shy weight']);
        setWeight(smileAction, settings['modify smile weight']);

        setWeight(cryAction, settings['modify cry weight']);
        setWeight(tauntAction, settings['modify taunt weight']);
        setWeight(victoryAction, settings['modify victory weight']);
        setWeight(worryAction, settings['modify worry weight']);
        setWeight(idleAction, settings['modify idle weight']);

        setWeight(walkAction, settings['modify walk weight']);
        setWeight(runAction, settings['modify run weight']);

        if (m === "custom") {

            // face
            setWeight(angryActionF, settings['modify angry weight']);
            setWeight(applaudActionF, settings['modify applaud weight']);
            setWeight(attackActionF, settings['modify attack weight']);
            setWeight(begActionF, settings['modify beg weight']);
            setWeight(bowActionF, settings['modify bow weight']);

            setWeight(danceActionF, settings['modify dance weight']);
            setWeight(fundActionF, settings['modify fund weight']);
            setWeight(dance2ActionF, settings['modify dance2 weight']);
            setWeight(dance3ActionF, settings['modify dance3 weight']);
            setWeight(greetActionF, settings['modify greet weight']);

            setWeight(pointActionF, settings['modify point weight']);
            setWeight(proposeActionF, settings['modify propose weight']);
            setWeight(requestActionF, settings['modify request weight']);
            setWeight(shyActionF, settings['modify shy weight']);
            setWeight(smileActionF, settings['modify smile weight']);

            setWeight(cryActionF, settings['modify cry weight']);
            setWeight(tauntActionF, settings['modify taunt weight']);
            setWeight(victoryActionF, settings['modify victory weight']);
            setWeight(worryActionF, settings['modify worry weight']);
            setWeight(idleActionF, settings['modify idle weight']);

            setWeight(walkActionF, settings['modify walk weight']);
            setWeight(runActionF, settings['modify run weight']);

            // hair
            setWeight(angryActionH, settings['modify angry weight']);
            setWeight(applaudActionH, settings['modify applaud weight']);
            setWeight(attackActionH, settings['modify attack weight']);
            setWeight(begActionH, settings['modify beg weight']);
            setWeight(bowActionH, settings['modify bow weight']);

            setWeight(danceActionH, settings['modify dance weight']);
            setWeight(fundActionH, settings['modify fund weight']);
            setWeight(dance2ActionH, settings['modify dance2 weight']);
            setWeight(dance3ActionH, settings['modify dance3 weight']);
            setWeight(greetActionH, settings['modify greet weight']);

            setWeight(pointActionH, settings['modify point weight']);
            setWeight(proposeActionH, settings['modify propose weight']);
            setWeight(requestActionH, settings['modify request weight']);
            setWeight(shyActionH, settings['modify shy weight']);
            setWeight(smileActionH, settings['modify smile weight']);

            setWeight(cryActionH, settings['modify cry weight']);
            setWeight(tauntActionH, settings['modify taunt weight']);
            setWeight(victoryActionH, settings['modify victory weight']);
            setWeight(worryActionH, settings['modify worry weight']);
            setWeight(idleActionH, settings['modify idle weight']);

            setWeight(walkActionH, settings['modify walk weight']);
            setWeight(runActionH, settings['modify run weight']);

        }
    }

    // Play animations with weight > 0.0
    actions.forEach( function ( action ) {
        action.play();
    } );

    if (m === "custom") {
        // Play "FACE" animations with weight > 0.0
        actionsFace.forEach( function ( actionF ) {
            actionF.play();
        } );
        // Play "HAIR" animations with weight > 0.0
        actionsHair.forEach( function ( actionH ) {
            actionH.play();
        } );
    }

}


function pauseContinue() {

    if ( singleStepMode ) {
        singleStepMode = false;
        unPauseAllActions();
    }
    else {
        if ( idleAction.paused ) {
            unPauseAllActions();
        } else {
            pauseAllActions();
        }
    }

}


function pauseAllActions() {
    actions.forEach( function ( action ) {
        action.paused = true;
    } );
    if (m === "custom") {
        actionsFace.forEach( function ( action ) {
            action.paused = true;
        } );
        actionsHair.forEach( function ( action ) {
            action.paused = true;
        } );
    }
}


function unPauseAllActions() {
    actions.forEach( function ( action ) {
        action.paused = false;
    } );
    if (m === "custom") {
        actionsFace.forEach( function ( action ) {
            action.paused = false;
        } );
        actionsHair.forEach( function ( action ) {
            action.paused = false;
        } );
    }
}


function toSingleStepMode() {
    unPauseAllActions();
    singleStepMode = true;
    sizeOfNextStep = settings[ 'modify step size' ];
}


function prepareCrossFade( startAction, endAction, defaultDuration ) {

    // Switch default / custom crossfade duration (according to the user's choice)
    const duration = setCrossFadeDuration( defaultDuration );

    // Make sure that we don't go on in singleStepMode, and that all actions are unpaused
    singleStepMode = false;
    unPauseAllActions();

    // If the current action is 'idle', execute the crossfade immediately...
    if ( startAction === idleAction ) {
        executeCrossFade( startAction, endAction, duration );
        synchronizeCrossFade( endAction, idleAction, duration );
    }
    else if ( startAction === idleActionF ) {
        executeCrossFade( startAction, endAction, duration );
        synchronizeCrossFade( endAction, idleActionF, duration );
    }
    else if ( startAction === idleActionH ) {
        executeCrossFade( startAction, endAction, duration );
        synchronizeCrossFade( endAction, idleActionH, duration );
    }
    // ...else wait until the current action has finished its current loop and set back to idle
    else {
        synchronizeCrossFade( startAction, endAction, duration );
    }

}


function setCrossFadeDuration( defaultDuration ) {

    // Switch default crossfade duration <-> custom crossfade duration
    if ( settings[ 'use default duration' ] ) {
        return defaultDuration;
    } else {
        return settings[ 'set custom duration' ];
    }

}


function synchronizeCrossFade( startAction, endAction, duration ) {

    mixer.addEventListener( 'loop', onLoopFinished );

    function onLoopFinished( event ) {
        if ( event.action === startAction ) {
            mixer.removeEventListener( 'loop', onLoopFinished );
            executeCrossFade( startAction, endAction, duration );
        }
    }

}


function executeCrossFade( startAction, endAction, duration ) {

    // Not only the start action, but also the end action must get a weight of 1 before fading
    // (concerning the start action this is already guaranteed in this place)
    setWeight( endAction, 1 );
    endAction.time = 0;

    // Crossfade with warping - you can also try without warping by setting the third parameter to false
    startAction.crossFadeTo( endAction, duration, true );

}


// This function is needed, since animationAction.crossFadeTo() disables its start action and sets
// the start action's timeScale to ((start animation's duration) / (end animation's duration))
function setWeight( action, weight ) {

    let clip, speed;
    clip = (action._clip.name).toString().toLowerCase();

    if (m !== "kara") {
        if (clip in animSpeed.castanic.female.fast) {
            speed = .5;
        } else if (clip in animSpeed.castanic.female.mid) {
            speed = .75;
        } else if (clip in animSpeed.castanic.female.slow) {
            speed = 1
        }
    } else { speed = 1 }

    action.enabled = true;
    action.paused = false;
    modifyTimeScale( speed )
    action.setEffectiveTimeScale( speed );
    action.setEffectiveWeight( weight );

}


// Called by the render loop to update 'Animation Weight' sliders in the control panel
function updateWeightSliders() {

    settings[ 'modify idle weight' ] = idleWeight;
    settings[ 'modify walk weight' ] = walkWeight;
    settings[ 'modify run weight' ] = runWeight;
    settings[ 'modify angry weight' ] = angryWeight;
    settings[ 'modify fear weight' ] = fearWeight;
    settings[ 'modify greet weight' ] = greetWeight;
    settings[ 'modify laugh weight' ] = laughWeight;
    settings[ 'modify sad weight' ] = sadWeight;
    settings[ 'modify shy weight' ] = shyWeight;
    settings[ 'modify talk weight' ] = talkWeight;
    settings[ 'modify propose weight' ] = proposeWeight;
    settings[ 'modify dance weight' ] = danceWeight;

}


// Called by the render loop to update 'Animation Fading' buttons in the control panel
function updateCrossFadeControls() {

    if ( idleWeight === 1 && walkWeight === 0 && runWeight === 0 ) {
        crossFadeControls[ 0 ].disable();
        crossFadeControls[ 1 ].enable();
        crossFadeControls[ 2 ].disable();
        crossFadeControls[ 3 ].disable();
    }

    if ( idleWeight === 0 && walkWeight === 1 && runWeight === 0 ) {
        crossFadeControls[ 0 ].enable();
        crossFadeControls[ 1 ].disable();
        crossFadeControls[ 2 ].enable();
        crossFadeControls[ 3 ].disable();
    }

    if ( idleWeight === 0 && walkWeight === 0 && runWeight === 1 ) {
        crossFadeControls[ 0 ].disable();
        crossFadeControls[ 1 ].disable();
        crossFadeControls[ 2 ].disable();
        crossFadeControls[ 3 ].enable();
    }

}


// keep center of the world on screen change
function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}


// Main animation function
function animate() {

    // Render loop
    requestAnimationFrame( animate );

    // Get active animation weight
    if (m === "kara") {
        idleWeight = idleAction.getEffectiveWeight();
        walkWeight = walkAction.getEffectiveWeight();
        runWeight = runAction.getEffectiveWeight();
        angryWeight = angryAction.getEffectiveWeight();
        fearWeight = fearAction.getEffectiveWeight();

        greetWeight = greetAction.getEffectiveWeight();
        laughWeight = laughAction.getEffectiveWeight();
        sadWeight = sadAction.getEffectiveWeight();
        shyWeight = shyAction.getEffectiveWeight();
        talkWeight = talkAction.getEffectiveWeight();

        proposeWeight = proposeAction.getEffectiveWeight();
        danceWeight = danceAction.getEffectiveWeight();
    }
    else {
        angryWeight = angryAction.getEffectiveWeight();
        applaudWeight = applaudAction.getEffectiveWeight();
        attackWeight = attackAction.getEffectiveWeight();
        begWeight = begAction.getEffectiveWeight();
        bowWeight = bowAction.getEffectiveWeight();

        danceWeight = danceAction.getEffectiveWeight();
        fundWeight = fundAction.getEffectiveWeight();
        dance2Weight = dance2Action.getEffectiveWeight();
        dance3Weight = dance3Action.getEffectiveWeight();
        greetWeight = greetAction.getEffectiveWeight();

        pointWeight = pointAction.getEffectiveWeight();
        proposeWeight = proposeAction.getEffectiveWeight();
        requestWeight = requestAction.getEffectiveWeight();
        shyWeight= shyAction.getEffectiveWeight();
        smileWeight = smileAction.getEffectiveWeight();

        cryWeight = cryAction.getEffectiveWeight();
        tauntWeight = tauntAction.getEffectiveWeight();
        victoryWeight = victoryAction.getEffectiveWeight();
        worryWeight = worryAction.getEffectiveWeight();
        idleWeight = idleAction.getEffectiveWeight();

        walkWeight = walkAction.getEffectiveWeight();
        runWeight = runAction.getEffectiveWeight();

        // if (m === "custom") {
        //
        //     angryWeight = angryAction.getEffectiveWeight();
        //     applaudWeight = applaudAction.getEffectiveWeight();
        //     attackWeight = attackAction.getEffectiveWeight();
        //     begWeight = begAction.getEffectiveWeight();
        //     bowWeight = bowAction.getEffectiveWeight();
        //
        //     danceWeight = danceAction.getEffectiveWeight();
        //     fundWeight = fundAction.getEffectiveWeight();
        //     dance2Weight = dance2Action.getEffectiveWeight();
        //     dance3Weight = dance3Action.getEffectiveWeight();
        //     greetWeight = greetAction.getEffectiveWeight();
        //
        //     pointWeight = pointAction.getEffectiveWeight();
        //     proposeWeight = proposeAction.getEffectiveWeight();
        //     requestWeight = requestAction.getEffectiveWeight();
        //     shyWeight= shyAction.getEffectiveWeight();
        //     smileWeight = smileAction.getEffectiveWeight();
        //
        //     cryWeight = cryAction.getEffectiveWeight();
        //     tauntWeight = tauntAction.getEffectiveWeight();
        //     victoryWeight = victoryAction.getEffectiveWeight();
        //     worryWeight = worryAction.getEffectiveWeight();
        //     idleWeight = idleAction.getEffectiveWeight();
        //
        //     walkWeight = walkAction.getEffectiveWeight();
        //     runWeight = runAction.getEffectiveWeight();
        //
        //     // hair
        //     angryWeight = angryAction.getEffectiveWeight();
        //     applaudWeight = applaudAction.getEffectiveWeight();
        //     attackWeight = attackAction.getEffectiveWeight();
        //     begWeight = begAction.getEffectiveWeight();
        //     bowWeight = bowAction.getEffectiveWeight();
        //
        //     danceWeight = danceAction.getEffectiveWeight();
        //     fundWeight = fundAction.getEffectiveWeight();
        //     dance2Weight = dance2Action.getEffectiveWeight();
        //     dance3Weight = dance3Action.getEffectiveWeight();
        //     greetWeight = greetAction.getEffectiveWeight();
        //
        //     pointWeight = pointAction.getEffectiveWeight();
        //     proposeWeight = proposeAction.getEffectiveWeight();
        //     requestWeight = requestAction.getEffectiveWeight();
        //     shyWeight= shyAction.getEffectiveWeight();
        //     smileWeight = smileAction.getEffectiveWeight();
        //
        //     cryWeight = cryAction.getEffectiveWeight();
        //     tauntWeight = tauntAction.getEffectiveWeight();
        //     victoryWeight = victoryAction.getEffectiveWeight();
        //     worryWeight = worryAction.getEffectiveWeight();
        //     idleWeight = idleAction.getEffectiveWeight();
        //
        //     walkWeight = walkAction.getEffectiveWeight();
        //     runWeight = runAction.getEffectiveWeight();
        // }
    }

    // Control Panel adjustments when animations got triggered
    if (options.cpanel) {
        // Update the panel values if weights are modified from "outside" (by crossfadings)
        updateWeightSliders();

        // Enable/disable crossfade controls according to current weight values
        updateCrossFadeControls();
    }

    // Get the time elapsed since the last frame, used for mixer update (if not in single step mode)
    let mixerUpdateDelta = clock.getDelta();

    // If in single step mode, make one step and then do nothing (until the user clicks again)
    if (singleStepMode) {
        mixerUpdateDelta = sizeOfNextStep;
        sizeOfNextStep = 0;
    }

    // Update the animation mixer, the stats panel, and render this frame
    // mixer.update( mixerUpdateDelta );
    for ( const mixer of mixers ) mixer.update( mixerUpdateDelta );
    if (options.stats) stats.update();
    renderer.render( scene, camera );

}

setTimeout(function (){
    activateAllActions();
    animate();
}, 5555)
