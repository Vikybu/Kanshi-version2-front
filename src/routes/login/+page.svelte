<script lang="ts">
    import Login from '$lib/components/organism/Login/Login.svelte';
    import logoKanshi from '$lib/assets/logoKanshi.png';
    import "../../styles/main.css";
</script>

<div class="login-page">
    <div class='login-logo-kanshi'>
        <img
            src={logoKanshi}
            alt="Logo Kanshi"
            class="login-logo"
        />
        <p class="title-kanshi">Kanshi</p>
    </div>
    <Login />
</div>
