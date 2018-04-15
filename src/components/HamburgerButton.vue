<template>
  <button
  class="hamburger-button"
  :class="{ 'active': _active }"
  type="button"
  aria-label="Menu"
  aria-controls="navigation"
  :aria-expanded="active ? 'true' : 'false'"
  @click.prevent="onClick">
    <div class="con">
      <div class="bar top" :style="barStyle"></div>
      <div class="bar middle" :style="barStyle"></div>
      <div class="bar bottom" :style="barStyle"></div>
    </div>
  </button>
</template>

<script>
export default {
  name: 'hamburger',
  props: {
    active: {
      type: Boolean,
      required: true
    },
    barStyle: {
      type: Object
    }
  },
  data () {
    return {
    }
  },
  computed: {
    _active: {
      get () {
        return this.active
      },
      set (newValue) {
        this.$emit('update:active', newValue)
      }
    }
  },
  methods: {
    onClick (event) {
      this._active = !this.active
    }
  }
}
</script>

<style lang="scss">
// originally lifted from
// https://codepen.io/tonkec/pen/XXgdoo

.hamburger-button {
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
  font: inherit;
  color: inherit;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  line-height: 0;
  padding: 3px 5px;
  outline: none;

  &:focus {
    outline: none;
  }

  .con {
    cursor: pointer;
    display: inline-block;
    width: auto;
    margin: 0 auto;
    -webkit-transition: all .25s ease;
    -moz-transition: all .25s ease;
    -ms-transition: all .25s ease;
    -o-transition: all .25s ease;
    transition: all .25s ease;

    .bar {
      display: block;
      height: 3px;
      width: 25px;
      background: black;
      margin: 5px auto;

      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

    .middle {
      margin: 0 auto;
    }

    .bar {
      -webkit-transition: all .25s ease;
      -moz-transition: all .25s ease;
      -ms-transition: all .25s ease;
      -o-transition: all .25s ease;
      transition: all .25s ease;
    }
  }

  &.active .top {
    // ~0.32 * width
    -webkit-transform: translateY(8px) rotateZ(45deg);
    -moz-transform: translateY(8px) rotateZ(45deg);
    -ms-transform: translateY(8px) rotateZ(45deg);
    -o-transform: translateY(8px) rotateZ(45deg);
    transform: translateY(8px) rotateZ(45deg);
  }

  &.active .bottom {
    -webkit-transform: translateY(-8px) rotateZ(-45deg);
    -moz-transform: translateY(-8px) rotateZ(-45deg);
    -ms-transform: translateY(-8px) rotateZ(-45deg);
    -o-transform: translateY(-8px) rotateZ(-45deg);
    transform: translateY(-8px) rotateZ(-45deg);
  }

  &.active .middle {
    width: 0;
  }
}

</style>
