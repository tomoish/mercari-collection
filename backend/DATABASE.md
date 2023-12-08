
## Database
### ideal
Users table
|  | type |  | descriptions |
| ---- | ---- | --- | --- |
| id | INTEGER | PK |  |
| name | STRING |  |  |
| email | STRING |  |  |
| password | STRING |  |  |
| icon | STRING |  | URL |
| total_assets | FLOAT64 |  |  |
| pocket | FLOAT64 |  |  |
<!-- |  |  |  |  | -->


Items table
|  | type |  | descriptions |
| ---- | ---- | --- | --- |
| id | INTEGER | PK |  |
| user_id | INTEGER | FK |  |
| collection_id | INTEGER | FK |  |
| status | STRING |  | "hold"/"sold"/"on sale" |
| desired_price | FLOAT64 |  | used when selling |
<!-- |  |  |  |  | -->

Collections table
|  | type |  | descriptions |
| ---- | ---- | --- | --- |
| id | INTEGER | PK |  |
| name | STRING |  |  |
| image | STRING |  | URL |
| category | STRING |  |  |
| value | FLOAT64 |  |  |



### production

Users table
|  | type | descriptions |
| ---- | ---- | --- |
| id | INTEGER |  |
| name | STRING |  |
| icon | STRING | URL |
| total_assets | LIST |  |

Items table
|  | type | descriptions |
| ---- | ---- |  --- |
| id | INTEGER |  |
| name | STRING |  |
| user_id | INTEGER |  |
| user_name | STRING |  |
| image | STRING | URL |
| status | STRING | "hold"/"sold"/"on sale" |
| category | STRING | |
| desired_price | INTEGER | used when selling |

