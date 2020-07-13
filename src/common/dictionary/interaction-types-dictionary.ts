class InteractionTypesDictionary {
  public static getTrustId(): number {
    return 30;
  }

  public static getUntrustId(): number {
    return 31;
  }

  public static getFollowId(): number {
    return 1;
  }

  public static getUpvoteId(): number {
    return 2;
  }

  public static getJoinId(): number {
    return 3;
  }

  public static getDownvoteId(): number {
    return 4;
  }

  public static getUnfollowId(): number {
    return 5;
  }

  public static getOrgTeamInvitation(): number {
    return 20;
  }

  public static isJoinActivity(model): boolean {
    return model.activity_type_id === this.getJoinId();
  }

  public static isUpvoteActivity(model): boolean {
    return model.activity_type_id === this.getUpvoteId();
  }

  public static isFollowActivity(model): boolean {
    return model.activity_type_id === this.getFollowId();
  }

  public static getOppositeFollowActivityTypeId(activityTypeId: number): number {
    if (activityTypeId === this.getFollowId()) {
      return this.getUnfollowId();
    }

    return this.getFollowId();
  }

  public static isOppositeActivityRequired(activityTypeId: number): boolean {
    const required = [
      this.getUnfollowId(),
    ];

    return required.includes(activityTypeId);
  }

  public static isDownvoteActivity(model): boolean {
    return model.activity_type_id === this.getDownvoteId();
  }
}

export = InteractionTypesDictionary;
