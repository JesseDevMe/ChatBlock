"use client"
import { FC, useContext, useState } from "react";
import { Button } from "@/shared/ui/button";
import updateUserName from "../_actions/_updateUserName";
import { FetchStatus } from "@/shared/types";
import useProfileStore from "../store/_profile-store";

type Props = {};

const ProfileInfo: FC<Props> = ({}) => {
  const profileStore = useProfileStore();
  const [nameInputValue, setNameInputValue] = useState<string>(profileStore.name);

  const updateUserHandler = async (formData: FormData) => {
    const newName = formData.get("name")?.toString();
    if (!newName) {
      return;
    }
    updateUserName(newName)
      .catch((err) => {throw Error(err)})
      .then(() => {
        profileStore.setName(newName)
        profileStore.setStatus(FetchStatus.DONE)
      })
    profileStore.setStatus(FetchStatus.PENDING);
  };

  return (
    <div className="bg-background p-5">
      <p className="font-medium">Аккаунт</p>
      <form className="mt-5 flex flex-col" action={updateUserHandler}>
        <div className="border-b">
          <p className="text-xs text-muted-foreground">Почта</p>
          <input
            className="bg-transparent p-2.5 w-full cursor-text"
            value={profileStore.email}
            disabled
            type="email"
          />
        </div>
        <div className="border-b mt-2.5">
          <p className="text-xs text-muted-foreground">Имя</p>
          <input
            className="bg-transparent p-2.5 w-full"
            name="name"
            required
            value={nameInputValue}
            maxLength={16}
            type="text"
            onChange={(e) => {
              setNameInputValue(e.target.value);
            }}
          />
        </div>
        <Button className="mt-5 self-end">Сохранить</Button>
      </form>
    </div>
  );
};
export default ProfileInfo;