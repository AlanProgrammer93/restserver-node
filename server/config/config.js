

process.env.PORT = process.env.PORT || 3000;

// Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// vencimiento del token
process.env.CADUCIDAD_TOKEN = '48h';

// SEED de autenticacion
process.env.SEED = process.env.SEED || 'clave-de-token';




// Base de datos

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'url de la base de datos en la nube (mongo atlas por ejemplo)';
}

process.env.URLDB = urlDB;

// Google Client ID
process.env.CLIENT_ID = process.env.CLIENT_ID || '881037073096-1ap0htp566sie3l91a57dir6uu7fgna9.apps.googleusercontent.com';

