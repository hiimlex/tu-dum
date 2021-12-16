import { writable } from "svelte/store";
import type { BoredActivity } from "../api/models/bored";

export const tasks = writable<BoredActivity[]>([]);
