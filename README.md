Somewhat Facebook clone:  
Minimun Viable Product  
-Create account/ Log in, 4 hours  
-Upload Drawings, 2hours  
-View Drawings, 3hours  
-Heart a Drawing, 1day
-Comment on Drawings, .5days  
-Comment on Comments,  .5days  
-Have a Feed, .5days  
(Top feed is across site)  
(User feed involves all friends + follows)
-View Current_User Feed, .5days  
-Have Profile, 1day  
-View Profile with Recent Activity, 1day
-Have Avatars and Cover Photo, 1day  

total: 7days

Extra  
-Use OpenCV to allow users to learn to draw  
(uses picture matching to give feedback on his drawing)  
-Allow Competitions with user agreed upon judges
-Have mini games (maybe the asteroids)

[View WireFrame][views]

[views]: ./pictures/view.md

users:

| column_name   | Data          | Detail  |  
| ------------- |:-------------:| -----:|  
| username      | string | not null |  
| password_digest      | string      |  not null |  
| id     | integer      |   not null|  


sessions:

| Column_name | Data    | Detail                |
|-------------|---------|-----------------------|
| user_id     | integer | not null, foreign key |
| token       | string  | not null, unique      |

drawings:

| column_name   | Data          | Detail  |  
| ------------- |-------------| ----|  
| user_id      | integer | not null, foreign key |  
| url      | string      |  not null |  
| id     | integer      |   not null, prim |  



comments:

| column_name   | Data          | Detail  |  
| ------------- |-------------| -----|  
| commentable_id      | integer | not null, foreign key |  
| commentable_type      | string      |  not null |  
| content     | text      |   not null |  
| id     | integer      |   not null, prim |  


profiles:

| column_name   | Data          | Detail  |  
| ------------- |:-------------:| -----:|  
| user_id      | integer | not null, foreign key |  
| avatar_url      | string      |  not null |  
| cover_url      | string      |  not null |  
| id     | integer      |   not null, prim |  

hearts:

| column_name   | Data          | Detail  |  
| ------------- |:-------------:| -----:|  
| heartable_id      | integer | not null, foreign key |  
| heartable_type      | string      |  not null |  
| user_id      | string      |  not null, foreign key |  
| id     | integer      |   not null, prim |  

Follows:

| column_name   | Data          | Detail  |  
| ------------- |:-------------:| -----:|  
| followee_id      | integer | not null, foreign key |  
| follower_id     | integer      |  not null, foreign key |  
| id     | integer      |   not null, prim |  
