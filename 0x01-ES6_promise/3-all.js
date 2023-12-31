import { uploadPhoto, createUser } from "./utils.js";
async function handleProfileSignup() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    console.log(`photo-profile-${user.id} ${user.firstName} ${user.lastName}`);
  } catch (error) {
    console.log("Signup system offline");
  }
}