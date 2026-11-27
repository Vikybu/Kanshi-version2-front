<script lang="ts">
	import '../../styles/main.css';
	import logoKanshi from '$lib/assets/logoKanshi.png';

</script>

<svelte:head>
	<title>Administration - Kanshi</title>
</svelte:head>

<div class="global-page">
	<div class="login-logo-kanshi">
		<img src={logoKanshi} alt="Logo Kanshi" class="login-logo" />
		<p class="title-kanshi">Kanshi</p>
	</div>
</div>

<style>
	.global-page {
		background: var(--bg-tertiary);
	}

		.login-logo {
		display: block;
		width: clamp(50px, 20vw, 60px);
		height: auto;
		object-fit: contain;
		flex-shrink: 0;
	}

	.login-logo-kanshi {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
</style>
