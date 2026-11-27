<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import type { RouteId } from '$app/types';
	import type { Snippet } from 'svelte';

	let {
		href,
		variant = 'primary',
		children
	}: {
		href: RouteId;
		variant?: string;
		children?: Snippet;
	} = $props();

	// Crée une union de tuples contenant chacune une route valide
	type ResolveRouteArgs = {
		[R in RouteId]: [route: R];
	}[RouteId];

	let isActive = $derived(page.route.id === href);
</script>

<a
	href={resolve(...([href] as ResolveRouteArgs))}
	class="link link--{variant}"
	class:active={isActive}
	aria-current={isActive ? 'page' : undefined}
>
	{#if children}
		{@render children()}
	{/if}
</a>

<style>
	.link {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 12px 16px;
		border-radius: 12px;
		text-decoration: none;
		font-weight: 400;
		color: var(--text-secondary);
	}

	.link.active {
		font-weight: 700;
		text-decoration: underline;
		text-underline-offset: 6px;
		text-decoration-thickness: 2px;
	}
</style>
