<script lang="ts">
    let {
        type,
        label,
        textInput = $bindable()
    }: {
        type: "string" | "number";
        label: string;
        textInput: string | number;
    } = $props();
</script>

<p>{label}</p>
<input
    type={type === "number" ? "number" : "text"}
    bind:value={textInput}
/>
<p>Bonjour</p>