
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreePhoenix() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    mountRef.current.appendChild(renderer.domElement);

    // Phoenix geometry (simplified bird shape)
    const phoenixGeometry = new THREE.Group();

    // Body
    const bodyGeometry = new THREE.ConeGeometry(1, 4, 32);
    const bodyMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xff6b35,
      emissive: 0xff3300,
      emissiveIntensity: 0.5,
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    phoenixGeometry.add(body);

    // Wings
    const wingGeometry = new THREE.PlaneGeometry(4, 2);
    const wingMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xff4400,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.8,
    });
    
    const leftWing = new THREE.Mesh(wingGeometry, wingMaterial);
    leftWing.position.set(-2, 0, 0);
    leftWing.rotation.x = Math.PI / 4;
    
    const rightWing = new THREE.Mesh(wingGeometry, wingMaterial);
    rightWing.position.set(2, 0, 0);
    rightWing.rotation.x = -Math.PI / 4;
    
    phoenixGeometry.add(leftWing);
    phoenixGeometry.add(rightWing);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xff0000, 2, 100);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    scene.add(phoenixGeometry);
    camera.position.z = 10;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      phoenixGeometry.rotation.y += 0.005;
      leftWing.rotation.z = Math.sin(Date.now() * 0.003) * 0.2;
      rightWing.rotation.z = -Math.sin(Date.now() * 0.003) * 0.2;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const width = window.innerWidth / 2;
      const height = window.innerHeight / 2;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50 pointer-events-none" />;
}
