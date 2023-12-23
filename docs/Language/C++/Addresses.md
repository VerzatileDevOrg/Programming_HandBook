---
layout: default
title: Addresses
nav_order: 1
parent: C++
grand_parent: Language
has_children: false
---

{{ page.title }}
======================

{: .warning } This article is quite advanced and assumes you have an understanding of C++.
If not, please refer to the [C++](/docs/Language/C++/C++.html) section of this book!

In C++, the ampersand (`&`) symbol is the address-of operator, used to obtain the memory address of a variable. The memory address represents the location in the computer's memory where the variable is stored.

```cpp
int someVar = 69;
int* somePtr = &someVar; // Pointer now holds the address of someVar
int value = *somePtr;  // Retrieves the value stored at the memory address
```

The memory address is typically represented as a hexadecimal number.

#### Example

```cpp
#include <iostream>

int main() 
{
    int someAddress = 69;

    // Print out the memory address of the variable
    std::cout << "Address: " << &someAddress << std::endl;

    return someAddress;
}

// Output:
// Address: 0x7ffee47a1a2c 
```

Note that the specific memory address will vary each time, based on system architecture, OS, resources, etc. Addresses can also be manipulated using arithmetic operations, especially with pointers.

---

#### Author: JDSherbert
#### Published: 20/12/2023