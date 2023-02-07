# GardenSmart

## Setup proxy server

Install express and node-fetch:

` npm install express node-fetch `

Change `package.json` by adding the "type" above dependencies:

`"type": "module",`

Create a server-side application: In the root of your project, create a new file named app.js and add the following code to it:

``` 
import express from 'express';
import fetch from 'node-fetch';

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/data', async (req, res) => {
  try {
    const response = await fetch(
      `https://trefle.io/api/v1/plants?token=zHMvcTIkbKjwQLy_SB1SuQZkjo0s7N-DsuRyvAvow3I`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
```

Start the server: Run the following command in your terminal to start the server:

` node app.js `

Your server-side proxy should now be running on http://localhost:3000/data. You can make requests to this endpoint from your client-side code to retrieve data from the Trefle API.

Note: Don't forget to replace <YOUR_API_KEY> in the code with your actual Trefle API key.

## Apache Config

Add a virtual host:

```
<VirtualHost project.mh:80>
    ServerName project.mh
    ServerAlias www.project.mh
    ProxyPass / http://localhost:3000/
    ProxyPassReverse / http://localhost:3000/
    <Directory "c:\xampp\htdocs\project">
    </Directory>
</VirtualHost>
```

## Install and configure Tailwind

` npm install tailwindcss

` npx tailwindcss init

Add next to input.css:
```
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```

` npx tailwindcss -i ./src/input.css -o ./public/css/main.css --watch 


