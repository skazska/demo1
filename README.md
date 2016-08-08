# simple express.js with mongo example

* allows POST datta with id
* allows GET data by id

## deployment

### infrastructure
node.js should be installed 

*refer to* https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions

    curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
    sudo apt-get install -y nodejs
    
check with `node -v`

Depending on linux distro `npm` may need to be installed separately.

also mongodb sould be installed

*refer to* https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

    sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
    
Ubuntu 12.04
    
    echo "deb http://repo.mongodb.org/apt/ubuntu precise/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list

Ubuntu 14.04
    
    echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list


then 
    
    sudo apt-get update
    sudo apt-get install -y mongodb-org
    sudo service mongod start
    
### the app

Just unpack archive or:

#### deploy from github

install git:  `sudo apt-get install git`

clone from github:  `git clone https://github.com/skazska/demo1.git` this will create folder demo1  

get into: `cd demo1`  

install dependencies: `npm install`  

#### starting

in projects root folder `demo1` run `npm start` to start on port 3000 or `PORT=8080  npm start` for 8080.


