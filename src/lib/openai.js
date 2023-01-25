import { OpenAI } from 'openai';

const openai = new OpenAI(import.meta.env.VITE_OPENAI_KEY);
export default openai;