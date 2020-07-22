const unweightedSearchAlgorithm = require("./pathfindingAlgorithms/unweightedSearchAlgorithm");
function getNeighbors(id, nodes, boardArray,name) {
    let coordinates = id.split("-");
    let x = parseInt(coordinates[0]);
    let y = parseInt(coordinates[1]);
    let neighbors = [];
    let potentialNeighbor;
    if(name === unweightedSearchAlgorithm){
      if (boardArray[x - 1] && boardArray[x - 1][y]) {
        potentialNeighbor = `${(x - 1).toString()}-${y.toString()}`
        if (nodes[potentialNeighbor].status !== "wall") {
          if (name === "bfs") {
            neighbors.push(potentialNeighbor);
          } else {
            neighbors.unshift(potentialNeighbor);
          }
        }
      }
      if (boardArray[x][y + 1]) {
        potentialNeighbor = `${x.toString()}-${(y + 1).toString()}`
        if (nodes[potentialNeighbor].status !== "wall") {
          if (name === "bfs") {
            neighbors.push(potentialNeighbor);
          } else {
            neighbors.unshift(potentialNeighbor);
          }
        }
      }
      if (boardArray[x + 1] && boardArray[x + 1][y]) {
        potentialNeighbor = `${(x + 1).toString()}-${y.toString()}`
        if (nodes[potentialNeighbor].status !== "wall") {
          if (name === "bfs") {
            neighbors.push(potentialNeighbor);
          } else {
            neighbors.unshift(potentialNeighbor);
          }
        }
      }
      if (boardArray[x][y - 1]) {
        potentialNeighbor = `${x.toString()}-${(y - 1).toString()}`
        if (nodes[potentialNeighbor].status !== "wall") {
          if (name === "bfs") {
            neighbors.push(potentialNeighbor);
          } else {
            neighbors.unshift(potentialNeighbor);
          }
        }
      }
      return neighbors;
    }
    else{
      if (boardArray[x - 1] && boardArray[x - 1][y]) {
        potentialNeighbor = `${(x - 1).toString()}-${y.toString()}`
        if (nodes[potentialNeighbor].status !== "wall") neighbors.push(potentialNeighbor);
      }
      if (boardArray[x + 1] && boardArray[x + 1][y]) {
        potentialNeighbor = `${(x + 1).toString()}-${y.toString()}`
        if (nodes[potentialNeighbor].status !== "wall") neighbors.push(potentialNeighbor);
      }
      if (boardArray[x][y - 1]) {
        potentialNeighbor = `${x.toString()}-${(y - 1).toString()}`
        if (nodes[potentialNeighbor].status !== "wall") neighbors.push(potentialNeighbor);
      }
      if (boardArray[x][y + 1]) {
        potentialNeighbor = `${x.toString()}-${(y + 1).toString()}`
        if (nodes[potentialNeighbor].status !== "wall") neighbors.push(potentialNeighbor);
      }
      return neighbors;
    }
  }
  
  module.export = getNeighbors;