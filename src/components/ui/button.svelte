<script>
	import { createEventDispatcher } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	export let type; // outlined, filled, text
	export let loading; // outlined, filled, text
	export let disable;
	export let customClass;
    
	const dispatch = createEventDispatcher();

	let _base = 'px-4 py-1 text-base font-semibold rounded-xl h-10 transition-width w-40 relative flex items-center justify-center ';
	let _filled = 'bg-orange text-darkblue hover:bg-darkblue hover:text-orange ';
	let _outlined =
		'bg-white text-darkblue border border-darkblue hover:bg-darkblue hover:text-white ';
	let finalClass;
	$: {
		let x = type && loading && disable && customClass;
		finalClass = getClass();
	}
	function getClass() {
		let _finalClass = _base;
		if (type == 'filled' || type == undefined) {
			_finalClass += _filled;
		}
		if (type == 'outlined') {
			_finalClass += _outlined;
		}
		if (type == 'text') {
			_finalClass += '';
		}
		if (disable) {
			_finalClass += 'opacity-50 hover:bg-orange hover:text-darkblue cursor-not-allowed ';
		}

        if(customClass){
            _finalClass += customClass;
        }
		return _finalClass;
	}

	function click() {
		if (disable || loading) return;
		dispatch('click');
	}
</script>

<button class={finalClass} on:click={click}>
	{#if loading}
		<div in:fly="{{ x: 50, duration: 500 }}" out:fly="{{ x: -50, duration: 500 }}" class="absolute">
			<svg
				class="animate-spin h-5 w-5 text-white"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
			>
				<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
				<path
					class="opacity-75"
					fill="currentColor"
					d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
				/>
			</svg>
		</div>
	{:else}
		<div in:fly="{{ x: 50, duration: 500 }}" out:fly="{{ x: -50, duration: 500 }}" class="absolute">
			<slot />
		</div>
	{/if}
</button>
