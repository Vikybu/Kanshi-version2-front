<script lang="ts">
	import Password from '$lib/components/molecule/Password.svelte';
	import Button from '$lib/components/atom/Button/Button.svelte';
	import { ArrowLeft, Check } from '@lucide/svelte';

	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import RegistrationNumber from '$lib/components/molecule/RegistrationNumber.svelte';
	import { login } from '$lib/services/auth';

	let registrationNumber = $state('');
	let password = $state('');
	let errorMessage = $state('');
	let loading = $state(false);

	let selectedInput = $state<'registrationNumber' | 'password'>('registrationNumber');

	async function handleLogin() {
		errorMessage = '';
		loading = true;

		try {
			const data = await login(registrationNumber, password);

			console.log('Connexion réussie :', data);

			if (data.user.role === 'admin') {
				await goto(resolve('/admin/accueil'));
			} else if (data.user.role === 'ouvrier') {
				await goto(resolve('/ouvrier'));
			} else {
				errorMessage = 'Rôle utilisateur non reconnu.';
			}
		} catch (error) {
			console.error('Erreur de connexion :', error);

			errorMessage = error instanceof Error ? error.message : 'Une erreur est survenue.';
		} finally {
			loading = false;
		}
	}

	function addNumber(number: string) {
		if (selectedInput === 'registrationNumber') {
			registrationNumber = (registrationNumber ?? '') + number;
		} else {
			password = (password ?? '') + number;
		}
	}

	function deleteNumber() {
		if (selectedInput === 'registrationNumber') {
			registrationNumber = registrationNumber.slice(0, -1);
		} else {
			password = password.slice(0, -1);
		}
	}
</script>

<div class="login-global">
	<div class="login-card">
		<div class="login-form">
			<RegistrationNumber
				bind:value={registrationNumber}
				onfocus={() => (selectedInput = 'registrationNumber')}
			/>

			<Password bind:value={password} onfocus={() => (selectedInput = 'password')} />

			<div class="login-actions">
				<Button
					text={loading ? 'Connexion...' : 'Se connecter'}
					variant="primary"
					type="button"
					color="var(--text-primary)"
					textColor="var(--text-secondary)"
					fontSize="var(--m)"
					onclick={handleLogin}
					disabled={loading}
				/>

				{#if errorMessage}
					<p class="error-message">{errorMessage}</p>
				{/if}
			</div>
		</div>

		<div class="login-keypad">
			{#each ['1', '2', '3', '4', '5', '6', '7', '8', '9'] as number (number)}
				<Button
					text={number}
					variant="primary"
					color="var(--text-primary)"
					textColor="var(--text-secondary)"
					fontSize="var(--m)"
					onclick={() => addNumber(number)}
				/>
			{/each}

			<Button
				variant="primary"
				color="var(--text-primary)"
				textColor="var(--text-secondary)"
				onclick={handleLogin}
				disabled={loading}
			>
				<Check size={20} strokeWidth={2.5} />
			</Button>

			<Button
				text="0"
				variant="primary"
				color="var(--text-primary)"
				textColor="var(--text-secondary)"
				fontSize="var(--m)"
				onclick={() => addNumber('0')}
			/>

			<Button
				variant="primary"
				color="var(--text-primary)"
				textColor="var(--text-secondary)"
				onclick={deleteNumber}
			>
				<ArrowLeft size={20} strokeWidth={2.5} />
			</Button>
		</div>
	</div>
</div>

<style>
	.login-global {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0;
	}

	.login-card {
		width: min(90%, 65rem);
		flex: 0 1 auto;
		min-height: 0;

		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
		gap: 3%;

		padding: clamp(1rem, 2.5vw, 2rem);
		box-sizing: border-box;

		background: var(--bg-secondary);
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-md);
	}

	.login-form {
		display: flex;
		flex-direction: column;
		gap: clamp(0.75rem, 2vh, 1.5rem);
		min-width: 0;
	}

	.login-actions {
		width: 100%;
	}

	.login-keypad {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: clamp(0.5rem, 1.5vw, 0.75rem);
		align-content: start;
	}

	.error-message {
		color: red;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		.login-card {
			width: 94%;
			gap: 3%;
			padding: 3%;
		}

		.login-form {
			gap: 1rem;
		}

		.login-keypad {
			gap: 0.5rem;
		}
	}
</style>
