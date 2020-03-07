import jwt from 'jsonwebtoken';

const checkToken = async (req, res, next) => {
   const {token} = req.cookies;

   if(!token) return res.status(401).send('Unauthorized');

   try {
      const verified = jwt.verify(token, process.env.TOKEN_SECRET)
      req.user = verified;
      next();
   } catch (err) {
      res.status(400).send('Invalid token');
   }
}

export default checkToken;