<template>
  <!-- Blog Post -->
  <div class="card mb-4">
    <div class="card-body">
      <h2 class="card-title">{{title}}</h2>
      <p class="card-text" maxlength="5">{{description}}...</p>
      <router-link to="/article"><button>Read More</button></router-link>
    </div>
    <div class="card-footer text-muted">
      Posted on {{createdAt}} by
      <a href="#">Start Bootstrap</a>
    </div>
  </div>
</template>

<script>
export default {
  props :['title', 'description', 'createdAt']
}
</script>
