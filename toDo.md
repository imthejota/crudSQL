1. npm i sequelize mysql2
2. npm i sequelize-cli -D, como dependencia de desarrollo -D = -dev
3. Como script -> "sq": "sequelize init" // permite usar npm run sq, ya que está instalado de manera local el paquete
4. .sequelizerc y toda su configuración
const path = require('path')
module.exports = {
    config: path.join(__dirname, 'src', 'database', 'config', 'config.js'),
    "models-path": path.join(__dirname, 'src', 'database', 'models'),
    "migrations-path": path.join(__dirname, 'src', 'database', 'migrations'),
    "seeders-path": path.join(__dirname, 'src', 'database', 'seeders')
}
5. npm run sq
6. Ir al config.js y exportar ese modulo
7. config.js -> development configurar
8. Crear los modelos correspondientes para nuestras entidades



Requerir db del modelo index -> xq toma desde ahí todos los modelos que ya hayamos creado


