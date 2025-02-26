import React, { useRef, useEffect } from "react";
import "../styles/Fishtank.css";

const Fishtank = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let fish = [];
    const fishCount = 10; // Number of fish

    // Function to generate random colors
    function getRandomColor() {
      const colors = ["#FFA500", "#A020F0"]; // Shades of orange and purple
      return colors[Math.floor(Math.random() * colors.length)];
    }

    // Function to resize the canvas
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = 200;
      createFish(); // Recreate fish on resize
      drawSand(); // Draw sand after resizing
    }

    // Create fish with random properties
    function createFish() {
      fish = [];
      for (let i = 0; i < fishCount; i++) {
        fish.push({
          x: Math.random() * canvas.width,
          y: Math.random() * (canvas.height - 30), // Stay above sand
          size: 6, // Size of fish
          speedX: (Math.random() - 0.5) * 2, // Random X speed
          speedY: (Math.random() - 0.5) * 2, // Random Y speed
          color: getRandomColor(), // Assign a random color
        });
      }
    }

    // Draw sand at the bottom
    function drawSand() {
      const sandHeight = 10; // Height of the sand layer
      const sandColor = "#f7dea3"; // Light brown sand color

      ctx.fillStyle = sandColor;
      ctx.beginPath();
      ctx.moveTo(0, canvas.height - sandHeight);

      // Create a wavy effect
      for (let i = 0; i <= canvas.width; i += 20) {
        const waveHeight = Math.sin(i * 0.05) * 2; // Adjust wave effect
        ctx.lineTo(i, canvas.height - sandHeight + waveHeight);
      }

      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.closePath();
      ctx.fill();
    }

    // Draw light beam from the top
    function drawLighting() {
      const gradient = ctx.createLinearGradient(10, 0, 0, canvas.height);
      gradient.addColorStop(0, "rgba(255, 255, 255, 0.5)"); // Bright white at the top
      gradient.addColorStop(0.3, "rgba(255, 255, 255, 0.15)"); // Soft fade
      gradient.addColorStop(0.7, "rgba(255, 255, 255, 0.05)"); // Almost invisible near the bottom
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // Draw glass effect
    function drawGlass() {
      // Light reflection streaks
      ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
      ctx.beginPath();
      ctx.moveTo(canvas.width * 0.1, 0);
      ctx.lineTo(canvas.width * 0.12, canvas.height);
      ctx.lineTo(canvas.width * 0.15, canvas.height);
      ctx.lineTo(canvas.width * 0.13, 0);
      ctx.closePath();
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(canvas.width * 0.9, 0);
      ctx.lineTo(canvas.width * 0.88, canvas.height);
      ctx.lineTo(canvas.width * 0.85, canvas.height);
      ctx.lineTo(canvas.width * 0.87, 0);
      ctx.closePath();
      ctx.fill();

      // Subtle blue tint for glass
      ctx.fillStyle = "rgba(173, 216, 230, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // Animation function
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

      fish.forEach((f) => {
        f.x += f.speedX;
        f.y += f.speedY;

        // Bounce off walls
        if (f.x <= 0 || f.x + f.size >= canvas.width) f.speedX *= -1;
        if (f.y <= 0 || f.y + f.size >= canvas.height - 50) f.speedY *= -1; // Stay above sand

        // Draw fish
        ctx.fillStyle = f.color;
        ctx.fillRect(f.x, f.y, f.size, f.size);
      });

      drawSand();    // Draw sand after fish
      drawLighting(); // Apply top-down lighting effect
      drawGlass();   // Apply glass effect

      requestAnimationFrame(animate);
    }

    // Initial setup
    resizeCanvas();
    animate();

    // Resize event listener
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animate);
    };
  }, []);

  return (
    <div className="fishtank-container">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Fishtank;

