
import UserDetails from "@/components/UserProfile/UserDetails";
import Achievements from "@/components/UserProfile/Achievements";
import Certificates from "@/components/UserProfile/Certificates";
import MyCommunities from "@/components/UserProfile/MyCommunities";
import MyLearning from "@/components/UserProfile/MyLearning";
import StudyStatistics from "@/components/StudyStatistics";
import MyContent from "@/components/UserProfile/MyContent";
import { NavbarComponent } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from 'next';
import { cookies } from "next/headers";
import PublicProfile from "@/components/UserProfile/PublicProfile";


export const metadata: Metadata = {
  title: 'User Profile - Technokrax',
  description: "View and manage your profile on Technokrax. Track your achievements, certificates, communities, learning progress, study statistics, and content.",
  openGraph: {
    title: 'User Profile - Technokrax',
    description: "View and manage your profile on Technokrax. Track your achievements, certificates, communities, learning progress, study statistics, and content.",
    images: [
      {
        url: "https://i.ibb.co/Pmm6Mkx/Header-Logo.png",
        width: 800,
        height: 600,
        alt: 'Technokrax Profile',
      },
    ],
    type: 'profile',
    url: 'https://technokrax.com/profile',
    siteName: 'Technokrax'
  },
};

const Profile = ({params}:any) => {

  let { userId } = params;

  const cookieStore = cookies();
  const userTokenCookie = cookieStore.get("userToken");
  let userIdFromCookie = null;
  if (userTokenCookie) {
    try {
      const userTokenValue = JSON.parse(userTokenCookie.value);
      userIdFromCookie = userTokenValue.user?.userId || null;
    } catch (e) {
      console.error("Error parsing user token cookie:", e);
    }
  }

  
  return (
    <>
      {userId === userIdFromCookie ? (
        <>
          <NavbarComponent />
          <div className="mx-[5%]">
            <UserDetails userId={userId}/>
            <Achievements />
            <Certificates />
            <MyCommunities />
            <MyLearning />
            <StudyStatistics />
            <MyContent />
          </div>
          <Footer />
        </>
      ):(
    <PublicProfile userId={userId}/>
      )}
    </>
  );
};

export default Profile;
