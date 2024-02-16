let xoff = 0;
let yoff = 0;
let increment = 0.005; // Decreased increment value for slower animation

function setup() {
    frameRate(1);
    createCanvas(400, 400);
    noiseDetail(8); // Adjust the level of detail of the Perlin noise
}

function draw() {
    background(220);

    // Loop through each pixel of the canvas
    loadPixels();
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let index = (x + y * width) * 4; // Calculate the pixel array index

            // Generate Perlin noise value for the current pixel
            let noiseVal = noise(xoff, yoff) * 255;

            // Set the color of the pixel based on the Perlin noise value
            pixels[index] = noiseVal;
            pixels[index + 1] = noiseVal;
            pixels[index + 2] = noiseVal;
            pixels[index + 3] = 255; // Alpha channel (opacity)

            xoff += increment; // Move along the x-axis
        }
        yoff += increment; // Move along the y-axis
        xoff = 0; // Reset x offset for the next row
    }
    updatePixels();
}
