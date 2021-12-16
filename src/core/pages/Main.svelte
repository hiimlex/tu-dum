<script lang="ts">
	import Header from "../../shared/components/Header.svelte";
	import TaskList from "../../shared/components/TaskList.svelte";
</script>

<div class="m-container">
	<div class="m-content">
		<Header />
		<TaskList />
	</div>
</div>

<style>
	.m-container {
		display: flex;
		width: 100%;

		align-items: center;
		justify-content: center;
	}

	.m-content {
		max-width: 1028px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		width: 100%;
		border-radius: 24px;
		background: #f0f4f7;
		padding: 32px;
		height: 100vh;
		overflow: hidden;
	}

	@media (max-width: 1028px) {
		.m-content {
			padding: 0;
			border-radius: 0;
		}
	}
</style>
