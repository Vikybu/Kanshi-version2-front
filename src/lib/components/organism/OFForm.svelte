<script lang="ts">
	import FormField from '../molecule/FormField.svelte';
	import Button from '../atom/Button/Button.svelte';

	let reference = $state('');
	let machine = $state('');
	let rawMaterial = $state('');
	let rawMaterialQuantity = $state('');
	let finalProduct = $state('');
	let finalProductQuantity = $state('');
	let startDate = $state('');

	function handleSubmit() {
		console.log({
			reference,
			machine,
			rawMaterial,
			rawMaterialQuantity,
			finalProduct,
			finalProductQuantity,
			startDate
		});
	}
</script>

<div class="global-form-of-page">
	<form onsubmit={handleSubmit}>
		<p>Creer un nouvel ordre de fabrication</p>
		<div class="organisation-form">
			<div class="of-form">
				<FormField label="Numéro de l'OF" name="reference" bind:value={reference} required />

				<FormField label="Machine" name="machine" bind:value={machine} required />

				<FormField label="Matière première" name="rawMaterial" bind:value={rawMaterial} required />

				<FormField
					label="Quantité"
					name="rawMaterialQuantity"
					bind:value={rawMaterialQuantity}
					required
				/>
			</div>
			<div class="of-form">
				<FormField label="Produit final" name="finalProduct" bind:value={finalProduct} required />

				<FormField
					label="Quantité"
					name="finalProductQuantity"
					bind:value={finalProductQuantity}
					required
				/>

				<FormField label="Date de début" name="startDate" type="date" bind:value={startDate} />
				<Button type="submit" text="Créer" />
			</div>
		</div>
	</form>
</div>

<style>
	.global-form-of-page {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		min-height: 50vh;
		gap: 30px;
	}

	.organisation-form {
		display: flex;
		flex-direction: row;
		gap: 30px;
		padding: 20px;
		background: var(--bg-secondary);
		border: 1px solid var(--border);
		border-radius: 20px;

		width: fit-content;
	}

	.of-form {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
</style>
