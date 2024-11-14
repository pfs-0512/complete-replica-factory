import { ChevronLeft, ChevronRight } from "lucide-react";

interface LessonTablePaginationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const LessonTablePagination = ({ currentPage, setCurrentPage }: LessonTablePaginationProps) => (
  <div className="flex items-center justify-center gap-2 py-4 border-t">
    <button 
      className="pagination-button flex items-center gap-1" 
      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
    >
      <ChevronLeft className="w-4 h-4" />
      前へ
    </button>
    {[1, 2, 3, 4, 5, 6].map((page) => (
      <button
        key={page}
        className={`pagination-button ${page === currentPage ? "active" : ""}`}
        onClick={() => setCurrentPage(page)}
      >
        {page}
      </button>
    ))}
    <button 
      className="pagination-button flex items-center gap-1" 
      onClick={() => setCurrentPage(currentPage + 1)}
    >
      次へ
      <ChevronRight className="w-4 h-4" />
    </button>
  </div>
);

export default LessonTablePagination;