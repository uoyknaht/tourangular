export interface IPlace {
  _id: number;
  latitude: number;
  longitude: number;
  title: string;
    address: string;
    categoriesIds?: string[];
}

// export interface IPlacesWrap {
//     places: IPlace[];
// }