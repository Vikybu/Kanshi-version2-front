<script lang="ts">
	import { onMount } from 'svelte';

	let currentTime = $state('');

	onMount(() => {
		function updateTime() {
			currentTime = new Intl.DateTimeFormat('fr-FR', {
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit'
			}).format(new Date());
		}

		updateTime();

		const interval = setInterval(updateTime, 1000);

		return () => clearInterval(interval);
	});
</script>

<div class="clock">
	{currentTime}
</div>

<style>
	.clock {
		font-size: 18px;
		font-family: var(--font-primary);
		font-weight: 600;
		font-variant-numeric: tabular-nums;
		color: var(--text-secondary);
		white-space: nowrap;
	}
</style>
