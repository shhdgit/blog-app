<template>
  <edit-layout
    ref="edit"
    :post="post"
    :cancel="cancel"></edit-layout>
</template>

<script>
  import EditLayout from 'components/layout/edit'
  import { articleApi } from 'api'

  export default {
    components: {
      EditLayout
    },

    methods: {
      post () {
        const edit = this.$refs.edit
        const title = edit.getTitle()
        const content = edit.getPreview()
        const editContent = edit.getContent()

        articleApi.save({ title, content, editContent })
          .then(res => {
            console.log('ok')
            this.$router.replace('/article')
          })
      },
      cancel () {
        this.$router.back()
      },
    },
  }
</script>

<style lang="css" scoped>
</style>
