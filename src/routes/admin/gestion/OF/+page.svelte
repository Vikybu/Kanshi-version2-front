<script lang="ts">
	import '../../../../styles/main.css';
	import logoKanshi from '$lib/assets/logoKanshi.png';
	import Menu from '$lib/components/organism/Menu.svelte';
	import Clock from '$lib/components/atom/Clock.svelte';
	import OFForm from '$lib/components/organism/OFForm.svelte';
	import CardOF from '$lib/components/organism/CardOF.svelte';
</script>

<svelte:head>
	<title>Administration - Kanshi</title>
</svelte:head>

<div class="homepage-admin">
	<header class="navbar">
		<div class="menu-logo-kanshi">
			<img src={logoKanshi} alt="Logo Kanshi" class="login-logo" />
			<p class="title-kanshi">Kanshi</p>
		</div>

		<Menu />

		<Clock />
	</header>
	<br />

	<p class="titel-gestion">Gestion des ordres de fabrications</p>
	<div class="of-form">
		<CardOF />
		<OFForm />
	</div>
</div>

<style>
	:global(html),
	:global(body) {
		margin: 0;
		min-height: 100%;
		background: var(--bg-primary);
	}

	.homepage-admin {
		min-height: 100vh;
		background: var(--bg-primary);
	}

	.navbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 5px 20px;
		min-height: 60px;
		gap: 30px;
		border-bottom: 1px solid var(--text-secondary);
	}

	.menu-logo-kanshi {
		display: flex;
		align-items: center;
		gap: 12px;
		flex-shrink: 0;
	}

	.login-logo {
		width: 48px;
		height: 48px;
		object-fit: contain;
	}

	.title-kanshi {
		font-family: var(--font-secondary);
		font-size: var(--m);
		color: var(--text-secondary);
	}

	.of-form {
		display: flex;
	}

	.titel-gestion {
		margin: 10px;
		font-weight: 600;
		font-size: var(--m);
	}
</style>
