'use client'

import { useState, useCallback } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Component() {
  const [image, setImage] = useState<string | null>(null)

  const handleImageUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }, [])

  return (
    <Card className="w-full max-w-2xl mx-auto mt-[120px]">
      <CardHeader>
        <CardTitle>AI Face Detection</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-center">
          <label htmlFor="image-upload" className="cursor-pointer">
            <div className="w-64 h-64 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
              {image ? (
                <img src={image} alt="Uploaded" className="max-w-full max-h-full object-contain" />
              ) : (
                <span className="text-gray-500">Click to upload an image</span>
              )}
            </div>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="sr-only"
              aria-label="Upload an image"
            />
          </label>
        </div>
        {image && (
          <div className="text-center">
            <p className="text-sm text-gray-500">Image uploaded successfully!</p>
            <p className="text-sm text-gray-500">Face detection results will appear here.</p>
          </div>
        )}
        
              </CardContent>
      <CardFooter className="flex justify-center">
        <Button disabled={!image}>Detect Faces</Button>
      </CardFooter>
    </Card>
  )
}