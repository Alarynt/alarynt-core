import { Schema, model, Document } from 'mongoose';

export interface IAlert extends Document {
  tenantId: Schema.Types.ObjectId;
  name: string;
  code: string; // Javascript code as a string
}

const AlertSchema = new Schema({
  tenantId: { type: Schema.Types.ObjectId, ref: 'Tenant', required: true },
  name: { type: String, required: true },
  code: { type: String, required: true },
}, { timestamps: true });

export default model<IAlert>('Alert', AlertSchema); 