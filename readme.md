# Guide to running the mongodb database

## Previous Installations
    - Install mongodb globally on either windows or linux.
* It is recommended to install version 4.4
    - Install docker
* In the desktop version for windows, if you do not have a PRO version of windows, you must install WSL2 before installing docker.

## Once the previous installations are finished

    - Clone the rmed-mongodb repository.
    - Inside the repository you will find the file docker-compose.yml, in this file you will find the necessary configuration to install the docker container. 

* Commands to raise the docker container in Linux
    - sudo su
    * to have all the permissions
    - service mongod stop
    * the mongod service must be stopped before lifting the container.
    - service docker start
    * you must start the docker service
    - docker-compose up
    *Use this command inside the repository folder. This will start the container and start downloading the mongodb image with its respective credentials. 

* Raise the container on Windows
    - Start docker desktop
    - Search for "services" in the windows search engine, once inside look for the mongodb service and stop it.
    - Open a terminal in the repository folder and run the command: 
    docker-compose up -d

Once the container is up test it in MongoDB Compass with the following connection string:

mongodb://chandra:Prism2020@localhost:27017/?authSource=rmedbe&authMechanism=SCRAM-SHA256&readPreference=primary&appname=MongoDB%20Compass&ssl=false

