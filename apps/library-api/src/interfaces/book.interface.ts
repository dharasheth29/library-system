export interface Book {
  id: number;
  name?: string;
  author?: string;
  status?: BookStatus | undefined;
}

export enum BookStatus {
  Borrowed = "borrowed",
  Available = "available",
}

export interface BookUpdate {
  id: number;
  name?: string;
  author?: string;
  status: BookStatus | undefined;
}
