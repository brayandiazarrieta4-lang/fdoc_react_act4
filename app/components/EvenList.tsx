import EventCard from "./EventCard";

export default function EventList() {
  const events = [
    {
      id: 1,
      title: "Concierto de Rock",
      date: "2025-03-10",
      location: "Auditorio Nacional",
      precio: 340,
    },
    {
      id: 2,
      title: "Festival de Comida",
      date: "2025-04-15",
      location: "Parque Central",
      precio: 70,
    },
    {
      id: 3,
      title: "Conferencia de Tecnología",
      date: "2025-05-01",
      location: "Centro de Convenciones",
      precio: 770,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {events.map((event) => (
        <EventCard
          key={event.id}
          id={event.id}
          title={event.title}
          date={event.date}
          location={event.location}
          precio={event.precio}
        />
      ))}
    </div>
  );
}
