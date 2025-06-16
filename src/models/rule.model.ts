import { Schema, model, Document } from 'mongoose';

export interface IRule extends Document {
  tenantId: Schema.Types.ObjectId;
  ruleLogic: object; // JSON Logic object
  description: string;
  actionSetId: Schema.Types.ObjectId;
}

const RuleSchema = new Schema({
  tenantId: { type: Schema.Types.ObjectId, ref: 'Tenant', required: true },
  ruleLogic: { type: Object, required: true },
  description: { type: String, required: true },
  actionSetId: { type: Schema.Types.ObjectId, ref: 'ActionSet', required: true },
}, { timestamps: true });

export default model<IRule>('Rule', RuleSchema); 