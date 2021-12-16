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
	<div class="m-task__item" class:t-item__done={task.done}>
		<input
			type="checkbox"
			name={task.key}
			id={task.key}
			class="t-item__input"
			bind:checked={task.done}
			on:change={handleInput}
		/>
		<label for={task.key} class="t-item__label">{task.activity}</label>
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
		width: fit-content;
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		justify-content: flex-start;
		margin-bottom: 10px;

		cursor: pointer;
		text-decoration: none;
	}

	.t-item__done {
		text-decoration: line-through !important;
		color: #d7e0ec;
	}

	.t-item__input {
		margin: 0;
		min-width: 1rem;
		max-width: 1rem;
		max-height: 1rem;
		min-height: 1rem;

		position: relative;
		margin-top: 2px;
		cursor: pointer;
	}

	.t-item__label {
		margin-left: 8px;
		font-size: 0.9rem;
		font-weight: 500;
		cursor: pointer;
	}

	@media (min-width: 768px) {
		.m-task__item:hover {
			text-decoration: underline;
		}
	}
</style>
