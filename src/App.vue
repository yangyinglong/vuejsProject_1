<template>
  <div id="app" class="break">
    <Headers />
    <router-view/>
    <Footers />
  </div>
</template>

<script>

import Headers from "./components/header"
import Footers from "./components/footer"

export default {
  name: 'App',
  components:{
    Headers,
    Footers
  }
}
</script>

<style>
.break {
  background: #C9C9C9
  /*#F8F8FF*/
}
</style>
