cd varosa-digital-hub
git checkout main && git pull
git checkout -b feat/trazabilidad-origen-whatsapp
git apply varosa-trazabilidad-whatsapp.patch
npm run build          # debe compilar sin errores
git add -A src/
git commit -m "feat(whatsapp): agregar trazabilidad de origen a los enlaces wa.me"
git push -u origin feat/trazabilidad-origen-whatsapp
