<script>
  import { T, useTask } from '@threlte/core';
  import { onMount } from 'svelte';
  import * as THREE from 'three';

  let width = $state(window.innerWidth);
  let height = $state(window.innerHeight);

  const vertexShader = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;

  const fragmentShader = `
uniform vec2 iResolution;
uniform float iTime;
uniform float iTimeDelta;
uniform float iStartTime;
varying vec2 vUv;

float smoothStart(float t) {
    return smoothstep(0.0, 1.0, clamp(t, 0.0, 1.0));
}

float random(float x) {
    return fract(sin(x * 12.9898) * 43758.5453123);
}

vec3 randomColor(float seed, float time) {
    float r = sin(time * 0.1 + random(seed) * 6.28) * 0.5 + 0.5;
    float g = sin(time * 0.1 + random(seed + 1.0) * 6.28) * 0.5 + 0.5;
    float b = sin(time * 0.1 + random(seed + 2.0) * 6.28) * 0.5 + 0.5;
    return vec3(r, g, b);
}

void main() {
    // User-defined colors
    vec3 backgroundColor = vec3(0.1, 0.1, 0.2);  // 
    vec3 lineColor = vec3(0.9, 0.9, 1.0);       // Almost white lines
    bool useRandomColors = false;                // Toggle for random colors
    float alpha = 0.65;

    float smoothedTime = iTime * smoothStart((iTime - iStartTime) / 0.1);
    vec2 Coord = vUv * iResolution;
    vec2 pp = -1. + 2. * Coord/iResolution.xy;
    vec2 p = pp;
    p.x *= iResolution.x/iResolution.y;
    vec3 col = vec3(0);  // Default black background
    vec3 ro = vec3(0., 0., 25.0);
    vec3 rd = normalize(vec3(p, -2));
    vec3 ard = abs(rd);
    
    // Ray-plane intersection for both vertical walls
    float layerOffset = (1.0 / 300.5) + 17.; //adjust last number to increase gap size
    float tw = abs(ro.x - layerOffset * sqrt(1.0)) / ard.x;

    // Get intersection point
    vec3 wp = ro + rd * tw;
    vec2 layerShift = vec2(1.0 * 0.3, 1.0 * 0.6);
    vec2 wp2 = (ro+rd*tw).yz*50E-2 + layerShift;
    
    // apply background gradient
    // vec3 secondBackgroundColor = vec3(0.9, 0.9, 1.0);
    // float mixVal = distance(wp2,vec2(0,100));
    // float mixVal = 0.5;
    // backgroundColor = mix(backgroundColor, secondBackgroundColor, mixVal);

    // apply aplpha to backgroundColor
    backgroundColor = backgroundColor * alpha;

    // Create grid base
    float gridScale = 5.0;
    vec2 gridCoord = wp2 * gridScale;
    vec2 lineIndex = floor(gridCoord);
    
    // Slower fade transitions
    float horizontalFade = sin(smoothedTime * 0.15 + random(lineIndex.x) * 6.28) * 0.5 + 0.5;
    float verticalFade = cos(smoothedTime * 0.2 + random(lineIndex.y) * 6.28) * 0.5 + 0.5;
    
    // Smoother transition using smoothstep
    float horizontalLines = abs(fract(gridCoord.x) - 0.5);
    horizontalLines = smoothstep(0.1, 0.0, horizontalLines) * smoothstep(0.3, 0.4, horizontalFade);
    
    float verticalLines = abs(fract(gridCoord.y) - 0.5);
    verticalLines = smoothstep(0.1, 0.0, verticalLines) * smoothstep(0.3, 0.4, verticalFade);
    
    // Calculate view angle fade
    float viewAngleFade = abs(rd.x);  // How much we're looking sideways
    viewAngleFade = smoothstep(0.1, 0.4, viewAngleFade);  // Fade based on view angle
    
    // Distance-based fade
    float dist = length(wp2);
    float fade = 1.0 - smoothstep(0.0, 9.0, dist);
    
    // Combine patterns
    float grid = max(horizontalLines, verticalLines) * fade;
    
    // Color handling
    vec3 finalLineColor;
    if (useRandomColors) {
        vec3 horizontalColor = randomColor(lineIndex.x, smoothedTime);
        vec3 verticalColor = randomColor(lineIndex.y + 1000.0, smoothedTime);
        finalLineColor = mix(horizontalColor, verticalColor, 0.5);
    } else {
        finalLineColor = lineColor;
    }
    
    // Apply background and grid with view-based fade
    vec3 planeColor = mix(backgroundColor, finalLineColor, grid);
    col = mix(vec3(0.0), planeColor, viewAngleFade);
    
    gl_FragColor = vec4(col, 1.0);
}
    `;

  const uniforms = {
    iTime: { value: 0 },
    iTimeDelta: { value: 0 },
    iResolution: { value: new THREE.Vector2(width, height) }
  };

  $effect(() => uniforms.iResolution.value.set(width, height));

  let startTime = performance.now() / 1000 - 5;
  let lastTime = startTime;

  // guessing that this might be an unoptimized way fo feeding it time.
  // on each re render of the frame might cause performance issues.
  useTask((delta) => {
    let currentTime = performance.now() / 1000;
    // console.log('currentTime: ', currentTime);
    // console.log('delta: ', delta);
    uniforms.iTime.value = currentTime - startTime;
    uniforms.iTimeDelta.value = currentTime - lastTime;
    // console.log('time: ', currentTime - startTime);
    // console.log('deltaTime: ', currentTime - lastTime);

    lastTime = currentTime;
  });
</script>

<T.Scene>
  <T.OrthographicCamera makeDefault args={[-1, 1, 1, -1, 0, 1]} />
  <T.Mesh>
    <T.PlaneGeometry args={[2, 2]} />
    <T.ShaderMaterial {uniforms} {vertexShader} {fragmentShader} />
  </T.Mesh>
</T.Scene>
