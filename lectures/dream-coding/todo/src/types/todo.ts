export interface TypeTodo {
  completed: boolean;
  content: string;
  id: string;
}

export type Filter = "active" | "completed" | "all";
