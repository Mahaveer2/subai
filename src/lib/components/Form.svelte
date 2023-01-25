<script>
  export let handleSubmit;
	let bs_types = ["Retail", "Manufacturing", "Technology", "Finance", "Healthcare", "Hospitality", "Professional Services", "Construction", "Transportation", "Energy","Beauty","b2b"]
</script>

<form on:submit|preventDefault={(e) => handleSubmit(e)} method="POST">
	<div class="form-control mt-8">
		<div class="input-group w-full">
			<span class="label-text ">Your Buisness name</span>
			<input type="text" placeholder="Name" name="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 mt-3 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
		</div>
	</div>
	<div class="grid grid-cols-2 gap-2">
		<div class="mt-4 w-full">
			<select name="voice" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
				<option disabled selected>Pick your voice/personality type</option>
				<option>Formal</option>
				<option>Assertive</option>
				<option>Luxurious</option>
				<option>Informal/Friendly</option>
				<option>Humorous</option>
				<option>Motivating</option>
			</select>
		</div>
		<div class="mt-4 mb-4 w-full">
			<select name="buisness" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
				<option disabled selected>Pick your buisness type</option>
				{#each bs_types as bs}
					<option>{bs}</option>
				{/each}
			</select>
		</div>
	</div>
	<div class="input-wrapper mb-4">
		<span>Explain further</span>
		<textarea
			placeholder="Example: ”I’m Turkish descendent, and I want the brand to transmit"
			class="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light pb-8"
			cols="10"
		/>
	</div>
	<button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
