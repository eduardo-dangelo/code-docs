[The Complete Front-End Web Development Crash Course](../README.md) / [Module 2: Getting Started](../module_02/README.md)

# 🛠 SSH

>SSH (Secure Shell) is a protocol used for connect and authenticate to remote servers and services.
With SSH keys, you can connect to GitHub without supplying your username and personal access token at each visit.
You need to have a [Github](https://github.com/) account at this point.

## Generate new SSH key
>Check the official documentation on how to generate a new ssh key [here](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).
1. Open a terminal and run:
    ```
    ssh-keygen -t ed25519 -C "your_email@example.com"
    ```
2. When prompt with this messsage, press enter to select default.
    ```
    > Enter a file in which to save the key (/Users/YOU/.ssh/id_ALGORITHM: [Press enter]
    ```
3. When prompt with type a secure passphrase, press enter for no password, check full documentation [here](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/working-with-ssh-key-passphrases).
    ```
    > Enter passphrase (empty for no passphrase): [Type a passphrase]
    > Enter same passphrase again: [Type passphrase again]
    ```

## Add your SSH key to the ssh-agent
1. Start the ssh-agent in the background.
    ```
    eval "$(ssh-agent -s)"
    ```
2. If you're using macOS Sierra 10.12.2 or later you will need to modify your ~/.ssh/config file to automatically load keys into the ssh-agent and store passphrases in your keychain.
    - First, check to see if your ~/.ssh/config file exists in the default location.
      ```
      $ open ~/.ssh/config
      > The file /Users/YOU/.ssh/config does not exist. 
      ```
    - If the file doesn't exist, create the file.
      ```angular2html
      $ touch ~/.ssh/config
      ```
    - Open your ~/.ssh/config file, then modify the file to contain the following lines. If your SSH key file has a different name or path than the example code, modify the filename or path to match your current setup.
      ```
      Host *
      AddKeysToAgent yes
      IdentityFile ~/.ssh/id_ed25519
      ```
3. Add your SSH private key to the ssh-agent and store your passphrase in the keychain. If you created your key with a different name, or if you are adding an existing key that has a different name, replace id_ed25519 in the command with the name of your private key file.
    ```
    $ ssh-add --apple-use-keychain ~/.ssh/id_ed25519
    ```

## Add a new SSH key to your github account
> Check how to add a new SSH key to your github account [here](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account).

## NEXT
[<img src="../imgs/react-icon.png" width="15"/> Intruduction to React](./introductionToReact.md)