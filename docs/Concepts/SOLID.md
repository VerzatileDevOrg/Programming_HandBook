---
layout: default
title: SOLID
nav_order: 1
parent: Concepts
has_children: false
---

{{ page.title }}
======================

## What is SOLID?
Not just a state of matter!
SOLID is an acronym that represents a set of principles for writing maintainable and scalable object-oriented code. These principles were introduced by Robert C. Martin, and are considered fundamental guidelines for software development. Each letter in SOLID represents a different principle.

### 1) S = Single Responsibility Principle (SRP):
- A class should have only one reason to change, meaning it should have only one responsibility or job.
- This principle encourages the organization of code by ensuring that each class or module has a clear and specific purpose.

### 2) O = Open/Closed Principle (OCP):
- Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification.
- This means that you should be able to add new functionality without altering existing code.

### 3) L = Liskov Substitution Principle (LSP):
- Subtypes should be substitutable for their base types without altering the correctness of the program.
- In simpler terms, objects of a superclass should be replaceable with objects of a subclass without affecting the functionality of the program.

### 4) I = Interface Segregation Principle (ISP):
- Clients should not be forced to depend on interfaces they do not use.
- This principle suggests that it is better to have small, specific interfaces rather than a large, all-encompassing one. Clients should not be forced to implement interfaces they don't need.

### 5) D = Dependency Inversion Principle (DIP):
- High-level modules should not depend on low-level modules; both should depend on abstractions. Additionally, abstractions should not depend on details; details should depend on abstractions.
- This principle encourages the use of abstractions (such as interfaces or abstract classes) to decouple high-level modules from low-level modules, promoting flexibility and maintainability.

Applying SOLID principles in your code can lead to a more modular, flexible, and maintainable codebase. It helps reduce the impact of changes, makes the code easier to understand, and facilitates the addition of new features. While strict adherence to all the principles may not always be practical in every situation, striving to follow them can significantly improve the quality of your software design.

-----------------------------------------------------------------------

## Examples

Here are some simple example problems that explore making a coffee. Here is some example "Problem" code:

```cpp
#include <iostream>

class CoffeeMaker // CoffeeMaker is doing all the actions!
{
public:
    void makeCoffee() 
    {
        grindCoffeeBeans();
        brewCoffee();
        pourInCup();
        addCondiments();
    }

    void grindCoffeeBeans() 
    {
        std::cout << "Grinding coffee beans\n";
    }

    void brewCoffee() 
    {
        std::cout << "Brewing coffee\n";
    }

    void pourInCup() 
    {
        std::cout << "Pouring coffee into cup\n";
    }

    void addCondiments() 
    {
        std::cout << "Adding condiments to coffee\n";
    }
};
```

-----------------------------------------------------------------------

### Single Responsibility Principle (SRP):

The initial CoffeeMaker class is responsible for multiple tasks such as grinding coffee beans, brewing coffee, pouring it into a cup, and adding condiments. That's way too many functions for just one class! This violated the SRP because the class had more than one reason to change — any change in the coffee-making process could impact the entire class.

How can we solve this? Well, by breaking down and applying Single Responsibilities to each class element, we reduce the need to mess with the whole class. 

```cpp
#include <iostream>

class CoffeeMaker // CoffeeMaker now just requests the other classes to do their actions.
{
public:
    void makeCoffee() 
    {
        grinder.grindCoffeeBeans();
        brewer.brewCoffee();
        pourer.pourInCup();
        condimentAdder.addCondiments();
    }

private:
    CoffeeGrinder grinder;
    CoffeeBrewer brewer;
    CoffeePourer pourer;
    CondimentAdder condimentAdder;
};

class CoffeeGrinder 
{
public:
    void grindCoffeeBeans() 
    {
        std::cout << "Grinding coffee beans\n";
    }
};

class CoffeeBrewer 
{
public:
    void brewCoffee() 
    {
        std::cout << "Brewing coffee\n";
    }
};

class CoffeePourer 
{
public:
    void pourInCup() 
    {
        std::cout << "Pouring coffee into cup\n";
    }
};

class CondimentAdder 
{
public:
    void addCondiments() 
    {
        std::cout << "Adding condiments to coffee\n";
    }
};
```

To adhere to SRP, the CoffeeMaker class is now refactored into separate classes, each responsible for a specific aspect of coffee making (grinding, brewing, pouring, and adding condiments). This separation of concerns makes each class focused on a single responsibility. The CoffeeMaker class then orchestrates these components to make coffee. This way, if there's a change in the coffee grinding process (say we use a different kind of bean), for example, it only affects the CoffeeGrinder class!

