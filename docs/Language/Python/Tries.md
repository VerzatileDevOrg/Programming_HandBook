---
layout: default
title: Tries
nav_order: 1
parent: Python
grand_parent: Language
has_children: false
---

{{ page.title }}
======================

In computer science, a trie (pronounced "try") is a tree-like data structure used to store a dynamic set or associative array where the keys are usually strings. The term "trie" comes from the word "retrieval," and the structure is sometimes called a "prefix tree" because it can efficiently store and retrieve keys based on their prefixes. Each node represents a single character or a part of a key.

The root node represents the empty string, and each level of the tree corresponds to a character in the keys. The nodes in a trie have links (edges) to other nodes, typically representing characters. Traversing the edges from the root to a particular node spells out a key.

Tries excel at handling keys with common prefixes. This makes them particularly efficient for tasks like string matching or autocomplete, where a common prefix needs to be shared among multiple keys. Retrieving a key from a trie is also highly efficient, typically taking time proportional to the length of the key. This is because each level of the trie corresponds to a character in the key.

Tries tend to have a high space complexity, especially for large datasets with many keys sharing common prefixes. However, various optimizations, such as compressing branches with a single child, can reduce space requirements.

-----------------------------------------------------------------------

## Implementation Considerations

1. Memory Usage: Tries can be memory-intensive, especially when dealing with a large number of keys. Various techniques, such as compression and optimization, can be applied to reduce memory usage.

2. Alphabet Size: The size of the alphabet (number of possible characters) can affect the performance of a trie. Larger alphabets may result in larger and more complex tries.

3. Node Representation: Nodes in a trie can be implemented using arrays, linked lists, or other data structures. The choice of representation impacts both time and space complexity.

{: .example }
```python
# Implementation Example of a Depth First Search within the Trie.

def PrintTree(rootNode):
    print("---- Root Children ----")
    #root nodes text
    for key in rootNode.children:
        print(key)
    print("-----------------------")

    #children of children.
    stack = []

    stack.append(rootnode)

    while(len(stack) > 0):
        currentNode = stack.pop()

        print(currentNode.value)

        for key in currentNode.children:
            stack.append(currentNode.children[key])
```

Credit: UKL

-----------------------------------------------------------------------

## Use Cases

1. Autocomplete and Predictive Text: Tries are often used in autocomplete systems where users are presented with suggested words or phrases based on partial inputs.

2. Spell Checking: Tries can be used in spell-checking algorithms to efficiently identify misspelled words by traversing the trie and checking for valid words.

3. IP Routing Tables: In networking, tries are used in IP routers to efficiently search for the longest prefix match in IP routing tables.

4. Symbol Tables: Tries are used in symbol tables for compilers and interpreters to efficiently look up variable and function names.

5. Distributed Databases: Tries can be employed in distributed databases for efficiently storing and querying key-value pairs.

-----------------------------------------------------------------------

## Sources

https://www.geeksforgeeks.org/pattern-searching-using-trie-suffixes/

https://www.geeksforgeeks.org/count-distinct-substrings-string-using-suffix-trie/

https://www.hackerearth.com/practice/notes/trie-suffix-tree-suffix-array/

---

#### Author: JDSherbert
#### Published: 29/12/2023