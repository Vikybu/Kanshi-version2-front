<script>
	import Input from '$lib/components/atom/Input/Input.svelte';

	let { value = $bindable(''), onfocus } = $props();
</script>

<Input
	bind:value
	{onfocus}
	name="registrationNumer"
	type="number"
	required={true}
	label="Numéro de matricule"
/>
