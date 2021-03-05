//Guradamos en una constante la configuracion de los modulos
const app = require('./config/server');

//Requerimos las vistas de news.js
require('./app/routes/news')(app);

// Starting the server
app.listen(app.get('port'), () => {
  console.log('server on port:', app.get('port'));
});
