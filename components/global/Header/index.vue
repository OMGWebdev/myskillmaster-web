<template>
  <div class="header d-flex align-center" :class="headerClass">
    <div class="header__border screen-border">
      <v-app-bar flat class="header__appbar justify-space-between">
        <v-app-bar-nav-icon
          color="black"
          class="header__appbar__burger"
          @click="toggleDrawer(true)"
        />
        <NuxtLink
          :to="{
            name: 'index',
          }"
          class="header__appbar__logo"
        >
          <v-img
            width="100%"
            :src="require('@/assets/logo-w-text.svg')"
            contain
          />
        </NuxtLink>
        <div v-if="isLoggedIn" class="lg-hidden">
          <div class="mobile-header">
            <v-btn v-if="user.has_master_profile && $route.name !== 'add-a-lesson-create'" color="primary" to="/add-a-lesson/create">
              Create a Lesson
            </v-btn>
          </div>
        </div>
        <Searchbar
          v-if="showSearchbar"
          class="header__appbar__searchbar"
          :for-header="true"
        />
        <template v-if="isLoggedIn">
          <div class="header__appbar__avatar">
            <v-btn v-if="user.has_master_profile && $route.name !== 'add-a-lesson-create'" color="primary" to="/add-a-lesson/create">
              Create a Lesson
            </v-btn>
            <AccountButton />
          </div>
        </template>
        <template v-else>
          <div class="header__appbar__btn-container">
            <template v-if="isJoinVisible">
              <v-btn
                v-if="isHomePage"
                depressed
                class="header__appbar__btn header__appbar__btn--login"
                @click="$router.push({ name: 'login' })"
              >
                Login
              </v-btn>
              <v-btn
                color="primary"
                depressed
                class="header__appbar__btn"
                @click="$router.push({ name: 'sign-up' })"
              >
                Join
              </v-btn>
            </template>
            <template v-else>
              <v-btn
                color="primary"
                depressed
                class="header__appbar__btn"
                @click="$router.push({ name: 'login' })"
              >
                Login
              </v-btn>
            </template>
          </div>
        </template>
      </v-app-bar>

      <NavigationItems />
    </div>
  </div>
</template>
<script>
/**
 * ==================================================================================
 * Header
 * ==================================================================================
 **/

import { mapGetters } from 'vuex'
import SETTINGS from '@/utils/enums/Settings'
import Searchbar from '@/components/global/Searchbar'
import NavigationItems from '@/components/global/Nav/NavigationItems'
import NavigationMixin from '@/utils/mixins/Navigation'
import AccountButton from './fields/AccountButton'

export default {
  components: {
    Searchbar,
    NavigationItems,
    AccountButton
  },
  mixins: [NavigationMixin],
  data() {
    return {
      headerAdditionalClass: '',
      isFixed: false
    }
  },
  computed: {
    ...mapGetters({
      isLoggedIn: 'user/isLoggedIn',
      user: 'user/getUser'
    }),

    headerClass() {
      const classes = []
      const routeName = this.$route.name

      /**
       * Depending on page:
       * ...Add transparent background
       */
      if (SETTINGS.layout.pagesStartAtTop.includes(routeName)) {
        classes.push('header--transparent')
      }
      if (this.isFixed) {
        classes.push('position-fixed')
      }
      return classes.join(' ')
    },

    isHomePage() {
      return this.$route.name === 'index'
    },

    isJoinVisible() {
      return !this.isLoggedIn && !['sign-up'].includes(this.$route.name)
    },

    showSearchbar() {
      return !['index'].includes(this.$route.name)
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      const currentScrollPosition = document.documentElement.scrollTop
      if (currentScrollPosition > 100) {
        this.headerAdditionalClass = 'position-fixed'
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.header {
  position: absolute;
  width: 100%;
  height: $header-height;
  border-bottom: 1px solid $border-color;
  background-color: #ffffff;
  z-index: 100;
  .lg-hidden{
      display: none;
  }
  &__border,
  &__appbar {
    background-color: inherit !important;
  }

  &__appbar {
    ::v-deep .v-toolbar__content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-content: center;
      padding-left: 0;
      padding-right: 0;
    }

    &__burger {
      display: none;
      position: absolute;
      left: 0;
    }

    &__logo {
      width: 212px;
      flex-grow: 0;
    }

    &__avatar {
      display: flex;
    }

    &__btn-container {
      display: flex;
      flex-wrap: nowrap;
      margin-left: 5px;
    }

    &__btn {
      width: 170px;

      &--login {
        background-color: $primary-s4;
        color: $primary;
        margin-right: 10px;
      }
    }
  }
}

.header--transparent {
  background-color: transparent;
  border-bottom: none;
}
.position-fixed{
  background: #fff;
  position: fixed;
  top:0;
}

@media (max-width: map-get($grid-breakpoints, 'md')) {
  .header {
    height: $header-mobile-height;
    .mobile-header a {
      padding: 8px;
      font-size: 12px;
      margin-left: 15px;
      height: unset;
      min-height: unset;
    }

    &__appbar {
      ::v-deep .v-toolbar__content {
        justify-content: space-between;
      }

      &__searchbar {
        display: none;
      }

      &__burger {
        display: block;
      }

      &__logo {
        width: 145px;
        margin-left: 35px;
      }

      &__avatar {
        display: none;
      }
      .lg-hidden{
        display: block;
      }

    &__btn-container {
      position: absolute;
      right: 0;
    }

      &__btn {
        width: 19px;
        min-height: 32px !important;

        &--login{
          display: none;
        }
      }
    }
  }
}
</style>
