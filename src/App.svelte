<script>
  //import VirtualList from '@sveltejs/svelte-virtual-list';
import VirtualList from './VirtualList.svelte';
import ListItem from './ListItem.svelte';
import items from './data.js';

let start;
let end;

</script>

<h2>Dream Job Interview</h2>
<div class="container">
	<VirtualList {items} bind:start bind:end let:item>
	<!-- this will be rendered for each currently visible item -->
		<ListItem {...item}/>
	</VirtualList>
	<p>Displaying questions {start + 1}-{end}</p>
</div>
<h4>Built using Svelte V3</h4>
<h4>Source available at: https://github.com/thompcd/interview</h4>

<style>
	.container {
		border-top: 1px solid #333;
		border-bottom: 1px solid #333;
		min-height: 200px;
		height: calc(100vh - 15em);
		margin-bottom: 50px;
	}
</style>