---
layout: default
title: Change Project Name
description: An article discussing methods to transfer github enterprise account repositires into personal github repositires.
nav_order: 1
parent: Visual Studio
grand_parent: IDE
has_children: false
---

{{ page.title }}
======================


## Introduction:

This documentation outlines the steps to rename a project within a Visual Studio solution. Please follow the provided instructions carefully to ensure a successful project renaming process.

## Steps:

1. **Open Project Solution:**
   - Open your project solution by accessing the corresponding SLN file with the repository folder.

2. **Locate Files:**
   - When inside the solution of `Visual studio``, identify the following two files within your solution directory:
    - The top file is the Solution name (e.g., `YourProjectName.sln`, currently displayed as "Solution "name" (1 of 1 Project)").
    - The bottom file is the Project name (e.g., `YourProjectName.vcxproj`).

     As an Example Path:

     -> Solution Name -> Project Name -> Files

     <img src="{{ site.baseurl }}/assets/images/VisualStudioImages/SolutionDirectory.png" alt="Solution Directory" style="width:50%;">

3. **File Name Adjustment:**
   - Change the name of the bottom file (Project name) to match the name of the top file (Solution name).
   - Ensure both files have the same name.

4. **Avoid Closing the Application:**
   - It is crucial not to close the application during this process to prevent any potential issues.

5. **Explore Project Location:**
   - Open your project location folder and observe the files.
   - Note that only the `.sln` file is likely to be changed at this point.

    <img src="{{ site.baseurl }}/assets/images/VisualStudioImages/OpenFolderInFileExplorer.png" alt="Open Folder In FileExplorer" style="width:50%;">

    <img src="{{ site.baseurl }}/assets/images/VisualStudioImages/ProjectFolderFilters.png" alt="Project Filters In FileExplorer" style="width:80%;">

6. **Modify SLN File with Notepad:**
   - Open the `.sln` file using Notepad.
   - Locate and update the names in the designated areas to your desired values.

   <img src="{{ site.baseurl }}/assets/images/VisualStudioImages/SLNFile.png" alt="SLN File in NotePad" style="width:90%;">

7. **Edit vcxproj File:**
   - Open the `.vcxproj` file with Notepad.
   - Locate the section containing the project name and ensure it matches the new name.

   <img src="{{ site.baseurl }}/assets/images/VisualStudioImages/vcxprojFile.png" alt="vcxproj File in NotePad" style="width:80%;">

8. **Re-Scan Solution:**
   - Open your `.sln` file and reload the solution to apply the changes.

   <img src="{{ site.baseurl }}/assets/images/VisualStudioImages/RescanSolution.png" alt="Rescan solution In Visual Studio" style="width:30%;">

9. **Adjust Filters:**
   - After reloading, default `filters`, may be removed.
   - Create new filters named "Header Files," "Resource Files," and "Source Files."

   <img src="{{ site.baseurl }}/assets/images/VisualStudioImages/ProjectFilters.png" alt="Project Filters In Visual Studio" style="width:30%;">

10. **Organize Elements:**
    - Transfer each project element into the appropriate filter.
    - Add each filter along with its corresponding file.

11. **Temporary File Creation:**
    - If necessary, create a temporary text file to facilitate the addition of filters.

12. **Update vcxproj.filters:**
    - Open the newly created file and copy its contents into `vcxproj.filters`.
    - Save the changes.

    <img src="{{ site.baseurl }}/assets/images/VisualStudioImages/CopyOldFilterToNewFilter.png" alt="Copy old Filter to new Filter In Visual Studio" style="width:60%;">

13. **Delete Unneeded Files:**
    - Delete the unnecessary `.filter` file.
    - Repeat the same step for the .user file, copying its data into vcxproj.user.

14. **Review Changes:**
    - Verify changes in file statuses (red for removed, green for added, yellow for changed).

15. **Close and Re-Open Solution:**
    - Close the solution and reopen it to ensure that everything functions as expected.

16. **Test Functionality:**
    - Verify that the project works correctly.
    - If any issues arise, repeat steps from 5 onwards until the process is completed accurately.

By following these steps, you should have successfully renamed your project within the Visual Studio solution, and the solution name should be displayed as "Solution `name` (1 of 1 Project)."


---

#### Author: VerzatileDev
#### Published: 22/12/2023