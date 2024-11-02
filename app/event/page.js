// app/events/page.js
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const EventCard = ({ title, date, time, location, category, description }) => {
  return (
    <Card className="w-full mb-4 hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-bold">{title}</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">{date} | {time}</p>
          </div>
          <Badge variant="secondary">{category}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-2">📍 {location}</p>
        <p className="text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

export default function EventsPage() {
  const upcomingEvents = [
    {
      title: "Tech Workshop 2024",
      date: "Nov 15, 2024",
      time: "2:00 PM",
      location: "Main Auditorium",
      category: "Workshop",
      description: "Join us for an exciting workshop on emerging technologies."
    },
    // Add more upcoming events
  ];

  const liveEvents = [
    {
      title: "Hackathon Live",
      date: "Today",
      time: "Ongoing",
      location: "Innovation Lab",
      category: "Competition",
      description: "24-hour coding competition in progress!"
    },
    // Add more live events
  ];

  const pastEvents = [
    {
      title: "AI Conference",
      date: "Oct 25, 2024",
      time: "10:00 AM",
      location: "Virtual",
      category: "Conference",
      description: "A successful conference on artificial intelligence."
    },
    // Add more past events
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Tech Club Events</h1>
      
      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
          <TabsTrigger value="live">Live Events</TabsTrigger>
          <TabsTrigger value="past">Past Events</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="live">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {liveEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="past">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pastEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}