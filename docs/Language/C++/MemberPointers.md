---
layout: default
title: Member Pointers
nav_order: 1
parent: C++
grand_parent: Language
has_children: false
---

{{ page.title }}
======================

{: .warning } This article is quite advanced and assumes you have an understanding of C++.
If not, please refer to the [C++](/docs/Language/C++/C++.html) section of this book!

Member Pointers are traditional pointers that point to class or struct members.

```cpp
class SomeClass 
{
public:

    int data;
};

int SomeClass::* memberPointer = &SomeClass::data;

```

---

#### Author: JDSherbert
#### Published: 20/12/2023