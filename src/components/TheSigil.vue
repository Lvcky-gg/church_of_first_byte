<script setup lang="ts">
// The valknut set at the foot of the seal, redrawn as vector so it stays
// legible at the size the header wants it. Three interlocking triangles,
// arranged Borromean, inside the two rings of the seal.
withDefaults(defineProps<{ size?: number }>(), { size: 44 })

const TRIANGLES = [
  '50.0,3.0 81.2,57.0 18.8,57.0',
  '59.5,19.5 90.7,73.5 28.3,73.5',
  '40.5,19.5 71.7,73.5 9.3,73.5',
]
</script>

<template>
  <svg
    class="sigil"
    :width="size"
    :height="size"
    viewBox="-6 -6 112 112"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <circle class="sigil__ring" cx="50" cy="50" r="54" />
    <circle class="sigil__ring sigil__ring--in" cx="50" cy="50" r="49" />
    <polygon
      v-for="(pts, i) in TRIANGLES"
      :key="i"
      class="sigil__tri"
      :class="{ 'sigil__tri--lead': i === 0 }"
      :points="pts"
    />
  </svg>
</template>

<style scoped>
.sigil {
  display: block;
  overflow: visible;
}

.sigil__ring {
  stroke: var(--brass-deep);
  stroke-width: 1.6;
}

.sigil__ring--in {
  stroke: var(--brass-dim);
  stroke-width: 0.9;
  opacity: 0.7;
}

.sigil__tri {
  stroke: var(--brass);
  stroke-width: 4.2;
  stroke-linejoin: round;
}

.sigil__tri--lead {
  stroke: var(--bone);
}

.sigil:hover .sigil__tri--lead {
  stroke: var(--ember);
}
</style>
