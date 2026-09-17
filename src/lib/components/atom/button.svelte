<script lang='ts'>
    let {labelButton, onclick}: {labelButton: string; onclick: () => void;} = $props();
</script>

<button {onclick}>{labelButton}</button>