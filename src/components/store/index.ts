import { combineReducers, Reducer } from "redux";
import trendingArticles, { ArticleState } from "./ArticlesReducer";
import authData, { AuthState } from "./AuthReducer";
import profile, { profileState } from "./ProfileReducer";
import notifications, { notificationState } from "./Notifications";
import recommendedArticles from "./ArticleHomeRecommendations";
import communities from "./CommunityReducer";
import communitiesDiscussions from "./CommunityDiscussionReducer";

export interface RootState {
  trendingArticles: ArticleState;
  authData: AuthState;
  profile: profileState;
  notifications: notificationState;
  recommendedArticles: any;
  communities: any;
  communitiesDiscussions: any;
}

const rootReducer: Reducer<RootState> = combineReducers({
  trendingArticles,
  authData,
  profile,
  notifications,
  recommendedArticles,
  communities,
  communitiesDiscussions,
});
export default rootReducer;
