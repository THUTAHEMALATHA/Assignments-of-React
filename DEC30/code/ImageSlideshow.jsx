import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const images = [
  "https://via.placeholder.com/400x200?text=Image+1",
  "https://via.placeholder.com/400x200?text=Image+2",
  "https://via.placeholder.com/400x200?text=Image+3",
]

export default function ImageSlideshow() {
  const [index, setIndex] = useState(0)

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <Card className="max-w-md mx-auto mt-6">
      <CardContent className="text-center space-y-4">
        <img src={images[index]} alt="Slideshow" className="rounded-md" />

        <div className="flex justify-between">
          <Button onClick={prevImage}>Previous</Button>
          <Button onClick={nextImage}>Next</Button>
        </div>
      </CardContent>
    </Card>
  )
}