import { Injectable } from "@angular/core";

export @Injectable({
  providedIn: 'root'
})
  class UserToken {

  private _id: string = '';


  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }

  private _name: string = '';


  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public getInstance(): UserToken  {
    this.id = "1";
    this.name = 'Mark';
    return this;
  }

}
