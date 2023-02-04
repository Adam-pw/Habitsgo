import { db } from ".";
import {
  addDoc,
  arrayUnion,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { GroupInterface } from "../../interfaces/groups.interface";
import { User } from "firebase/auth";
import { setUserDetails } from "./user";

const groupsCollectionRef = collection(db, "groups");

export const getUserGroups = async (user: User) => {
  const q = query(groupsCollectionRef, where("owner", "==", user.uid));

  const dataArr: Array<any> = [];

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    dataArr.push({ ...doc.data(), id: doc.id });
  });

  return dataArr;
};

export const createGroup = async (user: User, data: GroupInterface) => {
  return await addDoc(groupsCollectionRef, { ...data }).then((res) => {
    setUserDetails(user, { groups: arrayUnion(res.id) });
  });
};
