import { TTeamInfo } from "@/src/types";
import Image from "next/image";

const TeamInformationCard = ({ info }: { info: TTeamInfo }) => {
  return (
    <div className="text-center relative shadow-small rounded-md ">
     
        <Image
          src="https://res.cloudinary.com/dcrui4h7s/image/upload/v1726161626/dreams-trip-car-rental-reservation-system/adyp4b82il76fzdhdgq6.png"
          alt="image-border"
          width={192}
          height={192}
          className="absolute -top-8 left-0 right-0 w-48 h-48 mx-auto"
          priority
        />
      
      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden relative">
        <Image
          src={info.image}
          alt={`${info.name} image`}
          layout="fill" // Ensures the image fills the div
          objectFit="cover" // Keeps aspect ratio while covering
        />
      </div>
      <h3 className="text-xl font-bold mt-8">{info.name}</h3>
      <p className="text-sm text-gray-600 mb-5">{info.designation}</p>
    </div>
  );
};

export default TeamInformationCard;
