import ProfileContent from "@/components/template/profile/profile-content";
import ProfileHeader from "@/components/template/profile/profile-header";

export default function ProfilePage() {
  return (
    <div className=" mx-auto max-w-4xl  space-y-6 px-4 py-10">
      <ProfileHeader />
      <ProfileContent />
    </div>
  );
}
