import { ApolloClient, ApolloLink, HttpLink, InMemoryCache, concat } from '@apollo/client/core'

const url = 'https://rickandmortyapi.com/graphql'
const github_url = 'https://api.github.com/graphql'

// const httpLink = new HttpLink({ uri: process.env.VUE_APP_API_TARGET })
const httpLink = new HttpLink({ uri: github_url })

const authMiddleware = new ApolloLink((operation, forward) => {
  // const token = localStorage.getItem('token')
  // TODO...token
  const token = ''

  operation.setContext({
    headers: {
      authorization: `Bearer ${token}`
    }
  })

  return forward(operation)
})

export const apolloClient = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache()
})
