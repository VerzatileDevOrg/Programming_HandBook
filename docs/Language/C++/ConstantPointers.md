---
layout: default
title: Constant Pointers
nav_order: 1
parent: C++
grand_parent: Language
has_children: false
---

{{ page.title }}
======================

{: .warning } This article is quite advanced and assumes you have an understanding of C++.
If not, please refer to the [C++](/docs/Language/C++/C++.html) section of this book!

Constant Pointers are quite straightforward - as with any other standard `const` variable in C++, it's a type of pointer that cannot be reassigned to point to a different memory address. It still allows read-write access to the pointed-to variable though!

```cpp
int someVar = 69;
int* const constPointer = &someVar;

// It is illegal to go:
// constPointer = &someOtherVar;
```

It offers a few benefits:

- The pointer itself is constant and cannot be reassigned to point to a different memory location. This enforces that the pointer always points to the same memory address.
- The value pointed to by constPtr can be modified, but the pointer itself cannot be used to modify the pointed-to value. This ensures that the memory address remains constant, but the data it points to can be read and modified.
- Helps prevent accidental reassignment of the pointer to a different memory location, reducing the risk of unintended side effects in the code.
- Offers a consistent and clear contract about the immutability of the pointer, making the code more readable and maintainable.
- When used in function parameters or class member functions, const pointers contribute to designing safer interfaces by indicating that the function/method will not modify the pointer itself, offering const-correctness.
- Allows the compiler to make certain optimizations based on const-correctness, potentially leading to more efficient code.

#### Example

```cpp
#include <iostream>

int main() 
{
    int value = 69;
    
    // Constant pointer to int
    int* const constPtr = &value;

    // Cannot reassign constPtr to point to a different integer
    // constPtr = &anotherValue; // Error: Cannot reassign a const pointer

    // Can modify the pointed-to value through constPtr
    *constPtr = 420;

    // Access to the modified value
    std::cout << "Value: " << *constPtr << std::endl;

    return 0;
}
```

---

#### Author: JDSherbert
#### Published: 20/12/2023