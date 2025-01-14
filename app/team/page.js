import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Team() {

    const founders = [
        {
            name: "Naveen Karthik R",
            role: "Head of Publications",
            image: "/naveen.jpeg",
            linkedin: "http://www.linkedin.com/in/naveen-karthik-rajakumar-a80513257",
            initials: "NK"
        },
        {
            name: "Tanush T M",
            role: "Chief Technical Lead",
            image: "/tanush.png",
            linkedin: "https://www.linkedin.com/in/tanush-tm/",
            initials: "TM"
        }
    ];

    const seniorTeam = [
        {
            name: "Kavitha A",
            role: "Design Head",
            image: "/kavitha.png",
            linkedin: "https://in.linkedin.com/in/kavitha-arumugam-4041b8260",
            initials: "KA"
        },
        {
            name: "Fahmitha Farhana",
            role: "Creative Head",
            image: "/fahmitha.png",
            linkedin: "https://www.linkedin.com/in/fahmitha-farhana-1bbaa92b4",
            initials: "FF"
        },
        {
            name: "Saieed Marichamy",
            role: "Logistics Head",
            image: "/saieed.png",
            linkedin: "https://www.linkedin.com/in/saieed-marichamy-19030a202/",
            initials: "SM"
        },
        {
            name: "Yukitha K",
            role: "Event Coordinator",
            image: "/yukitha.png",
            linkedin: "https://www.linkedin.com/in/yukitha-kumar-154963270",
            initials: "YK"
        }

    ];

    const juniorTeam = [
        {
            name: "Nithish Khanna S",
            role: "Joint Design Head",
            image: "/nithish.png",
            linkedin: "https://www.linkedin.com/in/nithish-khanna-solaiyalagu-31082429a/",
            initials: "NK"
        },
        {
            name: "Akhil T",
            role: "Joint Creative Head",
            image: "/akhil.png",
            linkedin: "https://www.linkedin.com/in/akhil-tamilselvan-b38516278",
            initials: "AT"
        },
        {
            name: "Harini K",
            role: "Joint Logistics Head",
            image: "/harini.png",
            linkedin: "https://www.linkedin.com/in/harini-k-aa2b65292/",
            initials: "HK"
        },
        {
            name: "Devipriya S",
            role: "Joint Event Coordinator",
            image: "/devipriya.png",
            linkedin: "https://www.linkedin.com/in/devipriya-s05",
            initials: "DS"
        }
    ];

    return (
        <main className="min-h-screen">
            <section className="py-8 sm:py-12 bg-gray-100 dark:bg-gray-900">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-8 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-2 sm:mb-4">
                            Our Team
                        </h2>
                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                            Discover the talents that fuel our success
                        </p>
                    </div>

                    <div className="mb-8 sm:mb-16">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 max-w-3xl mx-auto">
                            {founders.map((member, index) => (
                                <Card key={index} className="p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                                    <div className="flex flex-col items-center">
                                        <Avatar className="w-20 h-20 sm:w-24 sm:h-24 mb-3 ring-2 ring-blue-100 dark:ring-blue-900">
                                            <AvatarImage src={member.image} alt={member.name} />
                                            <AvatarFallback>{member.initials}</AvatarFallback>
                                        </Avatar>
                                        <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white text-center">
                                            {member.name}
                                        </h4>
                                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium mt-1 text-center">
                                            {member.role}
                                        </p>
                                    </div>
                                    <Button asChild className="w-full mt-4 bg-[#0077b5] hover:bg-[#006699]">
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center text-sm sm:text-base"
                                        >
                                            <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                                            Connect on LinkedIn
                                        </a>
                                    </Button>
                                </Card>
                            ))}
                        </div>
                    </div>

                    <div className="mb-8 sm:mb-16">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                            {seniorTeam.map((member, index) => (
                                <Card key={index} className="p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="flex flex-col items-center">
                                        <Avatar className="w-20 h-20 sm:w-24 sm:h-24 mb-3 ring-2 ring-blue-100 dark:ring-blue-900">
                                            <AvatarImage src={member.image} alt={member.name} />
                                            <AvatarFallback>{member.initials}</AvatarFallback>
                                        </Avatar>
                                        <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white text-center">
                                            {member.name}
                                        </h4>
                                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium mt-1 text-center">
                                            {member.role}
                                        </p>
                                    </div>
                                    <Button asChild className="w-full mt-4 bg-[#0077b5] hover:bg-[#006699]">
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center text-sm sm:text-base"
                                        >
                                            <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                                            Connect on LinkedIn
                                        </a>
                                    </Button>
                                </Card>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                            {juniorTeam.map((member, index) => (
                                <Card key={index} className="p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="flex flex-col items-center">
                                        <Avatar className="w-20 h-20 sm:w-24 sm:h-24 mb-3 ring-2 ring-blue-100 dark:ring-blue-900">
                                            <AvatarImage src={member.image} alt={member.name} />
                                            <AvatarFallback>{member.initials}</AvatarFallback>
                                        </Avatar>
                                        <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white text-center">
                                            {member.name}
                                        </h4>
                                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium mt-1 text-center">
                                            {member.role}
                                        </p>
                                    </div>
                                    <Button asChild className="w-full mt-4 bg-[#0077b5] hover:bg-[#006699]">
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center text-sm sm:text-base"
                                        >
                                            <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                                            Connect on LinkedIn
                                        </a>
                                    </Button>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-4 py-8 sm:py-12">
                <div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 sm:mt-5 mb-8 sm:mb-12 text-center">
                        Contributions
                    </h2>
                    <p className="text-center max-w-4xl mx-auto mb-8 text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300">
                        Collaborations and Contributions are very much welcomed and encouraged !!
                    </p>

                    <ul className="list-disc flex flex-col items-center max-w-3xl mx-auto px-4">
                        <li className="mb-3">
                            <p className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                                abcdefgh [contribution] contributed to <i>abcdefgh</i> article
                            </p>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    );
}    
