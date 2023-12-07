import * as cdk from 'aws-cdk-lib';
import {
  aws_dynamodb as dynamodb,
  aws_s3 as s3
} from "aws-cdk-lib";
import { Construct } from 'constructs';

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new s3.Bucket(this, "ArtsBucket", {
      versioned: true,
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

    // const lambdaAsset = new assets.Asset(this, "LambdaAsset", {
    //   path: path.join(__dirname, "../../backend/bin"),
    // });

    // const ginLambdaFunction = new lambda.Function(this, "GinServer", {
    //   code: lambda.Code.fromBucket(
    //     lambdaAsset.bucket,
    //     lambdaAsset.s3ObjectKey
    //   ),
    //   timeout: Duration.minutes(5),
    //   runtime: lambda.Runtime.PROVIDED_AL2,
    //   handler: "main",
    //   environment: {
    //     USERS_TABLE: usersTable.tableName,
    //     ITEMS_TABLE: itemsTable.tableName,
    //   },
    // });

    // usersTable.grantFullAccess(ginLambdaFunction);
    // itemsTable.grantFullAccess(ginLambdaFunction);

    // new gateway.LambdaRestApi(this, "GinServerLambdaEndpoint", {
    //   handler: ginLambdaFunction,
    // });
  }
}
