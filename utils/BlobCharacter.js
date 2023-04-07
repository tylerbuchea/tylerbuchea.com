import { spline } from "@/utils/spline";

const { SVG, registerWindow } = require("@svgdotjs/svg.js");
const { createSVGWindow } = require("svgdom");

function randomSeeded(min, max, float, seed) {
  max = max || 1;
  min = min || 0;

  seed = (seed * 9301 + 49297) % 233280;
  var rnd = seed / 233280;

  const result = min + rnd * (max - min);
  return float ? result : Math.round(result);
}

export default class BlobCharacter {
  // width: number;
  // height: number;
  // svg: any;
  // lightColor: any;
  // size: number;
  // x: number;
  // y: number;
  // darkColor: any;
  // primaryColor: any;

  // constructor(width: number, height: number) {
  constructor(width, height, seed) {
    // viewBox width & height dimensions
    this.width = width;
    this.height = height;

    // position of our character within the viewBox (the center)
    this.x = this.width / 2;
    this.y = this.height / 2;

    this.seed = seed;

    // <svg /> element (svg.js instance) we are using to render
    const window = createSVGWindow();
    const document = window.document;
    registerWindow(window, document);

    this.svg = SVG(document.documentElement)
      // .addTo(target) // mount instance to our target
      .viewbox(0, 0, this.width, this.height); // set the <svg /> viewBox attribute

    // choose a random size / radius for our character
    // this.size = randomSeeded(50, 80, false, this.seed);
    this.size = randomSeeded(70, 80, false, this.seed);

    this.setColors();

    this.svg.node.style.background = this.lightColor;
  }

  drawBody() {
    // how many points do we want?
    const numPoints = randomSeeded(3, 12, false, this.seed);
    // step used to place each point at equal distances
    const angleStep = (Math.PI * 2) / numPoints;

    // keep track of our points
    const points = [];

    for (let i = 1; i <= numPoints; i++) {
      // how much randomness should be added to each point
      const pull = randomSeeded(0.75, 1, true, this.seed + i);

      // x & y coordinates of the current point

      // cos(theta) * radius + a little randomness thrown in
      const x = this.x + Math.cos(i * angleStep) * (this.size * pull);
      // sin(theta) * radius + a little randomness thrown in
      const y = this.y + Math.sin(i * angleStep) * (this.size * pull);

      // push the point to the points array
      points.push({ x, y });
    }

    // generate a smooth continuous curve based on the points, using bezier curves. spline() will return an svg path-data string. The arguments are (points, tension, close). Play with tension and check out the effect!
    const pathData = spline(points, 1, true);

    // render the body in the form of an svg <path /> element!
    this.svg
      .path(pathData)
      .stroke({
        width: 2,
        color: this.darkColor,
      })
      .fill(this.primaryColor);
  }

  drawEyes() {
    // ensure the width of two eyes never exceeds 50% of the characters body size
    const maxWidth = this.size / 2;
    // if a random number between 0 and 1 is greater than 0.75, the character is a cyclops!
    const isCyclops = randomSeeded(0, 1, true, this.seed) > 0.75;
    // the size of each (or only) eye.
    const eyeSize = randomSeeded(maxWidth / 2, maxWidth, false, this.seed);

    if (isCyclops) {
      // draw just 1 eye, in the center of the character
      this.drawEye(this.x, this.y, eyeSize);
    } else {
      // draw 2 eyes, equidistant from the center of the character
      this.drawEye(this.x - maxWidth / 2, this.y, eyeSize);
      this.drawEye(this.x + maxWidth / 2, this.y, eyeSize);
    }
  }

  // x position, y position, radius / size
  // drawEye(x: number, y: number, size: number) {
  drawEye(x, y, size) {
    // create a new svg <group /> to add all the eye content too
    const eye = this.svg.group();
    // <group /> elements do not have an x and y attribute, so we need to "transform" it to the right position
    eye.transform({ translateX: x, translateY: y });

    // add the outer ring of the eye (an svg <circle /> element) to our eye <group />
    eye
      .circle(size)
      // cx / cy are the { x, y } values for the svg <circle /> element
      .cx(0)
      .cy(0)
      .stroke({
        width: 2,
        color: this.darkColor,
      })
      .fill(this.lightColor);

    // add the inner part of the eye (another svg <circle /> element) to our eye <group />
    eye
      .circle(size / 2)
      .cx(0)
      .cy(0)
      .fill(this.darkColor);
  }

  setColors() {
    // random hue
    const hue = randomSeeded(0, 360, false, this.seed);
    // random saturation, keeping it quite high here as a stylistic preference
    const saturation = randomSeeded(75, 100, false, this.seed);
    // random lightness, keeping it quite high here as a stylistic preference
    const lightness = randomSeeded(75, 95, false, this.seed);

    // base color
    this.primaryColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    // almost black, slightly tinted with the base color
    this.darkColor = `hsl(${hue}, ${saturation}%, 2%)`;
    // almost white, slightly tinted with the base color
    this.lightColor = `hsl(${hue}, ${saturation}%, 98%)`;
  }

  draw() {
    this.svg.clear();
    this.setColors();
    this.drawBody();
    this.drawEyes();

    return this.svg.svg();
  }
}
