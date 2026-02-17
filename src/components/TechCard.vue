<template>
  <div
    class="tech-card"
    ref="cardRef"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
    :style="cardStyle"
  >
    <!-- Background blur logo -->
    <div v-if="logo" class="card-bg-logo" :style="bgLogoStyle">
      <component
        v-if="typeof logo !== 'string'"
        :is="logo"
        :size="120"
        class="bg-icon"
      />
      <img v-else :src="logo" :alt="title" class="bg-img" />
    </div>
    <!-- Glow effect layer -->
    <div class="card-glow" :style="glowStyle"></div>
    <!-- Border glow -->
    <div class="card-border-glow" :style="borderGlowStyle"></div>
    <!-- Content -->
    <div class="card-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, type Component } from 'vue'

const props = withDefaults(
  defineProps<{
    logo?: string | Component
    title?: string
  }>(),
  { title: '' }
)

const cardRef = ref<HTMLElement | null>(null)
const mouseState = reactive({ x: 0, y: 0, isHovering: false })

const handleMouseMove = (e: MouseEvent) => {
  const card = cardRef.value
  if (!card) return

  const rect = card.getBoundingClientRect()
  mouseState.x = e.clientX - rect.left
  mouseState.y = e.clientY - rect.top
  mouseState.isHovering = true
}

const handleMouseLeave = () => {
  mouseState.isHovering = false
}

const cardStyle = computed(() => {
  if (!mouseState.isHovering) return {}

  const card = cardRef.value
  if (!card) return {}

  const rect = card.getBoundingClientRect()
  const centerX = rect.width / 2
  const centerY = rect.height / 2

  const rotateX = (mouseState.y - centerY) / 20
  const rotateY = (centerX - mouseState.x) / 20

  return {
    transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`,
  }
})

const glowStyle = computed(() => {
  if (!mouseState.isHovering) return { opacity: 0 }

  return {
    opacity: 1,
    background: `radial-gradient(600px circle at ${mouseState.x}px ${mouseState.y}px, rgba(102, 126, 234, 0.15), transparent 40%)`,
  }
})

const bgLogoStyle = computed(() => {
  const card = cardRef.value
  if (!card) return { opacity: 0 }

  return {
    opacity: mouseState.isHovering ? 1 : 0,
    left: `${mouseState.x}px`,
    top: `${mouseState.y}px`,
    transform: 'translate(-50%, -50%) scale(1.5)',
  }
})

const borderGlowStyle = computed(() => {
  if (!mouseState.isHovering) return { opacity: 0 }

  return {
    opacity: 1,
    background: `radial-gradient(400px circle at ${mouseState.x}px ${mouseState.y}px, rgba(102, 126, 234, 0.8), transparent 40%)`,
  }
})
</script>

<style scoped lang="scss">
$primary-color: #667eea;
$border-radius-md: 12px;
$box-shadow-light: 0 5px 15px rgba(0, 0, 0, 0.08);
$box-shadow-medium: 0 15px 30px rgba(0, 0, 0, 0.15);

.tech-card {
  background: white;
  padding: 2rem;
  border-radius: $border-radius-md;
  box-shadow: $box-shadow-light;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;
  transition:
    transform 0.15s ease-out,
    box-shadow 0.3s ease;
  will-change: transform;

  &:hover {
    box-shadow: $box-shadow-medium;
  }
}

.card-bg-logo {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition:
    opacity 0.4s ease,
    left 0.1s ease-out,
    top 0.1s ease-out;
  pointer-events: none;
  z-index: 1;
  filter: blur(150px) saturate(2);

  .bg-icon {
    color: $primary-color;
    opacity: 0.7;
    width: 150px;
    height: 150px;
  }

  .bg-img {
    width: 150px;
    height: 150px;
    object-fit: contain;
    opacity: 0.6;
  }
}

.card-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: 2;
}

.card-border-glow {
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  border-radius: $border-radius-md;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: 0;
  mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: exclude;
  -webkit-mask-composite: xor;
  padding: 1px;
}

.card-content {
  position: relative;
  z-index: 3;
}
</style>
