<script>

    import {onMount} from 'svelte';
    import Drawer from '../nav/drawer.svelte';

    let isOpen = false;
    $: innerWidth = 0;
    $: isMobile = innerWidth < 768;

    function drawer() {
        console.log('drawer');
        isOpen = !isOpen;
    }

    onMount(() => {
        document.addEventListener("keydown", e => {
            if (e.keyCode === 27 && isOpen) isOpen = false;
        });
    });
</script>

<svelte:window bind:innerWidth/>

<nav class="sticky top-0 w-full items-center px-4 py-2 h-15 bg-white text-gray-700 border-b border-gray-200 z-10">
    <div class="flex items-center justify-between">
        <a href="/">

        <img src="logo2.png"
             alt="Logo"
             class="h-auto w-[240px]"/>
        </a>
        <button hidden={!isMobile}
                class="mr-2"
                aria-label="Open Menu"
                on:click={drawer}>
            <svg fill="none"
                 stroke="currentColor"
                 stroke-linecap="round"
                 stroke-linejoin="round"
                 stroke-width="2"
                 viewBox="0 0 24 24"
                 class="w-8 h-8">
                <path d="M4 6h16M4 12h16M4 18h16">
                </path>
            </svg>
        </button>
    </div>
    <Drawer isOpen={isOpen} on:close={() =>{isOpen = false}} />
</nav>
