type OptionsFlags<Type> = {
    [Property in keyof Type]: boolean;
  };
type FeatureFlags = {
darkMode: () => void;
newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<FeatureFlags>;

// Removes 'readonly' attributes from a type's properties
type CreateMutable<Type> = {
    -readonly [Property in keyof Type]: Type[Property];
  };
   
  type LockedAccount = {
    readonly id: string;
    readonly name: string;
  };
   
  type UnlockedAccount = CreateMutable<LockedAccount>;