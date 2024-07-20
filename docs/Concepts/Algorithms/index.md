---
layout: default
title: Algorithms
description: An Article that explores algorithmic concepts, types, techniques and analysis of time complexity.
nav_order: 1
parent: Concepts
has_children: false
---

{{ page.title }}
======================

Algorithms are sets of instructions, procedures designed to solve specific problems or accomplish tasks. Forming the backbone of programs/software, dictating the sequence of operations to be performed for given inputs to produce desired outputs. The efficiency of an algorithm is often measured in terms of time and space complexity, which respectively indicate the speed and memory usage of the algorithm.

---

## Types of Algorithms:

1. **Sorting Algorithms**

    Sorting algorithms are used to rearrange a list of items in a specific order. The most common sorting algorithms are:

    - Bubble Sort
    - Insertion Sort
    - Selection Sort
    - Merge Sort
    - Quick Sort
    - Heap Sort
    - Radix Sort

2. **Searching Algorithms**

    Searching algorithms are used to find a specific item in a list of items. The most common searching algorithms are:

    - Linear Search
    - Binary Search
    - Jump Search
    - Interpolation Search
    - Exponential Search
    - Fibonacci Search
    - Ternary Search

3. **Graph Algorithms**

    Graph algorithms are used to traverse or search through a graph data structure. The most common graph algorithms are:

    - Breadth-First Search
    - Depth-First Search
    - Dijkstra's Algorithm
    - Bellman-Ford Algorithm
    - Floyd-Warshall Algorithm
    - Prim's Algorithm
    - Kruskal's Algorithm

4. **String Algorithms**

    String algorithms are used to perform operations on strings. The most common string algorithms are:

    - Longest Common Subsequence
    - Longest Increasing Subsequence
    - Knuth-Morris-Pratt Algorithm
    - Rabin-Karp Algorithm
    - Z Algorithm
    - Boyer-Moore Algorithm

5. **Geometric Algorithms**

    Geometric algorithms are used to perform operations on geometric objects. The most common geometric algorithms are:

    - Convex Hull
    - Closest Pair of Points
    - Line Intersection
    - Line Segment Intersection
    - Bentley-Ottmann Algorithm
    - Graham Scan
    - Jarvis March

6. **Mathematical Algorithms**

    Mathematical algorithms are used to perform mathematical operations. The most common mathematical algorithms are:

    - Sieve of Eratosthenes
    - Euclidean Algorithm
    - Extended Euclidean Algorithm
    - Fast Fourier Transform
    - Karatsuba Algorithm
    - Miller-Rabin Primality Test
    - Pollard's Rho Algorithm

7. **Other Algorithms**

    Other algorithms are used to perform miscellaneous operations. The most common other algorithms are:

    - Topological Sorting
    - Minimum Spanning Tree
    - Maximum Flow
    - Minimum Cut
    - Karger's Algorithm
    - K-Nearest Neighbors Algorithm
    - PageRank Algorithm

---

## Algorithm Design Techniques:

1. **Brute Force**

    Brute force algorithms are used to solve problems by trying every possible solution and selecting the best one. They are often the easiest to implement, but they are also the least efficient. The most common brute force algorithms are:

    - Brute Force Search
    - Brute Force String Matching
    - Brute Force Subset Sum
    - Brute Force Closest Pair of Points
    - Brute Force Convex Hull
    - Brute Force Knapsack Problem
    - Brute Force Traveling Salesman Problem

2. **Divide and Conquer**

    Divide and conquer algorithms are used to solve problems by breaking them down into smaller subproblems, solving each subproblem recursively, and then combining the solutions to the subproblems to solve the original problem. The most common divide and conquer algorithms are:

    - Merge Sort
    - Quick Sort
    - Binary Search
    - Strassen's Algorithm
    - Karatsuba Algorithm
    - Closest Pair of Points
    - Convex Hull
    - Fast Fourier Transform

