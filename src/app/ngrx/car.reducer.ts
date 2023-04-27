import { Action } from "@ngrx/store"
import { Car } from "../model/car.model"
import { CarsActions, CarsActionsTypes } from "./car.actions"

export enum CarsStateEnum{
  LOADING="Loading",
  LOADED="Loaded",
  ERROR="Error",
  INITIAL="Initial"
}
export interface CarsState{
    products:Car[],
    errorMessage:string,
    dataState:CarsStateEnum
}

const initState:CarsState={
  products:[],
  errorMessage:"",
  dataState:CarsStateEnum.INITIAL
}

export function carsReducer(state=initState, action:Action):CarsState {
  switch (action.type) {
    case CarsActionsTypes.GET_ALL_CARS:
      return {...state, dataState:CarsStateEnum.LOADING }
    case CarsActionsTypes.GET_ALL_CARS_SUCCESS:
      return {...state, dataState:CarsStateEnum.LOADED, products:(<CarsActions>action).payload}
    case CarsActionsTypes.GET_ALL_CARS_ERROR:
      return {...state, dataState:CarsStateEnum.ERROR, errorMessage:(<CarsActions>action).payload}
    default : return {...state}
  }
}
