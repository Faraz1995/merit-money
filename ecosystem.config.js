module.exports = {
  apps : [{
    name: 'merit-money',
    script: 'npm',
    args: 'start',
    watch: '.',
    env_production: {
       NODE_ENV: "production"
    },
    env_development: {
       NODE_ENV: "development"
    }
  }]
}
