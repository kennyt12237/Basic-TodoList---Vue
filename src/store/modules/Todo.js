const state = {
	  todos: [{
		name: "Watch lecture",
		completed: false,
	  },
	{
	  name: "Do assignment",
	  completed: false,
	},
	{
	  name: "Wake up",
	  completed: true,
	}]
}

const mutations = {
	changeItem(state, payload) {
	  state.todos[payload.position] = {
		name: state.todos[payload.position].name,
		completed: payload.completed
	  }
	},
	addItems(state, payload) {
	  state.todos.push(payload)
	},
	removeItem(state, payload) {
	  state.todos.splice(payload.position, 1);
	}
}

const getters = {
	getItems(state) {
	  return state.todos
	}
}

export default {
	state,
	mutations,
	getters
}