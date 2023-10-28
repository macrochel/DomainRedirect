<h2>Build the app</h2>
sudo npm i -g @nestjs/cli
sudo npm install pm2@latest -g
git clone http://coderepo.com/projectname.git
cd projectname
npm install
npm run build
pm2 start dist/main.js --name DomainRedirect
pm2 startup systemd 
pm2 save
