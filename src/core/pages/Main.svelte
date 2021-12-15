<script lang="ts">
  import { onMount, setContext } from "svelte";
  import type { BoredActivity } from "../../app/api/models/bored";
  import { getActivity } from "../../app/api/services/api";
  import Header from "../../shared/components/Header.svelte";
  import TaskList from "../../shared/components/TaskList.svelte";

  let tasks: BoredActivity[] = [];

  setContext("task", {
    getTasks: () => tasks,
    setTasks: (_task: BoredActivity[]) => (tasks = _task),
  });

  onMount(async () => {
    const { data } = await getActivity();
  });
</script>

<div class="m-container">
  <Header />
  <TaskList />
</div>

<style>
  .m-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
</style>
