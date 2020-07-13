interface PollModel {
  [index: string]: any;
  polls: [
    {
      options: {
        [index: string]: any;
        readonly id: number;
        readonly blockchain_id: string;
        status: string;
        readonly question: string;
        readonly type_choice: string;
        readonly created_at: string;
        readonly updated_at: string;
        readonly end_date: string;
        answers: [
          {
            [index: string]: any;
            readonly value: string;
            voters: [
              {
                [index: string]: any;
                user: {
                  [index: string]: any;
                  readonly id: number;
                  readonly nickname: string;
                  readonly account_name: string;
                  readonly avatar_filename: string;
                },
                vote_value: {
                  [index: string]: any;
                  readonly value: string;
                  type: string;
                }
              }
            ],
            stats: {
              [index: string]: any;
              total_votes: number;
            },
            myselfData: {
              [index: string]: any;
              vote_value: {
                [index: string]: any;
                readonly value: string;
                type: string;
              }
            }
          }
        ]
        stats: {
          [index: string]: any;
          total_votes: number;
        },
      },
    }
  ];
}
