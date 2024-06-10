import * as api from "../api/index";
import { toast } from "react-hot-toast";

export const setUserPreferences =
  (preferences: any, navigate: any) => async () => {
    const toastId = toast.loading("Loading...");

    try {
      const { data } = await api.setUserPreferencesApi(preferences);
      console.log("r:", data);

      if (!data.success) {
        throw new Error(data.message);
      }

      toast.success("Preferences set successfully!");
      navigate("/");
    } catch (error) {
      console.log("SET PREFERENCES ERROR............", error);
      toast.error("Could Not Set Preferences");
    }
    toast.dismiss(toastId);
  };

export const saveProfileDetails =
  (profileData: any) => async (dispatch: any) => {
    try {
      const { data } = await api.saveProfileDetailsApi(profileData);
      if (!data.success) {
        throw new Error(data.message);
      }
      dispatch({ type: "SAVE_PROFILE_DETAILS", payload: data.result });
      toast.success("Profile updated successfully");
    } catch (error) {
      console.log(error);
      toast.error("Error updated profile");
    }
  };

export const getProfile = (userId: any) => async (dispatch: any) => {

  const { data } = await api.getProfileApi(userId);
  if (!data.success) {
    throw new Error(data.message);
  }
  dispatch({ type: "SAVE_PROFILE_DETAILS", payload: data.result.profile });
  dispatch({ type: "FETCH_NOTIFICATIONS", payload: data.result.notifications });
};

export const saveProfileImage =
  (profileImage: any) => async (dispatch: any) => {
    try {
      const { data } = await api.saveProfileImageApi(profileImage);
      dispatch({ type: "SAVE_PROFILE_DETAILS", payload: data.result });
      toast.success("Profile image updated successfully");
      console.log(data);
    } catch (error) {
      console.log(error);
      toast.error("error updating profile image");
    }
  };
