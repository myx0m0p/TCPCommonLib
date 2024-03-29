declare class EventsIdsDictionary {
    static getUserHasMentionedYouInPost(): number;
    static getUserHasMentionedYouInComment(): number;
    static getEventIdsRelatedToRepost(): number[];
    static getAllBlockchainNodesVoteForEvents(): number[];
    static getAllBlockchainNodesCancelVoteEvents(): number[];
    static getAllBlockchainNodesVotingEvents(): number[];
    static getUserVotesForBlockchainNode(): number;
    static getUserCancelVoteForBlockchainNode(): number;
    static getUserVotesForCalculatorNode(): number;
    static getUserCancelVoteForCalculatorNode(): number;
    static getUserUpvotesPostOfOtherUser(): number;
    static getUserDownvotesPostOfOtherUser(): number;
    static getUserUpvotesPostOfOrg(): number;
    static getUserDownvotesPostOfOrg(): number;
    static getUserUpvotesCommentOfOrg(): number;
    static getUserDownvotesCommentOfOrg(): number;
    static getUserUpvotesCommentOfOtherUser(): number;
    static getUserDownvotesCommentOfOtherUser(): number;
    static getOrgUsersTeamInvitation(): number;
    static getUserCreatesDirectPostForOrg(): number;
    static getUserFollowsYou(): number;
    static getUserUnfollowsYou(): number;
    static getUserTrustsYou(): number;
    static isUserTrustsYou(value: number): boolean;
    static doesUserFollowOrg(value: number): boolean;
    static doesUserUnfollowOrg(value: number): boolean;
    static doesUserFollowOtherUser(value: number): boolean;
    static doesUserUnfollowOtherUser(value: number): boolean;
    static isUserUntrustsYou(value: number): boolean;
    static getUserUntrustsYou(): number;
    static getUserCommentsPost(): number;
    static getUserCommentsOrgPost(): number;
    static getUserCommentsOrgComment(): number;
    static getUserCommentsComment(): number;
    static getUserFollowsOrg(): number;
    static getUserUnfollowsOrg(): number;
    static doesEventRequirePrompt(model: any): boolean;
    static getRepostEventId(parentPostOrganizationId: number | null): number;
    static getUserRepostsOtherUserPost(): number;
    static getUserRepostsOrgPost(): number;
    static userCreatesDirectPostForOtherUser(): number;
    static registration(): number;
    static referral(): number;
    static userCreatesProfile(): number;
    static userUpdatesProfile(): number;
    static userCreatesMediaPostFromHimself(): number;
    static userUpdatesMediaPostFromHimself(): number;
    static userUpdatesDirectPostForUser(): number;
    static userCreatesMediaPostFromOrganization(): number;
    static userUpdatesMediaPostFromOrganization(): number;
    static userUpdatesDirectPostForOrganization(): number;
    static userCreatesOrganization(): number;
    static userUpdatesOrganization(): number;
    static userUpdatesCommentFromAccount(): number;
    static userUpdatesCommentFromOrganization(): number;
}
export = EventsIdsDictionary;
