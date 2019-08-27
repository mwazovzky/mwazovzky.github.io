
<template>
    <div class="quote">
        <div class="quote-text">
            Simplicity is a great virtue but it requires hard work to achieve it and education to appreciate it. 
            And to make it worse complexity sells better. 
        </div>
        <div class="quote-author">Edsger W. Dijkstra</div>
    </div>
</template>

<script>
export default {
  name: 'Quote',
}
</script>

<style scoped>
.quote {
    padding: 20px;
}
.quote-text {
    text-align: justify;
    color: rgb(150, 150, 150);
}
.quote-author {
    margin-top: 1rem;
    text-align: right;
}
</style>


