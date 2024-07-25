import dotenv from 'dotenv';
import OpenAI from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources/index.mjs';
import { readLine } from './inputHelpers.js';
import fs from 'fs';
import './openaihelpers.js';

dotenv.config({ path: '.env' });

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

const systemPrompt = await fs.promises.readFile('system-prompt.md', { encoding: 'utf-8' });

const assistant = await openai.beta.assistants.createOrUpdate({
  model: 'gpt-4o',
  name: 'Bike Advisor Assistant',
  description: 'An assistant that helps you select the correct bike for your needs.',
  instructions: systemPrompt,
});

const thread = await openai.beta.threads.create();
await openai.beta.threads.messages.create(thread.id, {
  role: 'assistant',
  content: 'Hello, how can I help you selecting the correct bike for your needs?',
});


while (true) {
    const lastMessage = await openai.beta.threads.getLatestMessage(thread.id);
    console.log(lastMessage);
  
    const userMessage = await readLine('You: ');
  
    await openai.beta.threads.addMessageAndRunToCompletion(assistant.id, thread.id, userMessage);
}

