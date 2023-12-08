import { setUser } from "@/lib/features/user/userSlice";
import { UserType } from "@/types/UserType";
import axios from "axios";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setUid } from "../../lib/features/uid/uidSlice";
import { setUserName } from "../../lib/features/userName/userNameSlice";

const UserLink = ({ userId, children } : {userId: any, children: any}) => {
    // const uid = useSelector((state: any) => state.uid.value);
    // const userName = useSelector((state: any) => state.userName.value);
    const dispatch = useDispatch();
    const router = useRouter();

  const handleClick = async () => {
    try {
      const response = await axios.get(process.env.API_URL + "/user/" + `${userId}`);
      const user_data: UserType = {
        id: response.data.id,
        name: response.data.name,
        icon: response.data.icon,
        total_assets: response.data.total_assets,
      }
      dispatch(setUser(user_data))
      dispatch(setUid(response.data.id));
      dispatch(setUserName(response.data.name));

      router.push("/user");
    } catch (error) {
      console.error("Error while fetching user data", error);
    }
  };

  return (
    <button onClick={handleClick} className="h-40 w-30 border-4">
      {children}
    </button>
  );
};

export default UserLink;
