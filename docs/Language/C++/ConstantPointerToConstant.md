---
layout: default
title: Constant Pointers To Constants
description: An article dicussing about c++ Constant Pointers To Constants, its benefits and basic examples.
nav_order: 1
parent: C++
has_children: false
---

{{ page.title }}
======================

{: .warning } 
This article is quite advanced and assumes you have an understanding of C++.
If not, please refer to the [C++](/docs/Language/C++/C++.html) section of this book!

Constant Pointers To Constants are a C++ pointer type that cannot be used to modify the value it points to, and the pointer itself cannot be reassigned to point to a different memory location. This provides a high level of const-correctness and is often used to indicate that both the pointer and the pointed-to value are constant.

{: .code }
```cpp
int someVar = 69;
const int* const constPointerToConst = &someVar;

// It is illegal to go:
// *constPointerToConst = 420;
// Or:
// constPointerToConst = &someOtherVar;
```

It offers several benefits:

- The pointed-to value is treated as immutable, ensuring that you cannot accidentally modify it through the const pointer.
- For readability, it clearly communicates the intent that both the pointer and the pointed-to value are meant to be constant, improving code readability and understanding.
- Helps prevent unintended modifications to the data by providing compile-time protection against attempts to modify the value through the const pointer.
- When used in function parameters or class member functions, const pointers to const contribute to designing safer interfaces by indicating that the function/method will not modify the input data.
- Allows the compiler to make certain optimizations based on the const-correctness, potentially leading to more efficient code.

{: .code }
```cpp
#include <iostream>

void PrintMe(const int* const ptrToConst) 
{
    // We can see here that we cannot modify the pointed-to value through ptrToConst
    // ptrToConst = nullptr; // Error: Cannot reassign const pointer
    std::cout << "Value: " << *ptrToConst << std::endl;
}

int main() 
{
    int value = 69;
    const int* constPtrToConst = &value;

    // Cannot modify the pointed-to value through constPtrToConst
    // *constPtrToConst = 420; // Error: Cannot modify const value
    PrintMe(constPtrToConst);

    return 0;
}
```

---

#### Author: JDSherbert
#### Published: 20/12/2023