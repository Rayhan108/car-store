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
export const CarController = {
  createCar,
};
