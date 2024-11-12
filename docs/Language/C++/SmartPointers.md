---
layout: default
title: Smart Pointers
description: An article dicussing about c++ Smart Pointers, with basic examples.
nav_order: 1
parent: C++
has_children: false
---

{{ page.title }}
======================

{: .warning } 
This article is quite advanced and assumes you have an understanding of C++.
If not, please refer to the [C++](/docs/Language/C++/C++.html) section of this book!

Smart pointers (in C++) are objects that act as pointers, but provide additional features - primarily automatic memory management. They help address issues such as memory leaks and improve safety when compared to raw pointers. The two main types of smart pointers in C++ are:

- `std::unique_ptr`
- `std::shared_ptr`

In general, smart pointers help prevent memory leaks and dangling pointers by automatically managing memory and ensuring proper deallocation. In return, smart pointers may have a slight performance overhead compared to traditional raw pointers, due to additional bookkeeping for ownership and reference counting.

It's worth noting that smart pointers convey ownership semantics and nullability more clearly, where readability may be a concern in your codebase.

### Unique Pointers

Unique pointers (`std::unique_ptr`) represent exclusive ownership of a dynamically allocated object. When this type of pointer goes out of scope, it automatically deallocates the associated memory.

Unique pointers enforces exclusive ownership, preventing multiple pointers from managing the same resource simultaneously.

{: .code }
```cpp
#include <iostream>
#include <memory>

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
    // Creating a std::unique_ptr with a dynamically allocated object
    std::unique_ptr<SomeClass> someUniquePtr = std::make_unique<SomeClass>(69);

    // Accessing members of the managed object
    someUniquePtr->PrintMe();

    // std::unique_ptr automatically deallocates memory when it goes out of scope
    // No need for manual cleanup or delete

    return 0;
}
```

### Shared Pointers

Shared pointers (`std::shared_ptr`) enable shared ownership of a dynamically allocated object. It uses a reference counting mechanism, and the memory is deallocated only when the last shared pointer releases its ownership. It's useful for scenarios where multiple pointers need to share access to the same dynamically allocated object.

{: .code }
```cpp
#include <iostream>
#include <memory>

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
    // Creating a std::shared_ptr with a dynamically allocated object
    std::shared_ptr<SomeClass> someSharedPtr = std::make_shared<SomeClass>(69);

    // Creating another std::shared_ptr that shares ownership with the first one
    std::shared_ptr<SomeClass> anotherSharedPtr = someSharedPtr;

    // Accessing members of the managed object through both shared pointers
    someSharedPtr->PrintMe();
    anotherSharedPtr->PrintMe();

    // The reference count is now 2 (two shared pointers pointing to the same object)

    // std::shared_ptr automatically deallocates memory when the last shared_ptr is reset or goes out of scope

    return 0;
}
```

---

#### Author: JDSherbert
#### Published: 20/12/2023