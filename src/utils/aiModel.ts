// AI Model for Crypto Trading Assistant
interface TokenInfo {
  name: string;
  symbol: string;
  category: 'memecoin' | 'defi' | 'layer1' | 'gaming' | 'ai';
  description: string;
}

interface MarketSentiment {
  bullish: string[];
  bearish: string[];
  neutral: string[];
}

const CRYPTO_KNOWLEDGE = {
  tokens: new Map<string, TokenInfo>([
    ['SOL', { 
      name: 'Solana',
      symbol: 'SOL',
      category: 'layer1',
      description: 'High-performance L1 blockchain'
    }],
    ['BONK', {
      name: 'Bonk',
      symbol: 'BONK',
      category: 'memecoin',
      description: 'Solana ecosystem memecoin'
    }],
    // Add more tokens as needed
  ]),
  
  marketSentiment: {
    bullish: [
      "Market momentum is strong",
      "Buy pressure increasing",
      "Technical indicators suggest upward movement"
    ],
    bearish: [
      "Market showing weakness",
      "Selling pressure detected",
      "Consider waiting for better entry"
    ],
    neutral: [
      "Market in consolidation",
      "Sideways trading pattern",
      "Monitor for breakout signals"
    ]
  }
};

interface AIResponse {
  content: string;
  category: 'trade' | 'analysis' | 'therapy' | 'system';
  confidence: number;
}

export function generateAIResponse(input: string): AIResponse {
  const normalizedInput = input.toLowerCase();
  
  // Trading intent detection
  if (normalizedInput.includes('buy') || normalizedInput.includes('sell')) {
    return analyzeTradingIntent(normalizedInput);
  }
  
  // Market analysis request
  if (normalizedInput.includes('analysis') || normalizedInput.includes('price')) {
    return generateMarketAnalysis(normalizedInput);
  }
  
  // Emotional support
  if (normalizedInput.includes('worried') || normalizedInput.includes('scared')) {
    return provideEmotionalSupport(normalizedInput);
  }
  
  // Default response
  return {
    content: "I'm here to help with crypto trading. Would you like to check prices, execute trades, or get market analysis?",
    category: 'system',
    confidence: 0.8
  };
}

function analyzeTradingIntent(input: string): AIResponse {
  // Extract token and amount
  const tokens = Array.from(CRYPTO_KNOWLEDGE.tokens.keys());
  const mentionedToken = tokens.find(token => input.includes(token.toLowerCase()));
  
  if (mentionedToken) {
    const tokenInfo = CRYPTO_KNOWLEDGE.tokens.get(mentionedToken)!;
    return {
      content: `I can help you trade ${tokenInfo.name}. What amount would you like to ${input.includes('buy') ? 'buy' : 'sell'}? I'll analyze the market conditions first.`,
      category: 'trade',
      confidence: 0.9
    };
  }
  
  return {
    content: "Which token would you like to trade? I can help you analyze market conditions and execute trades.",
    category: 'trade',
    confidence: 0.7
  };
}

function generateMarketAnalysis(input: string): AIResponse {
  const sentiment = Math.random(); // Replace with actual market analysis
  let analysis;
  
  if (sentiment > 0.6) {
    analysis = CRYPTO_KNOWLEDGE.marketSentiment.bullish[
      Math.floor(Math.random() * CRYPTO_KNOWLEDGE.marketSentiment.bullish.length)
    ];
  } else if (sentiment < 0.4) {
    analysis = CRYPTO_KNOWLEDGE.marketSentiment.bearish[
      Math.floor(Math.random() * CRYPTO_KNOWLEDGE.marketSentiment.bearish.length)
    ];
  } else {
    analysis = CRYPTO_KNOWLEDGE.marketSentiment.neutral[
      Math.floor(Math.random() * CRYPTO_KNOWLEDGE.marketSentiment.neutral.length)
    ];
  }
  
  return {
    content: analysis,
    category: 'analysis',
    confidence: 0.85
  };
}

function provideEmotionalSupport(input: string): AIResponse {
  return {
    content: "I understand trading can be stressful. Let's analyze your concerns and develop a balanced strategy. What specific aspects are worrying you?",
    category: 'therapy',
    confidence: 0.9
  };
}