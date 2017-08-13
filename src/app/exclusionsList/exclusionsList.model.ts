export class ExclusionListItem {

  constructor(
    public host: string,
    public excludedSince: Date,
    public excludedTill?: Date
  ) { }

}
