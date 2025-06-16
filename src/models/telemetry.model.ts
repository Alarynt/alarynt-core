import { Schema, model, Document } from 'mongoose';

export interface ITelemetry extends Document {
  tenantId: Schema.Types.ObjectId;
  eventData: object;
  timestamp: Date;
}

const TelemetrySchema = new Schema({
  tenantId: { type: Schema.Types.ObjectId, ref: 'Tenant', required: true },
  eventData: { type: Object, required: true },
  timestamp: { type: Date, default: Date.now },
});

export default model<ITelemetry>('Telemetry', TelemetrySchema); 