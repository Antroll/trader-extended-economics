import { IItem } from '../../types';
import { creaturesLoot } from './creaturesLoot';
import { food } from './food';
import { materials } from './materials';

export const ashlandsItems: IItem[] = [...materials, ...food, ...creaturesLoot];
