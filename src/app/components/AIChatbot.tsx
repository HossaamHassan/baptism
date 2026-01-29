import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { ScrollArea } from '@/app/components/ui/scroll-area';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Welcome! I\'m your AI guide for the Baptism Site. How can I help you today?',
      timestamp: new Date(),
    },
  ]);

  const quickActions = [
    'Book a visit',
    'Mass schedule',
    'Getting there',
    'Virtual tour',
  ];

  const handleSend = () => {
    if (!message.trim()) return;

    // Add user message
    const userMessage = {
      type: 'user' as const,
      content: message,
      timestamp: new Date(),
    };
    setMessages([...messages, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const botResponse = {
        type: 'bot' as const,
        content: 'I can help you with that! The Baptism Site is open daily from 8:00 AM to 5:00 PM. Would you like to book a visit or learn more about available tours?',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);

    setMessage('');
  };

  const handleQuickAction = (action: string) => {
    setMessage(action);
    handleSend();
  };

  return (
    <>
      {/* Chat Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          size="lg"
          onClick={() => setIsOpen(!isOpen)}
          className="h-16 w-16 rounded-full bg-gradient-to-br from-[#5B8FA3] to-[#6B7A5A] hover:from-[#4A7A8A] hover:to-[#5A6649] shadow-2xl"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6" />
          )}
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)]"
          >
            <Card className="shadow-2xl border-[#6B7A5A]/20 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-[#5B8FA3] to-[#6B7A5A] text-white pb-4">
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  AI Assistant
                </CardTitle>
                <p className="text-sm text-white/80 mt-1">
                  Your personal guide to the Baptism Site
                </p>
              </CardHeader>
              <CardContent className="p-0">
                {/* Messages */}
                <ScrollArea className="h-[400px] p-4">
                  <div className="space-y-4">
                    {messages.map((msg, index) => (
                      <div
                        key={index}
                        className={`flex ${
                          msg.type === 'user' ? 'justify-end' : 'justify-start'
                        }`}
                      >
                        <div
                          className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                            msg.type === 'user'
                              ? 'bg-[#5B8FA3] text-white'
                              : 'bg-[#F5F0E8] text-[#2C2A26]'
                          }`}
                        >
                          <p className="text-sm">{msg.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>

                {/* Quick Actions */}
                {messages.length === 1 && (
                  <div className="px-4 pb-3 border-t">
                    <p className="text-xs text-muted-foreground mb-2 mt-3">
                      Quick actions:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {quickActions.map((action, index) => (
                        <Button
                          key={index}
                          size="sm"
                          variant="outline"
                          onClick={() => handleQuickAction(action)}
                          className="text-xs h-8"
                        >
                          {action}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input */}
                <div className="p-4 border-t bg-white">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Ask me anything..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                      className="flex-1"
                    />
                    <Button
                      size="icon"
                      onClick={handleSend}
                      className="bg-[#5B8FA3] hover:bg-[#4A7A8A] shrink-0"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Powered by AI • Instant responses
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
