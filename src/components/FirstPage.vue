<template>
    <h1>First</h1>
</template>

<script>
    export default {
        name: "FirstPage",
      data () {
        return {
        }
      },
      created:function () {
        this.$emit('footer', false);
      }
    }
</script>

<style scoped>

</style>
