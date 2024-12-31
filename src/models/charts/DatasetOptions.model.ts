export class DatasetOptions {
  label: string;
  backgroundColor: string[];
  borderColor: string[];
  borderWidth: number;

  constructor(
    label: string,
    backgroundColor: string[],
    borderColor: string[],
    borderWidth: number,
  ) {
    this.label = label;
    this.backgroundColor = backgroundColor;
    this.borderColor = borderColor;
    this.borderWidth = borderWidth;
  }
}
