<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <label for="result">6</label>
    <div class="count">
      <add></add>
      <reduce></reduce>
    </div>
  </div>
</template>

<script>
import Add from './add.vue'
import Reduce from './reduce.vue'
export default {
  name: 'hello',
  components: {
    Add,
    Reduce
  },
  data () {
    return {
      msg: 'counter'
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
label {
  font-size: 30px;
  color: #ff0000;
}
.count {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
