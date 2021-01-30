export type Styles = {
  header: string;
  loginInfo: string;
  serviceName: string;
  userName: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
