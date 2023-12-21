---
layout: default
title: Pointers
nav_order: 1
parent: C++
grand_parent: Language
has_children: false
---

{{ page.title }}
======================

## Pointers Overview

{: .warning } 
This article is quite advanced and assumes you have an understanding of C++.
If not, please refer to the [C++](/docs/Language/C++/C++.html) section of this book!

In C++, pointers are variables that store references to memory addresses of other variables. The data type of a pointer is the type of the variable it points to. They are powerful and performant due to their nature (as they tell the compiler where to look for data/objects in memory, rather than holding a copy of the data/object), but require careful handling to avoid issues like memory leaks and undefined behavior.

Imagine that pointers are like "signposts" that tell you where an object is in a box, rather than being a copy of the object - when there are several thousand objects floating around, the advantages are clear and can help to ensure operations occur on the correct object reference!

## Raw Pointers

Raw pointers (`*`) are pointers that directly store the memory address of another variable. They are considered "raw" because they provide a direct and unmanaged interface to memory.

```cpp
int* somePtr;  // Declaration of an integer pointer
```

Simple and straightforward to use, they directly represent memory addresses, making them easy to understand for developers with experience in lower-level programming, and don't introduce the memory overhead that tends to accompany other types of pointers, such as smart pointers.

When interacting with C libraries or other languages that don't have the concept of smart pointers, they are also the most compatible option.

#### Example:
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

-----------------------------------------------------------------------

## Dereferencing

The dereference operator (`*`) is used to access the value at the memory address stored in a pointer.

```cpp
int someValue = *somePtr;  // Retrieves the value stored at the memory address 
```

Dereferencing also allows you to modify the value stored at the memory address.

```cpp
int someVar = 420;
int* somePtr = &someVar;
*somePtr = 69;  // Modifies the value stored at the memory address
```

When working with pointers to class members, the `->` operator is often used for dereferencing.

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

-----------------------------------------------------------------------

## Addresses

In C++, the ampersand (`&`) symbol is the address-of operator, used to obtain the memory address of a variable. The memory address represents the location in the computer's memory where the variable is stored.

```cpp
int someVar = 69;
int* somePtr = &someVar; // Pointer now holds the address of someVar
int value = *somePtr;  // Retrieves the value stored at the memory address
```

The memory address is typically represented as a hexadecimal number.

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

-----------------------------------------------------------------------

## References

While not a pointer type, references are often used in C++ as an alternative to pointers for providing an alias to an existing variable. They must be initialized when declared and cannot be reassigned.

```cpp
int someVar = 69;
int& someReference = someVar;
```

-----------------------------------------------------------------------

## Null Pointers

`nullptr` is a keyword introduced in C++11 to represent a pointer that points to... well, nothing - It's a constant that can be assigned to any pointer type to indicate that the pointer is not pointing to a valid memory location. Before the introduction of `nullptr`, programmers often used the integer constant `0` or the macro `NULL` to represent a null pointer. However, using `nullptr` is preferred.

Initializing a pointer without assigning it a specific address sets it to a null pointer.

```cpp
int* nullPointer = nullptr;
```

Note that a `nullptr` is not implicitly convertible to integral types, which helps reduce the risk of accidental assignments or comparisons between pointers/integers/other objects.

Checking or Guarding for invalid pointers frequently in your code is good practice, especially when writing critical programs.

```cpp
if (somePtr == nullptr) 
{
    // Throw some exception about the pointer being null
}
```

-----------------------------------------------------------------------

## Constant Pointers

Const Pointers are quite straightforward - as with any other standard `const` variable in C++, it's a type of pointer that cannot be reassigned to point to a different memory address.

```cpp
int someVar = 69;
int* const constPointer = &someVar;

// It is illegal to go:
// constPointer = &someOtherVar;
```

-----------------------------------------------------------------------

## Pointer To Constant

Pointers that can have their memory address reassigned, but cannot be used to modify the value they point to.

```cpp
int someVar = 69;
const int* pointerToConst = &someVar;

// It is illegal to go:
// *pointerToConst = 420;
```

-----------------------------------------------------------------------

## Constant Pointer To Constant

Works exactly as you'd think. Like the pointers above, it is a type of pointer that cannot have the memory address be reassigned, and cannot be used to modify the value it points to.

```cpp
int someVar = 69;
const int* const constPointerToConst = &someVar;

// It is illegal to go:
// *constPointerToConst = 420;
// Or:
// constPointerToConst = &someOtherVar;
```

-----------------------------------------------------------------------

## Member Pointer

Member Pointers are traditional pointers that point to class or struct members.

```cpp
class SomeClass 
{
public:
    int data;
};

int SomeClass::* memberPointer = &SomeClass::data;
```

-----------------------------------------------------------------------

## Void Pointers

Void pointers `(void*)` are a special type of pointer that can point to objects of any data type. The `void` keyword is used as a placeholder for any data type - it behaves a bit like a templated type (like `T`). Void pointers can be assigned the address of any object.

```cpp
void* genericPointer;
```

Of course, void pointers are not type-safe, meaning they do not have information about the type of data they point to. It's the programmer's responsibility to ensure proper casting when using void pointers.

