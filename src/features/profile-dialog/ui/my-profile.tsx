"use client";
import { FC, useCallback, useEffect, useState } from "react";
import getUserAction from "@/entities/user/actions/getUser";
import { FetchStatus } from "@/shared/types";
import { Skeleton } from "@/shared/ui/skeleton";
import ProfileHeader from "./_profile-header";
import ProfileInfo from "./_profile-info";
import useProfileStore from "../store/_profile-store";

type Props = {};

const MyProfile: FC<Props> = ({}) => {
  const profileStore = useProfileStore();

  const getUserData = useCallback(
    async () => {
      const data = await getUserAction();

      profileStore.setStatus(FetchStatus.DONE);
      profileStore.setImage(data.image || "");
      profileStore.setEmail(data.email);
      profileStore.setName(data.name);
      
    },
    [profileStore]
  )

  useEffect(() => {
    getUserData();
  }, []);

  if (profileStore.status === FetchStatus.PENDING) {
    return (
      <Skeleton className="overflow-hidden max-h-[502px] h-screen w-screen sm:max-w-[425px] sm:rounded-lg sm:rounded-bl-[50px] p-0"></Skeleton>
    );
  }

  return (
    <div className="overflow-hidden w-screen sm:max-w-[425px] sm:rounded-bl-[50px] sm:rounded-lg p-0">
      <div className="overflow-auto max-h-full sm:max-h-[92vh]">
          <ProfileHeader/>
          <ProfileInfo />
      </div>
    </div>
    
  );
};
export default MyProfile;
