/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_TWITTER_API;
const genAI = new GoogleGenerativeAI(apiKey);

  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  
    export const AI_TWEETS = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
   history: [
    {
      role: "user",
      parts: [
        {text: "Generate 20 tweets about web3.0 in a human-like style. The tweets should be a mix of the following types: questions, informative, observations, advice, and engaging posts. Each tweet must include different relevant hashtags related to the topic and the tweet content. Here's an example structure:\\n\\n1. A question tweet about the topic.\\n2. An informative tweet with data or facts.\\n3. An observation tweet sharing personal thoughts.\\n4. A piece of advice related to the topic.\\n5. An engaging tweet asking the audience for opinions.\\n\\nThe tweets should not be repetitive and should sound natural. Ensure each tweet is concise, under 280 characters, and includes varying hashtags. Avoid using the same hashtags more than once.in JSON format\n"},
      ],
    },
    {
      role: "model",
      parts: [
        {text: "```json\n[\n  {\n    \"tweet\": \"Is Web3.0 just another hype cycle, or is it truly the future of the internet? 🤔 #Web3 #FutureofInternet #TechTrends\",\n    \"type\": \"question\"\n  },\n  {\n    \"tweet\": \"Did you know that the global Web3 market size is expected to reach $81.5 billion by 2030? 🚀 #Web3Market #CryptoGrowth #BlockchainTech\",\n    \"type\": \"informative\"\n  },\n  {\n    \"tweet\": \"The more I learn about DAOs, the more I believe they have the potential to revolutionize the way we work and collaborate. 💡 #DAOs #DecentralizedGovernance #Web3Revolution\",\n    \"type\": \"observation\"\n  },\n  {\n    \"tweet\": \"If you're new to Web3, start by understanding blockchain technology and its potential applications. 📚 #Blockchain101 #Web3Beginners #LearnAndEarn\",\n    \"type\": \"advice\"\n  },\n  {\n    \"tweet\": \"What do you think is the most exciting aspect of Web3? Share your thoughts in the comments! 👇 #Web3Discussion #CryptoCommunity #Innovation\",\n    \"type\": \"engaging\"\n  },\n  {\n    \"tweet\": \"NFTs are changing the art world and creating new opportunities for artists. 🎨 #NFTArt #DigitalArt #Web3Innovation\",\n    \"type\": \"informative\"\n  },\n  {\n    \"tweet\": \"The concept of a decentralized internet excites me. It has the potential to empower users and challenge existing power structures. ✊ #Decentralization #Web3Empowerment #InternetRevolution\",\n    \"type\": \"observation\"\n  },\n  {\n    \"tweet\": \"Don't get caught up in the hype. Do your own research and invest in Web3 projects you understand. 🧐 #Web3Investing #CryptoDueDiligence #SmartInvesting\",\n    \"type\": \"advice\"\n  },\n  {\n    \"tweet\": \"What are your predictions for the future of Web3? 🔮 #Web3Future #CryptoPredictions #TechVisionaries\",\n    \"type\": \"engaging\"\n  },\n  {\n    \"tweet\": \"Web3 is more than just cryptocurrencies. It's about building a more transparent, secure, and user-centric internet. 🌐 #Web3BeyondCrypto #InternetOfTomorrow #DigitalTransformation\",\n    \"type\": \"informative\"\n  },\n  {\n    \"tweet\": \"I'm still trying to wrap my head around the potential of metaverse and its role in Web3. 🤯 #Metaverse #Web3Experiences #VirtualWorlds\",\n    \"type\": \"observation\"\n  },\n  {\n    \"tweet\": \"If you're interested in Web3, join online communities and connect with other enthusiasts. 🤝 #Web3Community #CryptoTwitter #Networking\",\n    \"type\": \"advice\"\n  },\n  {\n    \"tweet\": \"What are your favorite Web3 projects? Let's discuss! 💬 #Web3Projects #CryptoPortfolio #InnovationInAction\",\n    \"type\": \"engaging\"\n  },\n  {\n    \"tweet\": \"Web3 is a complex space, but it's also an incredibly exciting one. Be patient, learn, and be part of the revolution! ✊ #Web3Journey #CryptoLearning #FutureIsNow\",\n    \"type\": \"informative\"\n  },\n  {\n    \"tweet\": \"I'm curious to see how Web3 will impact the gaming industry. 🎮 #Web3Gaming #PlayToEarn #GameFi\",\n    \"type\": \"observation\"\n  },\n  {\n    \"tweet\": \"Don't be afraid to experiment and try new things in Web3. The best way to learn is by doing. 🚀 #Web3Exploration #CryptoExperiment #LearnByDoing\",\n    \"type\": \"advice\"\n  },\n  {\n    \"tweet\": \"What are your biggest concerns about Web3? Let's have a conversation. 🗣️ #Web3Challenges #CryptoConcerns #OpenDialogue\",\n    \"type\": \"engaging\"\n  },\n  {\n    \"tweet\": \"The potential of Web3 to democratize access to information and services is truly remarkable. 🌍 #Web3Equality #DigitalInclusion #EmpoweringUsers\",\n    \"type\": \"informative\"\n  },\n  {\n    \"tweet\": \"I'm still figuring out the best ways to navigate the Web3 space. What are your tips? 💡 #Web3Navigation #CryptoTips #LearningCurve\",\n    \"type\": \"observation\"\n  },\n  {\n    \"tweet\": \"Get involved in Web3 projects that align with your values and interests. 🤝 #Web3Impact #CryptoForGood #MakingADifference\",\n    \"type\": \"advice\"\n  }\n]\n```"},
      ],
    },
  ],
    });
  
    
  
  
 