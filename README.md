# Made following this [guide](https://github.com/iamshaunjp/Complete-React-Tutorial) and [video](https://www.youtube.com/watch?v=j942wKiXFu8&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=1)

## Enhanced with docker and docker compose

### Run both the webapp and the database

```console
docker compose up
```

or to run detached

```console
docker compose up -d
```

### Run both the webapp and the database in watch mode

```console
docker compose watch
```

### Stop both the webapp and the database

```console
docker compose down
```

### Running on local network

create a hosting.env file
copy `example.env` for reference
insert your ip/domain to REACT_APP_HOST
