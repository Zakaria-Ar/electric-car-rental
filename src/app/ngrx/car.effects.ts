import { Injectable } from "@angular/core";
import { CarService } from "../services/car.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Observable, catchError, map, mergeMap, of } from "rxjs";
import { Action } from "@ngrx/store";
import { CarsActionsTypes, GetAllCarsActionError, GetAllCarsActionSuccess } from "./car.actions";

@Injectable()
export class CarsEffects {
  constructor(private carService:CarService, private effectActions:Actions) {
  }

  getAllCarsEffect:Observable<Action>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(CarsActionsTypes.GET_ALL_CARS),
      mergeMap((action)=>{
        return this.carService.getAllCars()
        .pipe(
          map((cars)=> new GetAllCarsActionSuccess(cars)),
          catchError((err)=>of(new GetAllCarsActionError(err.message)))
        )
      })
    )
  );

}
