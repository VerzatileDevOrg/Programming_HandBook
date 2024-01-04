---
layout: default
title: DevOps
nav_order: 1
parent: Concepts
has_children: false
---

{{ page.title }}
======================

DevOps is a collaborative approach that combines development (Dev) and operations (Ops) to enhance communication and productivity throughout the software development lifecycle. It involves a set of tools and processes aimed at automating and streamlining the continuous integration & continuous delivery of software. This helps in achieving faster and more reliable development cycles, improving collaboration between development and operations teams, and ultimately delivering high-quality software efficiently.

## DevOps Platforms

- Azure DevOps
- GitHub
- GitLab
- Harness
- JIRA

### Azure DevOps

Whilst there are many DevOps options out there, we will mainly be focusing on Microsofts Azure DevOps in this article.

Azure DevOps is Software as a Service (SaaS) platform that provides an end-to-end DevOps toolchain for developing and deploying software. It includes a suite of tools for managing software development:

- Azure Repos - Git repositories for source control
  These use git, so you can use git commands to interact with them. Users can also use the Azure DevOps UI to interact with them. An alternative to this is GitHub.
- Azure Pipelines - CI/CD pipelines for automating builds and deployments
  These are YAML files that define the build and release process. They can be triggered by a commit to a branch, a pull request, or a schedule. They can also be triggered manually. An alternative to this is Jenkins.

  You can call files with bash commands to run instead of direct instructions.

- Azure Boards - Project management tool for planning and tracking work
  This is a Kanban board that can be used to track work items. It can be used to track bugs, user stories, tasks, and more. An alternative to this is Trello.
- Azure Test Plans - Test management tool for planning, tracking, and executing tests
  This is a tool for managing test cases and test plans. It can be used to create test cases, assign them to testers, and track their progress. It can also be used to create test plans, assign test cases to them, and track their progress. An alternative to this is TestRail.
- Azure Artifacts - Package management tool for hosting and sharing packages
  This is a tool for hosting and sharing packages. It can be used to host NuGet packages, npm packages, Maven packages, and more. An alternative to this is Nexus Repository.

Once an application has gone through the development process, it is ready to be deployed to a production environment. This is where Azure DevOps comes in. Azure DevOps provides a set of tools for deploying applications to production environments. Common environments that you may see are:

- Development - This is where developers work on new features and bug fixes.
- Pre-Production - This is where the application is tested before being deployed to production.
- Production - This is where the application is deployed to production, and is accessible to end users.

For example when a pipeline is run for the development environment, it will first setup the environment by installing required dependencies such as Node. Once that is run, all data is lost as these servers are volatile. In order to save logs from a pipeline run we must archive it and drop it in to ZIP. (You can also drop archives in to a ZIP for things like test reports for frameworks like Cucumber).

You can also set variables that are pipeline-wide if required. These can be used to store things like API keys, or other sensitive information. You can run as many pipelines as you want, but you can only run one at a time (Although tasks contained within a pipeline can be run in parallel). You can also set up triggers to run pipelines when certain events occur, such as a commit to a branch, a pull request, or a schedule.

Generally the pipeline used to push a build to production will be protected so that only certain people can manually run it. This is done by setting up a branch policy that requires a pull request to be approved before it can be merged. This ensures that only approved changes are deployed to production.

In practice, you should set the pipeline up to target the main branch. This will allow that pipeline to automatically run by any branch that is merged into the main branch.

---

## Conclusion

In conclusion, DevOps is a collaborative process and is just a set of tools that allows automation of software development and deployment. It is not a replacement for good software development practices, but rather a tool that can be used to enhance them.

---

#### Author: Sommos

#### Published: 02/01/2024
