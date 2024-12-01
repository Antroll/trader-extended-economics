import { IItem } from '../../types';
import { creaturesLoot } from './creaturesLoot';
import { food } from './food';
import { materials } from './materials';

export const mistlandsItems: IItem[] = [
  ...materials,
  ...food,
  ...creaturesLoot,
];
