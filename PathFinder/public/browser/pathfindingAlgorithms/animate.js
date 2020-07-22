function InstantAnimations(board, success, type, object, algorithm, heuristic,end) {
    let nodes = object ? board.objectNodesToAnimate.slice(0) : board.nodesToAnimate.slice(0);
    let shortestNodes;
    for (let i = 0; i < nodes.length; i++) {
      if (i === 0) {
        change(nodes[i]);
      } else {
        change(nodes[i], nodes[i - 1]);
      }
    }
    
      board.nodesToAnimate = [];
      if (success) {
          board.drawShortestPath(board.target, board.start);
        
        shortestNodes = board.objectShortestPathNodesToAnimate.concat(board.shortestPathNodesToAnimate);
      }else {
        console.log("Failure");
        board.reset();
        return;
      }
    }
  
    let j;
    for (j = 0; j < shortestNodes.length; j++) {
      if (j === 0) {
        shortestPathChange(shortestNodes[j]);
      } else {
        shortestPathChange(shortestNodes[j], shortestNodes[j - 1]);
      }
    }
    board.reset();
    
      newSuccess = weightedSearchAlgorithm(board.nodes, board.object, board.target, board.nodesToAnimate, board.boardArray, algorithm);
      launchInstantAnimations(board, newSuccess, type);
  
      shortestPathChange(board.nodes[board.target], shortestNodes[j - 1]);
      board.objectShortestPathNodesToAnimate = [];
      board.shortestPathNodesToAnimate = [];

    function change(currentNode, previousNode) {
      let currentHTMLNode = document.getElementById(currentNode.id);
      let relevantClassNames = ["start", "shortest-path", "instantshortest-path", "instantshortest-path weight"];
      if (previousNode) {
        let previousHTMLNode = document.getElementById(previousNode.id);
        if (!relevantClassNames.includes(previousHTMLNode.className)) {
          
            previousHTMLNode.className = previousNode.weight === 15 ? "instantvisited weight" : "instantvisited";
          
        }
      }
    }
  
    function shortestPathChange(currentNode, previousNode) {
      let currentHTMLNode = document.getElementById(currentNode.id);
        if (currentNode.direction === "up") {
          currentHTMLNode.className = "shortest-path-up";
        } else if (currentNode.direction === "down") {
          currentHTMLNode.className = "shortest-path-down";
        } else if (currentNode.direction === "right") {
          currentHTMLNode.className = "shortest-path-right";
        } else if (currentNode.direction === "left") {
          currentHTMLNode.className = "shortest-path-left";
        }
      
      if (previousNode) {
        let previousHTMLNode = document.getElementById(previousNode.id);
        previousHTMLNode.className = previousNode.weight === 15 ? "instantshortest-path weight" : "instantshortest-path";
      } else {
        let element = document.getElementById(board.start);
        element.className = "startTransparent";
      }
    }
  
  
  module.exports = InstantAnimations;
  