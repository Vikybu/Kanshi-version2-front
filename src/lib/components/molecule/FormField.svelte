<script lang="ts">
	import Input from '../atom/Input/Input.svelte';

	let {
		value = $bindable(''),
		onfocus,
		label,
		name,
		type = 'text',
		required = false
	}: {
		value?: string;
		onfocus?: () => void;
		label: string;
		name: string;
		type?: string;
		required?: boolean;
	} = $props();
</script>

<Input bind:value {onfocus} {name} {type} {required} {label} variant="form" />
