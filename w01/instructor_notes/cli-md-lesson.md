# CLI and Markdown
*Mon. June 13, 2016 • afternoon lesson*

### Lesson Objectives:
- Differentiate between a GRAPHICAL USER INTERFACE (GUI) and COMMAND LINE INTERFACE (CLI)
- Explain the 3 reasons the CLI is better for developers than the GUI
- Make changes from the CLI
- Name the parts of the command line prompt
- Describe ABSOLUTE vs. RELATIVE path
- Define WORKING DIRECTORY


### Context: why do I need to know about the COMMAND LINE & GIT
All of you learned about tools like Command Line & Git during the prework, but we're going to take the afternoon to review them because these concepts are crucial to developers.

These are skills we absolutely expect you to master during the class. You will use them to turn in homework on a daily basis and you will use them daily at your jobs.

### How will the learning happen
- I'll review a few command line topics with you guys & demo some examples. (laptops closed)
- You guys will do a short exercise on your own
- Then we'll either review again or move on to the next topic.

---

### Intro - What is the Command line?
One of the most basic tools in every day developer life is the COMMAND LINE. The CLI is the way developers interface with their computers. What do I mean by that? I mean it's the way you make your computer do simple tasks, such as creating or deleting a file, and more complex tasks, like compiling code. The concept is simple: you type a command into the COMMAND LINE and the computer executes it.

#### GUI
- Open a Finder window and move around the file system, create folder + file on desktop
- This Finder window is what is meant by GUI! It's as simple as that.
- But why is it called a GUI, why does it have a name at all?!
- Before 1960s the GUI didn't exist, there was only the Terminal. The GUI is easier for non-techies to use.

#### File structure
- *Draw on the board: structure of the computer (up to that specific file)*
- Root (/) ---> Users, Applications, etc. ---> LizaRamo (home, ~) ---> Desktop, Downloads, Music, Pics, etc.
- Important shortcuts: root (/) & home (~)
- CD around

#### GUI vs. COMMAND LINE
- Remember when we created a new folder using the GUI? Now let's do that using the CLI
- Use Spotlight to open TERMINAL
- Navigate to the same file as in GUI side by side
- We can use the CLI to get to the same file.

But why should we learn to use the COMMAND LINE when we could just use the GUI?
1. The CLI is faster
1. It's the professional way to do things as a developer
1. There are some things you can only do from the CLI

#### Parts of the COMMAND LINE prompt:
```bash
lizaramo ~/Desktop/lessons on master[?]
$
```
- Name of your computer | Working directory | branch (if repo) | $Command
- working directory?

#### Working directory
- Simplest definition: where you are in the file system
- Memorize this: `pwd` ---> this command tells you where you are within the file system
- `~/Desktop/kitten-pics`

#### Navigating: relative and absolute paths
- Let's go back to the file structure drawing
- Let's say you're in the `desktop` in the CLI. How do we get from here to the directory: `puppy-pics`
- We need to find out that directory's `path`. Is that directory on the desktop, or buried within 3 other directories?
- `./fun/animals/puppies/puppy-pics`
- But what if we don't know where you are? We can use the absolute path using one of the shortcuts `/` or `~`.
- From the root directory, our path is: `cd /Users/LizaRamo/Desktop/fun/animals/puppies/puppy-pics`
- From our home directory, our path is: `cd ~/Desktop/fun/animals/puppies/puppy-pics`

#### !CFU: What do you think the benefit of navigating from the root would be?
- No confusion over how to navigate to that specific location.

#### What's in a name
- *Let's pause for a moment to talk about terms*
- Don't get confused by the terminology: CLI, command line, Terminal, shell, console, etc.
- For now, use all of these interchangeably  
- **CLI:** Command Line Interface
- **Terminal:** name of Apple's CLI app


#### I do: common commands
- `pwd`
- `ls`
- `cd`
- `.`
- `..`
- `mkdir`
- `touch`
- `mv` `mv [old file path] [destination file path]`
- `cp` `cp -r [source] [destination]` ---> difference between mv & cp
- `rm`


#### You do: exercise on your own (10 mins)
*Don't touch your mouse, don't use the GUI*
- Create a directory on your desktop called 'My Folder'
- Navigate into that directory
- Display your current location
- Create a file in your directory called `my-file.html`
- Create a `markdown` file called `my-second-file.md`
- List all the files in your directory
- Move `my-file.html` to your desktop
- Copy `my-second-file.md` to the desktop
- Delete `my-file.html`


---


#### Further reading:
- [Learn Command Line the Hard Way](http://cli.learncodethehardway.org/book/)
- [Command Line Tutorial](http://www.davidbaumgold.com/tutorials/command-line/)
