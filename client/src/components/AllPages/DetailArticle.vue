<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <detailArticle/>
        <comment-form/>
        <nested-comment/>
      </div>
      <div class="col-md-4">
        <widget/>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/NavBar.vue'
import detailArticle from '@/components/DetailPost.vue'
import widget from '@/components/Widget.vue'
import commentForm from '@/components/CommentForm.vue'
import nestedComment from '@/components/NestedComment.vue'

export default {
  name: 'about',
  components: {
    navbar,
    detailArticle,
    widget,
    commentForm,
    nestedComment,
    
  }
}
</script>
