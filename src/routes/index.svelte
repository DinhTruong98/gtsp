
<script>
import Button from "../components/ui/button.svelte";

    import {onMount} from "svelte";
    let a = 1
    let loading = false;
    
    function increase() {
        a++
    }

    onMount(function () {
        console.log("mounted")
    })
    function getx() {
        loading = true
        setTimeout(() => {
            loading = false
            increase()
        }, 2000);
    }
</script>
<div class="h-[4000px]">

<h1>
    {a}
    <Button customClass={'w-full'} {loading} disable={loading} on:click={getx}>
        increase
    </Button>
</h1>
</div>
