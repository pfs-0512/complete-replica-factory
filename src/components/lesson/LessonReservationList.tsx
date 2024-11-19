import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface Reservation {
  userName: string;
  email: string;
  reservationDateTime: string;
}

interface LessonReservationListProps {
  reservations: Reservation[];
}

const LessonReservationList = ({ reservations }: LessonReservationListProps) => {
  if (reservations.length === 0) {
    return <p className="text-gray-500">予約者はまだいません。</p>;
  }

  return (
    <div className="max-h-[200px] overflow-y-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ユーザー名</TableHead>
            <TableHead>メールアドレス</TableHead>
            <TableHead>予約日時</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reservations.map((reservation, index) => (
            <TableRow key={index}>
              <TableCell>{reservation.userName}</TableCell>
              <TableCell>{reservation.email}</TableCell>
              <TableCell>{reservation.reservationDateTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default LessonReservationList;