import { Request, Response } from 'express';
import Tenant from '../models/tenant.model';

// In-memory store for now
const tenants: any[] = [];

export const createTenant = async (req: Request, res: Response) => {
  try {
    const { name, tier, dbUri } = req.body;
    const apiKey = `test-api-key-${Date.now()}`; // Mock API key
    const newTenant = { name, tier, dbUri, apiKey, createdAt: new Date() };
    tenants.push(newTenant);
    res.status(201).json(newTenant);
  } catch (error) {
    res.status(500).json({ message: 'Error creating tenant', error });
  }
};

export const getTenants = async (req: Request, res: Response) => {
  try {
    res.status(200).json(tenants);
  } catch (error) {
    res.status(500).json({ message: 'Error getting tenants', error });
  }
}; 