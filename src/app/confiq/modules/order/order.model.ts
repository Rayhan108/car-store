import { model, Schema } from "mongoose";

const orderSchema = new Schema(
    {
      email: {
        type: String,
        required: true,
        trim: true,
      
      },
      car: {
        type: Schema.Types.ObjectId,
        ref: "Car", 
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1
      },
      totalPrice: {
        type: Number,
        required: true,
        min: 0
      },
    },
    {
      timestamps: true,
    }
  );
  export const OrderModel = model('Order',orderSchema)