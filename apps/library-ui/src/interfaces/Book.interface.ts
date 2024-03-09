export interface Book {
  id: number;
  name?: string;
  author?: string;
  status?: BookStatus;
}

export enum BookStatus {
  Borrowed = "borrowed",
  Available = "available",
}

export interface BookUpdate {
  name?: string;
  author?: string;
  status?: BookStatus;
}
