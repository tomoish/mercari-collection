import * as cdk from 'aws-cdk-lib';
import {
  Duration,
  aws_s3_assets as assets,
  aws_dynamodb as dynamodb,
  aws_apigateway as gateway,
  aws_lambda as lambda,
  aws_s3 as s3
} from "aws-cdk-lib";
import { Construct } from 'constructs';
import * as path from "path";

export class MercariCollectionStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new s3.Bucket(this, "ArtsBucket", {
      versioned: true,
      publicReadAccess: true,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ACLS,
    });

    const usersTable = new dynamodb.Table(this, "UsersTable", {
      partitionKey: { name: "id", type: dynamodb.AttributeType.NUMBER },
      tableName: "UsersData",
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    const itemsTable = new dynamodb.Table(this, "ItemsTable", {
      partitionKey: { name: "id", type: dynamodb.AttributeType.NUMBER },
      tableName: "ItemsData",
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    itemsTable.addGlobalSecondaryIndex({
      indexName: "user_id",
      partitionKey: { name: "user_id", type: dynamodb.AttributeType.NUMBER },
    });

    const lambdaAsset = new assets.Asset(this, "LambdaAsset", {
      path: path.join(__dirname, "../../backend/bin"),
    });

    const ginLambdaFunction = new lambda.Function(this, "GinServer", {
      code: lambda.Code.fromBucket(
        lambdaAsset.bucket,
        lambdaAsset.s3ObjectKey
      ),
      timeout: Duration.minutes(5),
      runtime: lambda.Runtime.GO_1_X,
      handler: "main",
      environment: {
        USERS_TABLE: usersTable.tableName,
        ITEMS_TABLE: itemsTable.tableName,
      },
    });

    usersTable.grantFullAccess(ginLambdaFunction);
    itemsTable.grantFullAccess(ginLambdaFunction);
    itemsTable.grantReadData(ginLambdaFunction);

    new gateway.LambdaRestApi(this, "GinServerLambdaEndpoint", {
      handler: ginLambdaFunction,
    });
  }
}
