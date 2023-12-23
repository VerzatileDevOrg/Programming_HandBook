---
layout: default
title: References
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

While not a pointer type, references are often used in C++ as an alternative to pointers for providing an alias to an existing variable (a way to access that variable through a different name). They must be initialized when declared and cannot be reassigned.

```cpp
int someVar = 69;
int& someReference = someVar;
```

References offer some benefits, such as:

- Unlike pointers, references cannot be null, eliminating the need to check for null values. This can lead to safer code by avoiding null pointer-related issues.
- References are often more convenient to use than pointers because they don't require dereferencing syntax (`*`) and can be used similarly to the original variable.
- References provide a convenient and readable way to create aliases for variables. They act as additional names for the same piece of memory.
- When passing variables to functions or returning values from functions, using references can avoid unnecessary copying of data. This can be more efficient, especially for large objects such as arrays.
- They allow functions to modify the values of variables passed to them. This is useful for functions that need to update multiple variables or modify their parameters.
- References improve code readability by creating expressive and self-documenting code. The use of references indicates that the variable is being referenced or modified within a function.
- References are commonly used in operator overloading, allowing you to define custom behaviors for operators like +, -, etc.

#### Example usage

```cpp
#include <iostream>

void ModifyValue(int& ref) 
{
    // Modifying the value directly through the reference
    ref = 42069;
}

int main() 
{
    int someVar = 69;

    // Creating a reference to the variable
    int& someRef = someVar;

    std::cout << "Original Variable: " << someVar << std::endl;
    std::cout << "Reference: " << someRef << std::endl;

    // Modifying the variable through the reference
    reference = 420;

    std::cout << "Modified Variable: " << someVar << std::endl;

    // Passing a variable to a function by reference
    ModifyValue(someVar);

    std::cout << "Modified Variable after Function Call: " << someVar << std::endl;

    return 0;
}
```

---

#### Author: JDSherbert
#### Published: 20/12/2023
