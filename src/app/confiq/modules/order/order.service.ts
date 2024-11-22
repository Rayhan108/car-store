
import { CarModel } from "../car/car.model";
import { Torder } from "./order.interface";
import { OrderModel } from "./order.model";

const createOrderIntoDB = async (orderData: Torder) => {
    const order = new OrderModel(orderData);
    const car = await CarModel.findById(orderData.car)
   
    if (!car) {
        throw new Error("Car not found.");
      }
      if (car.quantity < orderData.quantity) {
        throw new Error('Insufficient Stock')
       }
      car.quantity -= orderData.quantity;
   
    if ( car.quantity=== 0) {
      car.inStock = false;
    }
   
    await car.save();
    const result = await order.save(); 
    return result;
  };

  export const OrderServices={
    createOrderIntoDB
  }