#### [The Complete Front-End Web Development Crash Course](../README.md) / [Module 1: Basic Concepts](./README.md)

# <img src="../imgs/terminal-icon.jpeg" width="30"/> Terminal Shell
>Before we begin writing code, it's important to familiarize with the terminal shell.
>As a developer, you will be using this tool constantly in your daily work.
>Let's explore some of the most useful commands of the terminal shell.
>
>A terminal shell is a command-line interface that enables users to interact with their computer's operating system using text-based commands. This powerful tool can be used for a wide range of tasks, from managing files and directories, to installing and managing software packages, and more.
>> To run a command you will type the command in the terminal and press Enter 

> If you are a Windows user, you can use the `Command Prompt` instead of the terminal shell.
- ### Open the Terminal
  > To open the terminal, press `Command + space` and type `Terminal` in the search bar.
  
  > For Windows users, press `Windows + R` and type `cmd` or in the search bar.

- ### See a List of the Files and Folders in a Directory
  To see a list of the files and folders in your current directory, use the `ls` command. run:
   ```shell
  ls
    ``` 
  >You can also use the `ls` command with a specific directory path to see the contents of that directory. For example, to see the contents of the `Documents` folder in your home directory, you would run:
  >`ls Documents`.
   
  >For Windows users, use the `dir` command instead of `ls`.

- ### Navigate
  To navigate to a different folder, use the `cd` command followed by the path to the folder you want to go to. For example, to navigate to the `Desktop` folder, you would tun:
    ```shell
    cd Desktop
    ```
  To navigate out of a folder use `cd` command followed by `../`:
    ```shell
    cd ../
    ```
  > You can also navigate out of 2 or more folders by adding another `../` to the destination, for example  `cd ../../`
  
- ### Create a New Folder
    To create a new folder, use the `mkdir` command followed by the name of the folder you want to create. For example, to create a folder called `newfolder`, you would run:
    ```shell
    mkdir newFolder
    ```
  
- ### Create a New File
    To create a new file, use the touch command followed by the name of the file you want to create. For example, to create a file called `newfile.txt`, you would type:
    ```shell
    touch newFile.txt
    ```
   > For Windows users, use the `type nul >` command instead of `touch`

- ### Open & Edit File
  To Open the file use the `vi` or `vim` command followed by the name of the file you want to open:
  ```shell
  vi newFile.txt
    ```
  - Press the `i` key to enter insert mode.
  - Make your desired changes. Note that you can use the arrow keys to move around in the file.
  - Press the escape `ESC` key to exit insert mode.
  - Type `:w` and press the enter key to save your changes.
  - Type `:q` and press the enter key to close the file. 
  - Optionally, type `:wq` to save and close the file. 
  - Abort changes by using `:q!` instead of `:w` or `:wq`.
  > For windows users, you can use the `notepad` command to open and edit files.
  > For example, to open and edit a file called `newFile.txt`, you would run:
  > `notepad newFile.txt`

- ### Move a File or Folder
  To move a file or folder, use the `mv` command followed by the source file or folder and the destination. For example, to move a file called `newFile.txt` from the current directory to the `Documents` folder, you would run:
    ```shell
    mv newFile.txt newFolder
    ```
  > For Windows users, use the `move` command instead of `mv`.

- ### Copy a File or Folder
    To copy a file or folder, use the `cp` command followed by the source file or folder and the destination. For example, to copy a file called `newFile.txt` from the current directory to the `Documents` folder, you would run:
    ```shell
    cp newfile.txt Documents
    ```
    > For Windows users, use the `copy` command instead of `cp` for copying files and `xcopy` for folders.
  
- ### Delete a File
    To delete a file, use the `rm` command followed by the name of the file you want to delete. For example, to delete a file called `newFile.txt`, you would run:
    ```shell
    rm newFile.txt
    ```
    > For Windows users, use the `del` command instead of `rm`.

- ### Delete a Folder and All Its Contents
    To delete a folder and all its contents, use the `rm -r` command followed by the name of the folder you want to delete. For example, to delete a folder called `folder` and all its contents, you would run:
    ```shell
    rm -r newFolder
    ```
  > Note: The `rm` command is very dangerous. If you accidentally delete a file or folder, it will be permanently deleted and cannot be recovered. Be very careful when using this command.
   
  > For Windows users, use the `rmdir` command instead of `rm -r`.

### Conclusion   
> You have now learned the basics commands for working with the terminal shell.
> In the next section, we will test your knowledge of these commands by completing a quiz.
> > You can learn more about the terminal shell [here](https://www.freecodecamp.org/news/command-line-for-beginners/).

## NEXT
> Next, we will test your knowledge of the `terminal shell` by completing a quiz. 

[<img src="../imgs/terminal-icon.jpeg" width="15"/> Terminal Shell Quiz](./terminal_quiz.md)