3. **Dynamic Programming**

    Dynamic programming algorithms are used to solve problems by breaking them down into overlapping subproblems, solving each subproblem recursively, and then storing the solutions to the subproblems in a table to avoid recomputing them when needed. The most common dynamic programming algorithms are:

    - Fibonacci Sequence
    - Longest Common Subsequence
    - Longest Increasing Subsequence
    - Knapsack Problem
    - Bellman-Ford Algorithm

4. **Greedy**

    Greedy algorithms are used to solve problems by making the locally optimal choice at each step, with the hope of eventually reaching the globally optimal solution. The most common greedy algorithms are:

    - Dijkstra's Algorithm
    - Prim's Algorithm
    - Kruskal's Algorithm
    - Huffman Coding
    - Activity Selection Problem
    - Fractional Knapsack Problem
    - Job Sequencing Problem

5. **Backtracking**

    Backtracking algorithms are used to solve problems by trying partial solutions and then abandoning them if they are not suitable. The most common backtracking algorithms are:

    - N-Queens Problem
    - Knight's Tour Problem
    - Hamiltonian Cycle Problem
    - Subset Sum Problem
    - Sudoku Solver

6. **Branch and Bound**

    Branch and bound algorithms are used to solve problems by recursively partitioning the search space into smaller subspaces and then eliminating subspaces that cannot contain the optimal solution. The most common branch and bound algorithms are:

    - Traveling Salesman Problem
    - Knapsack Problem
    - Job Sequencing Problem
    - Graph Coloring Problem
    - Sum of Subsets Problem

7. **Randomized**

    Randomized algorithms are used to solve problems by introducing randomness into the algorithm. The most common randomized algorithms are:

    - Randomized Quick Sort
    - Randomized Selection
    - Karger's Algorithm
    - Miller-Rabin Primality Test
    - Randomized Primality Test

8. **Approximation**

    Approximation algorithms are used to solve problems by finding approximate solutions when exact solutions are too computationally expensive. The most common approximation algorithms are:

    - Greedy Algorithm
    - Randomized Algorithm
    - Local Search Algorithm
    - Simulated Annealing
    - Genetic Algorithm

9. **Heuristic**

    Heuristic algorithms are used to solve problems by finding approximate solutions when exact solutions are too computationally expensive. The most common heuristic algorithms are:

    - Greedy Algorithm
    - Randomized Algorithm
    - Local Search Algorithm
    - Simulated Annealing
    - Genetic Algorithm

---

## Algorithm Analysis:

1. **Time Complexity**

    Time complexity is a measure of the amount of time required to run an algorithm. It is often expressed using Big O notation, which is an asymptotic notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity. The most common time complexities are:

    - Constant Time: O(1)
    - Logarithmic Time: O(log n)
    - Linear Time: O(n)
    - Linearithmic Time: O(n log n)
    - Quadratic Time: O(n<sup>2</sup>)
    - Cubic Time: O(n<sup>3</sup>)
    - Exponential Time: O(2<sup>n</sup>)
    - Factorial Time: O(n!)

2. **Space Complexity**

    Space complexity is a measure of the amount of memory required to run an algorithm. It is often expressed using Big O notation, which is an asymptotic notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity. The most common space complexities are:

    - Constant Space: O(1)
    - Linear Space: O(n)
    - Quadratic Space: O(n<sup>2</sup>)
    - Cubic Space: O(n<sup>3</sup>)
    - Exponential Space: O(2<sup>n</sup>)

---

## Conclusion

Algorithms are sets of instructions or procedures designed to solve specific problems or accomplish tasks. They form the backbone of all programs, dictating the sequence of operations to be performed for given inputs to produce desired outputs. The efficiency of an algorithm is often measured in terms of time and space complexity, which respectively indicate the speed and memory usage of the algorithm.

---

#### Author: Sommos

#### Published: 17/12/2023
