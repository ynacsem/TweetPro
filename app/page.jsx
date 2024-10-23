'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Clipboard, Send, Sparkles, Zap, Download, Github, Mail, Twitter, ChevronRight } from "lucide-react"
import Link from 'next/link'
import { AI_TWEETS } from '@/configs/AiModel'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

export default function TweetProLanding() {
  const [topic, setTopic] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsDialogOpen(true);
  
    const PROMPT = `Generate 20 tweets about ${topic} in a human-like style. The tweets should be a mix of the following types: questions, informative, observations, advice, and engaging posts. Each tweet must include different relevant hashtags related to the topic and the tweet content. Here's an example structure:\n\n1. A question tweet about the topic.\n2. An informative tweet with data or facts.\n3. An observation tweet sharing personal thoughts.\n4. A piece of advice related to the topic.\n5. An engaging tweet asking the audience for opinions.\n\nThe tweets should not be repetitive and should sound natural. Ensure each tweet is concise, under 280 characters, and includes varying hashtags. Avoid using the same hashtags more than once.in JSON format`;
  
    try {
      const result = await AI_TWEETS.sendMessage(PROMPT);
      const responseText = await result.response.text();
      const cleanedResponse = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
  
      try {
        const tweets = JSON.parse(cleanedResponse);
        const tweetSuggestions = tweets.map((tweetObj) => tweetObj.tweet);
        setSuggestions(tweetSuggestions);
      } catch (parseError) {
        console.error("Error parsing JSON:", parseError);
      }
    } catch (error) {
      console.error('Error generating tweet suggestions:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="min-h-screen bg-[#f0f4f8] text-[#2c3e50] flex flex-col">
      <header className="fixed w-full z-50 bg-[#f0f4f8] bg-opacity-90 backdrop-blur-md border-b border-[#2c3e50]">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23 3L12 14M23 3L15 21L12 14L9 17L1 3L23 3Z" stroke="#2c3e50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-bold text-xl">TweetPro</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="#features" className="hover:text-[#3498db] transition-colors">Features</Link>
            <Link href="#story" className="hover:text-[#3498db] transition-colors">Our Story</Link>
          </nav>
          <Button className="bg-[#3498db] text-[#f0f4f8] hover:bg-[#2980b9] transition-colors">Get Started</Button>
        </div>
      </header>

      <main className="flex-grow">
        <section id="hero" className="pt-24 pb-12 md:pt-32 md:pb-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-[#2c3e50]">
              Instantly Generate<br />Engaging Tweets 🚀
            </h1>
            <p className="text-xl md:text-2xl text-[#34495e] mb-12 max-w-3xl mx-auto">
              Boost your Twitter presence with AI-powered tweet suggestions. 
              Generate captivating content in seconds and grow your audience.
            </p>
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-12">
              <div className="flex gap-4">
                <Input
                  type="text"
                  placeholder="Enter a topic"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="flex-grow border-2 border-[#2c3e50] focus:ring-[#3498db]"
                />
                <Button type="submit" className="bg-[#3498db] text-[#f0f4f8] hover:bg-[#2980b9] transition-colors">
                  <Send className="mr-2 h-4 w-4" /> Generate
                </Button>
              </div>
            </form>
          </div>
        </section>

        <section id="features" className="py-12 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Key Features ✨</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <Sparkles className="w-12 h-12 mb-4 text-[#3498db]" />
                <h3 className="text-xl font-bold mb-2">AI-Powered Suggestions</h3>
                <p className="text-[#34495e]">
                  Leverage cutting-edge AI to generate tweet ideas tailored to your audience and topic.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <Zap className="w-12 h-12 mb-4 text-[#3498db]" />
                <h3 className="text-xl font-bold mb-2">Instant Generation</h3>
                <p className="text-[#34495e]">
                  Get multiple tweet suggestions in seconds, saving you time and boosting your productivity.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <Download className="w-12 h-12 mb-4 text-[#3498db]" />
                <h3 className="text-xl font-bold mb-2">Easy Sharing</h3>
                <p className="text-[#34495e]">
                  Copy your favorite suggestions with one click and paste directly into your Twitter app.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="story" className="py-12 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2c3e50]">Our Story 📖</h2>
                <div className="text-lg text-[#34495e]">
                  <p className="mb-4">
                    🎢 As a Twitter enthusiast, I found it challenging to consistently come up with engaging content. 
                    The pressure to post regularly while maintaining quality was overwhelming.
                  </p>
                  <p className="mb-4">
                    💡 That's when the idea for TweetPro was born. I wanted to create a tool that would help 
                    content creators like myself overcome writer's block and maintain a consistent Twitter presence.
                  </p>
                  <p className="mb-4">
                    🚀 With TweetPro, you can now generate high-quality tweet ideas in seconds, allowing you to 
                    focus on engaging with your audience and growing your Twitter following.
                  </p>
                  <div className="mt-6 p-4 bg-[#f0f4f8] rounded-lg shadow-md border-l-4 border-[#3498db]">
                    <p className="text-lg font-semibold">
                      "TweetPro turned my Twitter struggle into a success story. Join us and transform your Twitter journey!" 🌟
                    </p>
                  </div>
                </div>
                <Button className="mt-8 bg-[#3498db] text-[#f0f4f8] hover:bg-[#2980b9] transition-colors">
                  Learn More <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="cta" className="py-12 md:py-24 bg-[#3498db] text-[#f0f4f8]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Twitter Game? 🏆</h2>
            <p className="text-xl mb-8">Join thousands of content creators who are already using TweetPro to boost their Twitter presence.</p>
            <Link href='#hero'>
              <Button className="bg-[#f0f4f8] text-[#3498db] hover:bg-white transition-colors text-lg px-8 py-3">
                Get Started Now
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#34495e] mb-4 md:mb-0">&copy; {new Date().getFullYear()} TweetPro. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="https://github.com/ynacsem" className="text-[#34495e] hover:text-[#3498db] transition-colors">
                <Github className="w-6 h-6" />
              </Link>
              <Link href="mailto:yacineyacine520@gmail.com" className="text-[#34495e] hover:text-[#3498db] transition-colors">
                <Mail className="w-6 h-6" />
              </Link>
              <Link href="https://x.com/yacinesm1" className="text-[#34495e] hover:text-[#3498db] transition-colors">
                <Twitter className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Tweet Suggestions</DialogTitle>
            <DialogDescription>
              Here are your AI-generated tweet suggestions based on the topic: {topic}
            </DialogDescription>
          </DialogHeader>
          {isLoading ? (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#3498db]"></div>
            </div>
          ) : (
            <div className="max-h-[60vh] overflow-y-auto">
              {suggestions.map((suggestion, index) => (
                <div key={index} className="mb-4 p-4 bg-[#f0f4f8] rounded-lg">
                  <p className="text-[#2c3e50] mb-2">{suggestion}</p>
                  <Button
                    onClick={() => copyToClipboard(suggestion)}
                    variant="outline"
                    className="w-full border-[#3498db] text-[#3498db] hover:bg-[#e6f3ff] transition-colors"
                  >
                    <Clipboard className="mr-2 h-4 w-4" /> Copy
                  </Button>
                </div>
              ))}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}