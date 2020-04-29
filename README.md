<img alt="GoStack" src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios.png" />

<h1 align="center">
<br>
Rocketseat - GoStack 11 - Challenge 05
</h1>

<p align="center">
This project was created to solve a challenge requested by Rocketseat.
Gostack is immersive training in technologies, react and react natively.</p>

<p align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT">
  </a>
</p>

<hr />

## Features

- Features can be accessed by routes below.

- 💹 **Node Js** — A web framework for Node Js

### Routes

- **`POST /transactions`**

```json
{
  "id": "uuid",
  "title": "Salário",
  "value": 3000,
  "type": "income",
  "category": "Alimentação"
}
```

- **`GET /transactions`**

```json
{
  "transactions": [
    {
      "id": "uuid",
      "title": "Salário",
      "value": 4000,
      "type": "income",
      "category": {
        "id": "uuid",
        "title": "Salary"
      }
    },
    {
      "id": "uuid",
      "title": "Freela",
      "value": 2000,
      "type": "income",
      "category": {
        "id": "uuid",
        "title": "Others"
      }
    },
    {
      "id": "uuid",
      "title": "Pagamento da fatura",
      "value": 4000,
      "type": "outcome",
      "category": {
        "id": "uuid",
        "title": "Others"
      }
    },
    {
      "id": "uuid",
      "title": "Cadeira Gamer",
      "value": 1200,
      "type": "outcome",
      "category": {
        "id": "uuid",
        "title": "Recreation"
      }
    }
  ],
  "balance": {
    "income": 6000,
    "outcome": 5200,
    "total": 800
  }
}
```

- **`DELETE /transactions/:id`**

* **`POST /transactions/import`**

import csv file like below:
[modelo](./assets/file.csv)

### Tests

- **`should be able to create a new transaction`**

* **`should create tags when inserting new transactions`**

- **`should not create tags when they already exists`**

* **`should be able to list the transactions`**

- **`should not be able to create outcome transaction without a valid balance`**

* **`should be able to delete a transaction`**

- **`should be able to import transactions`**

## Getting started

- Clone project > enter the project folder
- run `yarn`
- run `docker run --name dbimage -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres`
- Acess postbird or another postgres manager and create db with any name.
- Configure db credentials in src > config > database.js.
- run `yarn typeorm migration:run`
- run `yarn dev`

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) page for details.

---

Created with passion by me 👨🏻‍💻
