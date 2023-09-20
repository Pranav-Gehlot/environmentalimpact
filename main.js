// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 2, 5);

// Create a renderer
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('visualization') });
renderer.setSize(window.innerWidth, window.innerHeight);

// Create a rotating Earth model (you'll need to load a 3D model)
const earthTexture = new THREE.TextureLoader().load('earth.jpg'); // Replace with your Earth texture
const earthGeometry = new THREE.SphereGeometry(2, 32, 32);
const earthMaterial = new THREE.MeshBasicMaterial({ map: earthTexture });
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earth);

// Simulate emissions (e.g., using particles) - Replace with real data
const emissionParticles = new THREE.Group();
scene.add(emissionParticles);

// Create emissions particles (random positions for demonstration)
for (let i = 0; i < 500; i++) {
    const particleGeometry = new THREE.SphereGeometry(0.02, 8, 8);
    const particleMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const particle = new THREE.Mesh(particleGeometry, particleMaterial);

    // Randomly position particles on Earth's surface
    const latitude = Math.random() * Math.PI - Math.PI / 2;
    const longitude = Math.random() * 2 * Math.PI - Math.PI;
    const radius = 2;
    particle.position.set(
        radius * Math.cos(latitude) * Math.cos(longitude),
        radius * Math.cos(latitude) * Math.sin(longitude),
        radius * Math.sin(latitude)
    );

    emissionParticles.add(particle);
}

// Animation loop
const animate = () => {
    requestAnimationFrame(animate);

    // Rotate Earth
    earth.rotation.y += 0.005;

    renderer.render(scene, camera);
};

// Handle window resize
window.addEventListener('resize', () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;
    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(newWidth, newHeight);
});

// Start the animation
animate();
