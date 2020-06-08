export interface AbilityInterface {
    name: string;
    effect_entries: any[];
}

export interface AbilityReducerInterface {
    ability: AbilityInterface | null;
}
