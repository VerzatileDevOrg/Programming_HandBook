---
layout: default
title: Raw Pointers
nav_order: 1
parent: C++
grand_parent: Language
has_children: false
---

{{ page.title }}
======================

{: .warning } 
This article is quite advanced and assumes you have an understanding of C++.
If not, please refer to the [C++](/docs/Language/C++/C++.html) section of this book!

Raw pointers (`*`) are pointers that directly store the memory address of another variable. They are considered "raw" because they provide a direct and unmanaged interface to memory.

{: .code }
```cpp
int* somePtr;  // Declaration of an integer pointer
```

Simple and straightforward to use, they directly represent memory addresses, making them easy to understand for developers with experience in lower-level programming, and don't introduce the memory overhead that tends to accompany other types of pointers, such as smart pointers.

When interacting with C libraries or other languages that don't have the concept of smart pointers, they are also the most compatible option.

{: .code }
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