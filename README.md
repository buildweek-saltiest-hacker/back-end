# Server and Database Information

## Production URL

https://salty-hackers-ls.herokuapp.com, henceforth abbreviated as url.com

## Server Endpoints


### Registration
*This endpoint is used to register the user and add them to the database*

POST, 'url.com/api/auth/register'

Required data: `username`: string 3 character min, 18 character max, `password`: 5 character min, string 18 character max

```
{
  username: example_username,
  password: example_password
}
```

**Status Codes**
- `201`, User has been created
- `406`, Invalid characters or not enough characters
- `500`, Server error. Please try again



### Login
*This endpoint retrieves and verifies a users credentials prior to giving them access to the application*

POST, 'url.com/api/auth/login'

Required data: `username`: string 3 character min, 18 character max, `password`: 5 character min, string 18 character max

```
{
  username: example_username,
  password: example_password
}
```

**Status Codes**
- `200`, User credentials match
- `406`, Invalid characters or not enough characters
- `500`, Server error. Please try again



### GET Comment
*This endpoint is to fetch a list of comments that the user has saved*

GET, 'url.com/api/actions/comment'

Required data: `commentid`: 

```
{ 
  {
    commentid: , 
    commentdata:
  }, 
  {
    commentid: , 
    commentdata:
  }, 
}
```

**Status Codes**
- `200`, Comment added
- `400`, Invalid comment saved. Data error. 
- `500`, Server error. Please try again

### Save Comment
*This endpoint is to add a comment to the users saved comments list*

PUT, 'url.com/api/actions/comment/add'

Required data: `commentid`: ,  

```
{
  username: example_username,
  commentid: example_savedcommentid
}
```

**Status Codes**
- `200`, Comment added
- `400`, Invalid comment saved. Data error. 
- `500`, Server error. Please try again



### Delete Saved Comment
*This endpoint is to unsave a comment from the users saved comments list*

DELETE, 'url.com/api/actions/comment/delete'

Required data: `commentid`: ,

**Status Codes**
- `200`, Comment added
- `400`, Invalid comment deleted. Data error. 
- `500`, Server error. Please try again

```
{
  username: example_username,
  commentid: example_savedcommentid
}
```



## Database Information


### User Information Table


id | username | password
-- | -------- | --------
autoincrement, unique id | required, unique example_username | required example_password


### Comment Information Table


id | commentid | comment_data | user_id
-- | -------- | -------- | -----
autoincrement, unique id | required commentid | required example_comment string | required, foreign_key associateduser




