<script lang="ts">
	let reference = $state('');
	let machine = $state('');
	let finalProductQuantity = $state('');
	let worker = $state('');
</script>

<div class="card-of">
	<p>{reference}</p>
	<p>{machine}</p>
	<p>{finalProductQuantity}</p>
	<p>{worker}</p>
</div>

<style>
	.card-of {
		display: flex;
		flex-direction: row;
	}
</style>
