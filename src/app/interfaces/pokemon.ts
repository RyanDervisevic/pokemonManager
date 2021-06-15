import { Sprite } from './sprite';
import { TypeApiResult } from './type-api-result';

export interface Pokemon {
  id: number;
  name: string;
  height: number;
  order: number;
  weight: number;
  sprites: Sprite;
  types: TypeApiResult[];
}
