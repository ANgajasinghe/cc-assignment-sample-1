install docker desktop first


* ` docker-compose up -d ` - Starts the docker containers
* ` docker-compose up -d --build ` - Starts and build the docker containers
* ` docker-compose down` - Stop the docker containers
* ` docker-compose up -d --scale backend=3 ` - Scale the number of backend containers
* ` docker-compose up -d --scale backend=1 ` - Scale out the number of backend containers
* ` docker-compose up -d --scale frontend=3 ` - Scale the number of backend containers
* ` docker-compose up -d --scale frontend=1 ` - Scale out the number of backend containers
