---
layout: default
title: Polymorphism
description: An article dicussing "Polymorphism", which means "Many Forms".
nav_order: 1
parent: Polymorphism
grand_parent: Concepts
has_children: false
---

{{ page.title }}
======================

{: .warning } 
This article is quite advanced and assumes you have an understanding of Object Oriented Programming.
If not, please refer to the [C++](/docs/Concepts/OOP/OOP.md) section of this book!

Polymorphism is a fundamental concept in object-oriented programming (OOP) that allows objects of different classes to be treated as objects of a common superclass. It enables a single interface to be used for entities of different types, promoting flexibility, extensibility, and code reuse. Polymorphism can be achieved through two main mechanisms: compile-time (or static) polymorphism and run-time (or dynamic) polymorphism.

### 1. Compile-Time Polymorphism
Compile-time polymorphism is achieved using function overloading and operator overloading.

#### Function Overloading: 
This allows multiple functions with the same name but different parameter lists to be defined within the same scope. The appropriate function to call is determined by the number and types of arguments passed to it at compile-time.

{: .code }
```
cpp
// Example of function overloading
int Add(int A, int B) 
{
    return A + B;
}

float Add(float A, float B) 
{
    return A + B;
}
```
In this example, `Add` is overloaded to accept both `int` and `float` arguments.

#### Operator Overloading: 
Operators such as `+`, `-`, `*`, etc., can be overloaded to work with user-defined types in addition to their built-in functionality.

{: .code }
```
cpp
// Example of operator overloading
class Complex
{

private:
    float A;
    float B;

public:

    Complex operator+(const Complex& other)
    {
        Complex temp;
        temp.A = this->A + other.A;
        temp.B = this->B + other.B;
        return temp;
    }
};
```

Here, the `+` operator is overloaded to add two "Complex" objects.

### 2. Run-Time Polymorphism
Run-time polymorphism in C++ is achieved through virtual functions and abstract classes (interfaces) using inheritance.

#### Virtual Functions: 
A virtual function is a member function in a base class that you expect to override in derived classes. When you refer to a derived class object using a pointer or reference to the base class, you can call a virtual function for that object and execute the derived class's version of the function.

{: .code }
```
cpp
// Example of virtual functions
class Animal
{

public:

    virtual void MakeSound()
    {
        cout << "Animal sound" << endl;
    }
};

class Dog : public Animal
{

public:

    void MakeSound() override
    {
        cout << "Bark!" << endl;
    }
};
```
In this example, `MakeSound()` is a virtual function in `Animal` which is overridden in `Dog`.

#### Abstract Classes and Pure Virtual Functions: 
An abstract class is a class that has at least one pure virtual function. A pure virtual function is a virtual function that is declared in a base class but has no definition. Abstract classes cannot be instantiated; they are meant to be inherited from by other classes.

{: .code }
```
cpp
// Example of abstract class and pure virtual function
class Shape
{

public:

    virtual void Draw() = 0; // Pure virtual function
    virtual float Area() const = 0; // Another pure virtual function
};

class Circle : public Shape
{

public:

    void Draw() override
    {
        cout << "Drawing Circle" << endl;
    }

    float Area() const override
    {
        return 3.14 * radius * radius;
    }

private:

    float Radius;
};
```
Here, `Shape` is an abstract class with pure virtual functions `Draw()` and `Area()`. `Circle` inherits from `Shape` and provides implementations for these functions.

### Benefits of Polymorphism
- Flexibility and Extensibility: Code written using polymorphism can be easily extended by adding new classes that implement the same interfaces or inherit from the same base class.
- Simplicity and Maintainability: Polymorphism allows for cleaner and more modular code since it encourages reusability and reduces duplication.
- Encapsulation: By using polymorphism, you can hide the implementation details of classes and expose only the required functionality through interfaces.

### Considerations and Best Practices
- Use Interfaces When Appropriate. If you want to define a common interface without any implementation details, use abstract classes (interfaces) with pure virtual functions.
- Avoid Slicing: When working with polymorphic objects through pointers or references to the base class, be mindful of object slicing, where the derived class's specific attributes can be lost if assigned to a base class object.
 
Polymorphism is a powerful concept that enables elegant and efficient design of object-oriented systems. It promotes code reusability, maintainability, and flexibility, making it a cornerstone of modern software development practices.

---

#### Author: JDSherbert
#### Published: 04/07/2024
