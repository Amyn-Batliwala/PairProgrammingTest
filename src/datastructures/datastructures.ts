import { People } from "./types";

export const addTwoArrays = (arr1: number[], arr2: number[]): number[] => {
   return arr1.concat(arr2);
};

export const removeEvenNumbers = (arr: number[]): number[] => {
   return arr.filter(n => (n % 2));
};

export const locateNumber = (arr: number[], numberToLocate: number): boolean => {
  return arr.findIndex(n => n === numberToLocate) > -1;
};

export const calculateTotal = (arr: number[]): number => {
   return arr.reduce((acc, val) => acc + val);
};

export const sortedArrayOfObjects = (arrayOfObjects: People[]): People[] => {
    return arrayOfObjects.sort((a, b) => {
       return (a.name < b.name) ? -1  : (a.name > b.name) ? 1 : 0;
    })
};
