const astar = require("./astar");
const updateNeighbors = require("./updateNeighbors");
const animateDijkstra = require("./animate");
function weightedSearchAlgorithm(nodes, start, target,end, nodesToAnimate, boardArray, name, heuristic,isEnd) {
  if (name === "astar") return astar(nodes, start, target, nodesToAnimate, boardArray, name)
  if(isEnd && name==="dijkstra"){
    if (!start || !target || start === target || !start || !end || start === end) {
      return false;
    }
    nodes[start].distance = 0;
    nodes[start].direction = "right";
    let unvisitedNodes = Object.keys(nodes);
    while (unvisitedNodes.length) {
      let currentNode = closestNode(nodes, unvisitedNodes);
      while (currentNode.status === "wall" && unvisitedNodes.length) {
        currentNode = closestNode(nodes, unvisitedNodes)
      }
      if (currentNode.distance === Infinity) {
        return false;
      }
      nodesToAnimate.push(currentNode);
      currentNode.status = "visited";
      if (currentNode.id === target){
        const nodesInShortestPathOrder = getNodesInShortestPathOrder(target);
        animateDijkstra(nodesToAnimate, nodesInShortestPathOrder);
        success = weightedSearchAlgorithm(this.nodes,this.target,this.end,this.nodesToAnimate,this.boardArray,this.name,this.heuristic,false);
        return "success!";
      } 
      else if(currentNode.id === end){
        const nodesInShortestPathOrder = getNodesInShortestPathOrder(end);
        animateDijkstra(nodesToAnimate, nodesInShortestPathOrder);
        success = weightedSearchAlgorithm(this.nodes,this.end,this.target,this.nodesToAnimate,this.boardArray,this.name,this.heuristic,false);
        return "success!";
      }
      updateNeighbors(nodes, currentNode, boardArray);
    }
    
    function getNodesInShortestPathOrder(finishNode) {
      const nodesInShortestPathOrder = [];
      let currentNode = finishNode;
      while (currentNode !== null) {
        nodesInShortestPathOrder.unshift(currentNode);
        currentNode = currentNode.previousNode;
      }
      return nodesInShortestPathOrder;
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
  }else{
  if (!start || !target || start === target) {
    return false;
  }
  nodes[start].distance = 0;
  nodes[start].direction = "right";
  let unvisitedNodes = Object.keys(nodes);
  while (unvisitedNodes.length) {
    let currentNode = closestNode(nodes, unvisitedNodes);
    while (currentNode.status === "wall" && unvisitedNodes.length) {
      currentNode = closestNode(nodes, unvisitedNodes)
    }
    if (currentNode.distance === Infinity) {
      return false;
    }
    nodesToAnimate.push(currentNode);
    currentNode.status = "visited";
    if (currentNode.id === target){
      return "success!";
    } 
    if (name === "CLA" || name === "greedy") {
      updateNeighbors(nodes, currentNode, boardArray, target, name, start, heuristic);
    } else if (name === "dijkstra") {
      updateNeighbors(nodes, currentNode, boardArray);
    }
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
}
module.exports = weightedSearchAlgorithm;
