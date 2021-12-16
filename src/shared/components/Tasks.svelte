<script lang="ts">
  import { afterUpdate, getContext, onMount } from "svelte";
  import { get } from "svelte/store";
  import type { BoredActivity } from "../../app/api/models/bored";
  import { getActivity } from "../../app/api/services/api";
  import type { TaskContextProps } from "../../app/context/task";

  const { getTasks, setTasks } = getContext<TaskContextProps>("task");

  let tasks = [];
  let hasTask = false;

  const checkIfHaveTasks = (): void => {
    if (tasks && tasks.length > 0) {
      hasTask = true;
    } else {
      hasTask = false;
    }
  };

  const getRandomActivity = async (): Promise<BoredActivity> => {
    const { data: activity } = await getActivity();
    return activity;
  };

  afterUpdate(async () => {
    if (tasks && tasks.length > 0) {
      checkIfHaveTasks();
    }
  });

  onMount(async () => {
    tasks = getTasks();

    checkIfHaveTasks();
  });
</script>

<main class="m-content">
  <div class="m-content__header">
    <span class="c-header__title">Daily task </span>
    <span class="c-header__plus" on:click={() => alert(JSON.stringify(tasks))}>
      +
    </span>
  </div>
  {#each tasks as task}
    <div class="m-task__container">{task.activity}</div>
    as
  {/each}
</main>

<style>
  .m-content {
    align-self: center;

    width: 90%;
    background-color: #fff;
    padding: 28px;
    border-top-right-radius: 28px;
    border-bottom-left-radius: 28px;

    box-shadow: 8px 8px 0 0 rgba(215, 234, 238, 255);

    display: flex;
    flex-direction: column;
  }

  .m-content__header {
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .c-header__title {
    font-size: 1.2rem;
    font-weight: 700;
    color: #7d868d;
  }

  .c-header__plus {
    font-size: 2.2rem;
    font-weight: 400;
    color: #279af9;
  }
</style>
