"use strict";
class EventsIdsDictionary {
    static getUserHasMentionedYouInPost() {
        return 120;
    }
    static getUserHasMentionedYouInComment() {
        return 121;
    }
    static getEventIdsRelatedToRepost() {
        return [
            EventsIdsDictionary.getUserRepostsOtherUserPost(),
            EventsIdsDictionary.getUserRepostsOrgPost(),
        ];
    }
    static getAllBlockchainNodesVoteForEvents() {
        return [
            EventsIdsDictionary.getUserVotesForBlockchainNode(),
            EventsIdsDictionary.getUserVotesForCalculatorNode(),
        ];
    }
    static getAllBlockchainNodesCancelVoteEvents() {
        return [
            EventsIdsDictionary.getUserCancelVoteForBlockchainNode(),
            EventsIdsDictionary.getUserCancelVoteForCalculatorNode(),
        ];
    }
    static getAllBlockchainNodesVotingEvents() {
        return [
            ...EventsIdsDictionary.getAllBlockchainNodesVoteForEvents(),
            ...EventsIdsDictionary.getAllBlockchainNodesCancelVoteEvents(),
        ];
    }
    static getUserVotesForBlockchainNode() {
        return 110;
    }
    static getUserCancelVoteForBlockchainNode() {
        return 111;
    }
    static getUserVotesForCalculatorNode() {
        return 112;
    }
    static getUserCancelVoteForCalculatorNode() {
        return 113;
    }
    static getUserUpvotesPostOfOtherUser() {
        return 31;
    }
    static getUserDownvotesPostOfOtherUser() {
        return 32;
    }
    static getUserUpvotesPostOfOrg() {
        return 51;
    }
    static getUserDownvotesPostOfOrg() {
        return 52;
    }
    static getUserUpvotesCommentOfOrg() {
        return 53;
    }
    static getUserDownvotesCommentOfOrg() {
        return 54;
    }
    static getUserUpvotesCommentOfOtherUser() {
        return 33;
    }
    static getUserDownvotesCommentOfOtherUser() {
        return 34;
    }
    static getOrgUsersTeamInvitation() {
        return 10;
    }
    static getUserCreatesDirectPostForOrg() {
        return 90;
    }
    static getUserFollowsYou() {
        return 30;
    }
    static getUserUnfollowsYou() {
        return 35;
    }
    static getUserTrustsYou() {
        return 36;
    }
    static isUserTrustsYou(value) {
        return value === EventsIdsDictionary.getUserTrustsYou();
    }
    static doesUserFollowOrg(value) {
        return value === EventsIdsDictionary.getUserFollowsOrg();
    }
    static doesUserUnfollowOrg(value) {
        return value === EventsIdsDictionary.getUserUnfollowsOrg();
    }
    static doesUserFollowOtherUser(value) {
        return value === EventsIdsDictionary.getUserFollowsYou();
    }
    static doesUserUnfollowOtherUser(value) {
        return value === EventsIdsDictionary.getUserUnfollowsYou();
    }
    static isUserUntrustsYou(value) {
        return value === EventsIdsDictionary.getUserUntrustsYou();
    }
    static getUserUntrustsYou() {
        return 37;
    }
    static getUserCommentsPost() {
        return 71;
    }
    static getUserCommentsOrgPost() {
        return 91;
    }
    static getUserCommentsOrgComment() {
        return 92;
    }
    static getUserCommentsComment() {
        return 72;
    }
    static getUserFollowsOrg() {
        return 50;
    }
    static getUserUnfollowsOrg() {
        return 55;
    }
    static doesEventRequirePrompt(model) {
        const set = [
            EventsIdsDictionary.getOrgUsersTeamInvitation(),
        ];
        return set.includes(model.event_id);
    }
    static getRepostEventId(parentPostOrganizationId) {
        if (parentPostOrganizationId) {
            return EventsIdsDictionary.getUserRepostsOrgPost();
        }
        return EventsIdsDictionary.getUserRepostsOtherUserPost();
    }
    static getUserRepostsOtherUserPost() {
        return 73;
    }
    static getUserRepostsOrgPost() {
        return 93;
    }
    static userCreatesDirectPostForOtherUser() {
        return 70;
    }
    static registration() {
        return 130;
    }
    static referral() {
        return 140;
    }
    static userCreatesProfile() {
        return 150;
    }
    static userUpdatesProfile() {
        return 151;
    }
    static userCreatesMediaPostFromHimself() {
        return 160;
    }
    static userUpdatesMediaPostFromHimself() {
        return 161;
    }
    static userUpdatesDirectPostForUser() {
        return 162;
    }
    static userCreatesMediaPostFromOrganization() {
        return 170;
    }
    static userUpdatesMediaPostFromOrganization() {
        return 171;
    }
    static userUpdatesDirectPostForOrganization() {
        return 172;
    }
    static userCreatesOrganization() {
        return 180;
    }
    static userUpdatesOrganization() {
        return 181;
    }
    static userUpdatesCommentFromAccount() {
        return 182;
    }
    static userUpdatesCommentFromOrganization() {
        return 183;
    }
}
module.exports = EventsIdsDictionary;
