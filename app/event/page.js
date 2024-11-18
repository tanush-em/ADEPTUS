import fs from "fs";
import matter from "gray-matter";
import { compareDesc } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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

    const pastEvents = events.filter(event => event.event_type === "past");
    const liveEvents = events.filter(event => event.event_type === "live");
    const upcomingEvents = events.filter(event => event.event_type === "upcoming");

    const EventSection = ({ title, events, badgeVariant }) => (
        <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                    <Card key={event.slug} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <CardTitle className="text-xl">{event.title}</CardTitle>
                                <Badge variant={badgeVariant}>
                                    {title.toLowerCase()}
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
                        <CardFooter>
                            <Link href={`/event/${event.slug}`} className="w-full">
                                <Button className="w-full">
                                    Explore Event
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-5xl font-bold mb-8 text-center">Events</h1>
            
            {upcomingEvents.length > 0 && (
                <EventSection 
                    title="Upcoming Events" 
                    events={upcomingEvents} 
                    badgeVariant="default"
                />
            )}
            
            {liveEvents.length > 0 && (
                <EventSection 
                    title="Live Events" 
                    events={liveEvents} 
                    badgeVariant="destructive"
                />
            )}
            
            {pastEvents.length > 0 && (
                <EventSection 
                    title="Past Events" 
                    events={pastEvents} 
                    badgeVariant="secondary"
                />
            )}
        </div>
    );
}
