---
layout: default
title: Transfer Enterprise to Personal Github
nav_order: 1
parent: Github
grand_parent: Version Control
has_children: false
---

{{ page.title }}
======================

## Introduction

Transferring a GitHub Enterprise repository in 2023 can be accomplished through two distinct methods. This documentation outlines these methods—one utilizing GitHub's web interface entirely, and the other involving local machine command-line operations.

### Method 1: GitHub Import Code

This method involves utilizing GitHub's web interface to seamlessly transfer your GitHub Enterprise repository.

1. **Create a New Repository in Personal GitHub Account:**
   - Log in to your Personal GitHub account.
   - Create a new repository and keep it empty with no Git ignore or readme files.
   - Set the repository visibility to public.

2. **Access "Import Code" Feature:**
   - On the empty project page, scroll down to find the "Import Code" option.
   - Click on "Import Code" to initiate the transfer process.

3. **Enter GitHub Enterprise Repository Link:**
   - In the provided field, enter your GitHub Enterprise repository link (e.g., `https://enterprise.name.ac.uk/MyProject.git`).
   - Click "Begin Import" to commence the transfer.

4. **Login to GitHub Enterprise Account:**
   - Enter your GitHub Enterprise account credentials when prompted.

5. **Select Project for Import:**
   - A panel will display projects associated with your Enterprise URL.
   - Choose the specific project you want to transfer and click "Submit."

6. **Monitor Import Progress:**
   - Track the progress of the import operation.

7. **Completion Notification:**
   - Once the transfer is complete, an email notification will be sent.
   - The email will contain a link to your new repository page.

### Method 2: Local Command-Line Operation

For those preferring a local approach, follow these command-line steps:

1. **Create a New Repository in Personal GitHub Account:**
   - Log in to your Personal GitHub account.
   - Create a new repository and keep it empty with no Git ignore or readme files.
   - Set the repository visibility to public.


2. **Configure Local Repository:**
   - In the command line, navigate to your local copy of the Enterprise repository.
   - Ensure it's up-to-date using `git checkout master` and `git pull origin master` (or your desired branch).


3. **Add New Repository as Remote:**
   - Run the command: `git remote add public https://github.com/user/repo.git` (replace with your new repository URL).


4. **Force Push to New Repository:**
   - Perform a force push to your new repository: `git push -f public`

By choosing between the web-based GitHub Import Code method or the local command-line approach, you can efficiently transfer your GitHub Enterprise repository, preserving contributors, issues, and project history.


### References

For additional information, you may refer to the [GitHub Importer Documentation](https://docs.github.com/en/migrations/importing-source-code/using-github-importer/importing-a-repository-with-github-importer).

---

#### Author: VerzatileDev
#### Published: 22/12/2023