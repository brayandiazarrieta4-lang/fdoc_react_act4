import EventList from "./components/EventList";

export default function Page() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Eventos disponibles</h1>
      <EventList />
    </main>
  );
}
