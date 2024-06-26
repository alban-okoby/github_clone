# Github Clone - The MVP

#### Functionalities of this github_clone:
* Authentification
* Register
* Confirm Registration by Email
* Create Repository
* List of repositories by username
* Search repository
* ...

## Table of Content
* [Environment](#environment)
* [Technologies](#technologies)
* [Installation](#installation)
* [Demo](#demo)
* [Examples of use](#examples-of-use)
* [Bugs](#bugs)
* [Authors](#authors)
* [License](#license)

## Environment
This project can run anywhere

## Technologies
* Frontend: [ HTML, CSS, JavaScript & TypeScript, Angular 15+]
* Backend: [Java 11 or higher | Spring Boot 2+]
* Database: [MySQL 8+](https://dev.mysql.com/downloads/installer/)
* Version Control: [Install Git](https://git-scm.com/book/fr/v2/D%C3%A9marrage-rapide-Installation-de-Git)
* Maven: [Install Maven](https://maven.apache.org/install.html)
* Npm: [Install npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Installation
* Clone this repository: `git clone https://github.com/alban-okoby/github_clone.git`
  #### Frontend project
* Access frontend project directory: `cd github_clone/frontend`
* Install dependencies `npm i`
* Start project `npm start` or `ng serve` if you have angular on your device
* Go to `localhost:4200` by default on your browser.
  #### Backend project
  * Access backend project directory: `cd github_clone/backend/github_clone_api`
  * Install dependancies : `mvn install package` or `mvn clean install`
  * Run api with `java -jar target/github-clone-1.1.0.jar`

## Examples of use
By default the api will automaticaly create Credentials to login:
  - "email": `admin@github-clone.com`,
  - "password": `admin@1234`
## Demo
#### Home Page (Guest)
 <img src="https://github.com/alban-okoby/github_clone/blob/main/assets/images/demo/guest_page.png" />
 
#### Registration Page
 <img src="https://github.com/alban-okoby/github_clone/blob/main/assets/images/demo/signup_page.png" />
 
#### Email confirmation to activate ✅ account 
 <img src="https://github.com/alban-okoby/github_clone/blob/main/assets/images/demo/mail.PNG" />
 
#### Login
  <img src="https://github.com/alban-okoby/github_clone/blob/main/assets/images/demo/login_page.png" />
  
#### Connected User Page
  <img src="https://github.com/alban-okoby/github_clone/blob/main/assets/images/demo/user_connected_page.PNG" />
  
#### Repositories list
<img src="https://github.com/alban-okoby/github_clone/blob/main/assets/images/demo/list_repository.png" />

#### New repository 
<img src="https://github.com/alban-okoby/github_clone/blob/main/assets/images/demo/new_repository.png" />

## Bugs
No known bugs at this time. 

## Authors
Alban Okoby (cerveauplus) - [Github](https://github.com/alban-okoby)  | [Linkedln](https://linkedin.com/in/alban-okoby-software-developer) | [Twitter](https://twitter.com/AlbanOkoby)

## License
Public Domain. No copy write protection. 
