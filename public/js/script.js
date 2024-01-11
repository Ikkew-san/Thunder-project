"use strict";
let action = false;
let direction = "right";
let boxNumber = 0;
let btnAction = document.getElementById("btnAction");
const btnStart = () => {
    if (!action) {
        action = true;
        if (boxNumber === 0)
            boxNumber = Math.floor(Math.random() * 36 + 1);
        btnAction === null || btnAction === void 0 ? void 0 : btnAction.innerHTML = "Stop";
        btnAction === null || btnAction === void 0 ? void 0 : btnAction.style = "background: red";
        move();
    }
    else {
        btnAction === null || btnAction === void 0 ? void 0 : btnAction.innerHTML = "Start";
        btnAction === null || btnAction === void 0 ? void 0 : btnAction.style = "background: #ff7300";
        action = false;
    }
};
const move = () => {
    var _a, _b, _c;
    if (action) {
        (_a = document.getElementById(boxNumber.toString())) === null || _a === void 0 ? void 0 : _a.style = "background: green";
        if (boxNumber > 36) {
            direction = "left";
        }
        else if (boxNumber < 1) {
            direction = "right";
        }
        if (direction == "left") {
            (_b = document.getElementById((boxNumber + 1).toString())) === null || _b === void 0 ? void 0 : _b.style = "background: transparent";
            boxNumber--;
        }
        else {
            (_c = document.getElementById((boxNumber - 1).toString())) === null || _c === void 0 ? void 0 : _c.style = "background: transparent";
            boxNumber++;
        }
        setTimeout(move, 500);
    }
};
const actionReset = () => {
    var _a, _b;
    action = false;
    if (direction == "left") {
        (_a = document.getElementById((boxNumber + 1).toString())) === null || _a === void 0 ? void 0 : _a.style = "background: transparent";
    }
    else {
        (_b = document.getElementById((boxNumber - 1).toString())) === null || _b === void 0 ? void 0 : _b.style = "background: transparent";
    }
    btnAction === null || btnAction === void 0 ? void 0 : btnAction.innerHTML = "Start";
    btnAction === null || btnAction === void 0 ? void 0 : btnAction.style = "background: #ff7300";
    boxNumber = 0;
};
