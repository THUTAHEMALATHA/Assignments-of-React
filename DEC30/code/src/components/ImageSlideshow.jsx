import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

const images = [
  'https://via.placeholder.com/400x200/FF6B6B/FFFFFF?text=Image+1',
  'https://via.placeholder.com/400x200/4ECDC4/FFFFFF?text=Image+2',
  'https://via.placeholder.com/400x200/45B7D1/FFFFFF?text=Image+3'
];

export default function ImageSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % 3);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + 3) % 3);

  return (
    <div className="max-w-md mx-auto p-6">
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-bold">Image Slideshow</h2>
        </CardHeader>
        <CardContent className="text-center">
          <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} className="w-full rounded-lg mb-4" />
          <div className="flex gap-2 justify-center">
            <Button variant="outline" onClick={prev}>Previous</Button>
            <Button onClick={next}>Next</Button>
          </div>
          <Tabs value={currentIndex.toString()} className="mt-4">
            <TabsList className="grid w-full grid-cols-3">
              {[0,1,2].map(i => <TabsTrigger key={i} value={i.toString()}>{i+1}</TabsTrigger>)}
            </TabsList>
            {images.map((_, i) => (
              <TabsContent key={i} value={i.toString()} className="p-0">
                {/* Thumbnail previews if needed */}
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
