<template>
  <div class="products">
    <div class="hero-section">
      <h1>{{ $t('products.hero.title') }}</h1>
      <p class="subtitle">
        {{ $t('products.hero.subtitle') }}
      </p>
    </div>

    <section class="product-showcase">
      <div class="product mygrammar-section">
        <div class="product-content">
          <div class="product-info">
            <div class="product-header">
              <h2>{{ $t('products.myGrammar.title') }}</h2>
              <span class="tag soon">{{ $t('products.myGrammar.tag') }}</span>
            </div>
            <p class="product-tagline">{{ $t('products.myGrammar.tagline') }}</p>
            <p class="product-description">
              {{ $t('products.myGrammar.description') }}
            </p>
            <div class="features-list">
              <div class="feature-item">
                <span class="check">✓</span> {{ $t('products.myGrammar.features.aiSuggestions') }}
              </div>
              <div class="feature-item">
                <span class="check">✓</span> {{ $t('products.myGrammar.features.payAsYouGo') }}
              </div>
              <div class="feature-item">
                <span class="check">✓</span> {{ $t('products.myGrammar.features.multiScene') }}
              </div>
              <div class="feature-item">
                <span class="check">✓</span> {{ $t('products.myGrammar.features.toneOptimization') }}
              </div>
              <div class="feature-item">
                <span class="check">✓</span> {{ $t('products.myGrammar.features.noAds') }}
              </div>
            </div>
            <div class="info-flex">
              <div class="tech-stack">
                <h4>{{ $t('products.myGrammar.builtWith') }}</h4>
                <div class="tech-badges">
                  <span class="tech-badge">Swift</span>
                  <span class="tech-badge">iOS</span>
                </div>
              </div>
              <div class="info-right">
                <a
                  class="explore-link"
                  href="https://mygrammar.xiaodong.moe/"
                  target="_blank"
                  >{{ $t('products.myGrammar.explore') }}</a
                >
              </div>
            </div>
          </div>
          <div class="product-visual">
            <div class="mockup-container">
              <div class="mockup-screen">
                <div class="mockup-header">{{ $t('products.myGrammar.mockup.header') }}</div>
                <div class="mockup-content">
                  <p class="sample-text">
                    <span class="correction">{{ $t('products.myGrammar.mockup.sampleText').split(' ')[0] }}</span> {{ $t('products.myGrammar.mockup.sampleText').split(' ').slice(1).join(' ') }}
                  </p>
                  <div class="suggestion-box">
                    <span class="suggestion-icon">💡</span>
                    {{ $t('products.myGrammar.mockup.suggestion') }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="product traffictrack-section">
        <div class="product-content reverse">
          <div class="product-visual">
            <div class="mockup-container">
              <div class="mockup-screen dark">
                <div class="mockup-header">{{ $t('products.trafficTrack.mockup.header') }}</div>
                <div class="chart-container">
                  <div class="chart-bar" style="height: 60%"></div>
                  <div class="chart-bar" style="height: 80%"></div>
                  <div class="chart-bar" style="height: 45%"></div>
                  <div class="chart-bar" style="height: 90%"></div>
                  <div class="chart-bar" style="height: 70%"></div>
                </div>
                <div class="stats-row">
                  <div class="stat">
                    <span class="stat-value">47 {{ $t('products.trafficTrack.mockup.lines') }}</span>
                    <span class="stat-label">{{ $t('products.trafficTrack.mockup.tracking') }}</span>
                  </div>
                  <div class="stat">
                    <span class="stat-value">3.7 {{ $t('products.trafficTrack.mockup.min') }}</span>
                    <span class="stat-label">{{ $t('products.trafficTrack.mockup.arrivalTime') }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="product-info">
            <h2>{{ $t('products.trafficTrack.title') }}</h2>
            <p class="product-tagline">{{ $t('products.trafficTrack.tagline') }}</p>
            <p class="product-description">
              {{ $t('products.trafficTrack.description') }}
            </p>
            <div class="features-list">
              <div class="feature-item">
                <span class="check">✓</span> {{ $t('products.trafficTrack.features.realTimeEta') }}
              </div>
              <div class="feature-item">
                <span class="check">✓</span> {{ $t('products.trafficTrack.features.advancedSettings') }}
              </div>
              <div class="feature-item">
                <span class="check">✓</span> {{ $t('products.trafficTrack.features.fastLaunch') }}
              </div>
              <div class="feature-item">
                <span class="check">✓</span> {{ $t('products.trafficTrack.features.instantInfo') }}
              </div>
              <div class="feature-item">
                <span class="check">✓</span> {{ $t('products.trafficTrack.features.noAds') }}
              </div>
            </div>
            <div class="info-flex">
              <div class="tech-stack">
                <h4>{{ $t('products.trafficTrack.builtWith') }}</h4>
                <div class="tech-badges">
                  <span class="tech-badge">Swift</span>
                  <span class="tech-badge">iOS</span>
                </div>
              </div>
              <a
                class="explore-link"
                href="https://traffictrack.xiaodong.moe/"
                target="_blank"
                >{{ $t('products.trafficTrack.explore') }}</a
              >
            </div>
          </div>
        </div>
      </div>

      <div class="product livemumu-section">
        <div class="product-content">
          <div class="product-info">
            <div class="product-header">
              <h2>{{ $t('products.livemumu.title') }}</h2>
              <span class="tag available">{{ $t('products.livemumu.tag') }}</span>
            </div>
            <p class="product-tagline">{{ $t('products.livemumu.tagline') }}</p>
            <p class="product-description">
              {{ $t('products.livemumu.description') }}
            </p>
            <div class="features-list">
              <div class="feature-item">
                <span class="check">✓</span> {{ $t('products.livemumu.features.oneClick') }}
              </div>
              <div class="feature-item">
                <span class="check">✓</span> {{ $t('products.livemumu.features.smartAlerts') }}
              </div>
              <div class="feature-item">
                <span class="check">✓</span> {{ $t('products.livemumu.features.flexible') }}
              </div>
              <div class="feature-item">
                <span class="check">✓</span> {{ $t('products.livemumu.features.multiContact') }}
              </div>
              <div class="feature-item">
                <span class="check">✓</span> {{ $t('products.livemumu.features.bilingual') }}
              </div>
            </div>
            <div class="info-flex">
              <div class="tech-stack">
                <h4>{{ $t('products.livemumu.builtWith') }}</h4>
                <div class="tech-badges">
                  <span class="tech-badge">Swift</span>
                  <span class="tech-badge">iOS</span>
                </div>
              </div>
              <div class="info-right">
                <a
                  class="explore-link"
                  href="https://apps.apple.com/app/livemumu/id6740096547"
                  target="_blank"
                  >{{ $t('products.livemumu.download') }}</a
                >
              </div>
            </div>
          </div>
          <div class="product-visual">
            <div class="mockup-container">
              <div class="mockup-screen safety">
                <div class="mockup-header">{{ $t('products.livemumu.mockup.header') }}</div>
                <div class="safety-content">
                  <div class="status-indicator">
                    <span class="status-dot"></span>
                    <span class="status-text">{{ $t('products.livemumu.mockup.status') }}</span>
                  </div>
                  <div class="next-checkin">
                    <span class="label">{{ $t('products.livemumu.mockup.nextCheckIn') }}</span>
                    <span class="time">2h 30m</span>
                  </div>
                  <button class="alive-button">
                    {{ $t('products.livemumu.mockup.button') }}
                  </button>
                  <div class="contacts-count">
                    <span>3 {{ $t('products.livemumu.mockup.contacts') }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <h2>{{ $t('products.cta.title') }}</h2>
      <p>{{ $t('products.cta.subtitle') }}</p>
      <router-link to="/contact" class="cta-button">{{ $t('products.cta.button') }}</router-link>
    </section>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
// Variables
$primary-gradient: linear-gradient(135deg, #858585 0%, #000000 100%);
$secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
$primary-color: #667eea;
$secondary-color: #f093fb;
$accent-color: #42b883;
$text-dark: #333;
$text-medium: #555;
$text-light: #666;
$bg-light: #f8f9fa;
$white: white;
$max-width: 1200px;
$mobile-breakpoint: 768px;
$pattern-bg: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

// Mixins
@mixin section-padding {
  padding: 5rem 2rem;
}

@mixin gradient-text($gradient) {
  background: $gradient;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.products {
  min-height: 100vh;
}

.hero-section {
  background: $primary-gradient;
  color: $white;
  @include section-padding;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: $pattern-bg;
  }

  h1 {
    font-size: 3.5rem;
    font-weight: 900;
    margin-bottom: 1rem;
    position: relative;
    z-index: 1;
  }
}

.subtitle {
  font-size: 1.3rem;
  opacity: 0.95;
  position: relative;
  z-index: 1;
}

.product-showcase {
  @include section-padding;
}

.product {
  max-width: $max-width;
  margin: 0 auto 6rem;
}

.product-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  &.reverse {
    direction: rtl;

    > * {
      direction: ltr;
    }
  }
}

.product-info {
  .product-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    @include gradient-text($primary-gradient);
  }

  .tag {
    padding: 0.2rem 0.5rem;
    border-radius: 20px;

    &.soon {
      border: 2px solid $accent-color;
      color: $accent-color;
    }
  }
}

.traffictrack-section {
  .product-info h2 {
    @include gradient-text($secondary-gradient);
  }
}

.livemumu-section {
  .product-info h2 {
    @include gradient-text(linear-gradient(135deg, #42b883 0%, #35495e 100%));
  }

  .tag.available {
    border: 2px solid #42b883;
    color: #42b883;
  }
}

.safety-content {
  padding: 1.5rem 0;
}

.status-indicator {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 2rem;

  .status-dot {
    width: 12px;
    height: 12px;
    background: #42b883;
    border-radius: 50%;
    animation: pulse 2s infinite;
  }

  .status-text {
    font-weight: 600;
    color: #42b883;
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.next-checkin {
  background: #f0f9ff;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .label {
    color: $text-light;
    font-size: 0.9rem;
  }

  .time {
    font-weight: bold;
    color: $text-dark;
    font-size: 1.1rem;
  }
}

.alive-button {
  width: 100%;
  background: linear-gradient(135deg, #42b883 0%, #35495e 100%);
  color: white;
  border: none;
  padding: 1.2rem;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  margin-bottom: 1.5rem;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(66, 184, 131, 0.3);
  }
}

.contacts-count {
  text-align: center;
  color: $text-light;
  font-size: 0.9rem;
}

.product-tagline {
  font-size: 1.3rem;
  color: $text-light;
  margin-bottom: 1.5rem;
}

.product-description {
  color: $text-medium;
  line-height: 1.8;
  margin-bottom: 2rem;
}

.features-list {
  margin-bottom: 2rem;
}

.feature-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: #444;

  .check {
    color: $accent-color;
    font-size: 1.2rem;
    margin-right: 1rem;
  }
}

.info-flex {
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: space-between;
}

.tech-stack {
  h4 {
    color: $text-dark;
    margin-bottom: 1rem;
  }
}

.tech-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-badge {
  background: #f0f0f0;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  color: $text-medium;
}

.info-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.download {
  background: $primary-gradient;
  color: $white;
  padding: 0.6rem 1.5rem;
  border-radius: 30px;
}

.explore-link {
  display: inline-block;
  background: $primary-gradient;
  color: $white;
  padding: 0.6rem 1.5rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba($primary-color, 0.3);
  }
}

.product-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.mockup-container {
  width: 100%;
  max-width: 450px;
}

.mockup-screen {
  background: $white;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  padding: 1.5rem;
  border: 1px solid #e0e0e0;

  &.dark {
    background: #1a1a1a;
    color: $white;
    border-color: #333;

    .mockup-header {
      border-bottom-color: #333;
    }
  }
}

.mockup-header {
  font-weight: 600;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #f0f0f0;
}

.sample-text {
  color: $text-light;
  line-height: 1.6;
}

.correction {
  background: #ffeb3b;
  padding: 2px 4px;
  border-radius: 2px;
  color: $text-dark;
}

.suggestion-box {
  background: #f0f9ff;
  border-left: 3px solid $accent-color;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .suggestion-icon {
    font-size: 1.2rem;
  }
}

.chart-container {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  height: 150px;
  margin-bottom: 2rem;
}

.chart-bar {
  width: 40px;
  background: linear-gradient(180deg, $secondary-color 0%, #f5576c 100%);
  border-radius: 4px 4px 0 0;
  animation: grow 1s ease-out;
}

@keyframes grow {
  from {
    height: 0;
  }
}

.stats-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.stat {
  text-align: center;

  &-value {
    display: block;
    font-size: 1.8rem;
    font-weight: bold;
    color: $secondary-color;
  }

  &-label {
    display: block;
    font-size: 0.9rem;
    color: #888;
    margin-top: 0.25rem;
  }
}

.cta-section {
  background: $bg-light;
  @include section-padding;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: $text-dark;
  }

  p {
    color: $text-light;
    margin-bottom: 2rem;
    font-size: 1.2rem;
  }
}

.cta-button {
  display: inline-block;
  background: $primary-gradient;
  color: $white;
  padding: 1rem 3rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba($primary-color, 0.4);
  }
}

@media (max-width: $mobile-breakpoint) {
  .hero-section h1 {
    font-size: 2.5rem;
  }

  .product-content {
    grid-template-columns: 1fr;
    gap: 2rem;

    &.reverse {
      direction: ltr;
    }
  }

  .product {
    margin-bottom: 4rem;
  }
}
</style>
