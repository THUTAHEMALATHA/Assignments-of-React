A. Package Manageres?
A package manager is a tool that helps developers install, update, remove, and manage external libraries(packages) used in a project.
  Instead of manually downloading code, The package manager automates this process.
  Example:
  ```bash
 npm install express

 why do we need package managers in backend development?
 Backend Projects depend on libraries, Package managers:
 ->Install libraries easily
 -> Handle versions automatically
 ->save time
 -> Make projects work the same on all machines.
 problems if package managers are not used.
 ->Manual downloading of libraries
 ->version conflicts.
 ->Missing dependencies.
 ->Difficult teamwork and depolyment.

B. NPM (Node Package Managers) 
NPM is a default packet mangers for Node.js.
It is used to install and manage node.js packages
Why is NPM important?
->NPM install required libraries, Manages dependenices, Runs project Scripts, Keep projects organised.
How NPM manages dependencies.
-> install packages into node_modules
->store dependency info in Package.json
->Locks exact versions in Package-lock.json

C. Back-end Project Intializaton
command to intialize a node.js project  - npm init
Difference between npm init and npm init -y
npm init  :Asks questions and creates Package.json
npm init -y :Skip questions and creates package.json with default values.

D. Files and Folders After intialisation
Package.json: -Main Project configuration file
              -contains project info and dependencies
              -Must be pushed to Github
Node modules: -Contains installed Packages
              -Very large
              -can be recreated using npm install
              -Must not be pushed to Github
Pacakge-lock.json: 
-stores exact versions of dependencies.
-Ensure same setup on all machines
-Must be pushed to Github

GitHub Rules
Do not push
=>node_modules/
=>.env
Must push
=>package.json
=>package-lock.json
=>Source code files


