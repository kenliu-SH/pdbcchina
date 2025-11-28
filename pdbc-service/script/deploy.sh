git pull
npm run build
cd ../../web_protein
git pull
npm install
npm run build:prod
cp -r dist/* /usr/share/nginx/pdbc/
cd ../web_protein_admin
git pull
npm install
npm run build:prod
# mkdir -p ../web_protein/dist/admin
# \cp -rf dist/* ../web_protein/dist/admin/
pm2 restart all