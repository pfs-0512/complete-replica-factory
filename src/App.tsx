
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import MyProfile from "./pages/MyProfile";
import ProfileEdit from "./pages/ProfileEdit";
import LessonEdit from "./pages/LessonEdit";
import LessonRegistration from "./pages/LessonRegistration";
import ReservationManagement from "./pages/ReservationManagement";
import VideoManagement from "./pages/VideoManagement";
import VideoRegistration from "./pages/VideoRegistration";
import VideoEdit from "./pages/VideoEdit";
import MediaManagement from "./pages/MediaManagement";
import MediaRegistration from "./pages/MediaRegistration";
import MediaEdit from "./pages/MediaEdit";
import "./App.css";

function App() {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        retry: 1,
      },
    },
  }));

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/profile" element={<MyProfile />} />
            <Route path="/profile/edit" element={<ProfileEdit />} />
            <Route path="/lessons/edit/:id" element={<LessonEdit />} />
            <Route path="/lessons/new" element={<LessonRegistration />} />
            <Route path="/reservations" element={<ReservationManagement />} />
            <Route path="/videos" element={<VideoManagement />} />
            <Route path="/videos/new" element={<VideoRegistration />} />
            <Route path="/videos/edit/:id" element={<VideoEdit />} />
            <Route path="/media" element={<MediaManagement />} />
            <Route path="/media/new" element={<MediaRegistration />} />
            <Route path="/media/edit/:id" element={<MediaEdit />} />
          </Routes>
          <Toaster />
          <Sonner />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
