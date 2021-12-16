<script lang="ts">
	import type { BoredActivity } from "../../app/api/models/bored";
	import { tasks } from "../../app/store/task";

	export let task: BoredActivity;

	const handleInput = () => {
		$tasks = $tasks.map((el) => {
			if (el.key === task.key) {
				el.done = task.done;
			}

			return el;
		});
	};
</script>

<div class="m-task__container">
	<div class="m-task__item">
		<input
			type="checkbox"
			name={task.key}
			id={task.key}
			class="t-item__input"
			bind:checked={task.done}
			on:change={handleInput}
		/>
		<label
			for={task.key}
			class="t-item__label"
			class:t-item__label--done={task.done}>{task.activity}</label
		>
	</div>
</div>

<style>
	.m-task__container {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
	}

	.m-task__item {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		justify-content: flex-start;
		margin-bottom: 10px;
	}

	.t-item__input {
		margin: 0;
		min-width: 1rem;
		max-width: 1rem;
		max-height: 1rem;
		min-height: 1rem;

		position: relative;
		margin-top: 2px;
	}

	.t-item__label {
		margin-left: 8px;
		font-size: 0.9rem;
		font-weight: 500;
	}

	.t-item__label--done {
		text-decoration: line-through;
		color: #d7e0ec;
	}
</style>
