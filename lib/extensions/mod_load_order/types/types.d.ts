export interface ILoadOrderEntry {
  pos: number;
  enabled: boolean;
  locked?: boolean;
  external?: boolean;
}