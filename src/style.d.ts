import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            body: string,
            main: string,
            inside: string,
            details: string,
            text: string
        }
    }
};