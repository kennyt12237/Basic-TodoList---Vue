<template>
  <div class="hello">
	<p :style="computeStyle">
    	<input type="checkbox" :key="number" :checked="isChecked" v-on:change="buttonClicked(number, isChecked)"/>
		{{ name }}
		<button v-on:click="removeItem(number)">Delete</button>
	</p>

  </div>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    name: String,
	isChecked: Boolean,
	number: Number
  },
  methods: {
	  buttonClicked(number, checked) {
		this.$store.commit('changeItem', {
			position: number,
			completed: !checked
		})
	  },
	  removeItem(number) {
		  this.$store.commit('removeItem', {
			  position: number
		  })
	  }
  },
  computed: {
	  computeStyle() {
		  if (this.isChecked) {
			  return {"text-decoration" : "line-through"}
		  }
		  return {"text-decoration": "none"}
	  },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>
