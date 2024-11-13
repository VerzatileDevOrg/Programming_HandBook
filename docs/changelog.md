---
layout: default
title: ChangeLog
description: Get the latest and previous news of the additions removals done towards the website. Offering a chance to see into version history and its changes.
nav_order: 20
has_children: false
---

{{ page.title }}
======================

{: .new title="Information Guide"}
Changes to documentation and to this project are documented on this page.


<br>


## Release V.1.0.2 (#117)
Just the docs v0.10.0
The following updates the core dependancy of Just the docs from v0.8.0
to v0.10.0.

This gives an opportunity to remove:

1. Grand_parent (Function) to be replaced with just parent and children.
2. Easier to manage.

- Note that with this No title can be the same in a file, if its the
same the Url part has to be different.

Additionally added a few files to overwrite a few that are usually
defined globally, but to assure it works as intended.

Removed Nav, no longer required.


Removed GrandParent
In previous version grand_parent was required, now it can just use
parent: previous file . As required

Files and issues have now been modified according to it.

### Fixes

#110 [BUG]
- Git & github 3rd child not shown

#61
[ADDRESS] Child in Child in Child Content


### New


![image](https://github.com/user-attachments/assets/8b550149-b910-49ef-903c-1e3677bd8706)


### Previous


![image](https://github.com/user-attachments/assets/eb362b02-ac4e-44b3-94e4-1e24cd043a71)



### Known Issues

- Currently none (Tested on mobile / Pc).


---

<br>

## Release V.1.0.1 (#115)

The following address visual representation and build / Runtime of the
website..
See the following details down below for further information.


### Changes


1. Fixes the permalink that includes .html at the end of the current
page within the hyperlink.
The following is explained in detail here
#98

2. Removes extra routing that references itself for pages for example
Portfolio would reference a Folder and the named file that hosts the
folder, which has now been changed to index.html

This changes /folder/foldername.md to /folder/ , which uses subdomains
under /folder/subdomains

- Note that Now each folder instead of referencing itself shouuld
reference index.html as its primary file, whereas the rest will be part
of the subdirectory.
- See notes on the following
#108

4. Fixes
#109 , not
showing certain articles within the list of the website.

5. The following update features minor bug fixes and improves the
load-time
of the website in general.

Direct reference to the changes and the requirement can be found here
#112

Reduces the amount of load and flickering when changing from light to
dark themed background.

6. The first one looked in a folder will be index.html file, this means
that it does not reference itself specifically and instead uses /folder/
though it can still be accessed by /folder/index.html


### Known Issues

1. #110
2. #61

---


## Release V.1.0.0 (#107)

The following marks the point at which the website becomes fully
viewable and usable, complete with all listed features and fixes. This
milestone designates the official release, which will be supported by a
subsequent package for maintanance and version control for the future.


### Fixes:

* Permalink keeping a (.html) at the end of its domain link, which has
now been removed. Default to ( permalink: pretty ) .
#102
* Parent / grandParent rooting for certain articles
#106
* Issue Template changes
#101

### Adds:


* Base content for the Main Topic areas First referenced on the page
such as:

IDE
Language
Framework
Engine
Concepts
Version Controls

* Article Describtions (Now shows a small text to the user when the
HyperLink is shared to social media or any alternative)
#99
* Content Written for OOP, Polymorphisism. Thank you for the
contribution(s) @JDSherbert .
