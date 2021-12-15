<script lang="ts">
  import { onMount } from "svelte";
  import { getActivity } from "./app/api/services/api";

  onMount(async () => {
    const { data } = await getActivity();

    console.log(data);
  });
</script>

<style>
</style>
