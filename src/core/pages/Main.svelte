<script lang="ts">
	import Header from "../../shared/components/Header.svelte";
	import TaskList from "../../shared/components/TaskList.svelte";
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
