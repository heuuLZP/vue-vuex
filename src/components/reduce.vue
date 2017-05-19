<template>
  <div class="reduce" @click="reduce">
    reduce
  </div>
</template>

<script>
export default {
  name: 'reduce',
  data () {
    return {
    }
  },
  methods: {
    reduce: function () {
      this.$store.dispatch('reduce')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.reduce {
  width: 100px;
  height: 100px;
  border: 1px solid #333;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
