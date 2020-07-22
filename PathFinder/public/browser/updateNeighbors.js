const getNeighbors = require("./getNeighbors");
const updateNode = require("./updateNode");
const bidirectional = require("./pathfindingAlgorithms/birdirectional.js");
function updateNeighbors(nodes, node, boardArray, target, name, start, heuristic) {
    let neighbors = getNeighbors(node.id, nodes, boardArray,name);
    if(name === bidirectional){
      for (let neighbor of neighbors) {
        updateNode(node, nodes[neighbor], nodes[target], name, nodes, nodes[start], heuristic, boardArray);
      }
    }
    else{
      for (let neighbor of neighbors) {
      if (target) {
          updateNode(node, nodes[neighbor], nodes[target], name, nodes, nodes[start], heuristic, boardArray);
        } 
        else {
          updateNode(node, nodes[neighbor]);
        }
      }
    }
  }
  module.export = updateNeighbors;