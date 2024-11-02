import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function About() {

  const leaders = [
    {
      name: "Naveen Karthik R",
      role: "Head of Publications",
      image: "/path-to-image.jpg",
      initials: "NK"
    },
    {
      name: "Tanush T M",
      role: "Chief Technical Lead",
      image: "/path-to-image.jpg",
      initials: "TM"
    }
  ];

  const technicalTeam = [
    {
      name: "Kavitha A",
      role: "Design Head",
      image: "/path-to-image.jpg",
      initials: "KA"
    },
    {
      name: "Fahmitha Farhana",
      role: "Creative Head",
      image: "/path-to-image.jpg",
      initials: "FF"
    },
    {
      name: "Saieed Marichamy",
      role: "Logistics Head",
      image: "/path-to-image.jpg",
      initials: "SM"
    },
    {
      name: "Yukitha K",
      role: "Event Coordinator",
      image: "/path-to-image.jpg",
      initials: "YK"
    }

  ];

  const managementTeam = [
    {
      name: "Nithish Khanna S",
      role: "Joint Design Head",
      image: "/path-to-image.jpg",
      initials: "NK"
    },
    {
      name: "Akhil T",
      role: "Joint Creative Head",
      image: "/path-to-image.jpg",
      initials: "AT"
    },
    {
      name: "Harini K",
      role: "Joint Logistics Head",
      image: "/path-to-image.jpg",
      initials: "HK"
    },
    {
      name: "Devipriya S",
      role: "Joint Event Coordinator",
      image: "/path-to-image.jpg",
      initials: "DS"
    }
  ];


  return (
    <main>
      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">What We Do ?</h2>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Weekly Newsletters & Articles */}
            <div className="w-full sm:w-1/2 lg:w-1/2 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  Weekly Newsletters & Articles 📬
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  Stay updated with the latest in technology! Our weekly newsletters and articles bring fresh perspectives
                  on trending topics, insightful tutorials, and tips from experts.
                </p>
              </div>
            </div>

            {/* Monthly Contests & Events */}
            <div className="w-full sm:w-1/2 lg:w-1/2 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  Monthly Contests & Events 🏆
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  Get ready to showcase your skills! Our monthly contests and themed events allow members to put
                  their knowledge to the test, solve challenges, and win exciting prizes.
                </p>
              </div>
            </div>

            {/* Hackathons & Ideathons */}
            <div className="w-full sm:w-1/2 lg:w-1/2 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  Hackathons & Ideathons 💡
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  Every 2-3 months, we organize hackathons and ideathons, where creative minds come together to
                  brainstorm, build, and bring innovative solutions to life.
                </p>
              </div>
            </div>

            {/* Community */}
            <div className="w-full sm:w-1/2 lg:w-1/2 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  A Thriving Community 🌐
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  Connect with an active community of developers and tech enthusiasts. Share ideas,
                  work on projects, and grow with a supportive network passionate about technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Why Join Us ?</h2>
          </div>
          <div className="flex flex-wrap justify-center">
            <ul className="space-y-4 text-lg">
              <li>✓ Enhance your technical skills with hands-on experience</li>
              <li>✓ Gain access to exclusive resources and learning materials</li>
              <li>✓ Collaborate on projects that make a real impact</li>
              <li>✓ Be part of a vibrant, supportive community</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100 dark:bg-gray-900">
  <div className="container px-4 mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold tracking-tight mb-4">Our Team</h2>
      <p className="text-gray-600 dark:text-gray-400">Meet the amazing people behind our success</p>
    </div>

    <div className="mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {leaders.map((leader, index) => (
          <Card key={index} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col items-center">
              <Avatar className="w-24 h-24 mb-3 ring-2 ring-blue-100 dark:ring-blue-900">
                <AvatarImage src={leader.image} alt={leader.name} />
                <AvatarFallback>{leader.initials}</AvatarFallback>
              </Avatar>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{leader.name}</h4>
              <p className="text-gray-600 dark:text-gray-400 font-medium mt-1">{leader.role}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
    <div className="mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {technicalTeam.map((member, index) => (
          <Card key={index} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col items-center">
              <Avatar className="w-24 h-24 mb-3 ring-2 ring-blue-100 dark:ring-blue-900">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>{member.initials}</AvatarFallback>
              </Avatar>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{member.name}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">{member.role}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {managementTeam.map((member, index) => (
          <Card key={index} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col items-center">
              <Avatar className="w-24 h-24 mb-3 ring-2 ring-blue-100 dark:ring-blue-900">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>{member.initials}</AvatarFallback>
              </Avatar>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{member.name}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">{member.role}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </div>
</section>
    </main>
  );
}
