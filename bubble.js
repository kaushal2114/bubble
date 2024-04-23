window.onload = function () {
  const gameSound = new Audio('/sound/game.mp3');
  let start = ()=>{
    let h = document.querySelector(".bubble-board-inner");
    const laughSound = new Audio('/sound/laugh.mp3');
    const bubbleSound = new Audio('/sound/bubble.wav');
    const lossSound = new Audio('/sound/loss.wav');
    var timer = 60;
    var n, hit;
    // increase score value by 10 ,fun
    var sn = 0; // score value is 0 
    let scoreint = () => {
      sn += 10;  // score value increment by 10
      document.querySelector("#score-id").innerHTML = `<p>${sn}</p>`
    }
    // genarate random hit value fun 
    let hitint = () => {
      hit = document.querySelector(".hit");
      n = Math.floor(Math.random() * 10);
      hit.innerHTML = `<p>${n}</p>`
    }
    // generate timer fun
    let timerint = () => {
      
      let stop = setInterval(() => {
        if (timer > 0) {
          timer--;
          document.querySelector(".timer").innerHTML = `<p>${timer}</p>`;
        } else {
          clearInterval(stop);
          let a = document.querySelector(".bubble-board-inner");
          a.innerHTML = "";
          a.classList.add('gameover');
          a.innerHTML = "Game Over";
          hit.innerHTML = "";
          
        }
      }, 1000);
    }
    // generating random numbers run
    let generate_rn_num = () => {
      
      let rn;
      let n_bubble = "";
      for (let i = 1; i <= 109; i++) {
        rn = Math.floor(Math.random() * 10);
        n_bubble += `<div class="bubbles">${rn}</div>`;
        
      }
      document.querySelector(".bubble-board-inner").innerHTML = n_bubble;
    }
    // decrement score
    let decrementScore = () => {
      sn -= 5;
      document.querySelector("#score-id").innerHTML = `<p>${sn}</p>`
    }
    let board = () => {
      let bd = document.querySelector(".bubble-board-inner");
      bd.addEventListener("click", (e) => {
        let b1 = Number(e.target.innerHTML);
        if (b1 == n) {
          bubbleSound.play();
          scoreint();
          generate_rn_num();
          hitint();
        }
        else {
          if (sn > 0) {
            lossSound.play();
            decrementScore();
          }
          else {
            return;
          }

          
        }
      });
    }
    let hover_ghost = () => {
      let gst = document.querySelector('.circle');
      gst.addEventListener("mouseover", function () {
        laughSound.play();
        let img_gst = document.querySelector('#img-ghost');
        img_gst.classList.add('ghost-anim');
      });
      hover_boby();
      
    }
    let hover_boby = () => {
      let main = document.querySelector('.bubble-board-inner');
      main.addEventListener("mouseover", () => {
        document.querySelector('#img-ghost').classList.remove('ghost-anim');
      });
    }
    
    hover_ghost();
    hitint();
    board();
    generate_rn_num();
    timerint();
    
  }
  let stn = document.querySelector('.bubble-board-inner');
  stn.classList.add('startgame');
  stn.innerHTML="<p class='s-g'>Start Game</p>"  
  sg = document.querySelector('.s-g');
  sg.addEventListener("click",()=>{
    stn.classList.remove('startgame');
    start();
    gameSound.play();    
  });
}
  
