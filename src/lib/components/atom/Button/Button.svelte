
<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		text = 'Bouton',
		variant = 'primary',
		size = 'md',
		color = undefined,
		textColor = undefined,
		fontSize = undefined,
		type = 'button',
		disabled = false,
		fontFamily = undefined,
		children,
		onclick = undefined
	}: {
		text?: string;
		variant?: string;
		size?: string;
		color?: string;
		textColor?: string;
		fontFamily?: string;
		type?: 'button' | 'submit' | 'reset';
		disabled?: boolean;
		fontSize?: string;
		children?: Snippet;
		onclick?: () => void;
	} = $props();
</script>

<button
    type={type}
    class="btn btn--{variant} btn--{size}"
    style:background-color={color}
    style:color={textColor}
    style:font-size={fontSize}
    style:font-family={fontFamily}
    {disabled}
    {onclick}
>
    {#if children}
        {@render children()}
    {:else}
        {text}
    {/if}
</button>

<style>
	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		padding: 10px 16px;
		border: 1px solid transparent;
		border-radius: 12px;
		font-size: 14px;
		font-weight: 500;
		cursor: pointer;
		transition: background-color 0.2s ease, opacity 0.2s ease;
		font-family: var(--font-primary);
		box-shadow: none;
		transform: none;
		font-weight: 500;
	}

	.btn--primary {
		background: var(--primary);
		color: #d3d3dd;
	}

	.btn--primary:hover:not(:disabled) {
		filter: brightness(0.92);
	}

	.btn--secondary {
		background: var(--surface);
		color: var(--text-primary);
		border-color: var(--border);
	}

	.btn--secondary:hover:not(:disabled) {
		background: var(--bg-secondary);
	}

	.btn--danger {
		background: var(--danger);
		color: white;
	}

	.btn--success {
		background: var(--success);
		color: white;
	}

	.btn--sm {
		padding: 6px 12px;
		font-size: 12px;
		border-radius: 10px;
	}

	.btn--md {
		padding: 10px 16px;
		font-size: 14px;
	}

	.btn--lg {
		padding: 14px 20px;
		font-size: 16px;
		border-radius: 14px;
	}

	.btn:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.btn:focus-visible {
		outline: 2px solid var(--primary);
		outline-offset: 3px;
	}
</style>
