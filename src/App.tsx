import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LessonRegistration from "./pages/LessonRegistration";
import VideoManagement from "./pages/VideoManagement";
import VideoRegistration from "./pages/VideoRegistration";
import ReservationManagement from "./pages/ReservationManagement";

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
          <Route path="/videos" element={<VideoManagement />} />
          <Route path="/videos/new" element={<VideoRegistration />} />
          <Route path="/reservations" element={<ReservationManagement />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;