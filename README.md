# Leaflet demo

The front-end developer will be working on web UX/UI for Ocean Scout, our underwater robot. Some of the front-end components and tooling have already been chosen, while others are still up in the air, and we will be going through a rigorous process for selecting them. This coding challenge is designed to help you demonstrate that you can work with the components we have already chosen, and with our process.

For this challenge, please take 3 days to produce a React Single Page App that allows the user to click on a map and see the distance, in miles, between the points on the map. A left click should add a point to a poly-line and display a marker. A right click should finish the poly-line and cause the length of each segment and the total length of the poly-line to be displayed. There should be a way to reset the map.

Please implement this using Leaflet (or another map interface, if you prefer, but we use Leaflet) and your own custom code for the distance calculations.

Please put the results in a github repository, choose a way to demo your app, and make sure to include unit tests for your distance code.

In our team code review is a friendly opportunity to show off your work and to educate the team on the finer points of your product.

We will schedule a code review for three days after we give you this challenge, during which we expect you to walk us through

- your solution,
- your development strategy,
- the test deployment of your app,
- your code,
- your unit tests

If you have show-stopper questions while you’re working on this challenge you can reach out to us for answers. But you are also invited to take initiative and make whatever decisions you need to make to move forward, and then tell us about them in code review. There is no right answer here. This exercise is meant to help us understand how you work, and to help you show off your reasoning and technical skills.

# Tailwind CSS example

This is an example of using [Tailwind CSS](https://tailwindcss.com) in a Next.js project.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/b4conjuice/with-bacon)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app -e https://github.com/b4conjuice/with-bacon
# or
yarn create next-app -e https://github.com/b4conjuice/with-bacon
```

```bash
# specify app name
npx create-next-app -e https://github.com/b4conjuice/with-bacon app-name
```

Deploy it to the cloud with [Vercel](https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

## Notes

This example is a basic starting point for using [Tailwind CSS](https://tailwindcss.com) with Next.js. It includes the following [PostCSS](https://github.com/postcss/postcss) plugins:

- [postcss-preset-env](https://preset-env.cssdb.org/) - Adds stage 2+ features and autoprefixes

To control the generated stylesheet's filesize, this example uses Tailwind CSS' [`purge` option](https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css) to remove unused CSS.
