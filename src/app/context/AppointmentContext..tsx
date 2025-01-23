import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the Appointment type
type Appointment = {
  id: string;
  date: string;
  time: string;
};

// Context type
type AppointmentsContextType = {
  appointments: Appointment[];
  addAppointment: (appointment: Omit<Appointment, 'id'>) => void;
};

// Create the context
const AppointmentsContext = createContext<AppointmentsContextType | undefined>(undefined);

// Provider component
export const AppointmentsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const addAppointment = (newAppointment: Omit<Appointment, 'id'>) => {
    const appointmentWithId = {
      ...newAppointment,
      id: Date.now().toString() // Simple unique ID generation
    };
    setAppointments(prev => [...prev, appointmentWithId]);
  };

  return (
    <AppointmentsContext.Provider value={{ appointments, addAppointment }}>
      {children}
    </AppointmentsContext.Provider>
  );
};

// Custom hook for using the context
export const useAppointments = () => {
  const context = useContext(AppointmentsContext);
  if (!context) {
    throw new Error('useAppointments must be used within an AppointmentsProvider');
  }
  return context;
};