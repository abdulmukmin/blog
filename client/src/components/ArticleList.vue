<template>
  <div class="container">
    <div class="list-group">
      <a href="#" class="list-group-item list-group-item-action">{{ nameList }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  props: ['nameList']
}
</script>


