# echo-service
DEVELOPER SERVER

This server can contains more scenarios.

Every scenario can contains connections, queries, documents and custom elements.


#### install
```sh
$ npm install
```
*see notes at the end of this document*

# start

- start server + client:

    ```sh
    $ npm start
    ```

- start only server:

    ```sh
    $ npm run server
    ```

#start as service (windows)

- install service and start it (run once)

    ```sh
    $ node winsrv [--name=XXXXXXX] [--port=XXXX] [--store=XXXXXXXXXX]
    ```
    options (optionals):
    ```sh
        --name,-n           service name (default="Echo Service")
        --port,-p           define service port
        --store,-s          define store path
        --uninstall,-u      uninstall service
    ```

- uninstall service

    ```sh
    $ node winsrv -u
    ```



# defaults

- *IP*
  you can set enviroment variable
    ```sh
    ECHO_IP = XXXX
    ```

- *PORT*
  default port is 9001, you can change it in file:
    ```sh
     echo-service.json
    ```
    or setting enviroment variable
    ```sh
    ECHO_PORT = XXXX
    ```

- *STORE*
  default location:
    ```sh
     {PROJECT-FOLDER}/server/store
    ```
    you can change it in:
    ```sh
     echo-service.json
    ```
    using property **storePath**
    or setting enviroment variable
    ```sh
    ECHO_STORE = XXXX
    ```

# providers
available providers:
- SQL server
- MySQL
- Oracle

# API

API are explained in json format running server and typing in browser:
```sh
http://localhost:9001/api
```
or in client:
```sh
http://localhost:9001/#/help/api
```


# notes:
in case of oracledb node library compilation problems see [this](https://github.com/leolmi/echo-service.public/tree/master/assets/oracledb/README.md)
