---
layout: default
title: Multilevel Pointers
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

#### Warning: This topic gets quite complex!

Multilevel pointers refer to pointers that point to other pointers, forming a chain of indirection. They are useful in scenarios where you need to manage complex data structures or dynamically allocated memory. They are often used in data structures like linked lists or tree structures. They can be employed in algorithms that manipulate complex nested structures as well.

While these types of pointers provide flexibility, they can make code more error-prone. Keeping track of each level of indirection and managing memory properly is crucial to avoid memory leaks and undefined behavior. In addition to this, there are many complaints among developers that multilevel pointers drastically ireduce code readability.

#### Usage

A regular pointer is a single-level pointer, pointing directly to a variable.

```cpp
int someVar = 69;
int* singlePointer = &someVar;  // Single-level pointer
```

A double-pointer stores the address of another pointer.

```cpp
int someVar = 69;
int* singlePointer = &someVar;
int** doublePointer = &singlePointer;  // Double-level pointer
```

A triple-pointer is a pointer that stores the address of a double-pointer.

```cpp
int myValue = 69;
int* singlePointer = &someVar;
int** doublePointer = &singlePointer;
int*** triplePointer = &doublePointer;  // Triple-level pointer
```

Each level of indirection requires an additional dereference to access the actual value that is being pointed to by the pointer "below" it.

```cpp
int someVar = 69;
int* singlePointer = &someVar;
int** doublePointer = &singlePointer;
int*** triplePointer = &doublePointer;

int value = ***triplePointer;  // Accesses the value (69) through triple indirection
```

Multilevel pointers are commonly used in dynamic memory allocation scenarios.

```cpp
int*** MakeTriplePointer() 
{
    int*** triplePointer = new int**;   // Dynamic allocation of a triple-pointer
    *triplePointer = new int*;          // Dynamic allocation of a double-pointer
    **triplePointer = new int;          // Allocates an integer
    return triplePointer;
}

int main() 
{
    int*** dynamicTriplePointer = MakeTriplePointer();
    int temp = ***dynamicTriplePointer;

    // Cleanup: Deallocate memory
    delete **dynamicTriplePointer;
    delete *dynamicTriplePointer;
    delete dynamicTriplePointer;

    return temp;
}
```

Multilevel pointers are also useful for handling arrays of pointers or for guarding against invalid addresses. Normally, most developers will try to avoid using them unless forced by API or design:

> "The only use-case I've found for multilevel pointers is if I want to assess the validity of an address that I am expecting to contain a single-level pointer in the first place. So for example,
> `Arr[float*] FloatArr;`"
>
> "`if(float** Val = Arr[0])`
> essentially amounts to: _did you find the value at all?_"
>
> "Like, it allows me to evaluate it, but honestly, I RARELY, if ever, choose to use a multilevel pointer. I'll only use one if the API im using requires it, something like Unreal Engine's `FindByPredicate()` function for instance."
>
> "There are readability concerns for sure. As for it being a guard, _kind of, I guess?_ The main issue is that the API's are templated, so it is already kind of expecting to return a `float*` or `int*` or whatever, which, in my opinion is totally legit  - guarding, like you said. But, if the array is an array of points to BEGIN with, you're left with the `**` nonsense."  
> _- [@Tom Shinton](www.tomshinton.com), Discussion about Multilevel Pointer use-cases._

#### Example Usage

```cpp 
#include <iostream>

// Define SomeObject class
class SomeObject
{
public:

    SomeObject(int val) 
    : data(val) 
    {
    }

    int data;
};

// Initialize the array
SomeObject* objectArray[5] = 
{
    new SomeObject(6),
    new SomeObject(9),
    new SomeObject(4),
    new SomeObject(2),
    new SomeObject(0)
};

int main() 
{
    // Multilevel pointer to an array of object pointers
    SomeObject** doublePointer = &objectArray;

    // Access an object pointer using multilevel dereferencing
    // Check if the pointer is not nullptr before using it
    if (*doublePointer != nullptr && (*doublePointer)[2] != nullptr) 
    {
        // Access the 'data' member of the object pointed to by the third element
        int value = (*doublePointer)[2]->data;
        std::cout << "Value: " << value << std::endl;
    } 
    else 
    {
        std::cout << "Pointer is nullptr or the third element is nullptr." << std::endl;
    }

    // Cleanup: Deallocate memory for the objects in the array.
    // Divide the length of the object array by the byte size of SomeObject
    for (int i = 0; i < sizeof(objectArray) / sizeof(SomeObject); ++i) 
    {
        delete objectArray[i];
    }

    return 0;
}

// Output:
// Value: 4
```

---

#### Author: JDSherbert
#### Published: 20/12/2023