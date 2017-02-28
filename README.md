# FazBookAtuh

Fazbook it's a personal study that allow a user to register, login and logout in the website.



[DEMO - click here] (https://fazbookauth.herokuapp.com/)
## Technologies Used

* Express
* psql
* NodeJs


### General Approach Used

The idea was to learn how to save and render data through a database.


### Installation Instructions


git clone https://github.com/2high/fazbook-auth
cd ReactTube
npm install


```
Run `npm run dev` and visit localhost:3000 to make sure everything is working.
```





### Code Highlight
create a new user with that data:

```
...
router.post('/register', (req, res, next)  => {
  // Return function createUser for new user
  return authHelpers.createUser(req, res)
  .then((response) => {
    console.log('registration successful');
  })
  .catch((err) => { res.status(500).json({ status: 'error' }); });
});

...

```

## Deployment

Deployed on [Heroku](https://fazbookauth.herokuapp.com/)

## Author

* **Shauan Ferreira Leite** - [LinkedIn](https://www.linkedin.com/in/shauanleite)



## License

This project is currently in the process of being licensed.
# ReactTubefinal
