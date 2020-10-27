import Vue from 'vue'
import Vuex from 'vuex'

import { auth, googleProvider } from './firebaseConf'

Vue.use(Vuex)

interface UserData {
  email: string,
  displayName: string,
  avatar: string,
}

interface AuthState {
  isVerified: boolean,
  loggedIn: boolean,
  userData: UserData | null,
}

export default new Vuex.Store<{auth: AuthState}>({
  state: {
    auth: {
      isVerified: false,
      loggedIn: false,
      userData: null,
    },
  },
  mutations: {
    SET_LOGGED_IN (state, value) {
      state.auth.loggedIn = value
    },
    SET_USER (state, data) {
      state.auth.userData = data && { displayName: data.displayName, email: data.email, avatar: data.photoURL }
    },
    SET_AUTH_CHECKED (state, data) {
      state.auth.isVerified = data
    },
  },
  actions: {
    logOut () {
      auth.signOut()
    },
    loginByGoogle () {
      auth.signInWithPopup(googleProvider)
    },
    startListeningForAuthChanges ({ commit }) {
      let isChecked = false
      auth.onAuthStateChanged(user => {
        if (!isChecked) {
          commit('SET_AUTH_CHECKED', true)
          isChecked = true
        }
        commit('SET_LOGGED_IN', user !== null)
        if (user) {
          commit('SET_USER', user)
        } else {
          commit('SET_USER', null)
        }
      })
    },
  },
})
