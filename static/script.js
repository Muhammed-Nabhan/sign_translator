document.addEventListener("DOMContentLoaded", () => {
    // Get video element
    const video = document.getElementById("video");
  
    // Check if the browser supports accessing the camera
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      // Request access to the camera
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          // Assign the camera stream to the video element
          video.srcObject = stream;
        })
        .catch((error) => {
          console.error("Error accessing the camera: ", error);
        });
    }
  
    // Get canvas element
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
  
    // Run hand sign recognition when video is playing
    video.addEventListener("play", () => {
      // Set canvas size to match video dimensions
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
  
      // Start hand sign recognition loop
      setInterval(detectHandSign, 1000 / 30); // 30 FPS
    });
  
    // Function to detect hand sign
    function detectHandSign() {
      // Draw video frame on canvas
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
  
      // Perform hand sign recognition on the canvas image
      const imageData = canvas.toDataURL("image/jpeg");
      // Send the imageData to your server for processing or perform recognition locally
  
      // Display the result on the page
      const resultElement = document.getElementById("result");
      resultElement.textContent = "Performing hand sign recognition...";
    }
  });