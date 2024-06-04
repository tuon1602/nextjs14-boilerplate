import { auth } from "@/auth";

import React from "react";

const Profile = async () => {
  const session = await auth();

  if (!session || !session.user)
    return (
      <div>
        You are not logged yet, login and your image profile will display here
      </div>
    );
  return (
    <div>
      <img
        className="rounded-full"
        src={session?.user?.image!}
        alt="User Avatar"
      />
    </div>
  );
};

export default Profile;
