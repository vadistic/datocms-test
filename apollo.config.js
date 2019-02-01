require('./scripts/env-config').configure()

module.exports = {
  client: {
    name: 'generic-portfolio-starter',
    service: 'generic-portfolio-starter',
    tagName: 'graphql',
    includes: ['src/**/*.{ts,tsx}', './.cache/fragments/*'],
  },
  engine: {
    apiKey: process.env.ENGINE_API_KEY,
  },
}
