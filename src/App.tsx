
import { Routes, Route } from "react-router-dom";
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
import { Toaster } from "@/components/ui/toaster";
import "./App.css";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
