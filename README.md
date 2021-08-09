# vue-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Functionalities:
- Clicking checkbox crosses the item
- delete an item
- Add item with user input text

## Components created
App:
- Can be viewed as top level element
TodoList:
- Has all TodoItems
- Text input and button for adding new todo item
TodoItems:
- checkbox marking completion
- Text for the todo item
- Delete button to delete item

## Steps for implementing each functionality:
### Clicking checkbox crosses item
- On checkbox tag:
    -  add directive v-on:click invoking method itemChecked() passing index and checked as parameter
- In TodoItem component methods:
    - Implement itemChecked(position, checked)
        - Call this.$store.commit(“changeItem”, {position : index, completed : checked })
- In store:
    - create a mutation function changeItem() with state and payload as parameter
        - Implement method to update item in state

### Deleting a todo item
- On delete button tag: 
    - add directive v-on:click invoking method deleteItem() passing index as parameter
- In TodoItem component methods:
    - Implement deleteItem(index) 
        - Call this.$store.commit(“deleteItem”, {position: index})
- In store:
    - create a mutation function deleteItem with state and payload as parameter
        - Implement method to delete an item in state (hint: use splice)

### Add item with user input
- In text input: 
    - Add directive v-model with value as any variable name (e.g message)
- In add item button:
    - add directive v-on:click invoking method addItem() passing the variable name (e.g message) as parameter
- In TodoItem component methods:
    - Implement addItem(message) 
        - Call this.$store.commit(“addItem”, {name: message})
- In store:
    - create a mutation function addItem() with state and payload as parameter
        - Implement method to add an item in state (hint: use push)
