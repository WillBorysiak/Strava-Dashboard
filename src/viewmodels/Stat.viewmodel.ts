export class StatViewModel {
  id: number;
  name: string;
  stat: string | number;
  icon: JSX.Element;

  constructor(
    id: number,
    name: string,
    stat: string | number,
    icon: JSX.Element,
  ) {
    this.id = id;
    this.name = name;
    this.stat = stat;
    this.icon = icon;
  }
}
