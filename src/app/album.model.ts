export interface Album {
  id: string;
  name: string;
  images: Array<{
    width: number;
    height: number;
    url: string;
  }>;
}
