
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LessonDetailModal from "./LessonDetailModal";
import LessonTableHeader from "./lesson/LessonTableHeader";
import LessonTableRow from "./lesson/LessonTableRow";
import LessonTablePagination from "./lesson/LessonTablePagination";

interface Lesson {
  id: number;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  capacity: number;
  reservationCount: number;
  status: string;
  category: string;
  cancellationDeadline: string;
  channel: string;
  tag: string;
  createdAt: string;
  updatedAt: string;
}

interface LessonTableProps {
  lessons: Lesson[];
}

const LessonTable = ({ lessons }: LessonTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Get the category from URL search params
  const searchParams = new URLSearchParams(location.search);
  const categoryParam = searchParams.get('category');

  // Map category paths to labels
  const categoryMap: Record<string, string> = {
    'children': '子ども向け',
    'parent-child': '親子向け',
    'parents': '親御さん向け'
  };

  // Filter lessons based on category
  const filteredLessons = categoryParam
    ? lessons.filter(lesson => lesson.category === categoryMap[categoryParam])
    : lessons;

  const handleEdit = (index: number) => {
    navigate(`/lessons/edit/${index}`);
  };

  return (
    <div className="bg-white rounded-lg">
      <div className="w-full overflow-x-auto">
        <div className="min-w-[1000px]">
          <table className="w-full divide-y divide-gray-200">
            <LessonTableHeader />
            <tbody className="divide-y divide-gray-200 bg-white">
              {filteredLessons.map((lesson, index) => (
                <LessonTableRow
                  key={index}
                  lesson={lesson}
                  index={index}
                  onSelect={setSelectedLesson}
                  onEdit={handleEdit}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <LessonTablePagination 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <LessonDetailModal
        lesson={selectedLesson}
        open={!!selectedLesson}
        onOpenChange={() => setSelectedLesson(null)}
      />
    </div>
  );
};

export default LessonTable;
