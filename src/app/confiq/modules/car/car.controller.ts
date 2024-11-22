import { Request, Response } from "express";
import carValidationSchema from "./car.validation";
import { carServices } from "./car.services";
const createCar = async (req: Request, res: Response) => {
  try {
    const { car: carData } = req.body;

    const zodparsedData = carValidationSchema.parse(carData);
    const result = await carServices.createCarIntoDB(zodparsedData);
    res.sendStatus(200).json({
      message: "Car created successfully",
      success: true,
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.json({
      message: err.name || "Something went wrong",
      success: false,
      error: err,
      stack: err.stack,
    });
  }
};

//get all car
const getAllCar = async(req:Request,res:Response)=>{
try{
    const result = await carServices.getAllCarFromDB();
res.status(200).json({
    message:"Cars retrived succesfully",
    success:true,
    data:result
})
}
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch (err: any) {
        res.json({
          message: err.name || "Something went wrong",
          success: false,
          error: err,
          stack: err.stack,
        });
      }
}

//get single car 
const getSingleCar = async(req:Request,res:Response)=>{
 try{
    const {carId}=req.params;
    const result = await carServices.getSingleCarFromDB(carId);
    res.status(200).json({
        message:"Car is retrived succesfully",
        success:true,
        data:result
    })
 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 }catch(err:any){
    res.json({
        message: err.name || "Something went wrong",
        success: false,
        error: err,
        stack: err.stack,
      });
 }
}






export const CarController = {
  createCar,
  getAllCar,
  getSingleCar
};
