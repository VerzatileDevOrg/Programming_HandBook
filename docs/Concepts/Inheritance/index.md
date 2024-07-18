---
layout: default
title: Inheritance
description: "An article dicussing Inheritance."
nav_order: 1
parent: Concepts
has_children: false
---

{{ page.title }}
======================

Inheritance is a fundamental concept in object-oriented programming (OOP) that allows a new class to inherit properties and behaviors (methods) from an existing class. This mechanism promotes code reusability, organizational structure, and the ability to create a hierarchical relationship between classes.

## Key Concepts

### Base Class (Parent or Superclass):
The class whose properties and methods are inherited by another class.
Example: Animal might be a base class.

### Derived Class (Child or Subclass):
The class that inherits from the base class.
Example: Dog might be a derived class that inherits from Animal.

### Access Specifiers:
Define the accessibility of the members of a class. Common access specifiers include:
#### - public: Accessible from any other class.
#### - protected: Accessible within its own class and by derived classes.
#### - private: Accessible only within the class itself.

### Override:
The derived class can provide a specific implementation of a method that is already defined in its base class.

### Extend:
The derived class can add new methods and properties in addition to those inherited from the base class.
Example in Python
Here's an example of inheritance in Python:

{: .code }
```cpp
#include <iostream>
using namespace std;

class Animal
{

// "Public" means any class can access these functions.
public:

    Animal(string name)
    : Name(name)
    {
    }

    // "Virtual" functions can be "overridden" in child classes.
    virtual void Speak()
    {
        cout << Name << " makes a sound" << endl;
    }

// "Protected" means that any derived class can access these properties.
// It cannot be accessed outside of this class or its children.
protected:

    string Name;

};

class Dog : public Animal
{

public:

    Dog(string name)
    : Animal(name)
    {
    }

    // "Override" will try to use this implementation of that function.
    virtual void Speak()
    {
        cout << Name << " barks" << endl;
    } override;

};

class Cat : public Animal
{

public:

    Cat(string name)
    : Animal(name)
    {
    }

    // "Override" will try to use this implementation of that function.
    virtual void Speak()
    {
        cout << name << " meows" << endl;
    } override;

};

int main()
{
    Dog dog("Buddy");
    Cat cat("Whiskers");

    dog.Speak();  // Output: Buddy barks
    cat.Speak();  // Output: Whiskers meows

    return 69;
}
```

## Benefits of Inheritance

### Code Reusability: 
Common functionality can be written once in the base class and reused by derived classes.

### Hierarchical Classification:
Allows the creation of a natural class hierarchy, making the code more logical and easier to understand.

### Extensibility:
New functionality can be added with minimal changes to existing code.

### Maintainability:
Simplifies code maintenance by reducing redundancy.

## Considerations and Best Practices

### Avoid Deep Inheritance Hierarchies:
Deep hierarchies can make the code difficult to understand and maintain. Prefer composition over inheritance when appropriate.

### Use Inheritance for "Is-A" Relationships:
Ensure that the derived class is a specialized version of the base class. For example, a Dog is an Animal.

### Leverage Polymorphism:
Use polymorphism to write more general and flexible code that can work with objects of the base class or any of its derived classes.
You can read more about [Polymorphism](https://github.com/JDSherbert/Programming_HandBook/blob/main/docs/Concepts/Polymorphism/Polymorphism.md) here.

### Override Methods Carefully:
When overriding methods, ensure that the new implementation is consistent with the expected behavior defined in the base class.
By understanding and applying the concept of inheritance correctly, you can create more efficient, maintainable, and organized code.

---

#### Author: JDSherbert
#### Published: 08/07/2024
