export interface IValid {
  dirty: boolean;
  valid: boolean;
}

export interface InodeValue {
  nodeValue?: string;
}

export interface INamedNodeMap extends NamedNodeMap {
  controlid?: InodeValue;
}

export interface IFields {
  name: string;
  telephone: string;
  email: string;
  profile: string;
  studio: string;
  receiver: string;
  city: string;
  sources: string;
}

export interface ILoader {
  loading: boolean
}

export interface IClickedValid {
  valid: boolean
}

export interface ICombiner {
  fields: IFields;
  loading: ILoader;
}
