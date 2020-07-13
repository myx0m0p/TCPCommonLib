class EventsIdsDictionary {
  public static getUserHasMentionedYouInPost(): number {
    return 120;
  }

  public static getUserHasMentionedYouInComment(): number {
    return 121;
  }

  public static getEventIdsRelatedToRepost(): number[] {
    return [
      EventsIdsDictionary.getUserRepostsOtherUserPost(),
      EventsIdsDictionary.getUserRepostsOrgPost(),
    ];
  }

  public static getAllBlockchainNodesVoteForEvents(): number[] {
    return [
      EventsIdsDictionary.getUserVotesForBlockchainNode(),
      EventsIdsDictionary.getUserVotesForCalculatorNode(),
    ];
  }

  public static getAllBlockchainNodesCancelVoteEvents(): number[] {
    return [
      EventsIdsDictionary.getUserCancelVoteForBlockchainNode(),
      EventsIdsDictionary.getUserCancelVoteForCalculatorNode(),
    ];
  }

  public static getAllBlockchainNodesVotingEvents(): number[] {
    return [
      ...EventsIdsDictionary.getAllBlockchainNodesVoteForEvents(),
      ...EventsIdsDictionary.getAllBlockchainNodesCancelVoteEvents(),
    ];
  }

  public static getUserVotesForBlockchainNode(): number {
    return 110;
  }

  public static getUserCancelVoteForBlockchainNode(): number {
    return 111;
  }

  public static getUserVotesForCalculatorNode(): number {
    return 112;
  }

  public static getUserCancelVoteForCalculatorNode(): number {
    return 113;
  }

  public static getUserUpvotesPostOfOtherUser(): number {
    return 31;
  }

  public static getUserDownvotesPostOfOtherUser(): number {
    return 32;
  }

  public static getUserUpvotesPostOfOrg(): number {
    return 51;
  }

  public static getUserDownvotesPostOfOrg(): number {
    return 52;
  }

  public static getUserUpvotesCommentOfOrg(): number {
    return 53;
  }

  public static getUserDownvotesCommentOfOrg(): number {
    return 54;
  }

  public static getUserUpvotesCommentOfOtherUser(): number {
    return 33;
  }

  public static getUserDownvotesCommentOfOtherUser(): number {
    return 34;
  }

  public static getOrgUsersTeamInvitation(): number {
    return 10;
  }

  public static getUserCreatesDirectPostForOrg(): number {
    return 90;
  }

  public static getUserFollowsYou(): number {
    return 30;
  }

  public static getUserUnfollowsYou(): number {
    return 35;
  }

  public static getUserTrustsYou(): number {
    return 36;
  }

  public static isUserTrustsYou(value: number): boolean {
    return value === EventsIdsDictionary.getUserTrustsYou();
  }

  public static doesUserFollowOrg(value: number): boolean {
    return value === EventsIdsDictionary.getUserFollowsOrg();
  }

  public static doesUserUnfollowOrg(value: number): boolean {
    return value === EventsIdsDictionary.getUserUnfollowsOrg();
  }

  public static doesUserFollowOtherUser(value: number): boolean {
    return value === EventsIdsDictionary.getUserFollowsYou();
  }

  public static doesUserUnfollowOtherUser(value: number): boolean {
    return value === EventsIdsDictionary.getUserUnfollowsYou();
  }

  public static isUserUntrustsYou(value: number): boolean {
    return value === EventsIdsDictionary.getUserUntrustsYou();
  }

  public static getUserUntrustsYou(): number {
    return 37;
  }

  public static getUserCommentsPost(): number {
    return 71;
  }

  public static getUserCommentsOrgPost(): number {
    return 91;
  }

  public static getUserCommentsOrgComment(): number {
    return 92;
  }

  public static getUserCommentsComment(): number {
    return 72;
  }

  public static getUserFollowsOrg(): number {
    return 50;
  }

  public static getUserUnfollowsOrg(): number {
    return 55;
  }

  public static doesEventRequirePrompt(model: any): boolean {
    const set = [
      EventsIdsDictionary.getOrgUsersTeamInvitation(),
    ];

    return set.includes(model.event_id);
  }

  public static getRepostEventId(parentPostOrganizationId: number | null): number {
    if (parentPostOrganizationId) {
      return EventsIdsDictionary.getUserRepostsOrgPost();
    }

    return EventsIdsDictionary.getUserRepostsOtherUserPost();
  }

  public static getUserRepostsOtherUserPost(): number {
    return 73;
  }

  public static getUserRepostsOrgPost(): number {
    return 93;
  }

  public static userCreatesDirectPostForOtherUser(): number {
    return 70;
  }

  public static registration(): number {
    return 130;
  }

  public static referral(): number {
    return 140;
  }

  public static userCreatesProfile(): number {
    return 150;
  }

  public static userUpdatesProfile(): number {
    return 151;
  }

  public static userCreatesMediaPostFromHimself(): number {
    return 160;
  }

  public static userUpdatesMediaPostFromHimself(): number {
    return 161;
  }

  public static userUpdatesDirectPostForUser(): number {
    return 162;
  }

  public static userCreatesMediaPostFromOrganization(): number {
    return 170;
  }

  public static userUpdatesMediaPostFromOrganization(): number {
    return 171;
  }

  public static userUpdatesDirectPostForOrganization(): number {
    return 172;
  }

  public static userCreatesOrganization(): number {
    return 180;
  }

  public static userUpdatesOrganization(): number {
    return 181;
  }

  public static userUpdatesCommentFromAccount(): number {
    return 182;
  }

  public static userUpdatesCommentFromOrganization(): number {
    return 183;
  }
}

export = EventsIdsDictionary;
