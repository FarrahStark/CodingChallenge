# CodingChallenge
I did the challenge twice in order to demonstrate my skills in C#/.NET and on frontend web using Angular.
The two sub folders in the repository are completely separate and have nothing to do with each other. They
are only in the same repository for the sake of convenience.

## Getting the C# project up an running
You will need visual studio 2017 to build the C# project.
If you want to also run unit tests you will need to install a test runner extension installed that is
capable of running xunit tests such as jetbrains resharper/dotcover or the xunit console runner.

There is no executable. Just a class library with unit tests validating it.

## Getting the Angular project up and running
You will first need to make sure you have the latest version of nodeJS installed.
Open a terminal, navigate to the Angular/coding-challenge folder and run the following commands.
for the angular cli you will need to run with elevated priveleges (sudo or administrator):
* npm install -g @angular/cli
* open a new terminal so you can access the newly installed angular cli (ng)
* navigate back to the Angular/coding-challenge folder
* npm install
* ng serve
Now navigate to http://localhost:4200 in a web browser to view the Angular app

ng test will run all of the end to end and unit tests