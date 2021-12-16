<script lang="ts">
	import { getActivity } from "../../app/api/services/api";

	import { tasks } from "../../app/store/task";

	const handleNewActivity = async () => {
		const { data } = await getActivity();

		$tasks = [...$tasks, data];
	};

	$: completed = 0;

	$: if ($tasks) {
		completed = $tasks.filter((task) => task.done).length;
	}
</script>

<div class="a-task__container">
	<div class="a-task__header">
		<span class="a-header__title">Daily task </span>
		<span class="a-header__plus" on:click={handleNewActivity}> + </span>
	</div>

	<hr class="a-container__divider" />

	<div class="a-container__info">
		<span class="c-info__doned"><b>COMPLETED:</b> {completed} </span>
	</div>
</div>

<style>
	.a-task__container {
		width: 100%;

		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		margin-bottom: 32px;
	}

	.a-container__divider {
		border-color: #f0f4f733;
		width: 100%;
		margin: 12px 0;
	}

	.a-task__header {
		width: 100%;

		display: flex;
		flex-direction: row;
		align-items: flex-start;
		justify-content: space-between;
	}

	.a-header__title {
		font-size: 1.4rem;
		font-weight: 700;
		color: #7d868d;
		line-height: 100%;
	}

	.a-header__plus {
		font-size: 2rem;
		font-weight: 300;
		color: #279af9;
		line-height: 100%;
	}

	.a-container__info {
		width: 100%;
		margin: 4px 0;

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.c-info__doned {
		font-size: 0.9rem;
		font-weight: 500;
		color: #7d868d;
	}

	.c-info__doned b {
		color: #279af9;
	}
</style>
