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

### usage

POST 1:

    curl -X POST -H "Content-Type: application/json" -H "Cache-Control: no-cache" -H "Postman-Token: 44444555-fa11-3571-4203-a14c4ca3b742" -d '{
        "requestId": 1,
        "something": "something"
    }' "http://localhost:8080/api"

result: 200 OK

    {
      "requestId": 1,
      "something": "something"
    }

GET 1:

    curl -X GET -H "Cache-Control: no-cache" -H "Postman-Token: 4c5b5ec3-00ad-4c20-4ddc-1f0d8e28dcba" "http://localhost:8080/api/1"
    
result: 200 OK

    {
      "requestId": 1,
      "something": "something"
    }
    

POST 2:

    curl -X POST -H "Content-Type: application/json" -H "Cache-Control: no-cache" -H "Postman-Token: 4dec1195-6a59-8567-2648-c908f6d0db89" -d '{
        "requestId": 2,
        "variable1": ["Ders", "masr"],
        "variable2": 2,
        "variable3": {"one": 1, "two": "2"}
    }' "http://localhost:8080/api"

result: 200 OK

    {
      "requestId": 2,
      "variable1": [
        "Ders",
        "masr"
      ],
      "variable2": 2,
      "variable3": {
        "one": 1,
        "two": "2"
      }
    }


GET 2:

    curl -X GET -H "Cache-Control: no-cache" -H "Postman-Token: b76dcc3b-6adb-0054-9d06-ab75c6cbb5e6" "http://localhost:8080/api/2"
    
result: 200 OK

    {
      "requestId": 2,
      "variable1": [
        "Ders",
        "masr"
      ],
      "variable2": 2,
      "variable3": {
        "one": 1,
        "two": "2"
      }
    }
    
    