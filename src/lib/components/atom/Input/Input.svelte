<script lang="ts">
	let {
		value = $bindable(''),
		onfocus,
		label = '',
		placeholder = '',
		type = 'text',
		name = '',
		required = false,
		variant = 'login',
		...props
	} = $props();
</script>

<div class="input-group">
	<label for={name} class="label label--{variant}">
		{label}
	</label>

	<input
		{...props}
		{onfocus}
		class="input input--{variant}"
		id={name}
		{name}
		{type}
		bind:value
		{placeholder}
		{required}
	/>
</div>

<style>
	.input {
		width: 100%;
		box-sizing: border-box;
		outline: none;
		transition:
			border-color 0.2s ease,
			box-shadow 0.2s ease;
	}

	/* LOGIN : RegistrationNumber et Password */
	.input--login {
		min-height: 40px;
		padding: 8px 12px;
		font-size: var(--m);
		color: var(--text-primary);
		background: var(--background);
		border: 1px solid var(--border);
		border-radius: var(--radius-md);
	}

	/* FORM : Ordre de fabrication */
	.input--form {
		width: 160px;
		height: 30px;
		padding: 8px 14px;
		font-size: var(--s);
		color: var(--text-secondary);
		border: 1px solid var(--border);
		border-radius: 6px;
		box-sizing: border-box;
	}

	.input-group {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 8px;
	}

	/* États communs */
	.input:focus {
		border-color: var(--primary);
		box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
	}

	.input:disabled {
		background: var(--surface);
		opacity: 0.6;
		cursor: not-allowed;
	}

	/* Style commun */
	.label {
		font-family: var(--font-primary);
		font-size: var(--m);
		font-weight: 500;
		color: var(--text-primary);
	}

	/* Login */
	.label--login {
		color: var(--text-primary);
	}

	/* Formulaire OF */
	.label--form {
		color: var(--text-primary);
		font-size: var(--s);
		font-weight: 400;
	}
</style>
