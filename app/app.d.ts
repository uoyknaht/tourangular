export interface IPlace {
  _id: string;
  latitude: number;
  longitude: number;
  title: string;
    address: string;
    categoriesIds?: string[];
}

// export interface IPlacesWrap {
//     places: IPlace[];
// }