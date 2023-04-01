const concurrently = require('concurrently')

concurrently(
  [
    {
      command: 'cd apps/web && yarn start',
      name: 'web',
      prefixColor: "blue",
    },
    {
      command: 'cd apps/api && npm run dev',
      name: 'api',
      prefixColor: 'green',
    },
  ],
  {
    prefix: 'name',
    killOthers: ['failure', 'success'],
  },
  (err) => {
    if (err) {
      console.error('One of the processes failed:', err)
    } else {
      console.log('All processes completed successfully.')
    }
  },
)
