---
layout: default
title: Null Pointers
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

`nullptr` is a keyword introduced in C++11 to represent a pointer that points to... well, nothing - It's a constant that can be assigned to any pointer type to indicate that the pointer is not pointing to a valid memory location. Before the introduction of `nullptr`, programmers often used the integer constant `0` or the macro `NULL` to represent a null pointer. However, using `nullptr` is preferred.

Initializing a pointer without assigning it a specific address sets it to a null pointer.

{: .code }
```cpp
int* nullPointer = nullptr;
```

Note that a `nullptr` is not implicitly convertible to integral types, which helps reduce the risk of accidental assignments or comparisons between pointers/integers/other objects.

Checking or Guarding for invalid pointers frequently in your code is good practice, especially when writing critical programs.

{: .code }
```cpp
class SomeClass 
{
public:

    SomeClass(int val) 
    : data(val) 
    {
    }

    int data;

    void PrintMe() 
    {
        std::cout << "Data: " << data << std::endl;
    }
};

int main() 
{
    SomeClass* somePtr = new SomeClass(69);
    if (somePtr != nullptr) 
    {
        somePtr->PrintMe();
        
    }
    else
    {
        // Throw some exception about the pointer being null
    }

    return 0;
}



```

---

#### Author: JDSherbert
#### Published: 20/12/2023