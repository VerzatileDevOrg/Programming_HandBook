---
layout: default
title: Dereferencing
description: An article dicussing about c++ Dereferencing, with basic examples.
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

The dereference operator (`*`) is used to access the value at the memory address stored in a pointer.

{: .code }
```cpp
int someValue = *somePtr;  // Retrieves the value stored at the memory address 
```

Dereferencing also allows you to modify the value stored at the memory address.

{: .code }
```cpp
int someVar = 420;
int* somePtr = &someVar;
*somePtr = 69;  // Modifies the value stored at the memory address
```

When working with pointers to class members, the `->` operator is often used for dereferencing.

{: .code }
```cpp
class SomeClass 
{
public:
    int someData;
};

SomeClass someObj;
SomeClass* ptr = &someObj;
ptr->someData = 69;  // Dereferencing using the -> operator to access class member
```

Dereferencing is often combined with pointer arithmetic to manipulate arrays, flags, or other blocks of data.

{: .code }
```cpp
int main() 
{
    int numbers[] = {6, 9, 4, 2, 0 };
    int* ptr = numbers;

    // Print the third element in the array via pointer math
    std::cout << "Value: " << *(ptr + 2); << std::endl;

    return someValue;
}

// Console Output: 
// Value: 4
```

---

#### Author: JDSherbert
#### Published: 20/12/2023