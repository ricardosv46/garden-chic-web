export enum Languaje {
  spanish = "Spanish",
  english = "English",
}

export interface EntityScreen {
  tittle: string;
  isDark: boolean;
  languaje: Languaje;
  loadingPage: boolean;
}
