This is an example for using enhanced Assistant API of openAI ChatGPT. The Assistant API is just a layer over the completion API. Your programm talks with the Assistant API. The Assistant API on openAI side talks over the completion API with chatGPT. This way You does not need to hold the Conversation Thread by yourself (like you do if you use diectly the Completion API of ChatGPT). Because The Assistant API on openAI side holds the the conversation Threads and different assistant (Therefore you can ask every new question, by only sending the question and an identifier of the thread and and identifier of the choosed assistant). On openAI side this call will do the rest and calls the completion API of ChatGPT with you complete Thread and your new Question.

An assistent by himself add the systemprompt and other stuff to the conversation with ChatGPT
It is like you would add by yourself the systemprompt and other stuff to the openAI API REST (json) call.

With every added new message in the thread you can start a RUN for generating the answer by chatGPT. In a RUN you can bundle the current thread state with a specific assistant (one is assistant i.e. selects ChaptGPT 4o modell and other assistant selcts ChapGPT 4-mini model)

At the end it does not matter if you directly use the normal ChatGPT Commpletion openAI API or this Assistant API. At the end you pay the same amount of Tokens (question - input token and answer - output tokens). The assistant API is just over the ChatGPT Completion OpenAI chat API. It makes the programming simpler, because it has a state saved on OpenAI side not by yourself. From this state it generates the same OpenAI Chat Calls like you would do by yourself if you would use only the Completion Api.

This example currently uses the polling api, that ask ChatGPT over and over if it has generated the answer for your question.

It is just a console program, to be focused on the OpenAi Assistant API for involving ChatGPT in this console Question and Answer programm.
