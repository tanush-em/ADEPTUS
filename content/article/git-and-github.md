---
title: Learn Git and GitHub
description: Learn to Version Control using Git and GitHub
slug: git-and-github
date: 11/24/2024
author: Tanush T M
image: https://img-c.udemycdn.com/course/750x422/3352204_9c9a_20.jpg
tags: ["Git", "GitHub", "Version Control", "Beginner"]
---

# Git and GitHub Tutorial: A Comprehensive Guide

Welcome to this comprehensive guide on Git and GitHub! This tutorial will help you understand version control fundamentals and master essential Git commands and GitHub workflows. 
NOTE: Use this as a guide to get to know the jargon of git 

## Introduction to Version Control

Version control is a system that records changes to files over time, allowing you to recall specific versions later. Git is the most widely used version control system, while GitHub is a platform that hosts Git repositories.

### Why Use Git and GitHub?

- **Track Changes**: Monitor and manage changes to your codebase effectively
- **Collaboration**: Work seamlessly with team members on the same project
- **Backup**: Store your code securely in the cloud
- **Open Source**: Participate in the global development community

## Setting Up Git and GitHub

Before diving into version control, you'll need to set up your environment. Let's go through each step in detail:

### 1. Installing Git

Download Git from [git-scm.com](https://git-scm.com/downloads). After installation, you'll have access to Git Bash (on Windows) or can use Git from your terminal (on Mac/Linux).

### 2. Initial Configuration

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

These commands set up your identity for all Git repositories on your machine. Git uses this information to associate commits with your identity. The `--global` flag means these settings apply to all repositories on your computer.

## Essential Git Commands Explained

Let's dive deep into the most important Git commands and understand what each one does:

### Repository Creation and Cloning

```bash
# Initialize a new repository
git init
```
The `git init` command creates a new Git repository. It adds a hidden `.git` directory to your project folder, which contains all the metadata needed for version control. Use this when starting a new project from scratch.

```bash
# Clone an existing repository
git clone https://github.com/username/repository.git
```
`git clone` creates a copy of a remote repository on your local machine. It automatically:
- Downloads all files and history
- Sets up the original repository as a remote called "origin"
- Creates and checks out the main branch

### Tracking Changes

```bash
# Check repository status
git status
```
`git status` shows:
- Which files are modified but not staged
- Which files are staged for commit
- Which files are not being tracked by Git
This is your go-to command to understand the current state of your repository.

```bash
# Add files to staging area
git add filename    # Add specific file
git add .          # Add all files
git add *.js       # Add all JavaScript files
```
The `git add` command moves changes to the staging area (also called the index). Think of it as preparing a box of items you want to commit. You can:
- Add specific files
- Add all files (with `.`)
- Use patterns to add multiple files

```bash
# Remove files from staging
git reset filename
```
`git reset` removes files from the staging area without discarding changes. The files remain modified but won't be included in the next commit.

### Committing Changes

```bash
# Create a commit
git commit -m "Your descriptive commit message"
git commit -am "Message"  # Add and commit modified tracked files in one step
```
`git commit` creates a snapshot of your staged changes. The `-m` flag lets you add a commit message directly. The `-a` flag automatically stages all modified tracked files (but not new files).

Writing good commit messages:
- Keep the first line under 50 characters
- Use the imperative mood ("Add feature" not "Added feature")
- Explain what and why, not how

### Working with Remotes

```bash
# Add a remote repository
git remote add origin https://github.com/username/repository.git
```
This command connects your local repository to a remote repository. `origin` is the conventional name for your main remote repository.

```bash
# Push changes to remote
git push origin main
```
`git push` uploads your commits to the remote repository. The command specifies:
- Which remote to push to (`origin`)
- Which branch to push (`main`)

```bash
# Fetch updates from remote
git fetch origin
```
`git fetch` downloads changes from the remote but doesn't merge them into your working files. It's a safe way to see what others have done.

```bash
# Pull changes from remote
git pull origin main
```
`git pull` is essentially `git fetch` followed by `git merge`. It:
1. Downloads changes from the remote
2. Automatically merges them into your current branch

### Branch Management

```bash
# Create a new branch
git branch feature-name
```
Creates a new branch but doesn't switch to it. Think of branches as separate timelines of your project.

```bash
# Switch branches
git checkout feature-name
git checkout -b new-feature  # Create and switch in one command
```
`checkout` moves you between branches. The `-b` flag creates a new branch and switches to it - a common operation when starting new features.

```bash
# Merge branches
git merge feature-name
```
Merges changes from the specified branch into your current branch. Before merging:
1. Commit or stash any pending changes
2. Switch to the target branch (usually main)
3. Then run the merge command

### Viewing History

```bash
# View commit history
git log
git log --oneline  # Compact view
git log --graph    # Show branch structure
```
`git log` shows the commit history. Useful flags include:
- `--oneline`: One line per commit
- `--graph`: Shows branch structure
- `--author`: Filter by author
- `--since`: Show commits since a date

### Advanced Operations

```bash
# Temporarily store changes
git stash
git stash pop  # Restore stashed changes
```
`git stash` temporarily stores modified tracked files, letting you switch tasks quickly. `pop` restores the most recently stashed changes.

```bash
# Undo last commit
git reset --soft HEAD~1  # Keep changes staged
git reset --hard HEAD~1  # Discard changes completely
```
`reset` moves your branch pointer to a different commit. Be careful with `--hard` as it permanently discards changes.

## Best Practices for Git Usage

1. **Commit Frequently**: Make small, focused commits that do one thing well
2. **Use Meaningful Branch Names**: Names should reflect the feature or fix being worked on
3. **Keep Main Branch Stable**: Never commit directly to main in team projects
4. **Pull Before Push**: Always pull latest changes before pushing to avoid conflicts
5. **Write Clear Commit Messages**: Future you will thank present you

## Additional Resources

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com)
- [Git vs Github](https://www.youtube.com/watch?v=wpISo9TNjfU)

Remember that mastering Git takes practice. Don't be afraid to experiment in a test repository, and keep this guide handy as you learn.