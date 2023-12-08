## API document
### Users
#### get details
Method: GET
PATH: user/<user_id>
Request Body:
Response:
* 200 OK
  ```JSON
  {
    "id": "str",
    "name": "str",
    "icon": "str",
    "pocket": "str",
    "total_assets": "str"
  }
  ```
* 403 Forbidden

### Items
#### get items
Method: GET
PATH: items/user/<user_id>
Request Body:
Response:
* 200 OK
  ```JSON
  [
    {
      "id": "str",
      "user_id": "str",
      "name": "str",
      "image": "str",
      "status": "str",
      "category": "str",
      "desired_price": "str"
    }
  ]
  ```
* 403 Forbidden

#### get one item
Method: GET
PATH: items/<item_id>
Request Body:
Response:
　
* 200 OK
  ```JSON
    {
      "id": "str",
      "user_id": "str",
      "name": "str",
      "image": "str",
      "status": "str",
      "category": "str",
      "desired_price": "str"
    }
   ```
* 403 Forbidden
* 404 Not Found

#### get collections
Method: GET
PATH: collections/
Request Body:
```JSON
  {
    "collection_name": "str"
  }
```
Response:
* 200 OK
  ```JSON
  [
    {
      "id": "str",
      "user_id": "str",
      "name": "str",
      "image": "str",
      "status": "str",
      "category": "str",
      "desired_price": "str"
    }
  ]
  ```

#### change status
Method: POST
PATH: items/change/<user_id>/<item_id>
Request Body:

```JSON
  {
    "status": "str"
  }
```
Response:
　
* 200 OK
　
* 200 OK
  ```JSON
    {
      "id": "str",
      "name": "str",
      "user_id": "str",
      "user_name": "str",
      "image": "str",
      "status": "str",
      "category": "str",
      "desired_price": "str"
    }
   ```
* 403 Forbidden

