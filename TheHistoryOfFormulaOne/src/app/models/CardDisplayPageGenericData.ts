import { CardGenericData } from './CardGenericData';

export interface CardDisplayPageGenericData {
  cards: CardGenericData[]
  title: string;
  aboveTitle?: string;
  belowTitle?: string;
  totalData: number;
}
