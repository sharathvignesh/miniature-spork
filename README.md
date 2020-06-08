## CRUD APP - API

### Root endpoint (deployed app)

[https://nn-test.herokuapp.com/](https://nn-test.herokuapp.com/)

### API endpoints

---

#### Post recipe

```
POST /recipes
```

##### sample request

```
{
    "id": 15,
    "title": "Fuji",
    "making_time": "25分",
    "serves": "6人",
    "ingredients": "rice, garlic",
    "cost": 1000,
    "created_at": "2016-01-10 12:10:12",
    "updated_at": "2016-01-10 12:10:12"
}
```

##### response (200)

```
OK
```

###### response (!200):

```
{
	success: false,
	message: <err message>
}
```

#### Get recipe

```
GET /recipes
```

##### response (200)

```
[
    {
        "id": 2,
        "title": "オムライス",
        "making_time": "30分",
        "serves": "2人",
        "ingredients": "玉ねぎ,卵,スパイス,醤油",
        "cost": 700,
        "created_at": "2016-01-11T04:10:12.000Z",
        "updated_at": "2016-01-11T04:10:12.000Z"
    },
    {
        "id": 5,
        "title": "brian",
        "making_time": "25分",
        "serves": "6人",
        "ingredients": "rice, garlic",
        "cost": 1000,
        "created_at": "2016-01-10T03:10:12.000Z",
        "updated_at": "2016-01-10T03:10:12.000Z"
    }
]
```

#### Get recipe by :id

```
GET /recipes/:id
```

##### response (200)

```
{
    "id": 2,
    "title": "オムライス",
    "making_time": "30分",
    "serves": "2人",
    "ingredients": "玉ねぎ,卵,スパイス,醤油",
    "cost": 700,
    "created_at": "2016-01-11T04:10:12.000Z",
    "updated_at": "2016-01-11T04:10:12.000Z"
}
```

#### Delete recipe by :id

```
DELETE /recipes/:id
```

##### response (200)

```
OK
```
