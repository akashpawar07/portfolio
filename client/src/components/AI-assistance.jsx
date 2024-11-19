import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Mic } from 'lucide-react';

// Queue manager for API requests
class RequestQueue {
  constructor(requestsPerMinute = 3) {
    this.queue = [];
    this.isProcessing = false;
    this.requestsPerMinute = requestsPerMinute;
    this.requestTimes = [];
  }

  async add(request) {
    return new Promise((resolve, reject) => {
      this.queue.push({ request, resolve, reject });
      this.process();
    });
  }

  canMakeRequest() {
    const now = Date.now();
    // Remove requests older than 1 minute
    this.requestTimes = this.requestTimes.filter(time => now - time < 60000);
    return this.requestTimes.length < this.requestsPerMinute;
  }

  async process() {
    if (this.isProcessing || this.queue.length === 0) return;
    
    this.isProcessing = true;
    
    while (this.queue.length > 0) {
      if (!this.canMakeRequest()) {
        // Wait for 20 seconds before trying again
        await new Promise(resolve => setTimeout(resolve, 20000));
        continue;
      }

      const { request, resolve, reject } = this.queue[0];
      
      try {
        const result = await request();
        this.requestTimes.push(Date.now());
        resolve(result);
      } catch (error) {
        reject(error);
      }
      
      this.queue.shift();
    }
    
    this.isProcessing = false;
  }
}

const ChatAssistant = () => {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm an AI assistant powered by OpenAI. I can help you with questions about any topic. Please note that I process requests with a slight delay to avoid rate limiting."
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState('');
  const [isQueued, setIsQueued] = useState(false);
  const messagesEndRef = useRef(null);
  const requestQueueRef = useRef(null);

  // Initialize the request queue
  useEffect(() => {
    requestQueueRef.current = new RequestQueue(3); // 3 requests per minute
  }, []);

  const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const suggestionTopics = [
    "Explain quantum computing",
    "Write a story about space",
    "Solve math problems",
    "Latest tech trends",
    "Health tips",
    "Science facts"
  ];

  const makeOpenAIRequest = async (userQuery) => {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are a helpful and knowledgeable assistant. Provide accurate, informative, and engaging responses."
          },
          ...messages.map(msg => ({
            role: msg.role,
            content: msg.content
          })),
          {
            role: "user",
            content: userQuery
          }
        ],
        temperature: 0.7,
        max_tokens: 500
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'Failed to get response from OpenAI');
    }

    const data = await response.json();
    return data.choices[0].message.content;
  };

  const generateResponse = async (userQuery) => {
    setIsTyping(true);
    setIsQueued(true);
    
    try {
      const aiResponse = await requestQueueRef.current.add(() => makeOpenAIRequest(userQuery));
      setError('');
      return aiResponse;
    } catch (error) {
      console.error('Error:', error);
      if (error.message.includes('rate limits')) {
        setError('Request rate limit reached. Your message is queued and will be processed shortly.');
      } else {
        setError('An error occurred. Please try again in a moment.');
      }
      return 'I apologize, but I encountered an error. Please check the error message above and try again.';
    } finally {
      setIsTyping(false);
      setIsQueued(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() && !isListening) return;

    const userMessage = input.trim();
    setInput('');
    setError('');

    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);

    const aiResponse = await generateResponse(userMessage);
    setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
  };

  const handleVoiceInput = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        setIsListening(false);
      };

      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setError('Voice input error. Please try again.');
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } else {
      setError('Voice input is not supported in your browser.');
    }
  };

  return (
    <div className="w-full max-w-2xl h-[600px] flex flex-col rounded-lg shadow-lg">
      <div className="border-b bg-orange-700 p-4 rounded-t-lg">
        <div className="flex items-center gap-2">
          <Bot className="w-6 h-6 text-white" />
          <h2 className="text-lg font-semibold text-white">AI Assistant</h2>
        </div>
      </div>

      <div className="border-b p-4">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {suggestionTopics.map((topic, index) => (
            <button
              key={index}
              className="px-3 py-1 text-sm border rounded-full whitespace-nowrap hover:bg-gray-100"
              onClick={() => setInput(topic)}
            >
              {topic}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg">
            {error}
          </div>
        )}

        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === 'assistant' ? 'justify-start' : 'justify-end'}`}
          >
            <div className={`flex gap-2 max-w-[80%] ${message.role === 'assistant' ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100">
                {message.role === 'assistant' ? 
                  <Bot className="w-5 h-5 text-blue-500" /> : 
                  <User className="w-5 h-5 text-gray-600" />
                }
              </div>
              <div
                className={`p-3 rounded-lg ${
                  message.role === 'assistant' 
                    ? 'bg-gray-100 text-gray-800' 
                    : 'bg-blue-500 text-white'
                }`}
              >
                <p className="whitespace-pre-line">{message.content}</p>
              </div>
            </div>
          </div>
        ))}
        {(isTyping || isQueued) && (
          <div className="flex items-center gap-2">
            <Bot className="w-8 h-8 text-blue-500" />
            <Loader2 className="w-4 h-4 animate-spin" />
            {isQueued && <span className="text-sm text-gray-500">In queue...</span>}
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="border-t p-4">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <button
            type="button"
            className={`p-2 rounded-lg hover:bg-gray-100 ${isListening ? 'text-red-500' : ''}`}
            onClick={handleVoiceInput}
            disabled={isListening}
          >
            <Mic className="w-4 h-4" />
          </button>

          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 text-black font-semibold focus:ring-blue-500"
          />

          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={(!input.trim() && !isListening) || isQueued}
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatAssistant;