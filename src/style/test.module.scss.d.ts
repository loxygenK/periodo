export type Styles = {
  'insideTheTest': string;
  'test': string;
}

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
