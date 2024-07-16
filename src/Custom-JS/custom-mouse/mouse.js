const animateCircles = () => {
  const coords = { x: 0, y: 0 };
  const circles = document.querySelectorAll(".circle");

  let colors = [
      "#6366f1", "#6366f1", "#895fe7", "#895fe7", "#a459dc", "#a459dc", "#ba52d0",
      "#ba52d0", "#cb4dc2", "#cb4dc2", "#d949b5", "#d949b5", "#e447a7",
      "#e447a7", "#ec4899", "#ec4899", "#ec4899", "#ec4899", "#ec4899",
  ];


  circles.forEach((circle, index) => {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
  });

  window.addEventListener("mousemove", function(e){
      coords.x = e.clientX;
      coords.y = e.clientY;
  });

  function animate() {
      let x = coords.x;
      let y = coords.y;

      circles.forEach((circle, index) => {
          circle.style.left = x - 12 + "px";
          circle.style.top = y - 12 + "px";
          circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

          circle.x = x;
          circle.y = y;

          const nextCircle = circles[index + 1] || circles[0];
          x += (nextCircle.x - x) * 0.25;
          y += (nextCircle.y - y) * 0.25;
      });

      requestAnimationFrame(animate);
  }

  animate(); 
};

export default animateCircles;