```cpp
int integerValue = 69;
float floatValue = 4.20;

void* voidPointer;

voidPointer = &integerValue;  // Address of an int
voidPointer = &floatValue;    // Address of a float
```

Void pointers can point to different types during their lifetimes.
To use the value pointed to by a void pointer, you need to cast it to the appropriate type.

```cpp
#include <iostream>

int main() 
{
    int integerValue = 69;
    void* voidPointer = &integerValue;

    // Casting to int pointer to access the value
    int* intPointer = static_cast<int*>(voidPointer);
    std::cout << "Value: " << *intPointer << std::endl;

    return integerValue;
}

// Output:
// Value: 69 
```

Void pointers are often used in dynamic memory allocation functions (`malloc`, `calloc`, `realloc`), which return a void pointer to the allocated memory block.

```cpp
void* someDynamicMemory = malloc(sizeof(int));
```

Void pointers are usually used in functions that need to operate on data of unknown types, where we can't know what could be getting passed around at runtime.

```cpp
void genericFunction(void* data, size_t size);
```

Void pointers do not provide type information, so improper casting can lead to runtime errors. It's essential to use them carefully and only when necessary, as they may make the code less readable and harder to maintain. In my example below, the type of void pointer is changed from an integer to a float, and even in this simple situation it can get quite difficult to follow.

```cpp
#include <iostream>

void printMe(void* data, char dataType) 
{
    switch (dataType) 
    {
        case 'i':
            std::cout << "Integer: " << *static_cast<int*>(data) << std::endl;
            break;
        case 'f':
            std::cout << "Float: " << *static_cast<float*>(data) << std::endl;
            break;
        default:
            std::cout << "Unsupported data type" << std::endl;
    }
}

int main() 
{
    int intValue = 69;
    float floatValue = 4.20;

    printMe(&intValue, 'i');
    printMe(&floatValue, 'f');

    return intValue;
}

// Output:
// Integer: 69
// Float: 4.20  
```

-----------------------------------------------------------------------

## Smart Pointers

Smart pointers (in C++) are objects that act as pointers, but provide additional features - primarily automatic memory management. They help address issues such as memory leaks and improve safety when compared to raw pointers. The two main types of smart pointers in C++ are:

- `std::unique_ptr`
- `std::shared_ptr`

In general, smart pointers help prevent memory leaks and dangling pointers by automatically managing memory and ensuring proper deallocation. In return, smart pointers may have a slight performance overhead compared to traditional raw pointers, due to additional bookkeeping for ownership and reference counting.

It's worth noting that smart pointers convey ownership semantics and nullability more clearly, where readability may be a concern in your codebase.

### Unique Pointers

Unique pointers (`std::unique_ptr`) represent exclusive ownership of a dynamically allocated object. When this type of pointer goes out of scope, it automatically deallocates the associated memory.

Unique pointers enforces exclusive ownership, preventing multiple pointers from managing the same resource simultaneously.

### Shared Pointers

Shared pointers (`std::shared_ptr`) enable shared ownership of a dynamically allocated object. It uses a reference counting mechanism, and the memory is deallocated only when the last shared pointer pointing to the object is destroyed.

-----------------------------------------------------------------------

## Multilevel Pointers

#### Warning: This topic gets quite complex!

Multilevel pointers refer to pointers that point to other pointers, forming a chain of indirection. They are useful in scenarios where you need to manage complex data structures or dynamically allocated memory.

Multilevel pointers are often used in data structures like linked lists or tree structures. They can be employed in algorithms that manipulate complex nested structures as well.

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
    **triplePointer = new int*;          // Dynamic allocation of a double-pointer
    *triplePointer = new int;          // Dynamic allocation of a single pointer
    return triplePointer;
}

int main() 
{
    int*** dynamicTriplePointer = MakeTriplePointer();
    ***dynamicTriplePointer = 69;

    // Cleanup: Deallocate memory
    delete **dynamicTriplePointer;
    delete *dynamicTriplePointer;
    delete dynamicTriplePointer;

    return ***dynamicTriplePointer;
}
```

Multilevel pointers are also useful for handling arrays of pointers or for guarding against invalid addresses:

> "The only use-case I've found for multilevel pointers is if I want to assess the validity of an address that I am expecting to contain a single-level pointer in the first place. So for example,
> `Arr[float*] FloatArr;`"
>
> "`if(float** Val = Arr[0])`
> essentially amounts to: _did you find the value at all?_"
>
> "Like, it allows me to evaluate it, but honestly, I RARELY, if ever, choose to use a multilevel pointer. I'll only use one if the API im using requires it, something like Unreal Engine's `FindByPredicate()` function for instance."
>
> "There are readability concerns for sure. As for it being a guard, _kind of, I guess?_ The main issue is that the API's are templated, so it is already kind of expecting to return a `float*` or `int*` or whatever, which, in my opinion is totally legit  - guarding, like you said. But, if the array is an array of points to BEGIN with, you're left with the `**` nonsense."  [@Tom Shinton](www.tomshinton.com)

Example:
```cpp 
#include <iostream>
 
// Define SomeObject class
class SomeObject
{
public:
    int data;
    SomeObject(int val) 
    : data(val) 
    {
    }
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