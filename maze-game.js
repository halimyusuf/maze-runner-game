function mazeGame(rows, cols) {
  const start = Date.now();
  const { World, Engine, Bodies, Runner, Render, Body, Events } = Matter;
  const width = window.innerWidth;
  const height = window.innerHeight;
  const rowWidth = width / cols;
  const colWidth = height / rows;
  const end = 0;

  const engine = Engine.create();
  const { world } = engine;
  world.gravity.y = 0;

  const render = Render.create({
    engine: engine,
    element: document.querySelector("#maze-game"),
    options: {
      wireframes: false,
      width,
      height,
      // showAngleIndicator: true,
    },
  });

  Render.run(render);
  Runner.run(Runner.create(), engine);
  // console.log(Render.stop(render));

  // genearte walls
  const fence = walls(Bodies, width, height);
  World.add(world, fence);

  // geneate maze algo grids
  const grid = genGrid(rows, cols);
  const horizontals = genHorGrid(rows, cols);
  const verticals = genVerGrid(rows, cols);

  // pick a cell at random
  const startRow = Math.floor(Math.random() * rows);
  const startCol = Math.floor(Math.random() * cols);

  // maze algorithm
  moveThroughCells(startRow, startCol, grid, horizontals, verticals);

  // draw borders around the grid to show maze
  horizontalMazeBorders(World, world, Bodies, horizontals, rowWidth, colWidth);
  verticalMazeBorder(World, world, Bodies, verticals, rowWidth, colWidth);

  // displays dest shape
  const dest = destinationBody(Bodies, width, height, rowWidth, colWidth);
  World.add(world, dest);

  const ball = movingBall(Bodies, rowWidth, colWidth);
  // start
  World.add(world, ball);
  moveKeys(Body, ball);
  collisions(Runner, Events, engine, world, Body, start, end);
}
