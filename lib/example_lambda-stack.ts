import * as cdk from '@aws-cdk/core';
import * as widget_service from '../lib/example_s3_sns-stack';

export class ExampleLambdaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new widget_service.WidgetService(this, 'Widgets');
  }
}
