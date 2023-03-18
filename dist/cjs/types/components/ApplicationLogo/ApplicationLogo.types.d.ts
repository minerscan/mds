export interface ApplicationLogoProps {
    applicationName: "console" | "operator" | "directpv" | "kes" | "subnet" | "minerfast";
    subVariant?: "simple" | "AGPL" | "standard" | "enterprise";
    inverse?: boolean;
}
