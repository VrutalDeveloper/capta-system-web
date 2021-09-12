const admin = require("./firebase/admin");

const addAdminClaims = async (uid) => {
  await admin.auth().setCustomUserClaims(uid, { admin: true });
};

const main = async () => {
  const email = process.argv.slice(2)[0];
  const user = await admin.auth().getUserByEmail(email);
  await addAdminClaims(user.uid);
  console.log("Success!");
};

main();
