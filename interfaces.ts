interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const printSummary = (
  item: Reportable
  //   {
  //   name: string;
  //   year: number;
  //   broken: boolean;
  // }
): void => {
  console.log(item.summary());
  // console.log(`Name: ${vehicle.name}`);
  // console.log(`Year: ${vehicle.year}`);
  // console.log(`Broken: ${vehicle.broken}`);
};

printSummary(oldCivic);
