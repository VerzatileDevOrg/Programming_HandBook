---
layout: default
title: OOP
nav_order: 1
parent: Concepts
has_children: false
include_programming_language_switch_script: true
---

{{ page.title }}
======================

{% include under_construction.html %}

<div id="cppContent">
  <!-- Your default C++ content goes here -->
  This is C++ content for Object-Oriented Programming.
</div>

<div id="csharpContent" style="display:none;">
  <!-- Your C# content goes here -->
  This is C# content for Object-Oriented Programming.
</div>

<div id="pythonContent" style="display:none;">
  <!-- Your C# content goes here -->
  This is python content for Object-Oriented Programming.
</div>

<button onclick="setLanguageAndShowContent('cpp')">C++</button>
<button onclick="setLanguageAndShowContent('csharp')">C#</button>
<button onclick="setLanguageAndShowContent('python')">Python</button>