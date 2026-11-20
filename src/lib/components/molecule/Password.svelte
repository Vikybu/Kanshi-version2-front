<script>
	import Input from '$lib/components/atom/Input/Input.svelte';

	let { value = $bindable(''), onfocus } = $props();
</script>

<Input bind:value {onfocus} name="password" type="string" required={true} label="Mot de passe" />
