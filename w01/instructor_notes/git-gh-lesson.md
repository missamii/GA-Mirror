# Git and GitHub intro
*Mon. June 13, 2016 • afternoon lesson*

### Lesson Objectives:
- Describe the concept of VERSION CONTROL
- Explain how GIT works
- Explain basic git commands like init, add, commit, push, pull and clone
- Explain what GITHUB is
- Distinguish between local and remote repositories
- Fork and clone remote repositories
- Explain how to submit homework

---

### Intro - Version control, Git, GitHub

#### What is version control?

**Version control:** software used to record changes made to files. This creates a history of the file content. Each saved change is called a *version* of the code.

Let's think about Git & GitHub on a conceptual level.

*Publishing company example.*

The same thing happens when coding a project.

How do we manage this version control nightmare that doesn't involve saving multiple versions of something? ---> **Git!**


#### What is Git?

First things first - Git is not GitHub. This is a common mistake that people make.

[Git](https://git-scm.com/) is a version control system that you run from the command line. It tracks changes that you make to your code.

Programmers use Git so that they can keep the history of all the changes to their code. This means that they can rollback changes (or switch to older versions) as far back in time as they started using Git on their project.

A **repository**, or **repo** for short, is a bunch of code that has been tracked by git. Typically there is one repo for each project.

How git works: (the Prework supplies a good explanation)
- Git tracks changes in **repositories**
- Instead of saving a copy of each file, git keeps a **record of the changes** that have been made to each file
- Because Git stores changes, rather than whole files, looking at what's changed from one iteration to the next is very easy.

Git was created by [Linus Torvalds](https://en.wikipedia.org/wiki/Linus_Torvalds), the principal developer of Linux.


#### What is GitHub?

[GitHub](https://github.com/) is:
- A website where you store your code
- A hosting service for Git repositories
- A web interface to explore Git repositories
- A social network of programmers
- We all have individual accounts and put our codebases on our GitHub account
- You can follow users and star your favorite projects
- Developers can access codebases on other public accounts


#### Can you use git without GitHub?

Think about this: **Git** is how you track your code as you make changes. **GitHub** is a website where you store your code.

So yes, you can certainly use Git without GitHub.


#### So many commands?!

There are also a lot of commands you can use in git. You can take a look at a list of the available commands by running:

```bash
$ git help -a
```

Even though there are lots of commands, on the course we will really only need about 10 or so.

Common git commands
- `init, status, add, commit, push, log`
- `diff, remote, fork, clone`


---

### So how does it work?
- First, we *initialize* a git repository in the top-level (root) folder of our project. This tells git to start tracking our changes.
- Now, as we write code in files that are in this folder, git will keep track of our changes.
- When we want to save our code, we *add*, *commit*, and *push* the code to GitHub.com.

*Draw pic of folder + repo*

### Adding, Committing, Pushing
- Let's think about a play at a theater. Imagine you have 10 actors who are currently in the dressing room.
- **Add:** You add them to a list of actors who are about to go on stage.
- **Commit:** They go stand backstage behind the curtain.
- **Push:** The curtain opens, the whole audience can see them.

It's similar with coding. When you make changes to a file, you can press `save`, but this doesn't add them to git. You must manually **add** your changes to git, then **commit** them with a message, such as "worked on the navbar", then **push** your changes to GitHub.com.

Let's see how it works.

---


### Let's use Git - exercise

First, create a directory on your Desktop:

```bash
$ cd ~/Desktop
$ mkdir hello-world
```

To enable git to monitor this directory, create a **git repo** by navigating to the root folder of your project and running this command:

```bash
$ git init
```

Git will reply:

```bash
Initialized empty Git repository in <path/location>
```


#### The .git folder

If we look at the contents of this empty folder using:

```bash
ls -A
```

We should see that there is now a hidden folder called `.git`. Files/folders that begin with a `.` are hidden. This is where all of the information about your repository is stored. There is no need for you to make any changes to this folder.


#### Add a file

Let's create a new file:

```bash
$ touch hello.md
```

A **markdown** file is written in plain text. Make some changes to `hello.md`.

If we run `git status` we should get:

```bash
On branch master

Initial commit

Untracked files:
  (use "git add <file>..." to include in what will be committed)

  hello.md

nothing added to commit but untracked files present (use "git add" to track)
```

This means that there is a new **untracked** file. Next, tell Git to take a snapshot of the contents of all files under the current directory (note the .)

```bash
$ git add .
```

This 'snapshot' is now stored in a temporary staging area.

#### Commit

To permanently store the contents of the index in the repository, (commit these changes to the HEAD), you need to run:

```bash
$ git commit -m "Please remember this file at this time"
```

You should now get:

```bash
[master (root-commit) b4faebd] Please remember this file at this time
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 a.txt
```

#### Checking the log

If we want to view the commit history, we can run:

```bash
git log
```

You should see something like:

```bash
commit d0b82b59bb366f3aa8853bb8748b59b49374fce9
Author: Kyle Smith <KoolKyle@hotmail.com>
Date:   Mon Jun 6 18:00:37 2016 -0400
    "first commit"
```

To exit this view, you need to press:

```bash
q
```

#### Make changes to the file

Now let's open a.txt in Atom/Sublime:

```bash
$ atom hello.md
```

Inside the file, write something.

Running `git status` again will show you that the `.md` has been modified.


#### Revert to a previous commit

Let's now make a second commit.

```bash
$ git add .
$ git commit -m "Second commit"
```

Checking `git log` will show you 2 commits with different ids in reverse order:

```bash
commit d0b82b59bb366f3aa8853bb8748b59b49374fce9
Author: Kyle Smith <KoolKyle@hotmail.com>
Date:   Mon Jun 6 18:00:37 2016 -0400
    "second commit"

commit d0b82b59bb366f3aa8853bb8748b59b49374fce9
Author: Kyle Smith <KoolKyle@hotmail.com>
Date:   Mon Jun 4 18:00:37 2016 -0400
    "first commit"

```

We can revert the file back to the first commit using its specific commit id with:

```bash
$ git reset --soft d0b82b59bb366f3aa8853bb8748b59b49374fce9
```

This will do a soft reset, where the changes in the file we made are still there - the changes are staged but not committed anymore.

If we want to revert the file back and disregard any changes (dangerous!), we can use:

```bash
$ git reset --hard d0b82b59bb366f3aa8853bb8748b59b49374fce9
```


#### Making and cloning repositories

Let's do this together:

1. Go to your GitHub account
2. In the top left, hit the + button and select `New repository`
![](https://help.github.com/assets/images/help/repository/repo-create.png)
3. Name your repository `hello-world`
![](https://help.github.com/assets/images/help/repository/repo-create-name.png)
4. Choose **Initialize this repository with a README** (So that we can `git pull`)
4. Click the big green Create Repository button

We now need to connect our local Git repo with our remote repository on GitHub. We have to add a "remote" repository, an address where we can send our local files to be stored.

```bash
git remote add origin git@github.com:github-name/hello-world.git
```

#### Pushing to GitHub

In order to send files from our local machine to our remote repository on GitHub, we need to use the command `git push`. However, you also need to add the name of the remote, in this case we called it `origin` and the name of the branch, in this case `master`.

```bash
git push origin master
```

This should fail due to new files on the remote repo.

#### Pulling from GitHub

As we added the README.md in our repo, we need to first `pull` that file to our local repository to check that we haven't got a 'conflict'.

```bash
git pull origin master
```

Once we have done this, you should see the README file on your computer. Now you can push your changes:

```bash
git push origin master
```

Refresh your GitHub webpage, and the files should be there.


#### Cloning your first repository

Now that everyone has their first repository on GitHub, let's clone our first repository!

Cloning allows you to get a local copy of a remote repository.

Navigate back to your Desktop and **delete your hello-world repository**:

```bash
cd ~/Desktop
rm -rf hello-world
```

Now ask the person sitting next to you for their github name and navigate to their repository on github:

```bash
https://www.github.com/<github-username>/hello-world
```

On the right hand side you will see:

![clone](https://cloud.githubusercontent.com/assets/40461/8228838/dfdc57a0-15a9-11e5-90a7-6c4fa8641ae6.jpg)

Ensure that you have SSH checked and copy this url.

#### Clone their repo!

To retrieve the contents of their repo, all you need to do is:

```bash
$ git clone git@github.com:alexpchin/hello-world.git
```

Git should reply:

```bash
Cloning into 'hello-world'...
remote: Counting objects: 3, done.
remote: Total 3 (delta 0), reused 3 (delta 0), pack-reused 0
Receiving objects: 100% (3/3), done.
Checking connectivity... done.
```

You now have cloned your first repository!


## What is forking? Intro

The `fork` & `pull` model lets anyone fork an existing repository and push changes to their personal fork without requiring access be granted to the source repository.

Most commonly, forks are used to either propose changes to someone else's project or to use someone else's project as a starting point for your own idea.

#### Cloning vs Forking

When you fork a repository, you make a new **remote** repository that is exactly the same as the original, except you are the owner. You can then `clone` your new fork and `push` and `pull` to it without needing any special permissions.

When you clone a repository, unless you have been added as a contributor, you will not be able to push your changes to the original remote repository.

#### Pull requests

When you want to propose a change to a repository (the original project) that you have forked, you can issue a pull request. This basically is you saying:

_"I've made some changes to your repository, if you want to include them in your original one then you can pull them from my fork!"_


## How to create a pull request on GitHub

Before you can open a pull request, you must create a branch in your local repository, commit to it, and push the branch to a repository or fork on GitHub.

1. Visit the repository you pushed to
2. Click the "Compare, review, create a pull request" button in the repository ![pr](https://cloud.githubusercontent.com/assets/40461/8229344/d344aa8e-15ad-11e5-8578-08893bcee335.jpg)

3. You'll land right onto the compare page - you can click Edit at the top to pick a new branch to merge in, using the Head Branch dropdown.
4. Select the target branch your branch should be merged to, using the Base Branch dropdown
5. Review your proposed change
6. Click "Click to create a pull request" for this comparison
7. Enter a title and description for your pull request
8. Click 'Send pull request'

## Assess - Independent Practice

Use the internet and what you've learned today to answer the following questions with a partner:

* How do I send changes to the staging area?
* How do I check what is going to be committed?
* How do I send the commits to GitHub?
* How do I go back to the previous commit?
* How do I check the configuration on a specific machine?
* How does github know that I am allowed to push to a specific repo?

## Conclusion

As a developer, you'll have to use Git pretty much everyday, the learning curve is steep and all the principles of version control can  be a bit blurry sometimes, hence why we ask students to push their homework everyday and to commit regularly during project time.

Don't be frustrated by all the new commands because we will definitely have the time to practice during this course.

- Explain the difference between forking and cloning.
- Describe the steps to initialize a Git repository and link your local repository to a GitHub remote location.

---

### Homework submission

- [Cheatsheet]( https://github.com/ga-students/wdi-nyc-robots/blob/master/Cheatsheets_and_Resources/Homework_Submission_Unit1.md)



---

### Other productivity tools

#### Keyboard shortcuts
- Don't touch your mouse!
- Spotlight
- [Spectacle](https://www.spectacleapp.com/)
- Trackpad settings
- [Apple keyboard shortcut cheat sheet](https://support.apple.com/en-us/HT201236) <-- you should know at least the first table by heart

#### Atom
- Make yourself an Atom keyboard shortcuts cheat sheet

#### Markdown
- What is `Markdown`?
- Atom Package: `MD Preview Plus`
- [MD cheatsheet](https://github.com/ga-students/melville/blob/master/guides/markdown_cheatsheet.md)
