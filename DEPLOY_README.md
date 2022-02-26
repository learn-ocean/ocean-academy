# Deploy to Production Instructions

We are now separating the backend and frontend for the deploy. The backend is deployed over heroku and the frontend over Vercel.
Here is the explanations if one would need to redeploy a new version of the ocean academy application.

## Front-End

Vercel's is currently set-up to use this git https://github.com/mwmouawad/vercel-ocean-academy as source. 
This repo was created by me and is only an empty git repo with the main and development branches pulled from the official
learn-ocean/ocean-academy repo. In order to push changes from the official repo to vercel you have to do the following steps:

```git clone https://github.com/mwmouawad/vercel-ocean-academy```

You should then add the mwmouawad/vercel-ocean-academy repo as the origin remote repo and the learn-ocean/ocean-academy as
the ocean-academy remote. (you may name as you wish, i find best as this.)

```git remote add ocean-academy-upstream https://github.com/learn-ocean/ocean-academy```

Finally you have to pull the desired changes from the branches to the local repo and then push it to the upstream origin branches.

Example: Push the development branch


```git checkout development```

Pulls learn-ocean development branch to the local one:

```git pull ocean-academy-upstream development```

Pushes development to mwmouawad:

```git push origin```


Vercel should automatically trigger a preview deploy if the push is in the development branch or a production deploy on the main branch.

Please set up right the environment variables for the front-end on the vercel settings page.

## Back-End

In order to deploy the backend you may just to do git push to the heroku repository. Please check how deployment to heroku
works on [existing apps](!https://devcenter.heroku.com/articles/git). Please push only the folder src/api (do not push all of the repo).

```
git subtree push --prefix src/api ocean-dev master
```

Please set-up accordingly the environment variables on the heroku config vars for the project. (Don't forget to remove the \n from the JWT keys strings.)


