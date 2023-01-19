#### The Complete Front-End Web Development Crash Course / Module 1: Basic Concepts

# <img src="../imgs/terminal-icon.jpeg" width="30"/> Terminal Shell
>Before we begin writing any code, it's important to familiarize ourselves with the terminal shell. As a developer, you will be using this tool constantly in your daily work.
>Let's dive in and explore some of the most useful commands for getting started with the terminal shell.
>
>A terminal shell is a command-line interface that enables users to interact with their computer's operating system using text-based commands. This powerful tool can be used for a wide range of tasks, from managing files and directories, to installing and managing software packages, and more.
>> To run a command you will type the command in the terminal and press Enter 

- ### Create a New Folder
    To create a new folder, use the `mkdir` command followed by the name of the folder you want to create. For example, to create a folder called `newfolder`, you would run:
    ```shell
    mkdir newfolder
    ```

- ### Navigate
  To navigate to a different folder, use the `cd` command followed by the path to the folder you want to go to. For example, to navigate to the `newfolder` folder, you would tun:
    ```shell
    cd newfolder
    ```
  To navigate out of a folder use `cd` command followed by `../`
    ```shell
    cd ../
    ```
  You can also navigate out of 2 folders by adding another `../` like  `../../`:
    ```shell
    cd ../../
    ```
  
- ### Create a New File
    To create a new file, use the touch command followed by the name of the file you want to create. For example, to create a file called "newfile.txt," you would type:
    ```shell
    touch newfile.txt
    ```

- ### Open & Edit File
  To Open the file use the `vi` or `vim` command followed by the name of the file you want to open:
  ```shell
  vi newfile.txt
    ```
  - Press the `i` key to enter insert mode.
  - Make your desired changes. Note that you can use the arrow keys to move around in the file.
  - Press the escape `ESC` key to exit insert mode.
  - Type `:w` and press the enter key to save your changes.
  - Type `:q` and press the enter key to close the file. 
  - Optionally, type `:wq` to save and close the file. 
  - Abort changes by using `:q!` instead of `:w` or `:wq`.


- ### See a List of the Files and Folders in a Directory
  To see a list of the files and folders in your current directory, use the `ls` command. run: 
   ```shell
  ls
    ``` 
  You can also use the `ls` command with a specific directory path to see the contents of that directory. For example, to see the contents of the `Documents` folder in your home directory, you would run:
  ```shell
  ls Documents
  ```

- ### Copy a File or Folder
    To copy a file or folder, use the `cp` command followed by the source file or folder and the destination. For example, to copy a file called `file.txt` from the current directory to the `Documents` folder, you would run:
    ```shell
    cp file.txt Documents
    ```

- ### Move a File or Folder
    To move a file or folder, use the `mv` command followed by the source file or folder and the destination. For example, to move a file called `file.txt` from the current directory to the `Documents` folder, you would run:
    ```shell
    mv file.txt Documents
    ```

- ### Delete a File
    To delete a file, use the `rm` command followed by the name of the file you want to delete. For example, to delete a file called `file.txt`, you would run:
    ```shell
    rm file.txt
    ```

- ### Delete a Folder and All Its Contents
    To delete a folder and all its contents, use the `rm -r` command followed by the name of the folder you want to delete. For example, to delete a folder called `folder` and all its contents, you would run:
    ```shell
    rm -r folder
    ```