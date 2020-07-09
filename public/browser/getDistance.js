const astar = require("./pathfindingAlgorithms/astar");
function getDistance(nodeOne, nodeTwo,name) {
    let currentCoordinates = nodeOne.id.split("-");
    let targetCoordinates = nodeTwo.id.split("-");
    let x1 = parseInt(currentCoordinates[0]);
    let y1 = parseInt(currentCoordinates[1]);
    let x2 = parseInt(targetCoordinates[0]);
    let y2 = parseInt(targetCoordinates[1]);
    if(name === astar){
      if (x2 < x1 && y1 === y2) {
        if (nodeOne.direction === "up") {
          return [1, ["f"], "up"];
        } else if (nodeOne.direction === "right") {
          return [2, ["l", "f"], "up"];
        } else if (nodeOne.direction === "left") {
          return [2, ["r", "f"], "up"];
        } else if (nodeOne.direction === "down") {
          return [3, ["r", "r", "f"], "up"];
        } else if (nodeOne.direction === "up-right") {
          return [1.5, null, "up"];
        } else if (nodeOne.direction === "down-right") {
          return [2.5, null, "up"];
        } else if (nodeOne.direction === "up-left") {
          return [1.5, null, "up"];
        } else if (nodeOne.direction === "down-left") {
          return [2.5, null, "up"];
        }
      } else if (x2 > x1 && y1 === y2) {
        if (nodeOne.direction === "up") {
          return [3, ["r", "r", "f"], "down"];
        } else if (nodeOne.direction === "right") {
          return [2, ["r", "f"], "down"];
        } else if (nodeOne.direction === "left") {
          return [2, ["l", "f"], "down"];
        } else if (nodeOne.direction === "down") {
          return [1, ["f"], "down"];
        } else if (nodeOne.direction === "up-right") {
          return [2.5, null, "down"];
        } else if (nodeOne.direction === "down-right") {
          return [1.5, null, "down"];
        } else if (nodeOne.direction === "up-left") {
          return [2.5, null, "down"];
        } else if (nodeOne.direction === "down-left") {
          return [1.5, null, "down"];
        }
      }
      if (y2 < y1 && x1 === x2) {
        if (nodeOne.direction === "up") {
          return [2, ["l", "f"], "left"];
        } else if (nodeOne.direction === "right") {
          return [3, ["l", "l", "f"], "left"];
        } else if (nodeOne.direction === "left") {
          return [1, ["f"], "left"];
        } else if (nodeOne.direction === "down") {
          return [2, ["r", "f"], "left"];
        } else if (nodeOne.direction === "up-right") {
          return [2.5, null, "left"];
        } else if (nodeOne.direction === "down-right") {
          return [2.5, null, "left"];
        } else if (nodeOne.direction === "up-left") {
          return [1.5, null, "left"];
        } else if (nodeOne.direction === "down-left") {
          return [1.5, null, "left"];
        }
      } else if (y2 > y1 && x1 === x2) {
        if (nodeOne.direction === "up") {
          return [2, ["r", "f"], "right"];
        } else if (nodeOne.direction === "right") {
          return [1, ["f"], "right"];
        } else if (nodeOne.direction === "left") {
          return [3, ["r", "r", "f"], "right"];
        } else if (nodeOne.direction === "down") {
          return [2, ["l", "f"], "right"];
        } else if (nodeOne.direction === "up-right") {
          return [1.5, null, "right"];
        } else if (nodeOne.direction === "down-right") {
          return [1.5, null, "right"];
        } else if (nodeOne.direction === "up-left") {
          return [2.5, null, "right"];
        } else if (nodeOne.direction === "down-left") {
          return [2.5, null, "right"];
        }
      } 
    }else{
      if (x2 < x1) {
        if (nodeOne.direction === "up") {
          return [1, ["f"], "up"];
        } else if (nodeOne.direction === "right") {
          return [2, ["l", "f"], "up"];
        } else if (nodeOne.direction === "left") {
          return [2, ["r", "f"], "up"];
        } else if (nodeOne.direction === "down") {
          return [3, ["r", "r", "f"], "up"];
        }
      } else if (x2 > x1) {
        if (nodeOne.direction === "up") {
          return [3, ["r", "r", "f"], "down"];
        } else if (nodeOne.direction === "right") {
          return [2, ["r", "f"], "down"];
        } else if (nodeOne.direction === "left") {
          return [2, ["l", "f"], "down"];
        } else if (nodeOne.direction === "down") {
          return [1, ["f"], "down"];
        }
      }
      if (y2 < y1) {
        if (nodeOne.direction === "up") {
          return [2, ["l", "f"], "left"];
        } else if (nodeOne.direction === "right") {
          return [3, ["l", "l", "f"], "left"];
        } else if (nodeOne.direction === "left") {
          return [1, ["f"], "left"];
        } else if (nodeOne.direction === "down") {
          return [2, ["r", "f"], "left"];
        }
      } else if (y2 > y1) {
        if (nodeOne.direction === "up") {
          return [2, ["r", "f"], "right"];
        } else if (nodeOne.direction === "right") {
          return [1, ["f"], "right"];
        } else if (nodeOne.direction === "left") {
          return [3, ["r", "r", "f"], "right"];
        } else if (nodeOne.direction === "down") {
          return [2, ["l", "f"], "right"];
        }
      }
    }
  }
  
  module.exports = getDistance;
