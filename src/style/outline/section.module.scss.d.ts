export type Styles = {
  section: string;
  sectionHeader: string;
  title: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
