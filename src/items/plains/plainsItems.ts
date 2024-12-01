import { IItem } from '../../types';
import { creaturesLoot } from './creaturesLoot';
import { food } from './food';
import { materials } from './materials';

export const plainsItems: IItem[] = [...materials, ...food, ...creaturesLoot];
