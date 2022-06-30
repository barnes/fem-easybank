<script>
	export let article;
</script>

<div class="flex flex-col gap-4 rounded bg-white">
	<img src={article.image} alt="{article.title} image" class="rounded-t " />
	<div class="p-2 flex flex-col gap-2">
		<span class="text-xs">By {article.author}</span>
		<h2 class="text-xl">{article.title}</h2>
		<p class="text-sm">{article.snippet}</p>
	</div>
</div>
