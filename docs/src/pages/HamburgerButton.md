# Hamburger Button

A simple, accessible hamburger button component.

### Example

```html
<template>
  <hamburger-button :active="expanded" @update:active="value => expanded = value" :barStyle="barStyle"/>
</template>
<script>
export default {
  data() {
    return {
      expanded: false,
      barStyle: {
        backgroundColor: 'red'
      }
    }
  }
}
</script>
````

### Props

Name                 | Type       | Default      | Required | Description
----------------     | ---------- | ------------ | -------- | -----------------------
`active`             | Boolean    | false        | true     | Determines if the button is in the active state
`barStyle`           | Object     |              | false    | Style declarations to be applied to each bar

### Events

Name                 | Params     | Description
----------------     | ---------- | -----------------------
`update:active`      | active     | Fired after the button is clicked, with new active state
