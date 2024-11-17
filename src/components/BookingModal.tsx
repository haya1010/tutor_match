import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { format } from 'date-fns';
import { X } from 'lucide-react';
import { Tutor, TimeSlot } from '../types';
import toast from 'react-hot-toast';

interface BookingModalProps {
  tutor: Tutor | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ tutor, isOpen, onClose }: BookingModalProps) {
  if (!tutor) return null;

  const handleBooking = (slot: TimeSlot) => {
    toast.success('Booking confirmed! You will receive an email confirmation shortly.');
    onClose();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="div" className="flex items-center justify-between">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Book a Session with {tutor.name}
                  </h3>
                  <button
                    onClick={onClose}
                    className="rounded-full p-1 hover:bg-gray-100 transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </Dialog.Title>

                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-700">Available Time Slots</h4>
                  <div className="mt-2 space-y-2">
                    {tutor.availability.map((slot) => (
                      <button
                        key={slot.id}
                        onClick={() => handleBooking(slot)}
                        className="w-full p-3 text-left border rounded-lg hover:bg-gray-50 transition-colors"
                        disabled={slot.isBooked}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-900">
                            {format(new Date(slot.startTime), 'MMM d, yyyy')}
                          </span>
                          <span className="text-sm text-gray-600">
                            {format(new Date(slot.startTime), 'h:mm a')} -{' '}
                            {format(new Date(slot.endTime), 'h:mm a')}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-6 bg-gray-50 -m-6 p-6 pt-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Hourly Rate</span>
                    <span className="font-medium">${tutor.hourlyRate}</span>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}