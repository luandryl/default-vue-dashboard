<script>
import Auth from '../../services/Authentication'

export default {
  name: 'navigation',
  methods: {
    toggleLeftSidenav: function () {
      this.$refs.leftSidenav.toggle()
    },
    logout: function () {
      Auth.logout()
    }
  }
}
</script>
<template>
  <div class="phone-viewport">
    <md-toolbar>
      <md-button class="md-icon-button" @click="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title">Default dashboard</h2>
    </md-toolbar>

    <md-sidenav class="md-left" ref="leftSidenav">
      <md-toolbar class="md-medium">
        <div class="md-toolbar-container">
          <h3 class="md-title">Ola, Luan</h3>
        </div>
      </md-toolbar>
      <div class="phone-viewport">
        <md-list>
          <md-list-item>
            <md-icon>home</md-icon> <a class='link-primary' href="#/">Home</a>
          </md-list-item>

          <md-list-item>
            <md-icon>timeline</md-icon> <a class='link-primary' href="#/dashboard">Gráficos de Irrigação</a>
          </md-list-item>

          <md-list-item>
            <md-icon>map</md-icon> <a class='link-primary' href="#/dashboard">Mapa das Estações</a>
          </md-list-item>

          <md-list-item>
            <md-icon>notifications</md-icon> <a class='link-primary' href="#/dashboard">Inbox</a>
          </md-list-item>

          <md-list-item>
            <md-icon>person</md-icon> <a class='link-primary' href="#/dashboard">Perfil</a>
          </md-list-item>
          <md-divider class="md-inset"></md-divider>
          <md-list-item>
            <md-icon>exit_to_app</md-icon> <a class='link-primary' v-on:click="logout" href="#/login">Sair</a>
          </md-list-item>

          
        </md-list>
      </div>

    </md-sidenav>

  </div>
</template>
<style lang="scss" scoped>
.link-primary {
  color: #333333 !important
}
</style>
