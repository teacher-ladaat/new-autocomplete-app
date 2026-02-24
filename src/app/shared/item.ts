export class Item {
  constructor(
    public title: string,
    public id: number | string = crypto.randomUUID(),
  ) {}
}
