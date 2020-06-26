import * as core from "@aws-cdk/core";
import * as s3 from "@aws-cdk/aws-s3";
import * as sqs from "@aws-cdk/aws-sqs";
import * as iam from "@aws-cdk/aws-iam";
import * as s3n from "@aws-cdk/aws-s3-notifications";

export class WidgetService extends core.Construct {
  constructor(scope: core.Construct, id: string) {
    super(scope, id);

    const bucket = new s3.Bucket(this, "Bucket");

    const queue = new sqs.Queue(this, "Queue");

    const migrationUser = new iam.User(this, "User", {
        userName: "migrationUser"
    });

    bucket.addEventNotification(s3.EventType.OBJECT_CREATED,
        new s3n.SqsDestination(queue)
    );

    queue.grantConsumeMessages(migrationUser);
  }
}