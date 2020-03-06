module.exports = {
  apps: [
    {
      name: "ownyourlife",
      script: "./bin/www",
      env: {
        PORT: 3000,
        NODE_ENV: "production"
      }
    }
  ],
  deploy: {
    production: {
      user: "ubuntu",
      host: "3.215.110.185",
      key: "~/Downloads/keys/kiran_personal/ownyourlife.pem",
      ref: "origin/master",
      repo: "git@github.com:kirankumar111/ownyourlife.git",
      path: "/home/ubuntu/ownyourlife",
      "post-deploy":
        "npm install && pm2 startOrRestart ecosystem.config.js"
    }
  }
};