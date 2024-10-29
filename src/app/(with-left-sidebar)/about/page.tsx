import TeamInformationCard from "@/src/components/cards/TeamInformationCard";
import { CallIcon, MailIcon, MapIcon } from "@/src/components/icons";
import { teamInformations } from "@/src/constent";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="md:ps-5 pt-8 pb-20">
      <section className="flex flex-col-reverse md:flex-row gap-5">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl  font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-gray-600 text-lg text-justify ">
            TTT-Zone (Tech Tips & Tricks Zone) is an engaging platform dedicated
            to sharing the latest in technology knowledge, tips, and tricks.
            Designed to cater to tech enthusiasts, beginners, and professionals
            alike, TTT-Zone provides valuable insights into a wide range of tech
            topics, including software tutorials, hardware reviews, coding
            guides, productivity hacks, and troubleshooting tips.
          </p>
        </div>
        <div className="border border-dashed border-secondary border-opacity-30"></div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <Image
            src="/ttt-zone-logo.png"
            width={400}
            height={400}
            alt="icon"
            priority={false}
          />
        </div>
      </section>
      <section className="flex flex-wrap justify-between border border-dashed  border-secondary  border-opacity-30 rounded-md p-5 mt-10">
        <div className="flex items-center gap-3">
          <MapIcon width={40} height={40} fill="#78A75A"/>
          <div>
            <p className="font-semibold">Addess</p>
            <p className="text-gray-400">Kalabagan ,Dhanmondi</p>
          </div>
        </div>
        <div className="border border-secondary border-dashed border-opacity-30"></div>
        <div className="flex items-center gap-3">
          <MailIcon width={40} height={40} fill="#D16D6A"/>
          <div>
            <p className="font-semibold">Gmail</p>
            <p className="text-gray-400">example@gmail.com</p>
          </div>
        </div>
        <div className="border border-secondary border-dashed border-opacity-30"></div>
        <div className="flex items-center gap-3">
          <CallIcon width={40} height={40} fill="#789DE5"/>
          <div>
            <p className="font-semibold">Phone</p>
            <p className="text-gray-400">+018********</p>
          </div>
        </div>
      </section>
      {/* Mission Section */}
      <section className="mt-10 w-full   rounded-lg shadow-md p-5">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">
          Our Mission
        </h2>
        <p className="text-gray-600 text-justify ">
          At TTT-Zone, our mission is to make cutting-edge tech knowledge
          accessible to everyone. We are dedicated to sharing insightful
          content, tutorials, and resources that empower individuals to explore,
          learn, and grow in the rapidly evolving world of technology. By
          fostering a community of tech enthusiasts and experts, we aim to
          bridge knowledge gaps and inspire innovation through collaborative
          learning.
        </p>
      </section>

      {/* Vision Section */}
      <section className="mt-8    rounded-lg shadow-md p-5">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">
          Our Vision
        </h2>
        <p className="text-gray-600 text-justify ">
          Our vision is to become the go-to platform for tech enthusiasts
          worldwide—a place where knowledge flows freely and where everyone can
          stay informed, inspired, and equipped for the future. TTT-Zone aspires
          to lead in democratizing tech knowledge, nurturing a global network of
          creators, learners, and innovators, and transforming complex tech
          topics into engaging, easy-to-understand content for all.
        </p>
      </section>

      {/* Team Section */}
      <section className="mt-10 ">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-10">
          Meet Our Team
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamInformations?.map((info, index) => (
            <TeamInformationCard key={index} info={info} />
          ))}
        </div>
      </section>
    </div>
  );
}
