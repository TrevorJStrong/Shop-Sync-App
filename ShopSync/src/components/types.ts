import { TextStyle } from 'react-native';

type FontWeight = 'regular' | 'bold' | 'light';

export type TextProps = {
  text: string;
  style?: TextStyle;
  color?: string;
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  testId?: string;
  weight?: FontWeight;
  size?:
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl';
};
