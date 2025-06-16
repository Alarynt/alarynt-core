import { Schema, model, Document } from 'mongoose';

export interface IActionSet extends Document {
  tenantId: Schema.Types.ObjectId;
  actions: Schema.Types.ObjectId[]; // Array of Alert IDs
  triggers: Schema.Types.ObjectId[]; // Array of Trigger IDs
}

const ActionSetSchema = new Schema({
  tenantId: { type: Schema.Types.ObjectId, ref: 'Tenant', required: true },
  actions: [{ type: Schema.Types.ObjectId, ref: 'Alert' }],
  triggers: [{ type: Schema.Types.ObjectId, ref: 'Trigger' }],
}, { timestamps: true });

export default model<IActionSet>('ActionSet', ActionSetSchema); 