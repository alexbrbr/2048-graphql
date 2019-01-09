This is a basic graphQL server, serving and updating content from a .json file.
With `npm start` you can go to http://localhost:4000/ in your browser to have access to a graphQL playground.

This is intended to store "high scores" (username + score) and has basic features.

Here are the queries and their descriptions :

- Read all scores
```
{scores {userName, score}}
```
- Read one score by username
```
{score(userName:"test"){score}}
```

- Update a score for a user
```
mutation updateScore {
  updateScore(userName:"test", newScore: 555){userName, score}
}
```

- Add a new score for a new username
```
mutation addScore {
  addScore(userName:"test3", score: 353){userName, score}
}
```
