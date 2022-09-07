export const getArrayOfUniqueValues = (dataArray: any[], filterKey: string) => {
  return dataArray
    .map((item: any) => item[filterKey])
    .filter(
      (value: any, index: any, self: string | any[]) =>
        self.indexOf(value) === index
    );
};
