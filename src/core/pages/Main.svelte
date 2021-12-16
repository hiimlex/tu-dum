<script lang="ts">
  import { onMount, setContext } from "svelte";
  import type { BoredActivity } from "../../app/api/models/bored";
  import { getActivity } from "../../app/api/services/api";
  import Header from "../../shared/components/Header.svelte";
  import Tasks from "../../shared/components/Tasks.svelte";

  let tasks: BoredActivity[] = [
    {
      accessibility: 0.3,
      activity: "Buy a new house decoration",
      key: "3456114",
      link: "",
      participants: 1,
      price: 0.4,
      type: "recreational",
    },
  ];

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
  <Tasks />
</div>

<style>
  .m-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
</style>
