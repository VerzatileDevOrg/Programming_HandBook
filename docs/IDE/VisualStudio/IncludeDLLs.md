---
layout: default
title: Include DLLs
nav_order: 2
parent: Visual Studio
grand_parent: IDE
has_children: false
---

{{ page.title }}
======================

### Introduction:


#### What is a DLL?

- Dynamic Link Library, alternatively referred to as a (DLL), is an amalgamation of code and its associated data intended for widespread use across diverse applications, employing shared code for streamlined functionality. DLLs are specifically crafted to optimize software performance, enhance efficiency, and promote the systematic reuse of code within application development. As linking is established during runtime or while the program is in active execution.


#### What can be considered as linking?

- Linking in programming refers to the process of combining pieces of code or files to create a single executable program. There are two different types of linking in programming that are typically used see the following:

    - [Compile-Time Linking](https://learn.microsoft.com/en-us/cpp/cppcx/static-libraries-c-cx?view=msvc-170) (Static Linking)

        - Read about Static Linking < here >.

    - [Runtime Linking](https://learn.microsoft.com/en-us/windows/win32/dlls/run-time-dynamic-linking) (Dynamic Linking):

        Functionality:

        - The linking process happens dynamically, allowing the program to access functions and resources from shared libraries on-the-fly.

        -  During runtime linking, the executable (.exe) file is connected with external libraries when the program is being launched or when it is running.

        Advantages: 

        - Reduced memory usage (Allows the program to share a single copy of a library in the memory, reducing the usage of memory and calls).

        - Promotes modularity and reusability (Organizes the code-space reducing the quantity of files required).

        - Ease of maintaining (Librares can be applied or updated without having to re-compile the program).

        Cons:

        - Dependency (When libraries are not present or incompatible with the executable or other dependable files, the program may fail to execute or produce a run-time error).

        - Security (May include malicious and compromised libraries, that could be overlooked when vertifiying the integrity and authenticity of the loaded libraries).

        - Reduced control during compile-time (Addressing error or issues caused by linking can be time consuming as it requires runtime to load them, which makes it harder to catch and fix the issues during development and testing).
    
### Execution Order for DLL Lookup:

In the course of the program's execution, it necessitates the specified dependencies (DLLs), which are identified and located by either the Integrated Development Environment (IDE) or the program's predetermined sequence. The pre-defined order of operations involves searching in the following locations:

#### System Directory:

The system directory, known as the system folder, location where the operating system initiates its search for the required DLL. This directory is an integral part of the operating system and contains crucial system files necessary for its functionality. If the DLL is located in this system directory and made publically accessible, the operating system promptly loads it to meet the program's requirements. The path to the system directory varies among operating systems, such as C:\Windows\System32 on Windows.

#### Root Directory (Current directory):

This root directory is typically where the main executable file (.exe) of the application resides. It is the top-level folder of the application's file structure and often represents the location where the application is installed or launched. If the required DLL is found within this root directory, it is prioritized over versions found in other locations, ensuring that the specific DLL required by the program takes precedence during execution.

#### Defined Locations (PATH):

The operating system extends its search to directories explicitly defined in the system PATH environment variable. The PATH variable contains a list of directories specified by the user or system administrator to enable convenient access to frequently used programs and libraries. These defined locations serve as a catalog of commonly utilized resources, and the operating system explores them in the specified order. If the required DLL is present in any of these PATH-defined directories, it is loaded, contributing to the seamless execution of the program.

[Source Documentation by Microsoft " Dynamic link library search order. "](https://learn.microsoft.com/en-us/windows/win32/dlls/dynamic-link-library-search-order)


### Linking DLLs in Visual studio

Based on an (IDE) Visual Studio 2022, there are three ways of linking DLLs:


#### System directory linking:

+ To Be Written. 
+ Must be in the system files and made globally accessible.

#### Root directory linking:

- The DLLs are in the same directory as the .vcxproj are listed the core also known as root directory.

    File structure (Root):

    > Example.dll
    >
    > main.cpp
    >
    > Application.sln
    >
    > Application.vcxproj
    > 
    > Application.vcxproj.user
    >
    > App.Tetris.vcxproj.filters

- Root linking the is beneficial for small projects as the developer is not required to link anything themseleves as the IDE does it for them.

- The issue: directory is messy and becomes hard to manage and to re-scale due to the files cluttering the resource and collaboration ineffectivness. 

+ !Change Root Directory.!


#### Defined locations (PATH):


