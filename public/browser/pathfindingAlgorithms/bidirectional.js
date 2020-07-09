const astar = require("./astar");
const updateNeighbors = require("./updateNeighbors");

function bidirectional(nodes, start, target, nodesToAnimate, boardArray, name, heuristic, board) {
  if (name === "astar") return astar(nodes, start, target, nodesToAnimate, boardArray, name)
  if (!start || !target || start === target) {
    return false;
  }
  nodes[start].distance = 0;
  nodes[start].direction = "right";
  nodes[target].otherdistance = 0;
  nodes[target].otherdirection = "left";
  let visitedNodes = {};
  let unvisitedNodesOne = Object.keys(nodes);
  let unvisitedNodesTwo = Object.keys(nodes);
  while (unvisitedNodesOne.length && unvisitedNodesTwo.length) {
    let currentNode = closestNode(nodes, unvisitedNodesOne);
    let secondCurrentNode = closestNodeTwo(nodes, unvisitedNodesTwo);
    while ((currentNode.status === "wall" || secondCurrentNode.status === "wall") && unvisitedNodesOne.length && unvisitedNodesTwo.length) {
      if (currentNode.status === "wall") currentNode = closestNode(nodes, unvisitedNodesOne);
      if (secondCurrentNode.status === "wall") secondCurrentNode = closestNodeTwo(nodes, unvisitedNodesTwo);
    }
    if (currentNode.distance === Infinity || secondCurrentNode.otherdistance === Infinity) {
      return false;
    }
    nodesToAnimate.push(currentNode);
    nodesToAnimate.push(secondCurrentNode);
    currentNode.status = "visited";
    secondCurrentNode.status = "visited";
    if (visitedNodes[currentNode.id]) {
      board.middleNode = currentNode.id;
      return "success";
    } else if (visitedNodes[secondCurrentNode.id]) {
      board.middleNode = secondCurrentNode.id;
      return "success";
    } else if (currentNode === secondCurrentNode) {
      board.middleNode = secondCurrentNode.id;
      return "success";
    }
    visitedNodes[currentNode.id] = true;
    visitedNodes[secondCurrentNode.id] = true;
    updateNeighbors(nodes, currentNode, boardArray, target, name, start, heuristic);
    updateNeighbors(nodes, secondCurrentNode, boardArray, start, name, target, heuristic);
  }
}

function closestNode(nodes, unvisitedNodes) {
  let currentClosest, index;
  for (let i = 0; i < unvisitedNodes.length; i++) {
    if (!currentClosest || currentClosest.distance > nodes[unvisitedNodes[i]].distance) {
      currentClosest = nodes[unvisitedNodes[i]];
      index = i;
    }
  }
  unvisitedNodes.splice(index, 1);
  return currentClosest;
}

function closestNodeTwo(nodes, unvisitedNodes) {
  let currentClosest, index;
  for (let i = 0; i < unvisitedNodes.length; i++) {
    if (!currentClosest || currentClosest.otherdistance > nodes[unvisitedNodes[i]].otherdistance) {
      currentClosest = nodes[unvisitedNodes[i]];
      index = i;
    }
  }
  unvisitedNodes.splice(index, 1);
  return currentClosest;
}

module.exports = bidirectional;

