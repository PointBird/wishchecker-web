<script>
	let counter = 0;

	function incrementCount() {
		counter += 1;
	}
</script>

<button on:click={incrementCount}>
	Clicked {counter}
	{counter === 1 ? 'time' : 'times'}
</button>
