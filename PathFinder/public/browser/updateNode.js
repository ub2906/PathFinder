const getDistance = require("./getDistance");
const astar = require("./pathfindingAlgorithms/astar");
function updateNode(currentNode, targetNode, actualTargetNode, name, nodes, actualStartNode, heuristic, boardArray) {
    let distance = getDistance(currentNode, targetNode,name);
    let distanceToCompare;
    if (actualTargetNode && name === "CLA") {
      let weight = targetNode.weight === 15 ? 15 : 1;
      
      if (heuristic === "manhattanDistance") {
        distanceToCompare = currentNode.distance + (distance[0] + weight) * manhattanDistance(targetNode, actualTargetNode);
      } else if (heuristic === "poweredManhattanDistance") {
        distanceToCompare = currentNode.distance + targetNode.weight + distance[0] + Math.pow(manhattanDistance(targetNode, actualTargetNode), 2);
      } else if (heuristic === "extraPoweredManhattanDistance") {
        distanceToCompare = currentNode.distance + (distance[0] + weight) * Math.pow(manhattanDistance(targetNode, actualTargetNode), 7);
      }
    } 
      else if (actualTargetNode && name === "greedy") {
        distanceToCompare = targetNode.weight + distance[0] + manhattanDistance(targetNode, actualTargetNode);
      }
      else if (!targetNode.heuristicDistance) 
        targetNode.heuristicDistance = manhattanDistance(targetNode, actualTargetNode,name);
      else {
        distanceToCompare = currentNode.distance + targetNode.weight + distance[0];
      }
    if (distanceToCompare < targetNode.distance) {
      targetNode.distance = distanceToCompare;
      targetNode.previousNode = currentNode.id;
      targetNode.path = distance[1];
      targetNode.direction = distance[2];
    }
  }
  function manhattanDistance(nodeOne, nodeTwo,name) {
    let nodeOneCoordinates = nodeOne.id.split("-").map(ele => parseInt(ele));
    let nodeTwoCoordinates = nodeTwo.id.split("-").map(ele => parseInt(ele));
    let xChange,yChange;
    if(name === astar){
      let xOne = nodeOneCoordinates[0];
      let xTwo = nodeTwoCoordinates[0];
      let yOne = nodeOneCoordinates[1];
      let yTwo = nodeTwoCoordinates[1];
    
      xChange = Math.abs(xOne - xTwo);
      yChange = Math.abs(yOne - yTwo);
    }
    else{
      xChange = Math.abs(nodeOneCoordinates[0] - nodeTwoCoordinates[0]);
      yChange = Math.abs(nodeOneCoordinates[1] - nodeTwoCoordinates[1]);
    }
    return (xChange + yChange);
  }
  module.export = updateNode;