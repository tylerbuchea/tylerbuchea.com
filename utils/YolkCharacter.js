import { createCanvas, loadImage } from "canvas";
const canvas = createCanvas(200, 200);
const ctx = canvas.getContext("2d");

const WIDTH = 1200;
const HEIGHT = 1200;
const COLS = 8;
const ROWS = 8;
const CELL_SIZE = WIDTH / COLS;
const RADIUS = (CELL_SIZE / 2) * 0.8;
const BACKGROUND_COLOR = "#f9dcc4";

function randomSeed(min, max, seed, float = true) {
  max = max || 1;
  min = min || 0;

  seed = (seed * 9301 + 49297) % 233280;
  var rnd = seed / 233280;

  const result = min + rnd * (max - min);
  return float ? result : Math.round(result);
}

const radians = (degrees) => (degrees * Math.PI) / 180;

const array = (length, func) => {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(func());
  }

  return arr;
};

const sum = (arr) => arr.reduce((acc, cv) => acc + cv, 0);

const getRadius = (alpha, amps, phases, wavesCount) => {
  let results = [];
  for (let i = 0; i < wavesCount; i++) {
    results.push(amps[i] * Math.cos((i + 1) * alpha + phases[i]));
  }

  return 1 + sum(results);
};

const drawShape = (ctx, points, color, strokeColor, lineWidth = 4) => {
  // https://stackoverflow.com/questions/7054272/how-to-draw-smooth-curve-through-n-points-using-javascript-html5-canvas
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = strokeColor;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);

  const t = 1;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = i > 0 ? points[i - 1] : points[0];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = i != points.length - 2 ? points[i + 2] : p2;

    const cp1x = p1.x + ((p2.x - p0.x) / 6) * t;
    const cp1y = p1.y + ((p2.y - p0.y) / 6) * t;

    const cp2x = p2.x - ((p3.x - p1.x) / 6) * t;
    const cp2y = p2.y - ((p3.y - p1.y) / 6) * t;

    ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, p2.x, p2.y);
  }

  // ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, p2.x, p2.y)

  ctx.stroke();
  ctx.fill();
};

const drawBlob = (
  ctx,
  x,
  y,
  wavesCount,
  scaleFactor,
  color,
  strokeColor,
  seed
) => {
  // https://stackoverflow.com/questions/54828017/c-create-random-shaped-blob-objects
  const amps = array(wavesCount, () =>
    randomSeed(0, 1 / (2 * wavesCount), seed)
  );
  const phases = array(wavesCount, () => randomSeed(0, 2 * Math.PI, seed));

  // console.log(amps);
  // console.log(phases);
  const points = [];
  const degrees = 360; // Math.PI * 2
  for (let i = 0; i < degrees; i++) {
    const alpha = radians(i); // i
    const radius = getRadius(alpha, amps, phases, wavesCount) * scaleFactor;
    const cx = x + Math.cos(alpha) * radius;
    const cy = y + Math.sin(alpha) * radius;
    points.push({ x: cx, y: cy });
  }

  drawShape(ctx, [...points, points[0]], color, strokeColor, 6);
};

const drawYolk = (ctx, x, y, r = 100, seed) => {
  const cx = x + randomSeed(0, r * 0.6, seed);
  const cy = y + randomSeed(0, r * 0.6, seed);
  const cr = r * randomSeed(1, 1.5, seed);

  const yrx = cr * 0.45; // randomSeed(0.4, 0.5); // 0.45
  const yry = cr * 0.7; // randomSeed(0.6, 0.8); // 0.7

  // #fff15c
  ctx.fillStyle = "#feb242";
  ctx.beginPath();
  ctx.arc(cx, cy, cr, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#ffc641";
  ctx.beginPath();
  ctx.ellipse(cx - r / 3, cy - r / 3, yrx, yry, Math.PI / 4, 0, 2 * Math.PI);
  ctx.fill();

  /*
  ctx.fillStyle = '#fff15c';
  ctx.beginPath();
  ctx.ellipse(cx - (r/3), cy - (r/2), cr * 0.15, cr * 0.3, Math.PI / 4, 0, 2 * Math.PI);
  ctx.fill();
  */
};

const drawEgg = (ctx, x, y, r = 300, seed) => {
  const wavesCount = randomSeed(5, 10, seed, false);
  drawBlob(ctx, x, y, wavesCount, r, "#fefefe", "#b7721d", seed);
  drawYolk(ctx, x, y, r / 3, seed);
};

const run = (ctx, seed) => {
  const x = WIDTH / 2;
  const y = HEIGHT / 2;

  ctx.fillStyle = BACKGROUND_COLOR;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  const rows = 1;
  const cols = 1;
  const cellSize = WIDTH / rows;

  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < cols; y++) {
      const c = {
        x: x * cellSize + cellSize / 2,
        y: y * cellSize + cellSize / 2,
      };

      drawEgg(ctx, c.x, c.y, cellSize * 0.4, seed);
    }
  }
};

export default class YolkCharacter {
  constructor(seed) {
    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    run(ctx, seed);
    this.canvas = canvas;
  }
}
