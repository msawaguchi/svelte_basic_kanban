# Basic Kanban Board with Svelte <3

![task-board](https://github.com/msawaguchi/svelte_basic_kanban/assets/28602785/98f865c8-d7a8-4426-8059-5bff163d35b9)


<p> Another project done in order to learn more about Svelte. </p>

This time, i'm using [SvelteKit](https://github.com/sveltejs/kit) with UI library [Skeleton](https://github.com/skeletonlabs/skeleton)
There is no back-end for this project yet, so all data is coming from the object inside ``src/lib/server/database.ts`` file.

![board_svelte](https://github.com/msawaguchi/svelte_basic_kanban/assets/28602785/cc0cd5d9-7b27-4146-ba2c-9e1438f0fd27)



# How to create a svelte project

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
