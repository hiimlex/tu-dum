<script lang="ts">
	import { getActivity } from "../../app/api/services/api";

	import { tasks } from "../../app/store/task";

	let completedChange = false;

	const handleNewActivity = async () => {
		const { data } = await getActivity();

		$tasks = [...$tasks, data];
	};

	let completed = 0;

	tasks.subscribe((value) => {
		const _completed = value.filter((task) => task.done).length;

		if (completed !== _completed) {
			completed = _completed;
			completedChange = true;

			setTimeout(() => {
				completedChange = false;
			});
		}
	});
</script>

<div class="a-task__container">
	<div class="a-task__header">
		<span class="a-header__title">Daily task </span>
		<span class="a-header__plus" on:click={handleNewActivity}> + </span>
	</div>

	<hr class="a-container__divider" />

	<div class="a-container__info">
		<span class="c-info__doned">
			<b>COMPLETED:</b>
			<span style="padding: 4px;" class:completed={completedChange}
				>{completed}</span
			>
		</span>
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
		cursor: pointer;
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

		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.c-info__doned b {
		color: #279af9;
	}
</style>
