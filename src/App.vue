<template>
  <div id="app">
    <header class="navbar">
      <div class="nav-container">
        <router-link to="/" class="logo">
          <Logo :black="true" :width="36" :height="36" class="logo-comp" />
          <span class="logo-code">Code</span><span class="logo-nav">Nav</span>
        </router-link>
        <nav class="nav-links">
          <router-link to="/">{{ $t('nav.home') }}</router-link>
          <router-link to="/products">{{ $t('nav.products') }}</router-link>
          <router-link to="/about">{{ $t('nav.about') }}</router-link>
          <router-link to="/tech-stack">{{ $t('nav.techStack') }}</router-link>
          <router-link to="/contact">{{ $t('nav.contact') }}</router-link>
          <div class="btn-container">
            <div class="lang-dropdown" ref="langDropdownRef">
              <button @click="langDropdownOpen = !langDropdownOpen" class="lang-btn" :title="$t('nav.language')">
                {{ locale === 'en' ? 'EN' : '中文' }}
                <span class="lang-chevron" :class="{ open: langDropdownOpen }">▼</span>
              </button>
              <div v-if="langDropdownOpen" class="lang-dropdown-menu">
                <button @click="setLanguage('en')" class="lang-option" :class="{ active: locale === 'en' }">English</button>
                <button @click="setLanguage('zh-CN')" class="lang-option" :class="{ active: locale === 'zh-CN' }">中文</button>
              </div>
            </div>
            <a target="_blank" href="https://sso.codenav.dev" class="sso-btn">{{ $t('nav.signIn') }}</a>
          </div>
        </nav>
        <button class="mobile-menu-btn" @click="toggleMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <nav class="mobile-nav" v-if="mobileMenuOpen">
        <router-link to="/" @click="closeMobileMenu">{{ $t('nav.home') }}</router-link>
        <router-link to="/products" @click="closeMobileMenu">{{ $t('nav.products') }}</router-link>
        <router-link to="/about" @click="closeMobileMenu">{{ $t('nav.about') }}</router-link>
        <router-link to="/tech-stack" @click="closeMobileMenu">{{ $t('nav.techStack') }}</router-link>
        <router-link to="/contact" @click="closeMobileMenu">{{ $t('nav.contact') }}</router-link>
      </nav>
    </header>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <footer class="footer">
      <div class="footer-content">
        <div class="company-logo">
          <Logo :black="false" class="logo" />
          <span>{{ $t('footer.company') }}</span>
        </div>
        <p>{{ $t('footer.copyright') }}</p>
        <p class="footer-tagline">{{ $t('footer.tagline') }}</p>
        <div class="footer-links">
          <router-link to="/privacy">{{ $t('footer.privacyPolicy') }}</router-link>
          <span class="separator">•</span>
          <router-link to="/terms">{{ $t('footer.termsConditions') }}</router-link>
          <template v-if="isConavTech">
            <span class="separator">•</span>
            <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">{{ $t('footer.icpRecord')
              }}</a>
          </template>
        </div>
        <iframe width="380" height="38" style="border:0;margin-top:12px;"
          src="https://climate.stripe.com/badge/jmJTZ5?theme=dark&size=small&locale=en-GB"></iframe>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";
import Logo from "./components/logo.vue";

const { locale } = useI18n();

const mobileMenuOpen = ref(false);
const langDropdownOpen = ref(false);
const langDropdownRef = ref<HTMLElement | null>(null);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

const setLanguage = (lang: string) => {
  locale.value = lang;
  localStorage.setItem('language', lang);
  langDropdownOpen.value = false;
};

const handleClickOutside = (e: MouseEvent) => {
  if (langDropdownRef.value && !langDropdownRef.value.contains(e.target as Node)) {
    langDropdownOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});

// Check if the current domain is conav.tech
const isConavTech = computed(() => {
  return window.location.hostname === 'conav.tech';
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 68px;
}

.logo {
  font-size: 24px;
  font-weight: 900;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: all 0.3s;

  .logo-comp {
    width: 36px;
    height: 36px;
    margin-right: 0.4rem;
  }
}

.logo:hover {
  .logo-code {
    color: #000000;
  }
}

.logo-code {
  transition: all 0.5s;
  color: #000000;
}

.logo-nav {
  color: #000000;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: nowrap;

  a:not(.sso-btn) {
    color: #555;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s;
    position: relative;
    white-space: nowrap;

    &::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, #858585, #000000);
      transition: width 0.3s;
    }

    &:hover::after,
    &.router-link-active::after {
      width: 100%;
    }

    &.router-link-active {
      color: #000000;
    }
  }
}

.btn-container {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.lang-dropdown {
  position: relative;
}

.lang-btn {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: transparent;
  border: 2px solid #000000;
  color: #000000;
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #000000;
    color: white;
    transform: translateY(-2px);
  }
}

.lang-chevron {
  font-size: 0.6rem;
  transition: transform 0.2s;
  opacity: 0.8;

  &.open {
    transform: rotate(180deg);
  }
}

.lang-dropdown-menu {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 120px;
  background: white;
  border: 2px solid #000000;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  z-index: 1001;
}

.lang-option {
  display: block;
  width: 100%;
  padding: 0.6rem 1rem;
  background: none;
  border: none;
  font-size: 0.9rem;
  font-weight: 500;
  color: #333;
  cursor: pointer;
  text-align: left;
  transition: background 0.2s;

  &:hover {
    background: rgba(0, 0, 0, 0.06);
  }

  &.active {
    background: rgba(0, 0, 0, 0.08);
    font-weight: 600;
    color: #000000;
  }
}

.contact-btn {
  background: linear-gradient(135deg, #858585 0%, #000000 100%);
  color: white !important;
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  transition: transform 0.3s, box-shadow 0.3s !important;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  &::after {
    display: none !important;
  }
}

.sso-btn {
  background: #000000;
  color: white !important;
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  border: 2px solid #000000;
  transition: transform 0.3s, box-shadow 0.3s !important;
  text-decoration: none !important;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  &::after {
    display: none !important;
  }
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.mobile-menu-btn span {
  display: block;
  width: 25px;
  height: 3px;
  background: #000000;
  margin: 5px 0;
  transition: all 0.3s;
  border-radius: 2px;
}

.mobile-nav {
  display: none;
  background: white;
  border-top: 1px solid #eee;
  padding: 1rem;
}

.mobile-nav a {
  display: block;
  padding: 1rem;
  color: #555;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s;
  border-radius: 8px;
}

.mobile-nav a:hover,
.mobile-nav a.router-link-active {
  background: linear-gradient(135deg,
      rgba(133, 133, 133, 0.1) 0%,
      rgba(0, 0, 0, 0.1) 100%);
  color: #000000;
}

.footer {
  background: linear-gradient(135deg, #858585 0%, #000000 100%);
  color: white;
  padding: 2rem;
  text-align: center;
  margin-top: auto;

  .company-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1.6rem;

    .logo {
      width: 36px;
      height: 36px;
    }
  }
}

.footer-content p {
  margin: 0.5rem 0;
}

.footer-tagline {
  opacity: 0.9;
  font-style: italic;
}

.footer-links {
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  font-size: 0.9rem;

  a {
    color: white;
    text-decoration: none;
    opacity: 0.9;
    transition: opacity 0.3s;

    &:hover {
      opacity: 1;
      text-decoration: underline;
    }
  }

  .separator {
    opacity: 0.6;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .mobile-menu-btn {
    display: block;
  }

  .mobile-nav {
    display: block;
  }

  .nav-container {
    padding: 1rem;
  }

  .logo {
    font-size: 1.5rem;
  }
}
</style>
