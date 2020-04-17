function moveKeys(Body, ball) {
  document.addEventListener("keydown", (event) => {
    const { x, y } = ball.velocity;
    if (event.key === "ArrowUp") {
      Body.setVelocity(ball, { x, y: y - 3 });
    } else if (event.key === "ArrowDown") {
      Body.setVelocity(ball, { x, y: y + 3 });
    } else if (event.key === "ArrowRight") {
      Body.setVelocity(ball, { x: x + 3, y });
    } else if (event.key === "ArrowLeft") {
      Body.setVelocity(ball, { x: x - 3, y });
    }
  });
}

function collisions(Runner, Events, engine, world, Body, start, end) {
  Events.on(engine, "collisionStart", (event) => {
    for (let collision of event.pairs) {
      const labels = ["ball", "win"];
      if (
        labels.includes(collision.bodyA.label) &&
        labels.includes(collision.bodyB.label)
      ) {
        document.querySelector(".msg-container").classList.remove("hidden");
        if (end === 0) {
          end++;
          const score = Math.ceil(Date.now() / 3600 / (Date.now() - start));
          document.querySelector(".score").innerHTML = `score: ${score}`;
          Runner.stop(engine);
          console.log(score);
        }
        world.gravity.y = 1;
        for (let body of world.bodies) {
          if (body.label === "Rectangle Body") {
            Body.setStatic(body, false);
          }
        }
      }
    }
  });
}
