<div align = "center">

<h1><a href="https://2kabhishek.github.io/redi-to-rest">redi-to-rest</a></h1>

<a href="https://github.com/2KAbhishek/redi-to-rest/blob/main/LICENSE">
<img alt="License" src="https://img.shields.io/github/license/2kabhishek/redi-to-rest?style=flat&color=eee&label="> </a>

<a href="https://github.com/2KAbhishek/redi-to-rest/graphs/contributors">
<img alt="People" src="https://img.shields.io/github/contributors/2kabhishek/redi-to-rest?style=flat&color=ffaaf2&label=People"> </a>

<a href="https://github.com/2KAbhishek/redi-to-rest/stargazers">
<img alt="Stars" src="https://img.shields.io/github/stars/2kabhishek/redi-to-rest?style=flat&color=98c379&label=Stars"></a>

<a href="https://github.com/2KAbhishek/redi-to-rest/network/members">
<img alt="Forks" src="https://img.shields.io/github/forks/2kabhishek/redi-to-rest?style=flat&color=66a8e0&label=Forks"> </a>

<a href="https://github.com/2KAbhishek/redi-to-rest/watchers">
<img alt="Watches" src="https://img.shields.io/github/watchers/2kabhishek/redi-to-rest?style=flat&color=f5d08b&label=Watches"> </a>

<a href="https://github.com/2KAbhishek/redi-to-rest/pulse">
<img alt="Last Updated" src="https://img.shields.io/github/last-commit/2kabhishek/redi-to-rest?style=flat&color=e06c75&label="> </a>

<h3>REST API with Redis 📭🍎</h3>

</div>

## What is this

A REST API built with Node to demonstrate Redis persistence.

## Inspiration

Was learning about redis persistence, wanted to try it out.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of `node and redis`

## Getting redi-to-rest

To get redi-to-rest, follow these steps:

```bash
git clone https://github.com/2kabhishek/redi-to-rest
cd redi-to-rest
```

## Using redi-to-rest

```bash
cp .env.example .env
$EDITOR .env #Set the REDIS_URL env to your redis instance
npm start
```

## How it was built

redi-to-rest was built using `neovim, node, redis`

### How the data is stored:

Refer to [this example](https://github.com/redis-developer/basic-analytics-dashboard-redis-bitmaps-nodejs#how-the-data-is-stored) for a more detailed example of what you need for this section.

### How the data is accessed:

Refer to [this example](https://github.com/redis-developer/basic-analytics-dashboard-redis-bitmaps-nodejs#how-the-data-is-accessed) for a more detailed example of what you need for this section.

### Performance Benchmarks

[If you migrated an existing app to use Redis, please put performance benchmarks here to show the performance improvements.]

## How to run it locally?

[Make sure you test this with a fresh clone of your repo, these instructions will be used to judge your app.]

### Prerequisites

[Fill out with any prerequisites (e.g. Node, Docker, etc.). Specify minimum versions]

### Local installation

[Insert instructions for local installation]

## Deployment

To make deploys work, you need to create free account on [Redis Cloud](https://redis.info/try-free-dev-to)

### Google Cloud Run

[Insert Run on Google button](https://cloud.google.com/blog/products/serverless/introducing-cloud-run-button-click-to-deploy-your-git-repos-to-google-cloud)

### Heroku

[Insert Deploy on Heroku button](https://devcenter.heroku.com/articles/heroku-button)

### Netlify

[Insert Deploy on Netlify button](https://www.netlify.com/blog/2016/11/29/introducing-the-deploy-to-netlify-button/)

### Vercel

[Insert Deploy on Vercel button](https://vercel.com/docs/deploy-button)

## More Information about Redis Stack

Here some resources to help you quickly get started using Redis Stack. If you still have questions, feel free to ask them in the [Redis Discord](https://discord.gg/redis) or on [Twitter](https://twitter.com/redisinc).

### Getting Started

1. Sign up for a [free Redis Cloud account using this link](https://redis.info/try-free-dev-to) and use the [Redis Stack database in the cloud](https://developer.redis.com/create/rediscloud).
1. Based on the language/framework you want to use, you will find the following client libraries:
    - [Redis OM .NET (C#)](https://github.com/redis/redis-om-dotnet)
        - Watch this [getting started video](https://www.youtube.com/watch?v=ZHPXKrJCYNA)
        - Follow this [getting started guide](https://redis.io/docs/stack/get-started/tutorials/stack-dotnet/)
    - [Redis OM Node (JS)](https://github.com/redis/redis-om-node)
        - Watch this [getting started video](https://www.youtube.com/watch?v=KUfufrwpBkM)
        - Follow this [getting started guide](https://redis.io/docs/stack/get-started/tutorials/stack-node/)
    - [Redis OM Python](https://github.com/redis/redis-om-python)
        - Watch this [getting started video](https://www.youtube.com/watch?v=PPT1FElAS84)
        - Follow this [getting started guide](https://redis.io/docs/stack/get-started/tutorials/stack-python/)
    - [Redis OM Spring (Java)](https://github.com/redis/redis-om-spring)
        - Watch this [getting started video](https://www.youtube.com/watch?v=YhQX8pHy3hk)
        - Follow this [getting started guide](https://redis.io/docs/stack/get-started/tutorials/stack-spring/)

The above videos and guides should be enough to get you started in your desired language/framework. From there you can expand and develop your app. Use the resources below to help guide you further:

1. [Developer Hub](https://redis.info/devhub) - The main developer page for Redis, where you can find information on building using Redis with sample projects, guides, and tutorials.
1. [Redis Stack getting started page](https://redis.io/docs/stack/) - Lists all the Redis Stack features. From there you can find relevant docs and tutorials for all the capabilities of Redis Stack.
1. [Redis Rediscover](https://redis.com/rediscover/) - Provides use-cases for Redis as well as real-world examples and educational material
1. [RedisInsight - Desktop GUI tool](https://redis.info/redisinsight) - Use this to connect to Redis to visually see the data. It also has a CLI inside it that lets you send Redis CLI commands. It also has a profiler so you can see commands that are run on your Redis instance in real-time
1. Youtube Videos
    - [Official Redis Youtube channel](https://redis.info/youtube)
    - [Redis Stack videos](https://www.youtube.com/watch?v=LaiQFZ5bXaM&list=PL83Wfqi-zYZFIQyTMUU6X7rPW2kVV-Ppb) - Help you get started modeling data, using Redis OM, and exploring Redis Stack
    - [Redis Stack Real-Time Stock App](https://www.youtube.com/watch?v=mUNFvyrsl8Q) from Ahmad Bazzi
    - [Build a Fullstack Next.js app](https://www.youtube.com/watch?v=DOIWQddRD5M) with Fireship.io
    - [Microservices with Redis Course](https://www.youtube.com/watch?v=Cy9fAvsXGZA) by Scalable Scripts on freeCodeCamp


## What I learned

- Learned about redis ecosystem.

Hit the ⭐ button if you found this useful.

## More Info

<div align="center">

<a href="https://github.com/2KAbhishek/redi-to-rest">Source</a> | <a href="https://2kabhishek.github.io/redi-to-rest">Website</a>

</div>
