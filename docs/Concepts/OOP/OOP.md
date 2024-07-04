---
layout: default
title: OOOP
description: An article dicussing Object Oriented Programming.
nav_order: 1
parent: OOP
grand_parent: Concepts
has_children: false
---

{{ page.title }}
======================

Object-Oriented Programming (OOP) is a programming paradigm that revolves around the concept of objects, which are instances of classes, and allows for the organization and structure of code that is more closely aligned with real-world entities and concepts. OOP provides a way to structure software as a collection of objects that interact with each other to accomplish tasks. Here’s an in-depth exploration of the key principles and concepts of OOP:

## Key Concepts of Object-Oriented Programming
### 1. Classes and Objects

#### Class: 
A class is a blueprint or template for creating objects. It defines the data and behavior (methods) that objects of the class will have. For example, a Car class might define properties like color, model, and methods like start, accelerate, brake.

{: .code }
```
cpp
// Example of a simple class in C++
class Car
{

private:

    string Colour;
    string Model;
    int Year;

public:
    // Constructor
    Car(string C, string M, int Y)
        : Colour(C)
        , Model(M)
        , Year(Y)
    {
    }

    // Method to start the car
    void Start()
    {
        cout << "Car started!" << endl;
    }

    // Method to accelerate
    void Accelerate()
    {
        cout << "Car accelerating!" << endl;
    }

    // Method to brake
    void Brake()
    {
        cout << "Car braking!" << endl;
    }
};
```
#### Object: 
An object is an instance of a class. It represents a concrete entity based on the blueprint provided by the class. For example, an object `Ferrari` could be created from the `Car` class.

{: .code }
```
cpp
// Creating an object of class Car
Car Ferrari("Red", "F40", 1987);
```

### 2. Encapsulation
Encapsulation is the bundling of data (attributes) and methods (functions) that operate on the data into a single unit (class). It hides the internal state of an object from the outside world and only exposes a controlled interface to interact with the object.

#### Access Specifiers: 
In C++, access specifiers (public, private, protected) control the visibility of class members:

##### public: Members are accessible from outside the class.
##### private: Members are accessible only from within the same class.
##### protected: Members are accessible from within the same class and derived classes.

{: .code }
```
cpp

class SomeClass
{

private:

    int PrivateMember;

public:

    void PublicMethod()
    {
        // Public method can access private member
        PrivateMember = 10;
    }
};
```

### 3. Inheritance
Inheritance allows a class (derived class) to inherit properties and behavior from another class (base class or parent class). It promotes code reuse and establishes a hierarchical relationship between classes. The base class is the class being inherited from, while the derived class is the class that inherits from the base class.

{: .code }
```
cpp
// Base class
class Animal
{

protected:

    void Eat()
    {
        cout << "Omnomnom!" << endl;
    }
};

// Derived class inheriting from Animal
class Dog : public Animal
{

public:

    void Bark()
    {
        cout << "Dog is barking!" << endl;
    }

    void Hungry()
    {
        if(true)
        {
            Eat();
        }
    }
};
```

### 4. Polymorphism
Polymorphism means "many forms" and refers to the ability of objects of different classes to be treated as objects of a common superclass. It allows a single interface to be used for entities of different types, promoting flexibility and extensibility. Article here: 
[Polymorphism](/docs/Concepts/Polymorphism/Polymorphism.md)

#### Compile-Time Polymorphism: 
Achieved through function overloading and operator overloading.

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

#### Run-Time Polymorphism: 
Achieved through virtual functions and inheritance.

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

### 5. Abstraction
Abstraction focuses on the essential features of an object and hides the irrelevant details. It allows developers to create complex systems by breaking them down into smaller, more manageable parts.

#### Abstract Classes and Interfaces: 
An abstract class is a class that cannot be instantiated on its own and typically contains one or more pure virtual functions. 
An interface is a collection of abstract methods with no concrete implementation.

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

### Benefits of Object-Oriented Programming
- Modularity: OOP promotes modular design, making it easier to understand, maintain, and debug code.
- Code Reusability: Classes and objects can be reused across different parts of an application or in different applications.
- Flexibility and Extensibility: New features can be added by creating new classes without modifying existing code, promoting scalability.
- Encapsulation: Protects data and methods from outside interference, enhancing security and reliability.

### Best Practices
- Single Responsibility Principle (SRP): Each class should have a single responsibility or reason to change.
- Open/Closed Principle (OCP): Classes should be open for extension but closed for modification.
- Liskov Substitution Principle (LSP): Objects of a superclass should be replaceable with objects of its subclasses without affecting the correctness of the program.
- Interface Segregation Principle (ISP): Clients should not be forced to depend on interfaces they do not use.
- Object-Oriented Programming is a powerful paradigm that has revolutionized software development by providing a clear and structured way to model complex systems. It encourages good design practices, enhances code quality, and improves productivity by enabling developers to think in terms of objects and their interactions.

---

#### Author: JDSherbert
#### Published: 04/07/2024
