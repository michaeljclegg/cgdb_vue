<template>
    <div>
        <h2 class="name">User profile page</h2>
    </div>
</template>

<script>
    export default {
         setup () {
        

        return {}
    } 
    }
</script>

<style scoped>
.name {
    display: flex;
    flex-direction: column;
    flex-flow: row wrap;
  /* Then we define how is distributed the remaining space */
    justify-content: space-around;
     padding: 10;
  margin: 10;
}
</style>

