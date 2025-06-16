import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'your-jwt-secret'; // Same as in index.ts for now

export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, JWT_SECRET, (err: any, user: any) => {
      if (err) {
        return res.sendStatus(403); // Forbidden
      }

      // In a real app, you'd attach the user to the request
      // (req as any).user = user;
      next();
    });
  } else {
    res.sendStatus(401); // Unauthorized
  }
}; 