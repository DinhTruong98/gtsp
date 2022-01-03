
<script>
    import {onMount} from "svelte";
    let a = 1

    function increase() {
        a++
    }

    onMount(function () {
        console.log("mounted")
    })
</script>
<div class="h-[4000px]">

<h1>
    {a}
    <button on:click={increase} class="px-2 py-0.5">
        increase
    </button>
</h1>
</div>
