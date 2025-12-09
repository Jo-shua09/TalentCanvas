
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, Send, Paperclip, MoreVertical } from "lucide-react";
import { Link } from "react-router-dom";

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(0);
  const [newMessage, setNewMessage] = useState("");

  const conversations = [
    {
      id: 1,
      name: "Sarah Chen - TechCorp",
      lastMessage: "Thanks for your interest! We'd like to schedule an interview.",
      timestamp: "2 hours ago",
      unread: 2,
      avatar: "SC",
      type: "recruiter"
    },
    {
      id: 2,
      name: "Mike Johnson - StartupXYZ",
      lastMessage: "Can you tell me more about your React experience?",
      timestamp: "1 day ago",
      unread: 0,
      avatar: "MJ",
      type: "recruiter"
    },
    {
      id: 3,
      name: "Jessica Kim - Design Co",
      lastMessage: "Your portfolio looks great! Let's connect.",
      timestamp: "3 days ago",
      unread: 1,
      avatar: "JK",
      type: "recruiter"
    }
  ];

  const messages = [
    {
      id: 1,
      sender: "Sarah Chen",
      content: "Hi John! I came across your profile and I'm impressed with your React experience.",
      timestamp: "10:30 AM",
      isMe: false
    },
    {
      id: 2,
      sender: "Me",
      content: "Thank you! I'd love to learn more about the position.",
      timestamp: "10:45 AM",
      isMe: true
    },
    {
      id: 3,
      sender: "Sarah Chen",
      content: "Great! We're looking for a Senior Frontend Developer to join our team. The role involves working with React, TypeScript, and Next.js.",
      timestamp: "11:00 AM",
      isMe: false
    },
    {
      id: 4,
      sender: "Me",
      content: "That sounds like a perfect fit for my skillset. I have 5 years of experience with React and have been working with TypeScript for the past 3 years.",
      timestamp: "11:15 AM",
      isMe: true
    },
    {
      id: 5,
      sender: "Sarah Chen",
      content: "Thanks for your interest! We'd like to schedule an interview.",
      timestamp: "2:30 PM",
      isMe: false
    }
  ];

  const sendMessage = () => {
    if (newMessage.trim()) {
      setNewMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">TC</span>
            </div>
            <span className="text-xl font-semibold">TalentCanvas</span>
          </Link>
          <nav className="flex items-center space-x-6">
            <Link to="/candidate" className="text-blue-600 font-medium">Back to Dashboard</Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Messages</h1>
          <p className="text-gray-600">Connect with recruiters and employers</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 h-[600px]">
          {/* Conversations List */}
          <div className="lg:col-span-1">
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Conversations</CardTitle>
                  <Badge variant="secondary">{conversations.length}</Badge>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input placeholder="Search messages..." className="pl-10" />
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-1">
                  {conversations.map((conv, index) => (
                    <div
                      key={conv.id}
                      onClick={() => setSelectedChat(index)}
                      className={`p-4 cursor-pointer transition-colors ${
                        selectedChat === index ? 'bg-blue-50 border-r-2 border-blue-500' : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <Avatar>
                          <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                            {conv.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="font-medium text-sm truncate">{conv.name}</p>
                            {conv.unread > 0 && (
                              <Badge className="ml-2 bg-blue-600 text-white text-xs">
                                {conv.unread}
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs text-gray-600 truncate">{conv.lastMessage}</p>
                          <p className="text-xs text-gray-400 mt-1">{conv.timestamp}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Window */}
          <div className="lg:col-span-3">
            <Card className="h-full flex flex-col">
              {/* Chat Header */}
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                        {conversations[selectedChat]?.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{conversations[selectedChat]?.name}</h3>
                      <p className="text-sm text-gray-500">Online</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isMe ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.isMe
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p
                        className={`text-xs mt-1 ${
                          message.isMe ? 'text-blue-100' : 'text-gray-500'
                        }`}
                      >
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>

              {/* Message Input */}
              <div className="border-t p-4">
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm">
                    <Paperclip className="h-4 w-4" />
                  </Button>
                  <Input
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    className="flex-1"
                  />
                  <Button onClick={sendMessage} disabled={!newMessage.trim()}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
