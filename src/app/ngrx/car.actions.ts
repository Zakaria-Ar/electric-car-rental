import { Action } from "@ngrx/store";
import { Car } from "../model/car.model";

export enum CarsActionsTypes{
  GET_ALL_CARS="[Cars] Get All cars",
  GET_ALL_CARS_SUCCESS="[Cars] Get All cars Success",
  GET_ALL_CARS_ERROR="[Cars] Get All cars Error",
}
export class GetAllCarsAction implements Action{
  type: CarsActionsTypes=CarsActionsTypes.GET_ALL_CARS;
  constructor(public payload:any) {
  }
}

export class GetAllCarsActionSuccess implements Action{
  type: CarsActionsTypes=CarsActionsTypes.GET_ALL_CARS_SUCCESS;
  constructor(public payload:Car[]) {
  }
}

export class GetAllCarsActionError implements Action{
  type: CarsActionsTypes=CarsActionsTypes.GET_ALL_CARS_ERROR;
  constructor(public payload:string) {
  }
}

export type CarsActions=
  GetAllCarsAction | GetAllCarsActionSuccess | GetAllCarsActionError
;
