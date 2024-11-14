import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LessonDetailModal from "./LessonDetailModal";
import LessonTableHeader from "./lesson/LessonTableHeader";
import LessonTableRow from "./lesson/LessonTableRow";
import LessonTablePagination from "./lesson/LessonTablePagination";

const LessonTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLesson, setSelectedLesson] = useState<any>(null);
  const navigate = useNavigate();

  const lessons = [
    {
      title: "英語って楽しい！小学生から始める英会話",
      category: "子ども向け",
      channel: "学習塾",
      tag: "英会話",
      status: "下書き",
      createdAt: "2024/10/28 10:25",
      updatedAt: "2024/10/31 9:00",
      zoomUrl: "https://zoom.us/j/123456789",
      date: "2024-03-20",
      startTime: "10:00",
      endTime: "11:00",
      capacity: 10,
      description: "楽しく英語を学びましょう！"
    },
    {
      title: "親子で楽しむプログラミング入門",
      category: "親子向け",
      channel: "プログラミング",
      tag: "プログラミング",
      status: "予約受付中",
      createdAt: "2024/10/28 10:25",
      updatedAt: "2024/10/31 9:00",
      zoomUrl: "https://zoom.us/j/123456780",
      date: "2024-04-01",
      startTime: "14:00",
      endTime: "15:00",
      capacity: 20,
      description: "親子でプログラミングを楽しむ入門セッション"
    },
    {
      title: "子育ての悩み相談会",
      category: "親御さん向け",
      channel: "子育て支援",
      tag: "子育て",
      status: "予約受付中",
      createdAt: "2024/10/28 10:25",
      updatedAt: "2024/10/31 9:00",
      zoomUrl: "https://zoom.us/j/123456781",
      date: "2024-04-10",
      startTime: "13:00",
      endTime: "14:30",
      capacity: 15,
      description: "子育てに関する悩みを共有する会"
    },
    {
      title: "楽しく学ぶ算数教室",
      category: "子ども向け",
      channel: "学習塾",
      tag: "算数",
      status: "予約受付中",
      createdAt: "2024/10/28 10:25",
      updatedAt: "2024/10/31 9:00",
      zoomUrl: "https://zoom.us/j/123456782",
      date: "2024-04-15",
      startTime: "16:00",
      endTime: "17:00",
      capacity: 10,
      description: "算数を楽しく学ぼう"
    },
    {
      title: "親子でチャレンジ！科学実験",
      category: "親子向け",
      channel: "科学教室",
      tag: "理科",
      status: "予約締切",
      createdAt: "2024/10/28 10:25",
      updatedAt: "2024/10/31 9:00",
      zoomUrl: "https://zoom.us/j/123456783",
      date: "2024-04-20",
      startTime: "10:30",
      endTime: "12:00",
      capacity: 10,
      description: "親子で楽しく科学実験をやろう"
    },
    {
      title: "子どもの成長と向き合う勉強会",
      category: "親御さん向け",
      channel: "子育て支援",
      tag: "教育",
      status: "予約受付中",
      createdAt: "2024/10/28 10:25",
      updatedAt: "2024/10/31 9:00",
      zoomUrl: "https://zoom.us/j/123456784",
      date: "2024-04-25",
      startTime: "18:00",
      endTime: "19:30",
      capacity: 12,
      description: "子どもとの向き合い方についての勉強会"
    },
    {
      title: "小学生のための作文教室",
      category: "子ども向け",
      channel: "学習塾",
      tag: "国語",
      status: "予約受付中",
      createdAt: "2024/10/28 10:25",
      updatedAt: "2024/10/31 9:00",
      zoomUrl: "https://zoom.us/j/123456785",
      date: "2024-05-01",
      startTime: "15:00",
      endTime: "16:30",
      capacity: 15,
      description: "小学生が楽しく作文を書くための教室"
    },
    {
      title: "親子料理教室：基礎から学ぶ",
      category: "親子向け",
      channel: "料理教室",
      tag: "料理",
      status: "予約受付中",
      createdAt: "2024/10/28 10:25",
      updatedAt: "2024/10/31 9:00",
      zoomUrl: "https://zoom.us/j/123456786",
      date: "2024-05-05",
      startTime: "11:00",
      endTime: "12:30",
      capacity: 10,
      description: "親子で楽しむ料理教室"
    }
  ];

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
              {lessons.map((lesson, index) => (
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
