if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  // true for mobile device
  var ask = window.confirm("Game not available on mobile.");
  if (ask) {
    window.location.href = "index.html#services";
  }
} else {
  const dino = document.getElementById("dino");
  const cactus = document.getElementById("cactus");
  var score = 0;
  var today = new Date();
  var start = today.getTime();
  var end = 0;

  function jump() {
    if (dino.classList != "jump") {
      dino.classList.add("jump");
      }
      setTimeout(function () {
        dino.classList.remove("jump");
      }, 500);
  }

  let isAlive = setInterval(function () {
    // get current dino Y position
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

    // get current cactus X position
    let cactusLeft = parseInt(
      window.getComputedStyle(cactus).getPropertyValue("left")
    );
    // detect collision
    if (cactusLeft < 140 && cactusLeft > 100 && dinoTop >= 460) {
      // collision
      cactus.style.animation = "none"
      var today2 = new Date()
      end = today2.getTime();
      score = end - start;
      score = ((score % 60000) / 1000).toFixed(0);

      var el = document.createElement("div");
      el.className ="card";
      el.innerHTML = "You lasted " + score + " seconds, but you can try to beat that!";

      let btn = document.createElement("button");
      btn.innerHTML = "Play Again";
      btn.id = "myBtn"
      btn.style.background = "#5E5DF0";
      btn.style.borderRadius = "999px";
      btn.style.boxShadow = "#5E5DF0 0 10px 20px -10px";
      btn.style.boxSizing = "border-box";
      btn.style.color = "#FFFFFF";
      btn.style.cursor = "pointer";
      btn.style.fontSize = "16px";
      btn.style.fontWeight = "700";
      btn.style.lineHeight = "24px";
      btn.style.opacity = "1";
      btn.style.outline = "0 solid transparent";
      btn.style.padding = "8px 18px";
      btn.style.userSelect = "none";
      btn.style.width = "fit-content";
      btn.style.wordBreak = "break-word";
      btn.style.border = "0";
      btn.style.display = "block";
      btn.style.margin = "0 auto";
      document.body.appendChild(el);
      document.body.appendChild(btn);

    }

    if (document.getElementById("myBtn")) {
      document.getElementById("myBtn").addEventListener("click", function() {
        window.location = '/dino.html';
        start = today.getSeconds();
      });
    }

  }, 0.1);

  document.addEventListener("keyup", function (event) {
    jump();
  });

  var button = document.getElementById("myBtn")

  let checkPlayAgain = setInterval(function () {
      if (button != null) {
          button.addEventListener("click", function (event) {
              this.style.backgroundColor = "red";
          });
      }
      
    }, 10);
  }
