---
layout: default
title: SOLID
nav_order: 1
parent: Concepts
has_children: false
permalink: docs/Concepts/
---

{{ page.title }}
======================

## What is the SOLID?
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

### Noticed A Mistake?
Click [here](https://github.com/VerzatileDevOrg/Programming_HandBook/blob/main/{{ page.permalink }}/{{ page.title | slugify }}.md) to contribute!
