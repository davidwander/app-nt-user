import { NextApiRequest, NextApiResponse } from "next";

// Mock para armazenar os agendamentos em memória
let appointments: { id: string; date: string; time: string }[] = [];

// Handler da API
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    // Retorna todos os agendamentos
    return res.status(200).json(appointments);
  }

  if (req.method === "POST") {
    const { date, time } = req.body;

    if (!date || !time) {
      return res.status(400).json({ error: "Data e horário são obrigatórios" });
    }

    const newAppointment = {
      id: `${date}-${time}`,
      date,
      time,
    };

    appointments.push(newAppointment);
    return res.status(201).json(newAppointment);
  }

  return res.status(405).json({ error: "Método não permitido" });
}
