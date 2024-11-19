import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LessonRegistration from "./pages/LessonRegistration";
import LessonEdit from "./pages/LessonEdit";
import VideoManagement from "./pages/VideoManagement";
import VideoRegistration from "./pages/VideoRegistration";
import VideoEdit from "./pages/VideoEdit";
import ReservationManagement from "./pages/ReservationManagement";
import MediaManagement from "./pages/MediaManagement";
import MediaRegistration from "./pages/MediaRegistration";
import MediaEdit from "./pages/MediaEdit";
import MyProfile from "./pages/MyProfile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/lessons/new" element={<LessonRegistration />} />
          <Route path="/lessons/edit/:id" element={<LessonEdit />} />
          <Route path="/videos" element={<VideoManagement />} />
          <Route path="/videos/new" element={<VideoRegistration />} />
          <Route path="/videos/edit/:id" element={<VideoEdit />} />
          <Route path="/reservations" element={<ReservationManagement />} />
          <Route path="/media" element={<MediaManagement />} />
          <Route path="/media/new" element={<MediaRegistration />} />
          <Route path="/media/edit/:id" element={<MediaEdit />} />
          <Route path="/profile" element={<MyProfile />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;