<script lang="ts">
	import Link from '../atom/Link/Link.svelte';
</script>

<nav class="menu">
	<div class="menu-item">
		<Link href="/admin/accueil">Accueil</Link>
		<Link href="/admin/dashboard">Dashboard</Link>
	</div>

	<div class="menu-item">
		<Link href="/admin/gestion">Gestion</Link>

		<div class="submenu">
			<Link href="/admin/gestion/OF">Ordre de fabrication</Link>
			<Link href="/admin/gestion/machines">Machines</Link>
			<Link href="/admin/gestion/matieres-produits">Matières et produits</Link>
			<Link href="/admin/gestion/arrets-qualite">Arrêts et non-qualité</Link>
			<Link href="/admin/gestion/profil">Profil</Link>
		</div>
	</div>
</nav>

<style>
	.menu {
		display: flex;
		align-items: center;
        font-size: var(--m);
	}

	.menu-item {
		position: relative;
	}

	.submenu {
		display: none;
		position: absolute;
		top: 100%;
		left: 0;
		min-width: 180px;
		padding: 8px;
		background: var(--bg-primary);
		border-radius: 10px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
		flex-direction: column;
		gap: 5px;
		z-index: 100;
	}

	.menu-item:hover .submenu,
	.menu-item:focus-within .submenu {
		display: flex;
	}

	.submenu :global(.link) {
		width: 100%;
		justify-content: flex-start;
		box-sizing: border-box;
	}
</style>
