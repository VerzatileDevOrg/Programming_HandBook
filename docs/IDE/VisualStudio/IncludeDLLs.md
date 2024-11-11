---
layout: default
title: Include DLLs
description: An article demonstrating the use cases of DLL linking within visual studio. A practical use when dealing with programming libraries and code organization.
nav_order: 2
parent: Visual Studio
has_children: false
---

{{ page.title }}
======================


This guide demonstrates how to include DLL files in a folder and seamlessly integrate them into the Debug or Build folder to generate a working build directory. It is particularly useful when dealing with libraries that require specific DLL files.

The following is based on an (IDE) [Visual Studio 2022](https://visualstudio.microsoft.com/vs/)

<br>

### List of options:

   - [Root Directory Linking](#root-directory-linking-(default))
   - [Working Directory Linking:](#2-working-directory-linking)
   - [Defined Locations Path](#3-defined-locations-path)

<br>

### 1. **Root Directory Linking (Default):**

<br>

Located in the same directory as `.vcxproj` known as `Root directory`.

Simply add the DLL into your project:

    File structure (Root directory):

    > Example.dll
    > main.cpp
    > Application.sln
    > Application.vcxproj
    > Application.vcxproj.user
    > Application.vcxproj.filters


**Advantages:**

- Linking is done for the user by the (IDE).
- Beneficial for small projects, where file management is not required.
- The user does not have to worry about the (IDE) locating them, as long as they are listed within the root directory of the project.

**Cons:**

- Directory gets cluttered and harder to manage as the project grows in size.
- Clutteres resource and collaboration effectivness.

<br>

### 2. **Working Directory Linking:**

<br>

Changing the working directory (Location of where the application starts the process of the build and runtime).

**Steps:**

* Open `Project Properties` (Right-click on the `Solution ` -> `Project Properties` in Visual Studio).
* Navigate to `Configuration Properties` ->  `Debugging` -> `Working Directory`.
* Add the folder `(DLLs)` to specify that the project starts building from the `(DLLs)` folder instead of the root directory.

Running locally through (IDE) debugger:

- Has no requirements as long as the DLLs are located there when they are asked by the application.

Running from Output Directory:

- Requires the (DLL) directory to be built into the `output directory` for the `.exe` to locate it.

{: .note}
See the bottom of the page to setup `Pre-linking Events`.

**Advantages:**

- Allows the user to define a costum (DLL) folder up in one directory of the (Root directory).
- The project starts from the (DLL) folder.

**Cons:**

- Requires that the user builds the folder into `output directory` aiming to run it from an .exe
- The user is limited to one folder of (DLLs), and can not define Debug from release versions.

<br>

### 3. **Defined locations (PATH):**

<br>

Giving the (IDE) or application a pre-defined location to look for dlls.

The following should be used if the aim is to specify multiple location or versions of dlls for the application.

**Steps:**

- Navigate to `Configuration Properties` -> `Debugging` -> `Environment`.
- Specify a path as an example `PATH=$(ProjectDir)\DLLs`, where `(ProjectDir)` specifies the project root and `\DLLs` its folder.
- This example the Working directory should be of `$(ProjectDir)` as listed in [Root Directory Linking (Default):](#root-directory-linking-default)

{: .note}
Specify more than one path `PATH=$(ProjectDir)\DLLs, PATH=$(ProjectDir)\DLLs2` by the use of `,`.

{: .note}
See the bottom of the page to setup Pre-linking Events.

**Advantages:**

- The user can define the locations of the `dlls`.
- The user is not limited to changing the working directory.
- The user can setup different `dlls` specific to debugging and release versions.
- Project organization and file handling.

**Cons:**

- Requires that the user builds the folder into `output directory` aiming to run it from an .exe (If located in a folder).
- Path has to be the same in `output directory` as in project files.
- May become difficult to remember the setup and how to change the specifics.


<br>

### 4. System directory linking:

<br>

{: .important}
The following is specific to the users machine, which may affect the project for collaboration and future development if the `dlls` are not made accessible in the system globally or not installed. <br><br>
Please use it with caution and existing knowledge as it requires `administrative privilages` and can potentionally lead to breaking your computer.

The following should be used if and when for example you are testing your environments and projects on a local server, where additionally adding `dlls` may become unfavored.

Remember the following should not be done for basic development environment!

- Most commonly the following is used by companies that are known, that automatically install new `dlls` into your system, such alike for example `nvidia graphics drivers` is being handled as the following must be accessible not only by the gpu, but also any potential video games.

**Steps:**

Access System Environment Variables:

1. Right-click on the Start button and select `System.`
2. Click on `Advanced system settings` on the left.
3. In the System Properties window, click the `Environment Variables` button.
4. Modify System's PATH Variable:
5. In the Environment Variables window, under the `System variables` section, find and select the `Path` variable.
6. Click the `Edit` button.
7. Add DLL Directory to PATH:
8. In the Edit Environment Variable window, click `New` and paste the full path to the directory containing your DLL.
9. Click `OK` to close each window.

{: .note}
When completed make sure to restart the system and or any applications you may have open.

{: .note}
If everything was done correctly, `visual studio` should now have access to globally linked dlls, this is because the search order of the (IDE) first takes through all of your `APIs`, `appplication`, `known dlls` and `dependencies`, if they aren ot found it looks for it through `system32` `path`, <br><br>
Please see on further reading at the bottom of the page

**Advantages:**

- Makes your `dlls` accessible globally so that any project you make has access to them and avoid the setup each time.
- You can rely on your own local `dlls` if not specified differently by the project.
- One pre-defined location.

**Cons:**

- Can cause potential mishaps within the system due to defined `dlls`
- The `dlls` are only accessible locally.
- If the DLLs folder goes missing, every other project reliant on it breaks!
- Might cause issues with `dll` version as project(s) may require different patches.

<br>

### **Pre-Linking Events**

<br>

1. **Building DLLs into output Directory:**
   - Navigate to Configuration Properties -> Build Events -> Pre-link Events.
   - Use the Copy function to move files from the "DLLs" folder to the build root.

2. **Add the Following Command:**

{: .code}
```bash
   copy "$(ProjectDir)DLLs*.dll" "$(TargetDir)"
   ping -n 6 127.0.0.1 > nul
```
2.1  Notes for Expanding

- `copy` function to copy all DLL files `(*.dll)` from the "DLLs" folder in your project directory `($(ProjectDir))` to the target directory where the final build is stored `($(TargetDir))`
- Adjust the file path according to the folder names based on Configuration steps 1 or 2.
- `.dll` Specifies that all with an extentsion of it should be added to the build.
       
- Specify further `copy` in the next line, depending on the amount of DLL dependencies change the ping of `-n 6`
- Alternativly the specification for specific `dll` can be called as such `copy "$(ProjectDir)DLLs\YourDLL1.dll" "$(TargetDir)"`, which instead using all in the directory calls the specified `.dll` file.
    
- ping -n 6 127.0.0.1 > nul
- Used to add additionaly day to ensure, that the project has sufficient time to link and build "dynamic libraries " DLLs
- `ping` command, essentially specifying a delay with amount.
- `-n 6` by 6 seconds
- `127.0.0.1 ` Loopback address, send loop to Address of 6 times with a delay of 6 seconds.
- `> nul` Supresses output from the display (Directing the output to void)


<br>

{: .further-reading}
And Example for Path and working directory [DLL In Folder Example](https://github.com/VerzatileDevOrg/VS.DLLinFolder) <br>
The following guide is based on an (IDE) [Visual Studio 2022](https://visualstudio.microsoft.com/vs/) <br>
Visual studio [Build Events](https://learn.microsoft.com/en-us/visualstudio/ide/specifying-custom-build-events-in-visual-studio?view=vs-2022) <br> <br>
Read about `Working directory` [Source Documentation by Microsoft " Dynamic link library search order. "](https://learn.microsoft.com/en-us/windows/win32/dlls/dynamic-link-library-search-order)<br><br>
Read more about different types of Linking:<br>
[Compile-Time Linking](https://learn.microsoft.com/en-us/cpp/cppcx/static-libraries-c-cx?view=msvc-170),
[Runtime Linking](https://learn.microsoft.com/en-us/windows/win32/dlls/run-time-dynamic-linking)


---

#### Author: VerzatileDev
#### Published: 08/02/2024