-----------------------------------------------------------------------

### Open/Closed Principle (OCP):

The initial design was not closed for modification, especially when introducing new types of coffee. Adding a new coffee type required modifying the existing CoffeeMaker class.

```cpp
class CoffeeMaker 
{
public:
    virtual void makeCoffee() = 0;
};

class LatteMaker : public CoffeeMaker {
public:
    void makeCoffee() override {
        // Implementation for making a latte
    }
};

class CappuccinoMaker : public CoffeeMaker {
public:
    void makeCoffee() override {
        // Implementation for making a cappuccino
    }
};
```

By using polymorphism and creating abstract classes/interfaces (CoffeeMaker), we open the door for extension. Instead, by using Inheritance and Polymorphism, we can now add a "LatteMaker" and "CappucinoMaker" class without modifying the existing CoffeeMaker class code. This adheres to the OCP, making the system more flexible and extensible.

-----------------------------------------------------------------------

### Liskov Substitution Principle (LSP):

In the initial design, there was a risk that derived classes (e.g., LatteMaker) might not be completely substitutable for the base class (CoffeeMaker).

By ensuring that derived classes adhere to the same interface as the base class (CoffeeMaker), we guarantee that they are substitutable without affecting the correctness of the program. This promotes a consistent and reliable behavior when different types of coffee makers are used interchangeably.

In this example, we solved this just by making `makeCoffee()` virtual and making sure the child classes override this function, but it can get more complex than this!

-----------------------------------------------------------------------

### Interface Segregation Principle (ISP):

The initial CoffeeMaker class had methods for grinding coffee beans and adding condiments, which might not be applicable to all types of coffee.
We can solve this by creating separate interfaces for different aspects of coffee making.

```cpp
class CoffeeGrinder 
{
public:
    virtual void grindCoffeeBeans() = 0;
};

class CondimentAdder 
{
public:
    virtual void addCondiments() = 0;
};

class LatteMaker : public CoffeeMaker, public CoffeeGrinder, public CondimentAdder 
{
public:
    void makeCoffee() override 
    {
        // Implementation for making a latte
    }

    void grindCoffeeBeans() override 
    {
        // Implementation for grinding coffee beans for a latte
    }

    void addCondiments() override 
    {
        // Implementation for adding condiments to a latte
    }
};
```

By creating separate interfaces (CoffeeGrinder and CondimentAdder), each coffee maker class can implement only the interfaces it needs. This adheres to the ISP, ensuring that no class is forced to implement methods it doesn't use, leading to more modular and focused interfaces.

-----------------------------------------------------------------------

### Dependency Inversion Principle (DIP):

The initial CoffeeMaker class had direct dependencies on concrete classes (CoffeeGrinder, CoffeeBrewer, CoffeePourer, CondimentAdder), making it hard to change or extend the behavior of these components without modifying the CoffeeMaker class.

```cpp
// Depend on abstractions (interfaces) rather than concrete implementations.
class CoffeeMaker 
{
public:

    // When creating a coffee maker, we need to supply it references to our other coffee-related objects
    // The constructor will then initialize those variables with the supplied references 
    CoffeeMaker(CoffeeGrinder& grinder, CoffeeBrewer& brewer, CoffeePourer& pourer, CondimentAdder& condimentAdder)
    : grinder(grinder)
    , brewer(brewer)
    , pourer(pourer)
    , condimentAdder(condimentAdder) 
    {
    }

    void makeCoffee() 
    {
        grinder.grindCoffeeBeans();
        brewer.brewCoffee();
        pourer.pourInCup();
        condimentAdder.addCondiments();
    }

private:
    // We assign these dependency references in the constructor
    CoffeeGrinder& grinder;
    CoffeeBrewer& brewer;
    CoffeePourer& pourer;
    CondimentAdder& condimentAdder;
};
```

By depending on abstractions (interfaces) instead of concrete implementations, the CoffeeMaker class becomes more flexible. This adheres to DIP, allowing for easy substitution of components. For example, if a new and improved coffee grinder is introduced, it can be swapped without modifying the CoffeeMaker class.

-----------------------------------------------------------------------

### Conclusion

In summary, the approach involved breaking down responsibilities, introducing abstractions/interfaces, and adhering to principles that promote flexibility, extensibility, and maintainability. Each SOLID principle addresses specific concerns, contributing to a more robust and scalable design. This is just a simple example, but there are times where this idea can get highly complex!

-----------------------------------------------------------------------

#### Author: JDSherbert
#### Published: 11/12/2023

