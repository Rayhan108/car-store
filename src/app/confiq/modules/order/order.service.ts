
import { Torder } from "./order.interface";
import { OrderModel } from "./order.model";

const createOrderIntoDB = async (orderData: Torder) => {
    const student = new OrderModel(orderData);

    const result = await student.save(); 
    return result;
  };

  export const OrderServices={
    createOrderIntoDB
  }