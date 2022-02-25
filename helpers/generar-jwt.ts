const jwt = require('jsonwebtoken');

export const generarJWT = (email: '') => {
  return new Promise((resolve, reject) => {
    const payload = { email };

    jwt.sign(payload, process.env.SECRET_TOKEN_KEY, {
      expiresIn: '1h'
    }, (err:any, token:string) => {
      if (err) {
        console.log(err);
        reject('No se pudo firmar un nuevo token');
      } else {
        resolve(token);
      }
    })
  })
}
