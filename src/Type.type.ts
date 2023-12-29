/** @format */

export type SearchProps = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  onAddItems: (e: React.FormEvent) => void;
};

export type ItemsProp = {
  id: number;
  todo: string;
  isDone: boolean;
};

export type PropsItem = {
  items: ItemsProp[];
  setItems: React.Dispatch<React.SetStateAction<ItemsProp[]>>;
  onDelete: (id: number) => void;
  onDone: (id: number) => void;
};

export type ItemListProps = {
  item: ItemsProp;
  setItems?: React.Dispatch<React.SetStateAction<ItemsProp[]>>;
  onDelete?: (id: number) => void;
  onDone?: (id: number) => void;
};

export type ContextTodo = {
  children: React.ReactNode;
};

export type AllProps = SearchProps & ItemsProp & ItemListProps & PropsItem;
