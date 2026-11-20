
<script lang="ts">
    import "./input.css";

    let {
        value = $bindable(""),
        onfocus,
        label = "",
        placeholder = "",
        type = "text",
        name = "",
        required = false,
        ...props
    } = $props();
</script>

<div class="input-group">
    {#if label}
        <label for={name}>{label}</label>
    {/if}

    <input
        {...props}
        {onfocus}
        class="input"
        id={name}
        {name}
        {type}
        bind:value
        {placeholder}
        {required}
    />
</div>
