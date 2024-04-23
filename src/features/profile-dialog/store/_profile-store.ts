import { FetchStatus } from '@/shared/types'
import { create } from 'zustand'

interface ProfileState {
  status: FetchStatus,
  setStatus: (status: FetchStatus) => void,
  image: string,
  setImage: (image: string) => void,
  email: string,
  setEmail: (email: string) => void,
  name: string,
  setName: (name: string) => void,
}

const useProfileStore = create<ProfileState>()((set) => ({
  status: FetchStatus.PENDING,
  setStatus: (status) => set(() => ({ status })),
  image: "",
  setImage: (image) => set(() => ({ image })),
  email: "",
  setEmail: (email) => set(() => ({ email })),
  name: "",
  setName: (name) => set(() => ({ name })),
}))

export default useProfileStore;