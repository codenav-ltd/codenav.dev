<template>
  <div class="support-page">
    <div class="hero-section">
      <h1>Support</h1>
      <p class="subtitle">We're here to help</p>
    </div>

    <div class="content-section">
      <div class="container">
        <p>
          If you have any questions or feedback, use one of the following methods to contact us.
        </p>

        <h2>Email</h2>
        <p>
          <a href="mailto:support@codenav.dev">support@codenav.dev</a>
        </p>

        <h2>Phone</h2>
        <p>
          <a href="tel:+12408668085">+1 (240) 866-8085</a>
        </p>

        <footer class="policy-footer">© 2025 CodeNav. All rights reserved.</footer>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
$primary-gradient: linear-gradient(135deg, #858585 0%, #000000 100%);
$primary-color: #667eea;
$text-dark: #333;
$text-medium: #555;
$text-light: #666;
$bg-light: #f8f9fa;
$white: white;
$max-width: 900px;
$mobile-breakpoint: 768px;

.support-page {
  min-height: 100vh;
  background: $bg-light;
}

.hero-section {
  background: $primary-gradient;
  color: $white;
  padding: 4rem 2rem 3rem;
  text-align: center;

  h1 {
    font-size: 3rem;
    font-weight: 900;
    margin-bottom: 1rem;
  }
}

.subtitle {
  font-size: 1.1rem;
  opacity: 0.95;
}

.content-section {
  padding: 3rem 2rem;
}

.container {
  max-width: $max-width;
  margin: 0 auto;
  background: $white;
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  line-height: 1.6;
  color: $text-dark;

  h2 {
    margin-top: 2em;
    color: $text-dark;
    font-size: 1.8rem;
    border-bottom: 2px solid #eee;
    padding-bottom: 0.3em;
  }

  h3 {
    margin-top: 1.5em;
    color: $text-medium;
    font-size: 1.4rem;
  }

  p {
    margin: 0.6em 0;
    color: $text-medium;
  }

  ul {
    padding-left: 1.2em;

    li {
      margin: 0.6em 0;
      color: $text-medium;
    }
  }

  a {
    color: $primary-color;
    text-decoration: none;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }
}

.policy-footer {
  margin-top: 4em;
  font-size: 0.9em;
  color: $text-light;
  border-top: 1px solid #eee;
  padding-top: 1em;
}

@media (max-width: $mobile-breakpoint) {
  .hero-section h1 {
    font-size: 2rem;
  }

  .container {
    padding: 2rem 1.5rem;
  }

  .content-section {
    padding: 2rem 1rem;
  }
}
</style>
