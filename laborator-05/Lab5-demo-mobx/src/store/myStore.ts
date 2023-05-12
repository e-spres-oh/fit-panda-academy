import { makeAutoObservable } from "mobx";
import React from "react";

export interface IMyStore {
  setScreen1Data(data: string): void;
  setScreen2Data(data: string): void;
  setScreen3Data(data: string): void;

  getScreen1Data(): string;
  getScreen2Data(): string;
  getScreen3Data(): string;
}

export class MyStore implements IMyStore {
  screen1Data: string = "Initial data";
  screen2Data: string = "Initial data";
  screen3Data: string = "Initial data";

  constructor() {
    makeAutoObservable(this);
  }

  setScreen1Data(data: string) {
    this.screen1Data = data;
  }
  setScreen2Data(data: string) {
    this.screen2Data = data;
  }
  setScreen3Data(data: string) {
    this.screen3Data = data;
  }

  getScreen1Data() {
    return this.screen1Data;
  }
  getScreen2Data() {
    return this.screen2Data;
  }
  getScreen3Data() {
    return this.screen3Data;
  }
}

export const MyContext = React.createContext<IMyStore>(new MyStore());
