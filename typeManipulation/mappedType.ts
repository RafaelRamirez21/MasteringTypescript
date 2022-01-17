type OptionsFlags<Type> = {
    [Property in keyof Type]: boolean;
  };
type FeatureFlags = {
darkMode: () => void;
newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<FeatureFlags>;