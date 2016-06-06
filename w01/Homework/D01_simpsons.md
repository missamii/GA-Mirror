# The Simpsons Bash

![Simpsons Intro](https://github.com/ga-students/blue_steel/raw/master/u1_introduction/d01_bash/student/images/simpsons.gif)

## Learning Objectives

Today we want you to be comfortable traversing your way through a file system using the terminal.
![Terminal image](https://camo.githubusercontent.com/a5b3ba816df436e40d059312f25d388836d8890c/687474703a2f2f706978616261792e636f6d2f7374617469632f75706c6f6164732f70686f746f2f323031332f30372f31332f31332f34312f626173682d3136313338325f3634302e706e67)
## Setup
Work in the `w01/classwork/` directory. Create a new directory called `simpsons` where you will do all of the following work.

## Completion
Finish all of the parts! In the future we may set reach goals and add bonuses onto the homework, however we decided to go with an easier assignment to help get you acclimated to the course. The main purpose of this assignment is to get you feeling comfortable typing and working inside the terminal. **Instructions on how to submit your homework can be found in Cheatsheets_and_Resources/Homework_Submission_Unit1.md**

## Part 1 - Simpsons Activity
The more practice you have working in the terminal manipulating files and directories the better!

#### Creating the scene
The Simpsons are your average American family living in Springfield. Let's create the family's hometown, create a directory called `springfield` and `cd` into it. Once you've navigated into the directory, let's create the family members. Create the following files in your `springfield` folder:
<br>
-`Homer.txt`<br>
-`Marge.txt`<br>
-`Bart.txt`<br>
-`Lisa.txt`<br>
-`Maggie.txt`<br>

#### Remaking the Intro
1. When the show's intro starts the camera pans through the clouds and over the entire town. The view then focuses through the window of the elementary school where we find Bart in detention writing out whatever horrible deed he accomplished that day. Create a directory called `school` and move `Bart.txt` inside of it.<br><br>
2. Next the camera pans to the nuclear power plant where we find Homer mishandling what appears to be a radioactive core sample. Create a directory `power-plant` and move `Homer.txt` into it. Create a `core_sample.txt` file. And then delete it.<br><br>
3. Homer forgot his employee ID, so he needs to get a temporary pass. Let's use the ECHO command to initialize some text in `Homer.txt` like such - ` echo 'Work Pass: Homer J. Simpson' >> Homer.txt `<br><br>
4. Then we find Marge and Maggie together in the super market. Create a `market` directory and move Marge and Maggie inside it.<br><br>
5. The camera then pans to the band room in the school where we find Lisa crushing a sax solo. Traverse to the `school` directory, create a `band-room` directory, and move `Lisa.txt` into the `band-room` directory.<br><br>
6. We then find the family making their way home through the streets of Springfield; Homer in his pink car, Marge and Maggie in the red car, and Bart on his skateboard. Traverse back to the `springfield` directory and create the directories for the each mode of transportation, and then place each respective party in that directory.<br><br>
7. The family finally makes their way back home and the hilarious couch gag ensues. Create a `home` directory inside of `springfield` and then create a `couch` directory within `home`. Then Move ALL of the family members to `couch`. BONUS - can you move the family members without going into any of the springfield sub-directories? (HINT - use relative paths! If in the `springfield` directory, what does ` ls ` return? How about `ls power-plant `?)

## Part 2: Command Line Cheatsheet

You're going to be using the CLI (Command-Line Interface) throughout the course and your lives as developers. Let's create a cheatsheet to refer back to with common Bash commands (Bash is the scripting language you're using in the Terminal window).

In your `classwork` directory create a new file for your cheatsheet. Name it whatever you want, as long as the extension is .md (for "markdown" format). Markdown is a great way to quickly create nicely formatted text documents -- it's what this file is written in. You'll find a markdown cheatsheet in your `Cheatsheets_and_Resources` directory. Using Markdown, create a reference for yourself with the terminal commands to

* create a file
* create a directory
* move a file
* move a directory
* rename a file or directory
* delete a file
* delete a directory
* read the help file for a given command
* change your current working directory
* display the path of the current working directory
* also include a reminder on the differences between an absolute and a relative path.

#### Submitting your work
When the exercise has been completed you may have felt that Part 1 was quite useless because now you have a bunch of empty directories and some arbitrary `.txt` files that don't even contain any text! This is all about getting reps and feeling comfortable in the environment. Keep practicing - this is now your life!

Let's use ` tree ` to look at your file structure. While in the homework directory, use the ` tree ` command (now on your computer thanks to installfest!) and your terminal should show the file structure you created in steps 1-7. Take a snapshot! If you don't have any preferred software, you can use ` Command-Shift-4 ` to bring up a tool which will save a snapshot of any selection. Save this image to your homework folder. Make sure a copy of your command line cheatsheet from Part 2 is in the folder as well.

You should have been using ` git add -A `, ` git commit -m "MESSAGE" `, and ` git push origin master ` after each step. Do it one more time with the tree image in the homework folder! Now go to `Cheatsheets_and_Resources/Homework_Submission_Unit1.md` and follow the instructions for submitting the homework. From Unit 2 on, there will be a slightly more involved process for submitting homework (which you can look up in the wiki), but this is sufficient for tonight.
