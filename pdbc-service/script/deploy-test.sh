git pull
npm run build
cd ../../web_protein
git pull
npm install
npm run build:test
cp -r dist/* ../server_protein/public/
cd ../web_protein_admin
git pull
npm install
npm run build:test
\cp -rf dist/* ../server_protein/public/admin/
pm2 restart all