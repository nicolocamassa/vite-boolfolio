<script>
export default {
    name: 'Card',  
    props: {
        project: Object
    },
}
</script>
<template lang="">
    <div>
        {{ project.title }}
    </div>
</template>
<style lang="scss">

</style>