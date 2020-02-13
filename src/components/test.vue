<template>
  <div>
    test
  </div>
</template>

<script>
  export default {
    name: 'test',
    components:{
    },
    data () {
      return {
      }
    },
    created:function () {
      this.$emit('header', false);
    }
  }
</script>
