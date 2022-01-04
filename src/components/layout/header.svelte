<script>

    import {onMount} from 'svelte';
    import Drawer from '../nav/drawer.svelte';

    let isOpen = false;
    $: innerWidth = 0;
    $: isMobile = innerWidth < 768;
    $: scrollable = !isOpen;

    function drawer() {
        console.log('drawer');
        isOpen = !isOpen;
    }

    onMount(() => {
        document.addEventListener("keydown", e => {
            if (e.keyCode === 27 && isOpen) isOpen = false;
        });
    });

    const wheel = (node, options) => {
        let {scrollable} = options;

        const handler = e => {
            if (!scrollable) e.preventDefault();
        };

        node.addEventListener('wheel', handler, {passive: false});

        return {
            update(options) {
                scrollable = options.scrollable;
            },
            destroy() {
                node.removeEventListener('wheel', handler, {passive: false});
            }
        };
    };
</script>

<svelte:window bind:innerWidth use:wheel={{scrollable}}/>

<nav class="sticky justify-between flex top-0 w-full items-center px-4 py-2 h-15 bg-white text-gray-700 border-b border-gray-200 z-10 min-h-[67px]">
    <div class="flex items-center justify-between">
        <a href="/" class="flex space-x-2">
            <img src="logo-ani.gif"
                 alt="Logo"
                 class="h-auto h-10"/>
            <div class="text-xl font-black flex items-center space-x-1">
                <div>
                    VIET PROJECTS
                </div>
                {#if !isMobile}
                    <div  class="text-2xl font-light">|</div>
                    <div class="text-sm font-light -mb-4">{'Giới thiệu startup của bạn'}</div>
                {/if}
            </div>
        </a>


    </div>
    {#if isMobile}
        <button on:click={drawer} class="hamburger hamburger--vertical {isOpen ? 'active' : ''} h-10 w-10"
                type="button">
            <div class="inner">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </button>
    {/if}
    <Drawer isOpen={isOpen} on:close={() =>{isOpen = false}}/>
</nav>
