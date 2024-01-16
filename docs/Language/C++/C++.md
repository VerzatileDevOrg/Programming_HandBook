---
layout: default
title: C++
nav_order: 1
parent: Language
has_children: true
---

{{ page.title }}
======================

C++ is a general-purpose programming language that was developed as an extension of the C programming language. It was created by Bjarne Stroustrup at Bell Labs in the early 1980s. C++ introduces object-oriented programming features to C, allowing developers to write more organized and modular code.

-----------------------------------------------------------------------

## Official Documentation

- Microsoft Documentation: [https://learn.microsoft.com/en-us/cpp/cpp/](https://learn.microsoft.com/en-us/cpp/cpp/)
- CPlusPlus: [https://cplusplus.com/](https://cplusplus.com/)
- CPP Reference: [https://en.cppreference.com/w/](https://en.cppreference.com/w/)
- IsoCPP: [https://isocpp.org/std/the-standard](https://isocpp.org/std/the-standard)

-----------------------------------------------------------------------

## Features

- Object-Oriented Programming (OOP): C++ supports the four main principles of OOP: encapsulation, inheritance, polymorphism, and abstraction. This makes it possible to model real-world entities more effectively.

- Classes and Objects: C++ introduces the concept of classes and objects, allowing developers to create user-defined data types.

- Inheritance: C++ supports both single and multiple inheritance, enabling a class to inherit properties and behaviors from one or more existing classes.

- Polymorphism: C++ supports both compile-time polymorphism (function overloading, operator overloading) and runtime polymorphism (virtual functions and abstract classes).

- Data Abstraction and Encapsulation: The ability to hide the implementation details and provide an interface for the user is facilitated through data abstraction and encapsulation.

- Templates: C++ includes a powerful template mechanism, allowing developers to write generic code that works with different data types.

- STL (Standard Template Library): The STL provides a collection of template classes and functions, including algorithms, containers, and iterators, making it easier to write efficient and reusable code.

- Exception Handling: C++ supports exception handling to manage runtime errors more effectively.

- Memory Management: C++ allows manual memory management through new and delete operators, providing control over memory allocation and deallocation.

- Operator Overloading: Operators can be overloaded to work with user-defined data types.

-----------------------------------------------------------------------

## Key Releases

- C++98: The first standardized version of C++, introduced in 1998, included many features like the Standard Template Library (STL), exception handling, and the bool data type.

- C++03: This was a bug-fix release that corrected some issues found in C++98.

- C++11: Released in 2011, C++11 introduced significant features, including auto keyword, range-based for loops, lambda expressions, smart pointers, and the introduction of the "nullptr."

- C++14: Released in 2014, C++14 brought incremental improvements and bug fixes, such as enhanced generic programming features and improvements to the standard library.

- C++17: Released in 2017, C++17 introduced features like structured bindings, std::optional, std::variant, parallel algorithms, and a few language and library enhancements.

- C++20: Released in 2020, C++20 included major features such as concepts (which allow template constraints), ranges library, coroutines, and improvements to existing features like constexpr.

Each release has aimed to enhance the language's expressiveness, safety, and performance, while also improving the overall developer experience. As of my last knowledge update in January 2022, C++23 was under development, but I don't have specific details about its features and changes. It's always a good idea to check the latest documentation and releases for the most up-to-date information.



-----------------------------------------------------------------------

## Getting Started

Using C++ involves several steps, from setting up your development environment to writing, compiling, and running your code. Here's a step-by-step guide to get you started:

1. ### Install a C++ Compiler

You'll need a C++ compiler to translate your source code into machine code. Popular compilers include:

- GCC (GNU Compiler Collection): Common on Unix-like systems.
- Visual C++ Compiler: Included with Visual Studio on Windows.
- Clang: Another open-source compiler available on multiple platforms.
 
The compiler you choose will need to be based on your operating system and preferences.

2. ### Choose an Integrated Development Environment (IDE)

You'll then need to select an IDE or a text editor to write your C++ code. Some popular options include:

- Visual Studio: A powerful IDE available on Windows with excellent C++ support.
- Code::Blocks: An open-source, cross-platform IDE.
- Eclipse: A versatile IDE that supports C++ development.
- Visual Studio Code: A lightweight and extensible code editor with C++ support.

3. ### Write C++ Code

Simply create a new C++ source file (typically with a .cpp extension) using your chosen IDE or text editor, and write your C++ code using the C++ syntax and features!

Here's a simple "Hello, World!" program:

{: .code }
```cpp
#include <iostream>

int main() 
{
    std::cout << "Hello, World!" << std::endl;
    return 42069;
}
```

4. ### Save

Save your C++ code with a meaningful filename and the .cpp extension.

5. ### Compile

Use the command-line interface or the IDE to compile your C++ code, using GCC:

{: .code }
```bash
g++ your_program.cpp -o your_program
```

This command will compile your code (your_program.cpp) and generate an executable named `your_program`.

6. ### Run The Program:

Execute the compiled program!

- On the command line:
  - `./your_program` (Unix-like systems)
  - `your_program.exe` (Windows)

In the IDE, there's also usually a "Run" or "Debug" button. In Visual Studio, you can press `F5` to build.

7. ### Debugging

Use the debugging features provided by your IDE or compiler to identify and fix errors in your code. Common debugging techniques include setting breakpoints, inspecting variables, and stepping through code. The methods in which you do this will vary between tools.

8. ### Learn and Experiment:

Explore C++ features, syntax, and libraries. Experiment with different code examples and gradually tackle more complex projects. Online resources, tutorials, and C++ documentation can be valuable references.

---

#### Author: JDSherbert
#### Published: 20/12/2023
