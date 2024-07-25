This is an example for using enhanced Assistant API of openAI ChatGPT.

An assistent by himself add the systemprompt and other stuff to the conversation with ChatGPT
It is like you would add by yourself the systemprompt and other stuff to the openAI API REST (json) call.

With every added new message in the thread you can start a RUN for generating the answer by chatGPT. In a RUN you can bundle the current thread state with a specific assistant (one is assistant i.e. selects ChaptGPT 4o modell and other assistant selcts ChapGPT 4-mini model)

At the end it does not matter if you directly use the GhatGPT openAI API or this Assistant API. At the end you pay the same amount of Tokens (question - input token and answer - output tokens). The assistant API is just over the ChatGPT OpenAI chat API. It makes the programming simpler, because it has a state saved on OpenAI side not by yourself. From this state it generates the same OpenAI Chat Calls like you would do by yourself.

This example currently uses the polling api, that ask ChatGPT over and over if it has generated the answer for your question.

It is just a console program, to be focused on the OpenAi Assistant API for involving ChatGPT in this console Question and Answer programm.