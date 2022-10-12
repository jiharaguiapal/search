<template>
  <div class="IndexPage">
    <div style="width: 800px" class="mx-auto mt-8">
      <Search/>
    </div>
  </div>
</template>

<script>
import Search from '@/components/Search';
export default {
  name: 'IndexPage',
  components: {
    Search
  }
}
</script>
