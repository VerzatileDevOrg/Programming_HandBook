---
layout: default
title: Pointers To Constants
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

Pointers To Constants in C++ are pointers that can have their memory address reassigned, but cannot be used to modify the value they point to (just like a standard `const` variable). The target is flexible, but the pointed-to value cannot be modified!

```cpp
int someVar = 69;
const int* pointerToConst = &someVar;

// It is illegal to go:
// *pointerToConst = 420;
```

It offers a few benefits:

- Unlike a const pointer, a pointer to const can be reassigned to point to different memory locations, offering more flexibility in managing the target of the pointer.
- Conveys the programmer's intent that the pointer itself can be changed, but the data it points to should not be modified through this particular pointer.
- Allows a pointer to point to both const and non-const data. This versatility is useful when you want a single pointer to handle both read-only and read-write scenarios.
- When used in function parameters or class member functions, a pointer to const indicates that the function/method will not modify the input data, offering safer interfaces.
- Allows the compiler to make certain optimizations based on const-correctness, potentially leading to more efficient code.

#### Example

```cpp
#include <iostream>

int main() 
{
    int value = 69;
    
    // Pointer to const int
    const int* ptrToConst = &value;

    // Can reassign ptrToConst to point to a different integer
    int anotherValue = 420;
    ptrToConst = &anotherValue;

    // Cannot modify the pointed-to value through ptrToConst
    // *ptrToConst = 42069; // Error

    // Access the value
    std::cout << "Value: " << *ptrToConst << std::endl;

    return 0;
}

```

---

#### Author: JDSherbert
#### Published: 20/12/2023