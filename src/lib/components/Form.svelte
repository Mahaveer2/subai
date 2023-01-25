<script>
  export let handleSubmit;
	let bs_types = ["Retail", "Manufacturing", "Technology", "Finance", "Healthcare", "Hospitality", "Professional Services", "Construction", "Transportation", "Energy"]
</script>

<form on:submit|preventDefault={(e) => handleSubmit(e)} method="POST">
	<div class="form-control">
		<label class="label">
			<span class="label-text">Your Buisness name</span>
		</label>
		<label class="input-group w-full">
			<span>Name</span>
			<input type="text" placeholder="name" name="name" class="input w-full  input-bordered" />
		</label>
	</div>
	<div class="grid grid-cols-2 gap-2">
		<div class="mt-4 w-full">
			<select name="voice" class="select w-full input-bordered">
				<option disabled selected>Pick your voice/personality type</option>
				<option>Formal</option>
				<option>Freindly</option>
				<option>Luxurious</option>
			</select>
		</div>
		<div class="mt-4 mb-4 w-full">
			<select name="buisness" class="select w-full m input-bordered input">
				<option disabled selected>Pick your buisness type</option>
				{#each bs_types as bs}
					<option>{bs}</option>
				{/each}
			</select>
		</div>
	</div>
	<div class="input-wrapper mb-4">
		<textarea
			placeholder="Explain further"
			class="textarea w-full  input-bordered resize-none p-4"
			cols="10"
		/>
	</div>
	<button class="btn">Submit</button>
</form>
