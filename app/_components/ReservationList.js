'use client';

import ReservationCard from './ReservationCard';
import { deleteBooking } from '../_lib/actions';
import { useOptimistic } from 'react';

const ReservationList = ({ bookings }) => {
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    (curBookings, bookingId) =>
      curBookings.filter(booking => booking.id !== bookingId)
  );

  const handleDelete = async bookingId => {
    optimisticDelete(bookingId);
    await deleteBooking(bookingId);
  };

  return (
    <ul className="space-y-6">
      {optimisticBookings.map(booking => (
        <ReservationCard
          booking={booking}
          key={booking.id}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ReservationList;
