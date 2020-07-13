"use strict";
class InteractionTypesDictionary {
    static getTrustId() {
        return 30;
    }
    static getUntrustId() {
        return 31;
    }
    static getFollowId() {
        return 1;
    }
    static getUpvoteId() {
        return 2;
    }
    static getJoinId() {
        return 3;
    }
    static getDownvoteId() {
        return 4;
    }
    static getUnfollowId() {
        return 5;
    }
    static getOrgTeamInvitation() {
        return 20;
    }
    static isJoinActivity(model) {
        return model.activity_type_id === this.getJoinId();
    }
    static isUpvoteActivity(model) {
        return model.activity_type_id === this.getUpvoteId();
    }
    static isFollowActivity(model) {
        return model.activity_type_id === this.getFollowId();
    }
    static getOppositeFollowActivityTypeId(activityTypeId) {
        if (activityTypeId === this.getFollowId()) {
            return this.getUnfollowId();
        }
        return this.getFollowId();
    }
    static isOppositeActivityRequired(activityTypeId) {
        const required = [
            this.getUnfollowId(),
        ];
        return required.includes(activityTypeId);
    }
    static isDownvoteActivity(model) {
        return model.activity_type_id === this.getDownvoteId();
    }
}
module.exports = InteractionTypesDictionary;
