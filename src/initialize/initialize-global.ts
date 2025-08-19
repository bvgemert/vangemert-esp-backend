import { SESClient } from "@aws-sdk/client-ses";

export function initializeGlobal(): void {
    declare global {
        // eslint-disable-next-line no-var
        var awsClient: SESClient | undefined;
    }

    globalThis.awsClient = new SESClient({region: "eu-central-1"});
}
