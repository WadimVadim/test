<template>
  <input
    :value="value"
    @input="$emit('input', $event.target.value)"
    class="letter"
    maxlength="1"
    ref="input"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
  },
};
</script>


<style scoped>
    .letter {
        height: 7vh;
        width: 7vh;
        font-size: 32pt;
        text-align: center;
        text-transform: uppercase;
        border-radius: 1vh;
        caret-color: transparent;
    }
</style>