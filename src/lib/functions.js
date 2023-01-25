import { Configuration, OpenAIApi } from 'openai';
import { goto } from '$app/navigation';

const configuration = new Configuration({
	apiKey: import.meta.env.VITE_OPENAI_KEY
});
const openai = new OpenAIApi(configuration);

export async function getResult(type,bsName,desc) {
	let output;
	output = await openai.createCompletion({
		model: 'text-davinci-003',
		prompt: `create a slogan name and voice personality type like luxury formal or friendly on the following data buisness type is ${type} name is ${bsName} also create a typography and a prompt for dalle image generation api to make a logo on the given data and here is a description about the buisness ${desc} give resposne in json structure  : {slogan,voice,typography,logo_prompt} must be json stringified`,
		max_tokens: 2000,
		temperature: 0.4,
	});
	output = output.data.choices[0].text;

	return JSON.parse(output);
}

export async function MakeImage(prompt){
	let image_url;
	const response = await openai.createImage({
		prompt: `make a logo on the following buisness "${prompt}" logo, digital art, vector ;3d; isometric;flat;logo;illustration;pencil sketch`,
		n: 1,
		size: "1024x1024",
	});
	image_url = response.data.data[0].url;
	return image_url;
}

export async function createTypo(buisness){
	let prompt = `What is the best typography for a ${buisness} business according to the ux and trends`;
	let output = await openai.createCompletion({
		model:"text-davinci-003",
		prompt:prompt,
		max_tokens:2000,
		temperature:0.6,
	})

	let response = output.data.choices[0].text;
	console.log(response)
	return response;
}

export async function createPallete(type,bsName){
	let output = await openai.createCompletion({
		model: 'text-davinci-003',
		prompt: `use the following json structure : {colorname,hexcode} to make an array of colors for the buisness ${type} the colors should match the buisness and must be atleast 5 items ;the json should be valid`,
		max_tokens: 2000,
		temperature: 0.2,
	});
	let resp = output.data.choices[0].text;
	console.log(JSON.parse(resp));
	return JSON.parse(resp);
}