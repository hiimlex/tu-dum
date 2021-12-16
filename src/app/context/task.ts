import type { BoredActivity } from "../api/models/bored";

export interface TaskContextProps {
  getTasks: () => BoredActivity[];
  setTasks: (tasks: BoredActivity[]) => void;
}
