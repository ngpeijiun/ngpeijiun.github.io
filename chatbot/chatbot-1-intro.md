
<h1 style="color: #ccc">Chatbot</h1>

# Introduction to Chatbot

Jun 28, 2024

## Introduction to Conversational AI

1.  Conversational AI (also known as AI assistant or chatbot), or more specifically **task-oriented dialogue systems**, engage in two-way conversations with users to help them accomplish specific tasks. These automated assistants communicate with users to support them in achieving their goals.

2.  A brief history of NLP

    -   1950s-1980s: Early NLP relied on symbolic rule-based systems, using manually crafted rules.
    -   1990s-2000s: Statistical methods became prevalent, leveraging probabilistic models and large dataset.
    -   2010s: Neural methods, including embeddings and recurrent neural networks (RNNs), improved language understanding and generation.
    -   2017+: Transformers transformed NLP, offering more powerful and flexible models for various language tasks.

3.  A conversational AI can be created using a combination of machine learning techniques and heuristic rules, typically comprising two main components: NLU and dialogue policies.

4.  **NLU** (Natural Language Understanding) is essential in conversational AI for processing raw text into machine-readable information by identifying intents and extracting entities. There are two primary approaches to NLU: rule-based and neural network-based.

    Rule-based systems use predefined rules, like regular expressions, to quickly and accurately identify patterns but struggle with unfamiliar inputs. Neural network-based systems, such as transformer models, require extensive training data and computational power but excel at handling new and varied inputs.

    The choice between these approaches depends on the specific needs of AI system, balancing speed and simplicity against flexibility and robustness.

6.  Dialog policy (deciding how to respond)

    -   Ruled-based: Also called state machine, a big dialog tree of all possible paths a conversation can take. This is traditional approach to dialog and it can work well in some cases, but they cannot handle digressions and are a bit of pain to extend/maintain.
    -   Neural: A transformer-based model that picks the next best turn based on the conversation so far and all conversations that it has been trained on. This approach lets users have more natural conversations, even if they say things in a different order every time.

4.  How to make sure conversations work (and improve over time)

## Developing a Chatbot

1.  A virtual assistant or chatbot is a conversational AI assistant capable of engaging in natural and dynamics conversations, providing users with seamless and intuitive interactions.

### Conversation-Driven Development

1.  Building great AI assistant is challenging because it is impossible to anticipate everything users might say. However, every conversation provides an opportunity, as users express exactly what they want in their own words.

2.  Conversation-driven development (CDD) is the process of listening to users and using their insights to improve the AI assistant.

3.  CDD includes the following actions:

    -   **Share** <br> Give your prototype to users to test as early as possible. People will always surprise you with what they say. You can also engage test users, who can be anyone unfamiliar with how your bot works from the inside. Too many teams spend months designing conversations that will never happen.
    -   **Review** <br> Take time to read through the conversations people have with your assistant. Many teams focus solely on metrics (e.g., the percentage of users expressing a specific intent) but overlook the value of reviewing actual interactions. Pay special attention to conversations where the default intent or fallback behaviour was triggered. These instances could review opportunity for new skills or highlight misclassified user utterances. Additionally, watch for signs of user frustration, such as requests for transfer to a human agent, negative feedback, or thumbs down.
    -   **Annotate** <br> Enhance your NLU model using real conversation messages. While you can start with self-generated examples or synthetic examples through paraphrasing, ensure that less than 10% of your data is synthetic when moving to production. To prevent overfitting and improve the model's ability to handle diverse user inputs, include only user utterances that the model previously predicted incorrectly or with low confidence.
    -   **Test** <br> Use entire conversations as end-to-end tests for your assistant. Just as professional teams do not launch applications without thorough testing, you should have numerous end-to-end tests covering critical conversations before going into production. Regularly incorporate successful user interactions into your test suite to prevent regressions as you make further improvements.
    -   **Track** <br> Develop a method to identify successful conversations, such as users completing a desired action (e.g., signing up for your services) or not needing further support within 24 hours. Use this data to tag and filter conversations, helping you understand what works and what does not. You can measure success by checking if users achieve their goals. For the most accurate assessment, individually review and rate each conversation with your bot.
    -   **Fix** <br> The process of improving your AI assistant involves analysing both successful and unsuccessful conversations. Successful conversations can be immediately tested. Unsuccessful ones highlight areas needing more training data or code fixes. Monitor different failure types to reduce them over time. Prioritise user feedback to decide on new skills and fixes. Implement smaller changes frequently to assess their impact with user feedback. Ensure your CI/CD pipeline supports this iterative approach confidently.

4.  CDD is a user-centred approach to creating AI assistants that goes beyond technical skills. It is a non-linear process where different actions--such as understanding user requirements, domain expertise, software development, and data science--are intertwined. Collaboration among product, design, and development teams is crucial. This approach prioritises adapting the assistant to user preferences over expecting users to change their behaviour to accommodate the assistant's limitations.

### NLU Data

1.  NLU (Natural Language Understanding) is the step of chatbot development that performs intent classification, entity extraction, and response retrieval.

2.  NLU will take in a sentence such as "I am looking for a French restaurant in the centre of town" and return structured data like:

    ```json
    {
        "intent": "search_restaurant",
        "entities": {
            "cuisine": "French",
            "location": "centre",
        }
    }
    ```

3.  Conversation-driven development (CDD) means letting real user conversations guide your development. For building a great NLU model, this means

    -   *Gather real data* <br> Real user messages can be messy, contain typos, and be far from ideal examples of your intents. But keep in mind that those are the messages you are asking your model to make predictions about! Your assistant will always make mistakes initially, but the process of traning and evaluating on user data will set your model up to generalise much more effectively in real-world scenarios.
    -   *Share with test users early* <br> In order to gather real data, you are going to need real user messages. As users will always surprise you with what they say, you should share your bot with test users outside the development team as early as possible.

### Conversation Stories

1.  Conversation data includes the stories and rules that make up the training data for your dialogue management model.

#### Designing Stories

1.  When designing stories, there are two groups of conversational interactions that need to be accounted for: happy and unhappy paths.

2.  Happy paths describe when the user is following the conversation flow as you would expect and always providing the necessary information when prompted. However, users will often deviate from happy paths with questions, chit chat, or other tasks. We call these unhappy path.

3.  It is important for your bot to handle unhappy paths gracefully, but it is also impossible to predict what path a given user might take. Often, developers will try for every possible diverging path when designing unhappy paths. Planning for every possible state in a state machine (many of which will never be reached) requires a lot of extra work and increases training time significantly.

4.  Instead, we recommend taking a conversation-driven development approach when designing unhappy paths. Conversation-driven development promotes sharing your bot as early as possible with test users and collecting real conversation data that tells you exactly how users diverge from the happy paths. From this data, you can create stories to accomplish what the user is requesting and start to think about ways to guide them back into a happy path.
