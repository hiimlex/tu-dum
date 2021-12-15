<script lang="ts">
  import { getContext, onMount } from "svelte";

  const { getTasks } = getContext("task");

  onMount(() => {
    const _tasks = getTasks();

    console.log(_tasks);
  });
</script>

<main class="m-content">
  <div class="m-content__header">
    <span class="c-header__title">Daily task</span>
    <span class="c-header__plus"> + </span>
  </div>
</main>

<style>
  .m-content {
    align-self: center;

    width: 95%;
    background-color: #fff;
    padding: 28px;
    border-top-right-radius: 28px;
    border-bottom-left-radius: 28px;

    box-shadow: 8px 8px 0 0 rgba(215, 234, 238, 255);

    display: flex;
  }

  .m-content__header {
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
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
