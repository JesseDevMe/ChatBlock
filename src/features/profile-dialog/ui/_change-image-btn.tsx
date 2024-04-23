"use client";
import { FC, FormEventHandler, useContext, useRef } from "react";
import { ImagePlusIcon } from "lucide-react";
import changeAvatarAction from "@/entities/user/actions/changeAvatar";
import useProfileStore from "../store/_profile-store";
import { FetchStatus } from "@/shared/types";

type Props = {};

const ChangeImageButton: FC<Props> = ({}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const profileStore = useProfileStore();

  const handleFileChange: FormEventHandler<HTMLInputElement> = async (
    event,
  ) => {
    if (!event.currentTarget.files) {
      return;
    }
    const image = event.currentTarget.files[0];
    const formData = new FormData();
    formData.append("file", image)
    
    changeAvatarAction(formData)
      .catch(err => {throw Error(err)})
      .then(imageUrl => {
        profileStore.setImage(imageUrl);
        profileStore.setStatus(FetchStatus.DONE);
      })
    
    profileStore.setStatus(FetchStatus.PENDING);
  };

  return (
    <button
      onClick={() => {
        inputRef.current?.click();
      }}
      className="overflow-hidden absolute -bottom-5 right-5 size-10 bg-background border rounded-full z-20 flex justify-center items-center cursor-pointer hover:bg-muted"
    >
      <input
        ref={inputRef}
        onChange={handleFileChange}
        className="hidden absolute top-0 bottom-0 left-0 right-0"
        type="file"
        accept="image/*"
      />
      <ImagePlusIcon strokeWidth={1} />
    </button>
  );
};
export default ChangeImageButton;
