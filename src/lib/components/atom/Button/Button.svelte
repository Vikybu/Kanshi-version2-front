<script lang="ts">
	import './button.css';

	let {
		text = 'Bouton',
		variant = 'primary',
		size = 'md',
		color = undefined,
		textColor = undefined,
		fontSize = undefined,
		type = 'button',
		disabled = false,
		onclick = undefined
	}: {
		text?: string;
		variant?: string;
		size?: string;
		color?: string;
		textColor?: string;
		type?: 'button' | 'submit' | 'reset';
		disabled?: boolean;
		fontSize?: string;
		onclick?: () => void;
	} = $props();
</script>

<button
	{type}
	{disabled}
	{onclick}
	class={`${variant} ${size}`}
	style:background-color={color}
	style:color={textColor}
	style:font-size={fontSize}
>
	{text}
</button>
