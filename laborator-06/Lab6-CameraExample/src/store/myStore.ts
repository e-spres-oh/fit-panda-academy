import React from "react";

export type Image = {
    uri: string
    name: string;
    type: string;
  };

export interface IMyStore {
    token: string;
    uploadImage(image: Image): void;
}

export class MyStore implements IMyStore {
  token: string= '';
 
  async uploadImage(image: Image) {

    const data = new FormData();
    const foodId = 0;

    data.append('file', {
        uri: image.uri,
        type: 'image/jpeg',
        name: 'photo.jpg',
      } as any);

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type":"multipart/form-data",
        Authorization: `Bearer ${this.token}`,
      },
      body: data
    };

    try {
      const response = await fetch(
        `https://fit-panda.e-spres-oh.com/foods/${foodId}/photo`,  
        requestOptions)
      const result = await response.json();
      console.log("upload image: ", JSON.stringify(result));
    } catch (e) {
      console.log(e);
    }
  }


}

export const MyContext = React.createContext<IMyStore>(new MyStore());
