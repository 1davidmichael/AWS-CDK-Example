#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { ExampleLambdaStack } from '../lib/example_lambda-stack';

const app = new cdk.App();
new ExampleLambdaStack(app, 'ExampleLambdaStack');
