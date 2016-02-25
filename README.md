Angular webapp starter
======================

## Idea

Yet another angular starter kit? Yes... but hang on.
For this one let's stop using bower and gulp, npm does it all!

## Stack

| Frontend   | Backend |
|------------|---------|
| Angular    | Express |
| SASS       |         |
| Browserify |         |

## Structure
```
.
├── client                      # AngularJS app
|   ├── index.js                # where angular app is created and dependencies required
|   ├── index.controller.js     # main controller for the frontend
|   ├── index.config.js         # frontend routing
|   ├── index.html              # beautifully simple
|   ├── index.scss              # main SASS file - import all other stylesheets in here
|   ├── components              # put all reusable directives in here
|   └── views                   # 1 to 1 relationship with frontend routes
|       └── main                # main view
|           ├── main.js         # main view controller
|           ├── main.html       # main view template
|           └── main.scss       # main view stylesheet
├── server                      # Express server
|   ├── index.js                # for babel to do its magic
|   ├── server.js               # main server file
|   └── routers                 # express routers - main logic goes here
|       └── index.js            # main routes - separate the concerns into several files if needed
├── package.json                # project manifest - where you'll find all the build scripts
└── LICENSE                     # all yours
```

## Acknowledgement

Inspired by [Keith Circle's article] on how to stop using build systems.

[Keith Circle's article]: http://blog.keithcirkel.co.uk/why-we-should-stop-using-grunt/
