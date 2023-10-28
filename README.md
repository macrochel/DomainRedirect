<h2>Build the app</h2>
<code>$ sudo npm i -g @nestjs/cli
$ sudo npm install pm2@latest -g
$ npm install
$ npm run build
$ pm2 start dist/main.js --name DomainRedirect
$ pm2 startup systemd 
$ pm2 save
</code>
