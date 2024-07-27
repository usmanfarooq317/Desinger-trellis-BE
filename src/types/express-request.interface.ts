import { Request } from 'express';

export interface AuthenticatedRequest extends Request {
  user?: any; // Replace 'any' with your user type if you have one
}