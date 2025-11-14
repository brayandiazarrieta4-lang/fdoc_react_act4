import React from "react";

interface EventCardProps {
  id: number;
  title: string;
  date: string;      
  location: string;   
  precio: number;
}

export default function EventCard(props: EventCardProps) {
  return (
    <div className="border rounded-2xl shadow p-4 mb-4">
      <h2 className="text-xl font-bold">{props.title}</h2>
      <p>ID: {props.id}</p>
      <p>Fecha: {props.date}</p>
      <p>Lugar: {props.location}</p>
      <p>Precio: ${props.precio}</p>
    </div>
  );
}
