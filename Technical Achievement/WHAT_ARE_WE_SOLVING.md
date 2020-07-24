# What are we solving-- Our Motivation for the Project

The main goal of our project is to create a Mars Curiosity Rover that can **find the shortest path between two points while avoiding obstacles on it’s way.**

We have tried to incorporate as many algorithms as we could so that the rover could explore various algorithms like A*,Dijkstra's,Greedy,Swarm etc to find the shortest path to its destination in an efficient way.

Adding a new twist to the normal pathfinding project, we can now **add two destinations for the rover!** The rover would calculate the shortest path that would go through both the target nodes. It would first choose to go to the nearest target, and then to the next target. In the process of doing so it would convert the first target reached to a **"stop-over"** node (see below) which would help the user identify the first and the **final destination.**

Not only does this web app allow **dynamic and random creation** of the start/target nodes and walls, but also enables the user to provide **weights** to random nodes 
and add a **stop-over** in the rover's path which it has to visit first before the end destination. Moreover, we can also see the algorithms work in the **speed** of our choice!

This makes our project unique and increases the problem solving capacity of the rover!
