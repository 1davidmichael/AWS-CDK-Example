import * as core from "@aws-cdk/core";
import * as s3 from "@aws-cdk/aws-s3";
import * as sns from "@aws-cdk/aws-sns";
import * as subscriptions from '@aws-cdk/aws-sns-subscriptions';
import * as s3n from "@aws-cdk/aws-s3-notifications";

export class WidgetService extends core.Construct {
  constructor(scope: core.Construct, id: string) {
    super(scope, id);

    const bucket = new s3.Bucket(this, "WidgetStore");

    const snsTopic = new sns.Topic(this, "Topic");

    let emails = [
      "1.david.michael+0@gmail.com",
      "1.david.michael+1@gmail.com",
      "1.david.michael+2@gmail.com"
    ];

    for (let email of emails) {
      snsTopic.addSubscription(
          new subscriptions.EmailSubscription(email)
      );
    }

    bucket.addEventNotification(s3.EventType.OBJECT_CREATED,
        new s3n.SnsDestination(snsTopic)
    );
  }
}