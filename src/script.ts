let action: boolean = false;
let direction: string = "right";
let boxNumber: number = 0;
let btnAction: any = document.getElementById("btnAction");

const btnStart = () => {
  if (!action) {
    action = true;
    if (boxNumber === 0) boxNumber = Math.floor(Math.random() * 36 + 1);
    btnAction?.innerHTML = "Stop";
    btnAction?.style = "background: red";
    move();
  } else {
    btnAction?.innerHTML = "Start";
    btnAction?.style = "background: #ff7300";
    action = false;
  }
};

const move = () => {
  if (action) {
    document.getElementById(boxNumber.toString())?.style = "background: green";
    if (boxNumber > 36) {
      direction = "left";
    } else if (boxNumber < 1) {
      direction = "right";
    }

    if (direction == "left") {
      document.getElementById((boxNumber + 1).toString())?.style = "background: transparent";
      boxNumber--;
    } else {
      document.getElementById((boxNumber - 1).toString())?.style = "background: transparent";
      boxNumber++;
    }
    setTimeout(move, 500);
  }
};

const actionReset = () => {
  action = false;
  if (direction == "left") {
    document.getElementById((boxNumber + 1).toString())?.style = "background: transparent";
  } else {
    document.getElementById((boxNumber - 1).toString())?.style = "background: transparent";
  }
  btnAction?.innerHTML = "Start";
  btnAction?.style = "background: #ff7300";
  boxNumber = 0;
};
