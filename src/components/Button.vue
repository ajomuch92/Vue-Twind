<template>
  <button :class="mainClass" :disabled="disabled">
    <slot />
  </button>
</template>

<script setup>
import { computed, defineComponent } from 'vue';
import { tw, apply } from '@twind/core';
import { createEvaluator } from '@ajomuch92/when.js'

defineComponent({
  name: 'TwindButton'
});

const props = defineProps({
  color: {
    type: String,
    default: 'blue'
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  dense: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
    default: 'solid',
    validator: (val) => ['solid', 'outlined', 'text'].includes(val)
  },
  wrapClass: {
    type: String,
    default: ''
  }
});

const cases = [
  ['solid', `bg-${props.color}(500 hover:700 active:800) text-white`],
  ['text', `bg-white hover:bg-${props.color}-50 active:bg-${props.color}-100 text-${props.color}-500`],
  ['outlined', `bg-white hover:bg-${props.color}-100 border-2 border-${props.color}-500 text-${props.color}-500 active:bg-${props.color}-200`],
];
const evaluatorBgColor = createEvaluator(cases);

const mainClass = computed(() => {
  const padding = props.dense ? 'px-2 py-1' : 'px-4 py-2';
  const color = evaluatorBgColor(props.variant);
  return tw(apply(`${padding}
    rounded-md text-lg ${color}
    bold
    disabled:(opacity-75 pointer-events-none) focus:outline-none`), props.wrapClass )
});
</script>

<style>

</style>