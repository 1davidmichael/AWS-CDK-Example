#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { ExampleLambdaStack } from '../lib/example_s3_sns-stack';

const app = new cdk.App();
new ExampleLambdaStack(app, 'ExampleLambdaStack');
