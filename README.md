# Serverless Typescript Starter

<img width="400" src="https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/logos/Serverless_mark_black_400x400_v3%402x.jpg">

## Installation

1. `git clone https://github.com/xetera/serverless-typescript-starter`
2. `cd typescript-starter`
3. `npm install`
4. `npm run dev`
5. http://localhost:3000/example

If you need to use environment variables, you can copy the `.env.example` file
over to `.env` to have serverless automatically load your variables. For more information
head over to the [serverless-dotenv-plugin](https://github.com/colynb/serverless-dotenv-plugin) repo.

This will get you running the offline testing mode for your serverless
function. Check out the [serverless framework docs](https://serverless.com/framework/docs/providers/)
for deploying your functions to the cloud.

## Tests

Run `npm t` to run built-in jest unit tests.

## Dependencies

- Dotenv
- Winston

**Starter generated from [typescript-starter](https://github.com/Xetera/typescript-starter)**

