export interface BoredActivity {
  activity: string;
  accessibility: number;
  type: string;
  participants: number;
  price: number;
  link: string;
  key: string;
}

export interface TaskContextProps {
  getTasks: () => BoredActivity[];
  setTasks: (tasks: BoredActivity[]) => void;
}
