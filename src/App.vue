<template>
  <!--
  <pagination-table 
    :data="characters.results"
    :limit="charactersLimit"
    :total="charactersTotal"
    @fetch-data="getData"
  >
 
  </pagination-table>
  -->
  <button @click="page++">page</button>
  
  <!--<button @click="createRepo">create vue-graphql repo</button>-->


  <button 
    class="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3"
    @click="getTitleEnvVar"
  >
    env var testing
  </button>

</template>

<script>
  import PaginationTable from './components/PaginationTable.vue'
  import { GET_REPOS, GET_ACCOUNT, CREATE_REPO } from './queries/apollo.queries';

  export default {
    components: {
      PaginationTable
    },
    data () {
      return {
        postsData: [],
        charactersLimit: 20,
        location: 1,
        characters: [],
        page: 1,
        filter: {
          name: ''
        }
      }
    },
    /*
    apollo: {
      // Queries here
      
      loginGitHub: {
        query: GET_ACCOUNT
      },
      repos: {
        query: GET_REPOS,
        variables () {
          return {
            login: 'sapotrotas',
            numberOfRepos: 5
          }
        }
      },
      characters: {
        query: GET_CHARACTERS,
        // reactive
        variables () {
          return {
            page: this.page,
            filter: this.filter
          }
        }
      }
    },
    */
    computed: {
      charactersTotal () {
        return this.characters.info?.count
      }
    },
    methods: {
      getData (options) {
        this.page = options.page
        

        /*
        if (options && options.limit !== null && options.limit !== undefined) {
          this.postsLimit = parseInt(options.limit)
        }

        return this.$fetchData('posts', {
          limit: this.postsLimit,
          skip: options?.page ? options.page * this.postsLimit : 0
        })
          .then(data => {
            this.postsData = this.mapPostsData(data.posts)
            this.postsTotal = data.total
            console.log(this.postsData)
          })
        */
      },
      mapPostsData (posts) {
        return posts.map(post => {
          return {
            id: post.id,
            title: post.title,
            body: post.body
          }
        })
      },
      createRepo() {
        this.$apollo.mutate({
          mutation: CREATE_REPO,
          variables: {
            input: {
              visibility: 'PRIVATE',
              name: 'vue-graphql'
            }
          }
        })
      },
      getTitleEnvVar() {
        console.log(import.meta.env.VITE_APP_TITLE)
        console.log(import.meta.env.DEV)
      }
    } 
  }
</script>

<style scoped>

</style>
