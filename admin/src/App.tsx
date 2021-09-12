import { Authenticator, CMSApp, NavigationBuilder } from "@camberi/firecms";

import firebase from "firebase/app";

import "typeface-rubik";
import "typeface-space-mono";
import postCollection from "./collections/postCollection";
import firebaseConfig from "./config/firebaseConfig";

export default function App() {
  const navigation: NavigationBuilder = async () => {
    return {
      collections: [postCollection],
    };
  };

  const authenticator: Authenticator = async (user?: firebase.User) => {
    const result = await user?.getIdTokenResult();

    console.log(result);
    
    const isAdmin = result?.claims.admin!!;

    console.log("IsAdmin? ", isAdmin);

    return isAdmin;
  };

  return (
    <CMSApp
      name={"My Online Shop"}
      authentication={authenticator}
      navigation={navigation}
      firebaseConfig={firebaseConfig}
    />
  );
}
