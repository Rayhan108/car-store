import { Tcar } from "./car.interface";
import { CarModel } from "./car.model";

const createCarIntoDB = async (carData: Tcar) => {
  const student = new CarModel(carData); //create an instance

  const result = await student.save(); //built in instance method
  return result;
};
const getAllCarFromDB = async()=>{
    const result = await CarModel.find();
    return result;
}
export const carServices={
    createCarIntoDB,
    getAllCarFromDB
}