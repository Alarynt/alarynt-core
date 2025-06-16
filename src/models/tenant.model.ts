import { Schema, model, Document } from 'mongoose';

export interface ITenant extends Document {
  name: string;
  tier: 'free' | 'paid' | 'enterprise';
  apiKey: string;
  dbUri: string;
}

const TenantSchema = new Schema({
  name: { type: String, required: true },
  tier: { type: String, enum: ['free', 'paid', 'enterprise'], required: true },
  apiKey: { type: String, required: true, unique: true },
  dbUri: { type: String, required: true },
}, { timestamps: true });

export default model<ITenant>('Tenant', TenantSchema); 