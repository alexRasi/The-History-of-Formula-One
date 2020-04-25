import { ItemGenericDetail } from './ItemGenericDetail';

export interface ItemDisplayPageGenericData {
  details: ItemGenericDetail[]
  title: string;
  titleAbove: string;
  titleBelow?: string;
  description: string;
  imageUrl: string;
}
