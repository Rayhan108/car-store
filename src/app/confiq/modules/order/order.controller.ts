/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";

import { OrderServices } from "./order.service";

const createOrder =  async (req: Request, res: Response) =>{
 try{
    const {order:orderData}=req.body;

    const result = await OrderServices.createOrderIntoDB(orderData);
    res.send({
        message: "Order created successfully",
        success: true,
        data: result,
      });
 }catch (err: any) {
    
    res.json({
      message: err.name || "Something went wrong",
      success: false,
      error: err,
      stack: err.stack,
    });
  }

}
 const getTotalRevenue = async (req: Request, res: Response) => {
    try {
   const result = await OrderServices.getTotalReveneuFromCarModel();
      // Respond with total revenue
      res.json({
        message: "Revenue calculated successfully",
        status: true,
        data:  result ,
      });
    } catch (err: any) {
     
        res.json({
            message: err.name || "Something went wrong",
            success: false,
            error: err,
            stack: err.stack,
          });
    }
  };
export const OrderController={
    createOrder,
    getTotalRevenue
}