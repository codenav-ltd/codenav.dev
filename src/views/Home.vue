<template>
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <h1 class="company-name">
          <span class="code">Code</span><span class="nav">Nav</span> Tech
        </h1>
        <p class="tagline">{{ $t('home.hero.tagline') }}</p>
        <p class="subtitle">
          {{ $t('home.hero.subtitle') }}
        </p>
        <div class="cta-buttons">
          <router-link to="/products" class="btn btn-primary">{{
            $t('home.hero.exploreProducts')
            }}</router-link>
        </div>
      </div>
      <div class="hero-image">
        <logo :black="false" :width="500" :height="500" class="logo-image" />
      </div>
    </section>

    <section class="features">
      <div class="container">
        <h2>{{ $t('home.features.title') }}</h2>
        <div class="feature-grid">
          <div class="feature-card">
            <div class="icon">
              <Rocket :size="32" />
            </div>
            <h3>{{ $t('home.features.developerLed.title') }}</h3>
            <p>
              {{ $t('home.features.developerLed.description') }}
            </p>
          </div>
          <div class="feature-card">
            <div class="icon">
              <Zap :size="32" />
            </div>
            <h3>{{ $t('home.features.latestTech.title') }}</h3>
            <p>
              {{ $t('home.features.latestTech.description') }}
            </p>
          </div>
          <div class="feature-card">
            <div class="icon">
              <Users :size="32" />
            </div>
            <h3>{{ $t('home.features.userCentric.title') }}</h3>
            <p>
              {{ $t('home.features.userCentric.description') }}
            </p>
          </div>
          <div class="feature-card">
            <div class="icon">
              <Sparkles :size="32" />
            </div>
            <h3>{{ $t('home.features.innovationFirst.title') }}</h3>
            <p>
              {{ $t('home.features.innovationFirst.description') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="products-preview">
      <div class="container">
        <h2>{{ $t('home.productsPreview.title') }}</h2>
        <div class="products-grid">
          <div class="product-card mygrammar" style="display: none;">
            <h3>{{ $t('home.productsPreview.myGrammar.title') }}</h3>
            <p>
              {{ $t('home.productsPreview.myGrammar.description') }}
            </p>
            <router-link to="/products" class="learn-more">{{
              $t('home.productsPreview.myGrammar.learnMore')
              }}</router-link>
          </div>
          <div class="product-card traffictrack">
            <h3>{{ $t('home.productsPreview.trafficTrack.title') }}</h3>
            <p>
              {{ $t('home.productsPreview.trafficTrack.description') }}
            </p>
            <router-link to="/products" class="learn-more">{{
              $t('home.productsPreview.trafficTrack.learnMore')
              }}</router-link>
          </div>
          <div class="product-card livemumu" style="display: none;">
            <h3>{{ $t('home.productsPreview.livemumu.title') }}</h3>
            <p>
              {{ $t('home.productsPreview.livemumu.description') }}
            </p>
            <router-link to="/products" class="learn-more">{{
              $t('home.productsPreview.livemumu.learnMore')
              }}</router-link>
          </div>
          <div class="product-card sqlbooks">
            <h3>{{ $t('home.productsPreview.sqlBooks.title') }}</h3>
            <p>
              {{ $t('home.productsPreview.sqlBooks.description') }}
            </p>
            <router-link to="/products" class="learn-more">{{
              $t('home.productsPreview.sqlBooks.learnMore')
              }}</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Logo from '../components/logo.vue'
import { Rocket, Zap, Users, Sparkles } from 'lucide-vue-next'
</script>

<style scoped lang="scss">
// Variables
$primary-gradient: linear-gradient(135deg, #858585 0%, #000000 100%);
$secondary-gradient: linear-gradient(135deg, #796363 0%, #000000 100%);
$primary-color: #000000;
$secondary-color: #858585;
$accent-color: #42b883;
$text-dark: #333;
$text-light: #666;
$bg-light: #f8f9fa;
$white: white;
$max-width: 1200px;
$mobile-breakpoint: 768px;

// Mixins
@mixin section-padding {
  padding: 5rem 2rem;
}

@mixin card-shadow {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.3s,
    box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }
}

@mixin gradient-text($gradient) {
  background: $gradient;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.home {
  min-height: 100vh;
}

.hero {
  min-height: 600px;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 2rem 5%;
  background: $primary-gradient;
  color: $white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
}

.hero-content {
  flex: 1;
  z-index: 2;
  max-width: 600px;
}

.hero-image {
  position: absolute;
  right: 330px;
  top: 100px;
  width: 100px;
  height: 100px;
  opacity: 0.1;
}

.company-name {
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: 1rem;
  letter-spacing: -0.4px;

  .code {
    @include gradient-text(linear-gradient(90deg, #fff, #f0f0f0));
  }

  .nav {
    // @include gradient-text(linear-gradient(90deg, #47eded, #4498e7));
  }
}

.tagline {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  font-weight: 300;
}

.subtitle {
  font-size: 1.1rem;
  opacity: 0.95;
  margin-bottom: 2rem;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
  display: inline-block;

  &-primary {
    background: $white;
    color: $primary-color;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
  }

  &-secondary {
    background: transparent;
    color: $white;
    border: 2px solid $white;

    &:hover {
      background: $white;
      color: $primary-color;
    }
  }
}

.hero-animation {
  // flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.code-block {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  padding: 2rem;
  backdrop-filter: blur(10px);

  pre {
    margin: 0;
    color: $accent-color;
    font-family: 'Fira Code', monospace;
    font-size: 1.1rem;
    text-shadow: 0 0 10px rgba($accent-color, 0.5);
  }
}

.features {
  @include section-padding;
  background: $bg-light;

  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: $text-dark;
  }
}

.container {
  max-width: $max-width;
  margin: 0 auto;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: $white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  @include card-shadow;

  .icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  h3 {
    color: $text-dark;
    margin-bottom: 1rem;
  }

  p {
    color: $text-light;
    line-height: 1.6;
  }
}

.products-preview {
  @include section-padding;

  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: $text-dark;
  }
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.product-card {
  padding: 2.5rem;
  border-radius: 16px;
  color: $white;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s;

  &.mygrammar {
    background: $primary-gradient;
  }

  &.traffictrack {
    background: $secondary-gradient;
  }

  &.livemumu {
    background: linear-gradient(135deg, #42b883 0%, #35495e 100%);
  }

  &.sqlbooks {
    background: linear-gradient(135deg, #4285f4 0%, #34a853 100%);
  }

  &:hover {
    transform: scale(1.05);
  }

  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1.5rem;
    line-height: 1.6;
    opacity: 0.95;
  }
}

.learn-more {
  color: $white;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  transition: transform 0.3s;

  &:hover {
    transform: translateX(5px);
  }
}

@keyframes shimmer {

  0%,
  100% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(180deg);
  }
}

@media (max-width: $mobile-breakpoint) {
  .hero {
    flex-direction: column;
    text-align: center;
    padding: 2rem;
  }

  .company-name {
    font-size: 3rem;
  }

  .tagline {
    font-size: 1.5rem;
  }

  .hero-animation {
    margin-top: 2rem;
  }

  .code-block {
    padding: 1rem;

    pre {
      font-size: 0.9rem;
    }
  }
}
</style>
