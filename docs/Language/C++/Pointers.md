---
layout: default
title: Pointers
nav_order: 1
parent: C++
grand_parent: Language
has_children: false
---

{{ page.title }}
======================

## Pointers Overview

{: .warning } This article is quite advanced and assumes you have an understanding of C++.
If not, please refer to the [C++](/docs/Language/C++/C++.html) section of this book!

In C++, pointers are variables that store references to memory addresses of other variables. The data type of a pointer is the type of the variable it points to. They are powerful and performant due to their nature (as they tell the compiler where to look for data/objects in memory, rather than holding a copy of the data/object), but require careful handling to avoid issues like memory leaks and undefined behavior.

Imagine that pointers are like "signposts" that tell you where an object is in a box, rather than being a copy of the object - when there are several thousand objects floating around, the advantages are clear and can help to ensure operations occur on the correct object reference!

#### Example

```cpp
#include <iostream>

int main() 
{
    int someValue = 69; // Declare initial value
    int* rawPointer = &someValue; // Create raw pointer + assign the address of someValue to it

    // Print the value using the raw pointer
    std::cout << "Value using raw pointer: " << *rawPointer << std::endl;

    return someValue;
}

// Console Output: 
// Value using raw pointer: 69
```


---

#### Author: JDSherbert
#### Published: 20/12/2023
