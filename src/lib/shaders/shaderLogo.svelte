<!-- This is logo version that is made only from a shader-->
<script>
  import { T, useTask } from '@threlte/core';
  import * as THREE from 'three';

  export let canvasWidth = 100;
  export let canvasHeight = 250;

  const vertexShader = `
      varying vec2 vUv;
      
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

  // Here, just not sure what I want to do with the logo? How I want to form it.
  const fragmentShader = `
      varying vec2 vUv;
      uniform vec2 iResolution;
  
      void main() {
        // Create a simple radial gradient
        vec2 centerUV = vUv - 0.5;
        float distanceFromCenter = length(centerUV);
        
        // Create a circular shape
        float circle = 1.0 - smoothstep(0.4, 0.5, distanceFromCenter);
        
        // Color the circle
        vec3 color = vec3(0.5, 0.5, 1.0); // Light blue
        
        gl_FragColor = vec4(color, circle);
      }
    `;

  const uniforms = {
    iResolution: {
      value: new THREE.Vector2(canvasWidth, canvasHeight)
    }
  };
</script>

<T.Mesh>
  <T.SphereGeometry args={[0.5, 32, 32]} />
  <T.ShaderMaterial
    {uniforms}
    {vertexShader}
    {fragmentShader}
    transparent={true}
    side={THREE.DoubleSide}
  />
</T.Mesh>
