export declare const predictorConfigResponse: {
    data: {
        predictor: {
            enabled: boolean;
            markets: {
                main: string[];
                all: string[];
            };
            full_coverage_competitions: string[];
            success_rate_scopes: any;
        };
    };
};
export declare const EFBET_MATCH: {
    meta: {
        pagination: {
            current_page: number;
            items_per_page: number;
            total_items: number;
            number_of_pages: number;
        };
    };
    data: {
        id: string;
        kickoff_at: string;
        finished_at: any;
        updated_at: string;
        home_team: {
            id: string;
            country: {
                id: string;
                alias: any;
                country_code: string;
                assets: {
                    flag: string;
                };
                name: string;
            };
            assets: {
                logo: string;
            };
            national: boolean;
            code: string;
            gender: string;
            name: string;
            full_name: any;
            short_name: any;
            is_deleted: boolean;
        };
        away_team: {
            id: string;
            country: {
                id: string;
                alias: any;
                country_code: string;
                assets: {
                    flag: string;
                };
                name: string;
            };
            assets: {
                logo: string;
            };
            national: boolean;
            code: any;
            gender: string;
            name: string;
            full_name: any;
            short_name: any;
            is_deleted: boolean;
        };
        lineups_confirmed: any;
        started_at: any;
        minute: any;
        scores: {
            ft_score: {
                home_goals: any;
                away_goals: any;
            };
            ht_score: {
                home_goals: any;
                away_goals: any;
            };
            aet_score: {
                home_goals: any;
                away_goals: any;
            };
            agg_score: {
                home_goals: any;
                away_goals: any;
            };
            pen_score: {
                home_goals: any;
                away_goals: any;
            };
        };
        context: {
            competition: {
                id: string;
                country: {
                    id: string;
                    alias: any;
                    country_code: string;
                    assets: {
                        flag: string;
                    };
                    name: string;
                };
                gender: string;
                assets: {
                    logo: string;
                };
                type: string;
                name: string;
            };
        };
        status: {
            type: string;
            sub_type: string;
        };
        is_deleted: boolean;
    }[];
};
export declare const FOOTBALL_COMPETITIONS: {
    data: ({
        id: string;
        country: {
            id: string;
            alias: any;
            country_code: string;
            assets: {
                flag: string;
            };
            name: string;
        };
        gender: string;
        assets: {
            logo: string;
        };
        type: string;
        name: string;
    } | {
        id: string;
        country: {
            id: string;
            alias: string;
            country_code: string;
            assets: {
                flag: string;
            };
            name: string;
        };
        gender: string;
        assets: {
            logo: any;
        };
        type: string;
        name: string;
    })[];
};
export declare const FOOTBALL_TEAMS: {
    meta: {
        pagination: {
            current_page: number;
            items_per_page: number;
            total_items: number;
            number_of_pages: number;
        };
    };
    data: {
        id: string;
        country: {
            id: string;
            alias: any;
            country_code: string;
            assets: {
                flag: string;
            };
            name: string;
        };
        assets: {
            logo: string;
        };
        national: boolean;
        code: string;
        gender: string;
        name: string;
        full_name: any;
        short_name: any;
        is_deleted: boolean;
    }[];
};
export declare const constructMockedResponseByLength: (testScenario: string, arrayLength: number) => any;
