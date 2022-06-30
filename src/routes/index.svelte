<script>
	import data from '../data.js';
	import Article from '../components/Article.svelte';
	console.log(data);
</script>

<div class="mx-auto bg-veryLightGray">
	<!-- Navr -->
	<nav class="p-6 flex flex-row justify-between bg-white">
		<img src="logo.svg" alt="logo" />
		<img src="icon-hamburger.svg" alt="menu" />
	</nav>
	<!-- Hero -->
	<div
		class="md:pl-16 relative flex flex-col md:flex-row md:flex-row-reverse overflow-hidden md:items-center bg-gradient-to-b from-veryLightGray to-white"
	>
		<div class="bg-transparent">
			<img src="bg-intro-mobile.svg" alt="hero background" class="md:hidden w-full" />
			<img src="bg-intro-desktop.svg" alt="hero background" class="hidden md:block" />
			<img src="image-mockups.png" alt="mockups" class="absolute -top-16 md:-right-16 md:w-1/2" />
		</div>

		<div class="p-6 flex flex-col gap-4 text-center items-center md:text-left md:items-start">
			<h1 class="text-4xl">Next generation digital banking</h1>
			<p class="text-grayBlue">
				Take your financial life online. Your Easybank account will be a one-stop-shop for spending,
				saving, budgeting, investing, and much more.
			</p>
			<button class="rounded-full py-3 bg-gradient-to-r from-limeGreen to-brightCyan w-1/2"
				>Request Invite</button
			>
		</div>
	</div>
	<!-- <div
		class="md:flex md:flex-row md:flex-row-reverse md:items-center md:bg-contain bg-no-repeat md:bg-right bg-[url('bg-intro-mobile.svg')] bg-cover"
	>
		<img src="image-mockups.png" alt="mockup image" class="" />
		<div class="p-6 flex flex-col gap-4 text-center items-center">
			<h1 class="text-4xl">Next generation digital banking</h1>
			<p class="text-grayBlue">
				Take your financial life online. Your Easybank account will be a one-stop-shop for spending,
				saving, budgeting, investing, and much more.
			</p>
			<button class="rounded-full py-3 bg-gradient-to-r from-limeGreen to-brightCyan w-1/2"
				>Request Invite</button
			>
		</div>
	</div> -->

	<div
		class="md:px-16 px-6 pt-16 pb-6 flex flex-col gap-4 text-center items-center md:items-start md:text-left bg-veryLightGray"
	>
		<div class="md:w-1/2">
			<h1 class="text-4xl pb-6">Why choose Easybank?</h1>

			<p class="text-grayBlue">
				We leverage Open Banking to turn your bank account into your financial hub. Control your
				finances like never before.
			</p>
		</div>
	</div>
	<!-- icon cards -->
	<div
		class="md:px-16 px-4 pt-6 pb-16 flex flex-col text-center gap-6 bg-veryLightGray md:grid md:grid-cols-4 md:text-left"
	>
		<div class="flex flex-col items-center md:items-start gap-6">
			<img src="icon-online.svg" alt="online icon" />
			<h2 class="text-2xl ">Online Banking</h2>
			<p class="text-grayBlue">
				Our modern web and mobile applications allow you to keep track of your finances wherever you
				are in the world
			</p>
		</div>
		<div class="flex flex-col items-center gap-6 md:items-start">
			<img src="icon-budgeting.svg" alt="budgeting icon" />
			<h2 class="text-2xl ">Simple Budgeting</h2>
			<p class="text-grayBlue">
				Our modern web and mobile applications allow you to keep track of your finances wherever you
				are in the world
			</p>
		</div>
		<div class="flex flex-col items-center gap-6 md:items-start">
			<img src="icon-onboarding.svg" alt="onboarding icon" />
			<h2 class="text-2xl ">Fast Onboarding</h2>
			<p class="text-grayBlue">
				Our modern web and mobile applications allow you to keep track of your finances wherever you
				are in the world
			</p>
		</div>
		<div class="flex flex-col items-center gap-6 md:items-start">
			<img src="icon-api.svg" alt="api icon" />
			<h2 class="text-2xl ">Open API</h2>
			<p class="text-grayBlue">
				Our modern web and mobile applications allow you to keep track of your finances wherever you
				are in the world
			</p>
		</div>
	</div>
	<!-- Articles -->
	<div class="px-16">
		<h1 class="text-4xl pb-6">Latest Articles</h1>
	</div>

	<div class="flex flex-col md:flex-row gap-6 md:gap-4 md:px-16 px-4 pb-10">
		{#each data as article}
			<Article {article} />
		{/each}
	</div>

	<footer class="bg-darkBlue px-16 flex flex-col md:flex-row justify-between pt-10 gap-4 pb-10">
		<div class="flex flex-col items-center gap-6">
			<img src="logo.svg" alt="footer logo" class="grayscale" />
			<div class="flex flex-row gap-3">
				<img src="icon-facebook.svg" alt="facebook logo" />
				<img src="icon-facebook.svg" alt="facebook logo" />
				<img src="icon-facebook.svg" alt="facebook logo" />
				<img src="icon-facebook.svg" alt="facebook logo" />
				<img src="icon-facebook.svg" alt="facebook logo" />
			</div>
		</div>
		<div class="grid md:grid-cols-2 md:gap-x-32 grid-rows-1 justify-center gap-y-4">
			<a href="#" class="text-white">About Us</a>
			<a href="#" class="text-white">About Us</a>
			<a href="#" class="text-white">About Us</a>
			<a href="#" class="text-white">About Us</a>
			<a href="#" class="text-white">About Us</a>
			<a href="#" class="text-white">About Us</a>
		</div>
		<div class="flex flex-col items-center md:items-end gap-6">
			<button
				class="rounded-full py-3 px-12 text-white bg-gradient-to-r from-limeGreen to-brightCyan"
				>Request Invite</button
			>
			<p class="text-white">Easybank. All Rights Reserved</p>
		</div>
	</footer>
</div>
