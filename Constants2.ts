import { CoreCourse } from './CoreCourse'

/** 每帧的时间 */
export const FRAME_TIME = 1 / 24

export const ActivityType = CoreCourse.ActivityType.Enum

export enum ServerUrl {
  GET_LEVELS = '/aix/roadmap/levels',
  GET_LESSONS = '/aix/roadmap/lessons',
  GET_COIN = '/users/child/coin',
  POST_COIN = '/users/child/coin',
  GET_PACKAGES = '/users/child/package',
}

export enum StorageKeys {
  COIN_INFO = 'coin_info',
  ACTIVITY_GUIDE_INFO = 'activity-guide-info-key',
  HAVE_PLAYED_RELEARN_GUIDE = 'have_played_relearn_guide',
  HAVE_SHOW_LEVEL_PANEL = 'have_show_level_panel',
  NON_FIRST_ENTER_OUTLINE_KEY = 'NON_FIRST_ENTER_KEY',
  HAVE_SHOW_VIDEO_PLAY_LIVE = 'have_show_video_play_live',
}

export enum LevelState {
  LOCK = 1,
  DOING = 2,
  COMPLETED = 3,
}
export enum LessonState {
  INVALID = 0, // 非法状态
  LOCK = 1, // 未解锁
  PREVIEW = 2, // 去预习（目前版本无此状态）
  DOING = 3, // 去学习
  REVIEW = 4, // 去复习（目前版本中无此状态）
  COMPLETED = 5, // 已完成
}
export enum ZOrder {
  LOADING = 99999,
  QUIT_STAY = 100000,
  ERROR_DIALOG = 100001,
  CURRENT_TIME = 100002,
}

export enum UIRoadMapZOrder {
  OUTLINE_MENU = 100,
  SWITCH_LEVEL_MENU = 101,
}

export enum ClassType {
  UNKNOWN = 0,
  AIClass = 1,
  XClass = 2,
  AIHomework = 3,
  YClass = 4,
}
export enum ClassState {
  UNKNOWN = 0, //未知状态
  LOCK = 1, // 未解锁
  DOING = 2, // 去学习
  COMPLETED = 3, // 已完成
  UNRELEASED = 4, // 未释放
}

export enum QuitStayState {
  QuitStayShow = 'QuitStayShow',
  QuitStayHide = 'QuitStayHide',
}
// 环境类型
export enum EnvironmentType {
  FEATURE = 0,
  DEV = 1,
  STAGING = 2,
  PRODUCTION = 3,
}

export enum ChildAvatar {
  AVATAR_MALE = 'headimage',
  AVATAR_FEMALE = 'headimage_female',
}
