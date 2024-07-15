import {
  SSMClient
} from "@aws-sdk/client-ssm";

export const ssmClient = new SSMClient({
  region: "ca-central-1"
});
