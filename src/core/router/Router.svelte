<script lang="ts">
  import { Router, Route } from "svelte-navigator";
  import Main from "../pages/Main.svelte";
</script>

<div class="content">
  <Router>
    <Route path="/" primary={false}>
      <Main />
    </Route>
  </Router>
</div>

<style>
  .content {
    width: 100vw;
    height: 100vh;
  }
</style>
