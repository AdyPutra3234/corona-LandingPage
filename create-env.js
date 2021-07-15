// make .env file fot netlify hosting

const fs = require('fs');

fs.writeFileSync('./.env', `TOKEN=${process.env.TOKEN}\nAPI_KEY=${process.env.API_KEY}`);