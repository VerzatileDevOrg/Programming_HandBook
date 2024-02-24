---
layout: default
title: C#
nav_order: 1
parent: Language
has_children: false
---

{{ page.title }}
======================

C# is a modern, versatile, object-oriented programming language developed by Microsoft. It was first introduced in 2000 as part of the .NET framework and has since become a key language for developing various types of applications, including desktop, web, mobile, and cloud-based applications.

C# continues to evolve with regular updates and new features, ensuring that it remains a relevant and powerful language for a wide range of application development scenarios. Whether you're building desktop applications, web services, mobile apps, or games, C# provides a robust and feature-rich environment for most developers.

-----------------------------------------------------------------------

## Official Documentation

- Microsoft Documentation: [https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/)
- Godot: [https://docs.godotengine.org/en/stable/tutorials/scripting/c_sharp/index.html](https://docs.godotengine.org/en/stable/tutorials/scripting/c_sharp/index.html)
- Unity: [https://docs.unity3d.com/ScriptReference/](https://docs.unity3d.com/ScriptReference/)

-----------------------------------------------------------------------

## Features

- Object-Oriented Programming (OOP): C# is designed as an object-oriented programming language, which means it supports the principles of encapsulation, inheritance, and polymorphism. OOP allows developers to structure code in a way that models real-world entities.

- Type Safety: C# is a statically-typed language, which means that variable types are checked at compile-time. This helps catch errors early in the development process and promotes code reliability.

- Automatic Memory Management: C# uses a garbage collector to automatically manage memory, freeing developers from the burden of manual memory management. This reduces the risk of memory leaks and improves overall application stability.

- Cross-Language Integration: C# is designed to work seamlessly with other languages in the .NET ecosystem. This allows developers to leverage existing code written in languages like Visual Basic and C++ within a C# project.

- Syntax Similarities with C++ and Java: If you are familiar with C++ or Java, you'll find that C# shares some syntax similarities, making it easier for developers to transition between these languages.

- LINQ (Language Integrated Query): LINQ is a powerful feature in C# that allows developers to perform queries on various data sources, including collections, databases, XML, and more, using a SQL-like syntax.

- Asynchronous Programming: C# has excellent support for asynchronous programming, allowing developers to write efficient and responsive applications by leveraging features like async and await keywords.

- .NET Core and .NET 5/6: C# is a key language in the .NET ecosystem. .NET Core, now known as .NET 5 and .NET 6, is a cross-platform, open-source framework that supports C# development on Windows, Linux, and macOS.

- Cross-Platform Development: With the advent of .NET Core and .NET 5/6, C# applications can be developed and run on various platforms, including Windows, Linux, and macOS. This enhances the portability of C# applications.

- Unity Game Development: Unity supports C# as its primary scripting language, making it a popular choice for developing interactive and immersive games.

- Godot Game Development: Godot supports C# as a scripting language, making it a favorable choice among independent developers for making games.

-----------------------------------------------------------------------

## Key Releases

- C# 1.0 (2002): The initial version of C# was released alongside the .NET Framework. It introduced the core features of the language, including support for object-oriented programming, garbage collection, and a syntax influenced by C++ and Java.

- C# 2.0 (2005): This release introduced several new features, such as generics, anonymous methods, and nullable value types. Generics enabled developers to write more reusable and type-safe code.

- C# 3.0 (2007): C# 3.0 brought significant language enhancements, including Language Integrated Query (LINQ), automatic properties, anonymous types, and extension methods. LINQ is a powerful feature that allows querying various data sources directly from the C# language.

- C# 4.0 (2010): This release included features like dynamic typing (dynamic keyword), named and optional parameters, and improved support for covariance and contravariance.

- C# 5.0 (2012): The primary feature introduced in C# 5.0 was asynchronous programming support with the async and await keywords. This made it easier for developers to write asynchronous code in a more readable and maintainable manner.

- C# 6.0 (2015): C# 6.0 focused on improving developer productivity with features like expression-bodied members, string interpolation, null-conditional operators (?.), and the using static directive.

- C# 7.0 (Early 2017): This release introduced pattern matching, tuples, deconstruction of tuples, local functions, and more. Pattern matching, in particular, enhanced the capabilities of switch statements and made code more expressive.

- C# 7.1 (Mid 2017): This was a minor release that introduced features like async Main method, default literal expressions, and more.

- C# 7.2 (Late 2017): Another minor release that included enhancements such as non-trailing named arguments, private protected access modifier, and read-only references.

- C# 7.3 (2018): This release focused on small language features and runtime enhancements, including ref local re-assignment, array initializers with ref elements, and value-based equality comparisons.

- C# 8.0 (2019): C# 8.0 introduced several significant features, including nullable reference types, asynchronous streams, default interface methods, and the switch expression. Nullable reference types aimed to reduce null reference exceptions by making reference types non-nullable by default.

- C# 9.0 (2020): This release brought features such as records (immutable data types with value-based equality), pattern matching enhancements, top-level statements, and covariant return types.

- C# 10.0 (2021): C# 10.0 included features like file-scoped namespaces, global using directives, interpolated string handlers, and more.

- C# 11.0 (2022): C# 11.0 included more support for generics - additional math and attribute support. It also added raw string literals, UTF-8 string literals, newline expressions for string interpolation, list patterns, file-local types, forced/required members, auto-default structs, numeric IntPtr, and an improvement to method group conversions to delegates.

- C# 12.0 (2023): C# 12.0 includes primary constructors, collection expressions, inline arrays, optional parameters in lambda expressions, readonly reference parameters, the ability to alias any type, experimental attributes, and interceptors.

It's important to note that C# releases are closely tied to the .NET ecosystem, and the language evolves in conjunction with the development of the .NET runtime and libraries. The releases aim to enhance developer productivity, improve language expressiveness, and provide tools for building modern, efficient applications. As the language continues to evolve, new features and improvements are introduced to keep C# at the forefront of programming languages. For the latest information on C# releases, it's recommended to check the official Microsoft documentation and community resources.

-----------------------------------------------------------------------

## Getting Started

Using C++ involves several steps, from setting up your development environment to writing, compiling, and running your code. Here's a step-by-step guide to get you started:

1. **Install an Integrated Development Environment (IDE)**

    You'll need an IDE to write C# code. I'd recommend the following:

    - Visual Studio: Download and install Visual Studio from the official Microsoft website: [Visual Studio](https://visualstudio.microsoft.com/)

    - Visual Studio Code: Alternatively, you can use Visual Studio Code, a lightweight and free code editor. Download and install it from the official website: [Visual Studio Code](https://code.visualstudio.com/).

2. **Open the IDE + Create New Project**

    - Visual Studio: Open Visual Studio and create a new project by selecting "File" -> "New" -> "Project...". Choose a C# project template, such as a Console App.

    - Visual Studio Code: Open Visual Studio Code and install the "C# for Visual Studio Code" extension. Create a new C# file (with a .cs extension) for your program.

3. **Write C# Code**

    In your C# file, write the following code:

    ```cs
    using System;

    class Program
    {
        static void Main()
        {
            Console.WriteLine("Hello, World!");
        }
    }
    ```

    This code uses the System namespace and contains a simple Main method that prints `"Hello, World!"` to the console using the `Console.WriteLine()` method.

4. **Save**

    Save your C# file with a .cs extension, such as HelloWorld.cs.

5. **Compile**

    - Visual Studio: Click the "Start" button (green arrow) or press F5 to build and run your program.

    - Visual Studio Code: Open the integrated terminal, navigate to the directory where your C# file is located, and run the following commands:

    ```bash
    dotnet build
    dotnet run
    ```

6. **Run The Program:**

    You should see the output `"Hello, World!"` in the console window. This basic example should provide a foundation for exploring more advanced C# concepts and building more complex applications.

7. **Debugging**

    Use the debugging features provided by your IDE or compiler to identify and fix errors in your code. Common debugging techniques include setting breakpoints, inspecting variables, and stepping through code.

8. **Learn and Experiment:**

    Keep up to date with .NET framework updates, as this will often pave the direction of C# and introduce new features to work with. The language is constantly evolving, and still in rapid development.

---

#### Author: JDSherbert
#### Published: 27/12/2023
