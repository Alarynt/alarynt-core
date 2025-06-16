import { Schema, model, Document } from 'mongoose';

export interface ITrigger extends Document {
  tenantId: Schema.Types.ObjectId;
  name: string;
  code: string; // Javascript code as a string
}

const TriggerSchema = new Schema({
  tenantId: { type: Schema.Types.ObjectId, ref: 'Tenant', required: true },
  name: { type: String, required: true },
  code: { type: String, required: true },
}, { timestamps: true });

export default model<ITrigger>('Trigger', TriggerSchema); 