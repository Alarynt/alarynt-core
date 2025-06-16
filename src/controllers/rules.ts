import { Request, Response } from 'express';
import Rule from '../models/rule.model';

// In-memory store
const rules: any[] = [];
let ruleIdCounter = 1;

export const createRule = async (req: Request, res: Response) => {
  try {
    const newRule = { id: ruleIdCounter++, ...req.body, createdAt: new Date() };
    rules.push(newRule);
    res.status(201).json(newRule);
  } catch (error) {
    res.status(500).json({ message: 'Error creating rule', error });
  }
};

export const getRules = async (req: Request, res: Response) => {
  try {
    res.status(200).json(rules);
  } catch (error) {
    res.status(500).json({ message: 'Error getting rules', error });
  }
};

export const updateRule = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const ruleIndex = rules.findIndex(r => r.id === parseInt(id));
    if (ruleIndex === -1) {
      return res.status(404).json({ message: 'Rule not found' });
    }
    const updatedRule = { ...rules[ruleIndex], ...req.body };
    rules[ruleIndex] = updatedRule;
    res.status(200).json(updatedRule);
  } catch (error) {
    res.status(500).json({ message: 'Error updating rule', error });
  }
}; 