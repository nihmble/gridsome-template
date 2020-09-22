<page-query>
  query Home($id: ID!) {
    data: home(id: $id) {
      heroImage
      heroText { code }
    }
  }
</page-query>

<template>
  <Layout>
    <img :src="$page.data.heroImage" alt="">
    <p v-html="$page.data.heroText.code" />
  </Layout>
</template>

<script>
export default {}
</script>

<style></style>
