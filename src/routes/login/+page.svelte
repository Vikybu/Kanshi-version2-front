<script lang="ts">
	import Login from '$lib/components/organism/Login/Login.svelte';
	import logoKanshi from '$lib/assets/logoKanshi.png';
	import '../../styles/main.css';
</script>

<div class="login-page">
	<div class="login-logo-kanshi">
		<img src={logoKanshi} alt="Logo Kanshi" class="login-logo" />
		<p class="title-kanshi">Kanshi</p>
	</div>
	<Login />
</div>

<style>
	.login-page {
		min-height: 100vh;
		width: 100%;
		padding: 1rem;

		background-color: var(--bg-primary);

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: clamp(0.5rem, 1.5vh, 1rem);
	}

	.login-logo {
		display: block;
		width: clamp(180px, 22vw, 300px);
		height: auto;
		object-fit: contain;
		flex-shrink: 0;
	}

	.login-logo-kanshi {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.title-kanshi {
		font-family: var(--font-secondary);
		font-size: var(--xl);
		color: var(--text-secondary);
	}

	@media (max-height: 750px) {
		.login-page {
			justify-content: flex-start;
			gap: 0.5rem;
			padding: 0.5rem;
		}

		.login-logo {
			width: clamp(80px, 20vw, 180px);
		}
	}
</style>
