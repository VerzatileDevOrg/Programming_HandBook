---
layout: default
title: OOP
nav_order: 1
parent: Concepts
has_children: false
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

<button onclick="showContent('cpp')">C++</button>
<button onclick="showContent('csharp')">C#</button>

<script>
  function showContent(language) {
    if (language === 'cpp') {
      document.getElementById('cppContent').style.display = 'block';
      document.getElementById('csharpContent').style.display = 'none';
    } else if (language === 'csharp') {
      document.getElementById('cppContent').style.display = 'none';
      document.getElementById('csharpContent').style.display = 'block';
    }
  }
</script>