import crypto from 'crypto';

export abstract class Entity<T> {
  protected _id: string;
  props: T;

  constructor(props, id?: string) {
    this.props = props;
    this._id = id ?? crypto.randomUUID();
  }
}
