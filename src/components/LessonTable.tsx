import { useState } from "react";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";

const LessonTable = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const lessons = [
    {
      title: "英語って楽しい！小学生から始める英会話",
      category: "子供向け",
      channel: "学習塾",
      tag: "英会話",
      status: "予約受付中",
      createdAt: "2024/10/28 10:25",
      updatedAt: "2024/10/31 9:00",
    },
  ].concat(Array(7).fill({
    title: "英語って楽しい！小学生から始める英会話",
    category: "子供向け",
    channel: "学習塾",
    tag: "英会話",
    status: "予約受付中",
    createdAt: "2024/10/28 10:25",
    updatedAt: "2024/10/31 9:00",
  }));

  return (
    <div className="bg-white rounded-lg">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="table-header">タイトル</th>
              <th className="table-header">カテゴリ</th>
              <th className="table-header">チャネル</th>
              <th className="table-header">タグ</th>
              <th className="table-header">ステータス</th>
              <th className="table-header">作成日時</th>
              <th className="table-header">更新日時</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {lessons.map((lesson, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                <td className="table-cell">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-gray-400" />
                    {lesson.title}
                  </div>
                </td>
                <td className="table-cell">
                  <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium">
                    {lesson.category}
                  </span>
                </td>
                <td className="table-cell">{lesson.channel}</td>
                <td className="table-cell">
                  <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                    {lesson.tag}
                  </span>
                </td>
                <td className="table-cell">
                  <span className="px-2 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium">
                    {lesson.status}
                  </span>
                </td>
                <td className="table-cell text-gray-500">{lesson.createdAt}</td>
                <td className="table-cell text-gray-500">{lesson.updatedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="flex items-center justify-center gap-2 py-4 border-t">
        <button 
          className="pagination-button flex items-center gap-1" 
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
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
          onClick={() => setCurrentPage(p => p + 1)}
        >
          次へ
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default LessonTable;