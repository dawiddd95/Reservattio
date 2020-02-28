import jwt from 'jsonwebtoken';

const checkToken = (req, res, next) => {
   const authorization = req.headers.authorization;
   const split = authorization.split(' ');
   const token = split[1];

   if(!token) return res.status(401).send('access denied');

   try {
      const verified = jwt.verify(token, process.env.TOKEN_SECRET)
      req.user = verified;
      next();
   } catch (err) {
      res.status(400).send('Invalid token');
   }
}

export default checkToken;