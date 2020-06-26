import { expect as expectCDK, MatchStyle, matchTemplate, SynthUtils } from '@aws-cdk/assert';
import '@aws-cdk/assert/jest';
import * as cdk from '@aws-cdk/core';
import * as ExampleLambda from '../lib/example_s3_sns-stack';

test('Resources', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new ExampleLambda.ExampleLambdaStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.SUPERSET));

    expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();

    expect(stack).toHaveResource('AWS::S3::Bucket')
});
