'use client'
import { useState } from 'react'
import { Search, Settings, CreditCard, Hash, } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function Intershala() {
  const [selectedVoice, setSelectedVoice] = useState(null)
  const [agentName, setAgentName] = useState('Agent Name')
  const [isEditingName, setIsEditingName] = useState(false)
  const [activeSection, setActiveSection] = useState('voices')
  const [chatMessages, setChatMessages] = useState<{ sender: string; text: string }[]>([])
  const [currentMessage, setCurrentMessage] = useState('')

  const voices = {
    English: [
      { name: 'Marie', gender: 'Female' },
      { name: 'Sarah', gender: 'Female' },
      { name: 'Mark', gender: 'Male' },
      { name: 'Sam', gender: 'Male' },
    ],
    Spanish: [
      { name: 'Maria', gender: 'Female' },
      { name: 'Sofia', gender: 'Female' },
      { name: 'Marco', gender: 'Male' },
      { name: 'Santiago', gender: 'Male' },
    ],
    French: [
      { name: 'Marie', gender: 'Female' },
      { name: 'Sophie', gender: 'Female' },
      { name: 'Marc', gender: 'Male' },
      { name: 'Simon', gender: 'Male' },
    ],
  }

  const handleVoiceSelect = (voice) => {
    setSelectedVoice(voice)
  }

  const handleSendMessage = () => {
    if (currentMessage.trim()) {
      setChatMessages([...chatMessages, { sender: 'User', text: currentMessage }])
      setCurrentMessage('')
      // Simulate AI response
      setTimeout(() => {
        setChatMessages(prev => [...prev, { sender: 'AI', text: `Response to: ${currentMessage}` }])
      }, 1000)
    }
  }


  const renderContent = () => {
    switch (activeSection) {
      case 'voices':
        return (
          <>
             <div className="flex-1 flex">
            {/* Left Sidebar */}
            <div className="w-72 border-r bg-white p-4 flex flex-col">
              <h2 className="font-medium mb-4">Select Voice</h2>
              <div className="relative mb-4">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search Voice/Language"
                  className="pl-8"
                />
              </div>
              <div className="space-y-6 overflow-auto">
                {Object.entries(voices).map(([language, voiceList]) => (
                  <div key={language}>
                    <div className="text-sm text-muted-foreground mb-2 text-center">{language}</div>
                    <div className="space-y-2">
                      {voiceList.map((voice) => (
                        <div
                          key={`${language}-${voice.name}`}
                          className={`flex items-center justify-between p-2 rounded-lg ${selectedVoice === voice ? 'bg-[#6C5CE7] text-white' : 'bg-[#F8F7FF]'
                            } hover:bg-[#F0EEFF] cursor-pointer`}
                          onClick={() => handleVoiceSelect(voice)}
                        >
                          <span>{voice.name}</span>
                          <Badge variant="secondary" className={`${voice.gender === 'Female' ? 'bg-[#6C5CE7]' : 'bg-[#6C5CE7]'
                            } text-white`}>
                            {voice.gender}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 bg-[#F8F7FF]">
              <div className="max-w-3xl mx-auto space-y-6">
                <div>
                  <h2 className="text-lg font-medium mb-2">Name</h2>
                  <Input className="bg-white" value={selectedVoice ? selectedVoice.name : ''} readOnly />
                </div>
                <div>
                  <h2 className="text-lg font-medium mb-2">Prompt</h2>
                  <Textarea className="min-h-[200px] bg-white" />
                </div>
              </div>
            </div>
           
            {/* Right Sidebar */}
            <div className="w-72 p-4 bg-white">
              {selectedVoice ? (
                <>
                
                  <Dialog>
                <DialogTrigger asChild>
                 
                <div className="flex gap-2 mb-6">
                    <Button variant="outline" className="flex-1">Test Call</Button>
                    <Button variant="outline" className="flex-1">Test Chat</Button>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Test Chat</DialogTitle>
                  </DialogHeader>
                  <div className="mt-4 h-[300px] flex flex-col">
                    <ScrollArea className="flex-1 pr-4">
                      {chatMessages.map((msg, index) => (
                        <div key={index} className={`mb-2 ${msg.sender === 'User' ? 'text-right' : 'text-left'}`}>
                          <span className={`inline-block p-2 rounded-lg ${msg.sender === 'User' ? 'bg-blue-100' : 'bg-gray-100'}`}>
                            {msg.text}
                          </span>
                        </div>
                      ))}
                    </ScrollArea>
                    <div className="mt-4 flex">
                      <Input
                        value={currentMessage}
                        onChange={(e) => setCurrentMessage(e.target.value)}
                        placeholder="Type your message..."
                        className="flex-1 mr-2"
                      />
                      <Button onClick={handleSendMessage}>Send</Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
                  <div className="space-y-4">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Phone Number" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">+1 234 567 8900</SelectItem>
                        <SelectItem value="2">+1 234 567 8901</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input placeholder="Enter Name" />
                    <Input placeholder="Enter Phone Number" />
                    <Button className="w-full bg-[#6C5CE7] hover:bg-[#5A4BD3]">
                      Call Me
                    </Button>
                  </div>
                </>
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500">
                  Select a voice to see options
                </div>
              )}
            </div>
          </div>
        
             
          
          

          
          </>
       
        )
      case 'settings':
        return (
          <div className="flex-1 p-6 bg-[#F8F7FF]">
            <h2 className="text-2xl font-bold mb-4">Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Language</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Theme</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button>Save Settings</Button>
            </div>
          </div>
        )
      case 'billing':
        return (
          <div className="flex-1 p-6 bg-[#F8F7FF]">
            <h2 className="text-2xl font-bold mb-4">Billing</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Current Plan</label>
                <Input value="Pro Plan" readOnly />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Next Billing Date</label>
                <Input value="2024-12-01" readOnly />
              </div>
              <Button>Manage Subscription</Button>
            </div>
          </div>
        )
      case 'analytics':
        return (
          <div className="flex-1 p-6 bg-[#F8F7FF]">
            <h2 className="text-2xl font-bold mb-4">Analytics</h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-medium mb-2">Total Calls</h3>
                <p className="text-3xl font-bold">1,234</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-medium mb-2">Average Call Duration</h3>
                <p className="text-3xl font-bold">5m 23s</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-medium mb-2">User Satisfaction</h3>
                <p className="text-3xl font-bold">4.8/5</p>
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="h-screen flex flex-col">
      <header className="bg-[#6C5CE7] p-4 flex justify-center items-center">
        {isEditingName ? (
          <Input
            value={agentName}
            onChange={(e) => setAgentName(e.target.value)}
            onBlur={() => setIsEditingName(false)}
            onKeyPress={(e) => e.key === 'Enter' && setIsEditingName(false)}
            className="text-black text-center text-xl font-medium w-64"
            autoFocus
          />
        ) : (
          <h1
            className="text-white text-center text-xl font-medium cursor-pointer"
            onClick={() => setIsEditingName(true)}
          >
            {agentName}
          </h1>
        )}
      </header>
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar Icons */}
        <div className="w-16 bg-white border-r flex flex-col items-center py-4 space-y-4">
          <button
            className={`p-2 rounded-lg ${activeSection === 'voices' ? 'bg-[#6C5CE7] text-white' : 'hover:bg-gray-100'}`}
            onClick={() => setActiveSection('voices')}
          >
            <Search className="h-6 w-6" />
          </button>
          <button
            className={`p-2 rounded-lg ${activeSection === 'settings' ? 'bg-[#6C5CE7] text-white' : 'hover:bg-gray-100'}`}
            onClick={() => setActiveSection('settings')}
          >
            <Settings className="h-6 w-6" />
          </button>
          <button
            className={`p-2 rounded-lg ${activeSection === 'billing' ? 'bg-[#6C5CE7] text-white' : 'hover:bg-gray-100'}`}
            onClick={() => setActiveSection('billing')}
          >
            <CreditCard className="h-6 w-6" />
          </button>
          <button
            className={`p-2 rounded-lg ${activeSection === 'analytics' ? 'bg-[#6C5CE7] text-white' : 'hover:bg-gray-100'}`}
            onClick={() => setActiveSection('analytics')}
          >
            <Hash className="h-6 w-6" />
          </button>
        </div>

        {renderContent()}
      </div>
    </div>
  )
}