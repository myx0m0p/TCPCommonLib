declare class InteractionTypesDictionary {
    static getTrustId(): number;
    static getUntrustId(): number;
    static getFollowId(): number;
    static getUpvoteId(): number;
    static getJoinId(): number;
    static getDownvoteId(): number;
    static getUnfollowId(): number;
    static getOrgTeamInvitation(): number;
    static isJoinActivity(model: any): boolean;
    static isUpvoteActivity(model: any): boolean;
    static isFollowActivity(model: any): boolean;
    static getOppositeFollowActivityTypeId(activityTypeId: number): number;
    static isOppositeActivityRequired(activityTypeId: number): boolean;
    static isDownvoteActivity(model: any): boolean;
}
export = InteractionTypesDictionary;
