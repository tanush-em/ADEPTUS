import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function About() {

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
    </main>
  );
}
