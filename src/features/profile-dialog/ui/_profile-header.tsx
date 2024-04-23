"use client"
import { FC } from "react";
import Image from "next/image";
import ChangeImageButton from "./_change-image-btn";
import useProfileStore from "../store/_profile-store";

type Props = {};

const ProfileHeader: FC<Props> = () => {
  const profileStore = useProfileStore();

  return (
    <div className="relative aspect-video flex flex-col justify-end gap-2.5">
      <Image
        fill
        className="object-cover pointer-events-none"
        draggable={false}
        src={profileStore.image}
        alt="Аватарка"
      />
      <div className="p-5 text-primary-foreground bg-gradient-to-t from-black/50 to-transparent z-10">
        <p className="text-2xl font-medium">{profileStore.name}</p>
        <p className="text-xs font-light select-none">online</p>
      </div>
      <ChangeImageButton/>
    </div>
  );
};
export default ProfileHeader;