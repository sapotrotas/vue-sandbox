import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PostApiProvider from './providers/api.provider'
import { createApolloProvider } from '@vue/apollo-option'
import { apolloClient } from './providers/apollo.client'

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient
})

const app = createApp(App)

app.use(PostApiProvider)
app.use(apolloProvider)

app.mount('#app')
