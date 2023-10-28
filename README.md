<h2>Build the app</h2>
<code>$ sudo npm i -g @nestjs/cli</code>

<code>$ sudo npm install pm2@latest -g</code>

<code>$ npm install</code>

<code>$ npm run build</code>

<code>$ pm2 start dist/main.js --name DomainRedirect</code>

<code>$ pm2 startup systemd</code>

<code>$ pm2 save</code>
