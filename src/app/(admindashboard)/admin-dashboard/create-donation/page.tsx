'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CreateDonation() {
  const [title, setTitle] = useState('')
  const [TargetAmount, setTargetAmount] = useState('')
  const [image, setImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)


  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImage(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  


    console.log({ title, image , TargetAmount})

   
  }

  return (
  <div className='py-10 px-5 min-h-screen'> 
      <Card className="w-full max-w-5xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Create New Donation</CardTitle>
      </CardHeader>
      <CardContent >

        <form onSubmit={handleSubmit} className="space-y-6 py-5   ">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="Enter donation title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
       
          <div className="space-y-2">
            <Label htmlFor="image">Upload Image</Label>
            <Input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
               <div className="space-y-2">
            <Label htmlFor="TargetAmount">Target Amount</Label>
            <Input
              id="TargetAmount"
              placeholder="Enter donation Target"
              value={TargetAmount}
              onChange={(e) => setTargetAmount(e.target.value)}

              required
            />
          </div>

            {imagePreview && (
              <div className="mt-4">
                <Image
                  src={imagePreview}
                  alt="Preview"
                  width={300}
                  height={200}
                  className="rounded-md object-cover"
                />
              </div>
            )}
          </div>
          <Button type="submit" className="w-full h-10">Create Donation</Button>
        </form>

      </CardContent>
    </Card>
  </div>
  )
}