<template>
    <div class="profile-view-content">
        <ProfileHeaderTemplate />
        <ProfileAboutTemplate />
    </div>    
</template>

<script>
    import ProfileHeaderTemplate from '../templates/profile/ProfileHeaderTemplate.vue';
    import ProfileAboutTemplate from '../templates/profile/ProfileAboutTemplate.vue';

    export default {
        name: 'ProfileView',
        components: {
            ProfileHeaderTemplate,
            ProfileAboutTemplate
        }
    }
</script>

<style>
    .profile-about-template {
        border: 1px solid #21262d;
        padding: 20px;
        border-radius: 5px;
    }

    p {
        font-size: 16px;
        font-weight: 400;
    }
</style>