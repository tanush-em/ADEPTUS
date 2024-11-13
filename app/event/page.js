import fs from "fs";
import matter from "gray-matter";
import { compareDesc } from "date-fns";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default async function EventsPage() {

    const eventFiles = fs.readdirSync("content/event");
    const events = eventFiles
        .filter(file => file.endsWith(".md"))
        .map(file => {
            const content = fs.readFileSync(`content/event/${file}`, "utf-8");
            const { data } = matter(content);
            return {
                ...data,
                slug: file.replace(".md", ""),
                eventDate: new Date(data.date)
            };
        })
        .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

    const now = new Date();

    const pastEvents = events.filter(event => event.eventDate < now);
    const liveEvents = events.filter(event => {
        const eventEnd = new Date(event.endDate);
        return event.eventDate <= now && eventEnd >= now;
    });
    const upcomingEvents = events.filter(event => event.eventDate > now);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8 text-center">Events</h1>

            <Tabs defaultValue="upcoming" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                    <TabsTrigger value="upcoming">
                        Upcoming ({upcomingEvents.length})
                    </TabsTrigger>
                    <TabsTrigger value="live">
                        Live ({liveEvents.length})
                    </TabsTrigger>
                    <TabsTrigger value="past">
                        Past ({pastEvents.length})
                    </TabsTrigger>
                </TabsList>

                {["upcoming", "live", "past"].map((tab) => (
                    <TabsContent key={tab} value={tab}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {(tab === "upcoming" ? upcomingEvents :
                                tab === "live" ? liveEvents : pastEvents)
                                .map((event) => (
                                    <Card key={event.slug} className="hover:shadow-lg transition-shadow">
                                        <CardHeader>
                                            <div className="flex justify-between items-start">
                                                <CardTitle className="text-xl">{event.title}</CardTitle>
                                                <Badge variant={
                                                    tab === "live" ? "destructive" :
                                                        tab === "upcoming" ? "default" : "secondary"
                                                }>
                                                    {tab}
                                                </Badge>
                                            </div>
                                            <CardDescription>{event.description}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-2">
                                                <p className="text-sm">
                                                    <span className="font-semibold">Date: </span>
                                                    {new Date(event.date).toLocaleDateString()}
                                                </p>
                                                {event.location && (
                                                    <p className="text-sm">
                                                        <span className="font-semibold">Location: </span>
                                                        {event.location}
                                                    </p>
                                                )}
                                                {event.organizer && (
                                                    <p className="text-sm">
                                                        <span className="font-semibold">Organizer: </span>
                                                        {event.organizer}
                                                    </p>
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
}
