import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import FeedbackForm from './components/FeedbackForm';
import ImageSlideshow from './components/ImageSlideshow';
import TodoList from './components/TodoList';

function App() {
  const [activeTab, setActiveTab] = useState('feedback');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">Shadcn/UI Practice Apps</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="feedback">Feedback Form</TabsTrigger>
          <TabsTrigger value="slideshow">Image Slideshow</TabsTrigger>
          <TabsTrigger value="todos">Todo List</TabsTrigger>
        </TabsList>
        <TabsContent value="feedback" className="mt-8">
          <FeedbackForm />
        </TabsContent>
        <TabsContent value="slideshow" className="mt-8">
          <ImageSlideshow />
        </TabsContent>
        <TabsContent value="todos" className="mt-8">
          <TodoList />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default App;
