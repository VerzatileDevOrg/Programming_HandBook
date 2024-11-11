---
layout: default
title: Void Pointers
description: An article dicussing about c++ Void Pointers, with basic examples.
nav_order: 1
parent: C++
has_children: false
---

{{ page.title }}
======================

{: .warning } 
This article is quite advanced and assumes you have an understanding of C++.
If not, please refer to the [C++](/docs/Language/C++/C++.html) section of this book!

Void pointers `(void*)` are a special type of pointer that can point to objects of any data type. The `void` keyword is used as a placeholder for any data type - it behaves a bit like a templated type (like `T`). Void pointers can be assigned the address of any object.

{: .code }
```cpp
void* genericPointer;
```

Of course, void pointers are not type-safe, meaning they do not have information about the type of data they point to. It's the programmer's responsibility to ensure proper casting when using void pointers.

{: .code }
```cpp
int integerValue = 69;
float floatValue = 4.20;

void* voidPointer;

voidPointer = &integerValue;  // Address of an int
voidPointer = &floatValue;    // Address of a float
```

Void pointers can point to different types during their lifetimes.
To use the value pointed to by a void pointer, you need to cast it to the appropriate type.

{: .code }
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

{: .code }
```cpp
void* someDynamicMemory = malloc(sizeof(int));
```

Void pointers are usually used in functions that need to operate on data of unknown types, where we can't know what could be getting passed around at runtime.

{: .code }
```cpp
void genericFunction(void* data, size_t size);
```

Void pointers do not provide type information, so improper casting can lead to runtime errors. It's essential to use them carefully and only when necessary, as they may make the code less readable and harder to maintain. In my example below, the type of void pointer is changed from an integer to a float, and even in this simple situation it can get quite difficult to follow.


{: .code }
```cpp
#include <iostream>

void PrintMe(void* data, char dataType) 
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

    PrintMe(&intValue, 'i');
    PrintMe(&floatValue, 'f');

    return intValue;
}

// Output:
// Integer: 69
// Float: 4.20  
```

---

#### Author: JDSherbert
#### Published: 20/12/2023