import gql from 'graphql-tag'

export const GET_CHARACTERS = gql`
  query Query($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
      }
      results {
        id
        name
        image
      }
    }
  }
`

export const GET_ACCOUNT = gql`
  query MeQuery {
    viewer {
      login
      name
    }
  }
`

export const GET_REPOS = gql`
  query Repos($login: String!, $numberOfRepos:Int!) {
    user(login: $login) {
      repositories(last: $numberOfRepos) {
        totalCount
        nodes {
          name
          projectsUrl
        }
      }
    }
  }
`

export const CREATE_REPO = gql`
mutation Mutation($input: CreateRepositoryInput!) {
  createRepository(input: $input) {
    repository {
      name
    }
  }
}
`