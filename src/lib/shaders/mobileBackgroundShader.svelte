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

void main() {
  // User-defined colors - darker background, semi-transparent lines
  vec3 backgroundColor = vec3(0.05, 0.05, 0.1); // Much darker background
  vec3 lineColor = vec3(0.9, 0.9, 1.0); // Almost white lines
  float lineOpacity = 0.25; // Reduced opacity for lines
  
  float smoothedTime = iTime * smoothStart((iTime - iStartTime) / 0.1);
  vec2 Coord = vUv * iResolution;
  vec2 pp = -1. + 2. * Coord/iResolution.xy;
  vec2 p = pp;
  p.x *= iResolution.x/iResolution.y;
  
  // Ray setup
  vec3 ro = vec3(0., 0., 25.0);
  vec3 rd = normalize(vec3(p, -2));
  vec3 ard = abs(rd);
  
  // Ray-plane intersection
  float layerOffset = (1.0 / 300.5) + 17.;
  float tw = abs(ro.x - layerOffset * sqrt(1.0)) / ard.x;
  
  // Get intersection point
  vec3 wp = ro + rd * tw;
  vec2 layerShift = vec2(1.0 * 0.3, 1.0 * 0.6);
  vec2 wp2 = (ro+rd*tw).yz*50E-2 + layerShift;
  
  // Create single grid (no animation)
  float gridScale = 5.0;
  vec2 gridCoord = wp2 * gridScale;
  
  // Simple grid lines without fading effect
  float horizontalLines = abs(fract(gridCoord.x) - 0.5);
  horizontalLines = smoothstep(0.1, 0.0, horizontalLines);
  
  float verticalLines = abs(fract(gridCoord.y) - 0.5);
  verticalLines = smoothstep(0.1, 0.0, verticalLines);
  
  // Calculate view angle fade for better perspective effect
  float viewAngleFade = abs(rd.x);
  viewAngleFade = smoothstep(0.1, 0.4, viewAngleFade);
  
  // Distance-based fade for depth effect
  float dist = length(wp2);
  float fade = 1.0 - smoothstep(0.0, 9.0, dist);
  
  // Combine patterns
  float grid = max(horizontalLines, verticalLines) * fade;
  
  // Apply background and semi-transparent grid with view-based fade
  vec3 planeColor = mix(backgroundColor, lineColor, grid * lineOpacity);
  vec3 col = mix(vec3(0.0), planeColor, viewAngleFade);
  
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
