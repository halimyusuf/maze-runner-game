function horizontalMazeBorders(
  World,
  world,
  Bodies,
  horizontals,
  rowWidth,
  colWidth
) {
  // draw horizontal rectangles
  const [rows, cols] = [horizontals.length + 1, horizontals[0].length];
  for (let i = 0; i < rows - 1; i++) {
    for (let j = 0; j < cols; j++) {
      if (horizontals[i][j]) {
        continue;
      }
      const shape = Bodies.rectangle(
        j * rowWidth + rowWidth / 2,
        i * colWidth + colWidth,
        rowWidth,
        5,
        {
          isStatic: true,
          render: {
            fillStyle: "rgb(187, 76, 187)",
            strokeStyle: "red",
          },
        }
      );
      World.add(world, shape);
    }
  }
}

function verticalMazeBorder(
  World,
  world,
  Bodies,
  verticals,
  rowWidth,
  colWidth
) {
  // draw vertical rectangles
  const [rows, cols] = [verticals.length, verticals[0].length];
  for (let i = 0; i < rows - 1; i++) {
    for (let j = 0; j < cols; j++) {
      if (verticals[i][j]) {
        continue;
      }
      const shape = Bodies.rectangle(
        j * rowWidth + rowWidth,
        i * colWidth + colWidth / 2,
        5,
        colWidth,
        {
          isStatic: true,
          render: {
            fillStyle: "rgb(187, 76, 187)",
          },
        }
      );
      World.add(world, shape);
    }
  }
}

function walls(Bodies, width, height) {
  return [
    Bodies.rectangle(width / 2, 0, width, 5, { isStatic: true, label: "wall" }),
    Bodies.rectangle(width / 2, height, width, 5, {
      isStatic: true,
      label: "wall",
    }),
    Bodies.rectangle(0, height / 2, 5, height, {
      isStatic: true,
      label: "wall",
    }),
    Bodies.rectangle(width, height / 2, 5, height, {
      isStatic: true,
      label: "wall",
    }),
  ];
}

function destinationBody(Bodies, width, height, rowWidth, colWidth) {
  return Bodies.circle(
    width - rowWidth / 2,
    height - colWidth / 2,
    colWidth / 3,
    {
      isStatic: true,
      label: "win",
      render: {
        fillStyle: "green",
      },
    }
  );
}

function movingBall(Bodies, rowWidth, colWidth) {
  return Bodies.circle(rowWidth / 2, colWidth / 2, colWidth / 6, {
    label: "ball",
    render: {
      fillStyle: "orange",
    },
  });
}
