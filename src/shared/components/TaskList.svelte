<script lang="ts">
	import { tasks } from "../../app/store/task";
	import HeaderTaskList from "./HeaderTaskList.svelte";
	import Task from "./Task.svelte";
</script>

<main class="m-content">
	<HeaderTaskList />

	{#each $tasks as task}
		{#await task then data}
			<Task task={data} />
		{/await}
	{:else}
		<div class="c-empty">
			<span class="c-empty__text">No tasks yet :C</span>
		</div>
	{/each}
</main>

<style>
	.m-content {
		align-self: center;

		width: 100%;
		background-color: #fff;
		padding: 32px;
		border-radius: 4px;
		border-top-right-radius: 28px;
		border-bottom-left-radius: 28px;

		box-shadow: 8px 8px 0 0 rgba(215, 234, 238, 255);

		display: flex;
		flex-direction: column;
	}

	.c-empty {
		width: 100%;
		height: 100%;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.c-empty__text {
		font-size: 1rem;
		font-weight: 500;
		color: #7d868d;
	}
</style>
